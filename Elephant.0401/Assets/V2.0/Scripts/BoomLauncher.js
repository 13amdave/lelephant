var cannonBall : Rigidbody;
var maxVel : float = 50;
var minVel : float = 40;
var initialSpawn : float = 5.0;
var spawnTime : float = 5.0;


function Update () 
{
	if(initialSpawn > 0)
	{
		initialSpawn -= Time.deltaTime;
		if(initialSpawn <= 0) 
		{
			var clone : Rigidbody;
			clone = Instantiate(cannonBall, transform.position, Quaternion.identity);
			clone.velocity = transform.TransformDirection(Vector3.right * Random.Range(minVel, maxVel));
			initialSpawn = spawnTime;
		}
	}
}