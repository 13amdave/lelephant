function OnCollisionEnter(collision : Collision)
{
	if (collision.gameObject.tag == "eleph1" || collision.gameObject.tag == "eleph2" ||
		collision.gameObject.tag == "astro1" || collision.gameObject.tag == "astro2")
	{
		return;
	}

	Destroy(collision.gameObject);
}

function OnTriggerEnter(collider : Collider)
{
	Destroy(collider.gameObject);
}