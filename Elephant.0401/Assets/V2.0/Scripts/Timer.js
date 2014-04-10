var initialSpawn : float = 5.0;
var thePrefab : GameObject;
var spawnTime : float = 5.0;

function Update () 
{
	if(initialSpawn > 0)
	{
		initialSpawn -= Time.deltaTime;
		if(initialSpawn <= 0) 
		{
		var instance : GameObject = Instantiate(thePrefab, transform.position, transform.rotation);
		Debug.Log("Game Over");
		initialSpawn = spawnTime;
		}
	}
}