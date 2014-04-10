var player : Transform;
var particle : Transform;



function OnTriggerEnter (collider : Collider)
{
	
	
		if(collider.gameObject.tag=="astro1")
		{
		
		Destroy(collider.gameObject);
		
		
		Instantiate(particle, transform.position, transform.rotation);
		Destroy(transform.parent.gameObject);
		Instantiate(player, Vector3(transform.position.x,transform.position.y,180), Quaternion.identity);
		
		
	
		}
	
}