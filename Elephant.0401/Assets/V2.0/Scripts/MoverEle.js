var thrust = 30000;
var verticalThrust = 40000;
var bullet : Transform;

var moveRight : KeyCode;
var moveLeft : KeyCode;
var moveUp : KeyCode;
var moveDown : KeyCode;
var shoot : KeyCode;

var stunned = false;
var stunTimer = 3.0f;
var particle : Transform;
private var shockParticle : GameObject;

var shock : AudioClip;


function Update()
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

		if (Input.GetKey(moveUp))
		{
			rigidbody.AddForce(Vector3.up * verticalThrust * Time.deltaTime);
		}

		if (Input.GetKey(moveDown))
		{
			rigidbody.AddForce(-Vector3.up * thrust * Time.deltaTime);
		}

		if (Input.GetKey(shoot))
		{
			Instantiate(bullet, transform.position, Quaternion.identity);
		}
	}

	if (stunned == true)
	{

		stunTimer = stunTimer - Time.deltaTime;

		if (stunTimer < 0)
		{
			stunned = false;
			stunTimer = 3.0f;

			Destroy(shockParticle);
		}
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

function Flip()
{
	transform.localScale.x *= -1;
}

var team : int;
var myAstro : MoverAstro;

function OnCollisionEnter(collision : Collision)
{
	if (collision.gameObject.tag == "astro1" && !GameManager.IsAlive(team))
	{
		var collidingAstro : MoverAstro;
		collidingAstro = collision.gameObject.GetComponent("MoverAstro");

		if (collidingAstro.team == team)
		{
			Debug.Log("Elephant from team " + team + " caught an astronaut.");
			GameManager.Caught(team);
			Destroy(collidingAstro.gameObject);

			myAstro.Enable();
		}
	}
}

function OnTriggerEnter(stun : Collider)
{
	if (stun.gameObject.name == "LightningCloud(Clone)")
	{
		stunned = true;
		shockParticle = Instantiate(particle, Vector3(transform.position.x,transform.position.y,transform.position.z-1), transform.rotation) as GameObject;
	}
}
