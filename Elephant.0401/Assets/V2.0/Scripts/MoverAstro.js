var thrust = 5000;
var cut : Transform;

var moveRight : KeyCode;
var moveLeft : KeyCode;
var action : KeyCode;

var stunned = false;
var particle : Transform;
var popParticle : Transform;

public var falling = false;
public var team : int;

var shock : AudioClip;
var rehook : AudioClip;



function Update ()
{
	if (stunned == false)
	{
		if (Input.GetKey(moveRight))
		{
			rigidbody.AddForce(Vector3.right * thrust * Time.deltaTime);
			Face(1);
		}

		if (Input.GetKey(moveLeft))
		{
			rigidbody.AddForce(-Vector3.right * thrust * Time.deltaTime);
			Face(-1);
		}

		if (Input.GetKey(action))
		{
			Instantiate(cut, transform.position, Quaternion.identity);

		}
	}

	if (stunned == true)
	{
		Instantiate(particle, transform.position, transform.rotation);
		
		
	}
}

function Face(dir : int)
{
	if (dir > 0)
	{
		transform.localScale.x = Mathf.Abs(transform.localScale.x);
	}
	else
	{
		transform.localScale.x = -Mathf.Abs(transform.localScale.x);
	}
}

function OnCollisionEnter(collision : Collision)
{
//	if (collision.gameObject.tag == "destroy")
//	{
	if (collision.gameObject.tag == "eleph1" || collision.gameObject.tag == "astro1")
	{
		return;
	}

	if (falling)
	{
		Destroy(gameObject);
	}
	else
	{
		Debug.Log("Astronaut from team " + team + " died.");
		SetAstro(false);
		GameManager.Died(team);
	}
	
	Destroy(Instantiate(popParticle, transform.position, Quaternion.identity) as GameObject, 5.0f);
}

function Enable()
{
	Debug.Log("Astronaut from team " + team + " is back.");
	SetAstro(true);
}

function Disable()
{
	SetAstro(false);
}

function SetAstro(setting : boolean)
{
	colliders = GetComponentsInChildren(Collider);
	for (var coll : Collider in colliders)
	{
		coll.enabled = setting;
	}

	spriteRenderers = GetComponentsInChildren(SpriteRenderer);
	for (var sr : SpriteRenderer in spriteRenderers)
	{
		sr.enabled = setting;
	}
}
