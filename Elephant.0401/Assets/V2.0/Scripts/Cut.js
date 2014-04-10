function OnCollisionEnter (collision : Collision)
{
	Debug.Log("Hit");
	if(collision.gameObject.tag == "obstacle"){	
		var tempRope = transform.parent.gameObject;
		Destroy(tempRope);
		Destroy(gameObject);
		
	}
}