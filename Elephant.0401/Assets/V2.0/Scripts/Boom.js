var cannonBall : Rigidbody;
var throwPower : float = 10;

function Start () 
{
}

function Update ()
{

if(Input.GetButtonDown("Fire1"))
{
var clone : Rigidbody;
clone = Instantiate(cannonBall, transform.position, transform.rotation);
clone.velocity = transform.TransformDirection(Vector3.right * throwPower);
}
}