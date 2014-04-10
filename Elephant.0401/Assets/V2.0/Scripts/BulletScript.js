var speed = 5;

function Update ()
{
transform.Translate(Vector3.right * speed * Time.deltaTime);
}