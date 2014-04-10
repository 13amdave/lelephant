var cannonBall : Rigidbody;
var maxVel : float = -200;
var minVel : float = -50;
var initialSpawn : float = 5.0;
var spawnTime : float = 5.0;
var maxAlt : float = 60.0;
var minAlt : float = -60.0;


function Update () 
{
	if (initialSpawn > 0)
	{
		initialSpawn -= Time.deltaTime;
		if (initialSpawn <= 0) 
		{
			var clone : Rigidbody;
			var position = transform.position;
			position.y += Random.Range(minAlt, maxAlt);
			clone = Instantiate(cannonBall, position, transform.rotation);
			clone.velocity = transform.TransformDirection(Vector3.right * Random.Range(minVel, maxVel));
			initialSpawn = spawnTime;
		}
	}
}