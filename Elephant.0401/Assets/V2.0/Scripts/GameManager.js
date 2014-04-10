var astroOneSpawnTime = 5.0f;
var astroTwoSpawnTime = 5.0f;

static var astroOne = true;
static var astroTwo = true;

var A1 : GameObject;
var A2 : GameObject;
var initialSpawn : float = 5.0;

var spawnSpread = 20.0f;


function Start()
{

}

function Update()
{
//	checkAstro1 = GameObject.FindWithTag("astro1");
//	if (checkAstro1 == null)
	if (!GameManager.astroOne)
	{
		astroOneSpawnTime -= Time.deltaTime;
		if(astroOneSpawnTime <= 0)
		{
			var clone : GameObject;
			clone = Instantiate(A1, transform.position, transform.rotation);
			clone.rigidbody.velocity = Vector3.left * Random.Range(-spawnSpread, spawnSpread);
			clone.GetComponent("MoverAstro").falling = true;
			clone.GetComponent("MoverAstro").team = 1;
			astroOneSpawnTime = 6.0f;
		}
	}

//	checkAstro2 = GameObject.FindWithTag("astro2");
//	if (checkAstro2 == null)
	if (!GameManager.astroTwo)
	{
		astroTwoSpawnTime -= Time.deltaTime;
		if(astroTwoSpawnTime <= 0)
		{
			var clone2 : GameObject;
			clone2 = Instantiate(A2, transform.position, transform.rotation);			
			clone2.rigidbody.velocity = Vector3.left * Random.Range(-spawnSpread, spawnSpread);
			clone2.GetComponent("MoverAstro").falling = true;
			clone2.GetComponent("MoverAstro").team = 2;
			astroTwoSpawnTime = 6.0f;
		}
	}
}

static function Died(astro : int)
{
	if (astro == 1)
	{
		astroOne = false;
	}
	else if (astro == 2)
	{
		astroTwo = false;
	}
}

static function Caught(astro : int)
{
	if (astro == 1)
	{
		astroOne = true;
	}
	else if (astro == 2)
	{
		astroTwo = true;
	}
}

static function IsAlive(astro : int)
{
	if (astro == 1)
	{
		return astroOne;
	}
	else if (astro == 2)
	{
		return astroTwo;
	}
}