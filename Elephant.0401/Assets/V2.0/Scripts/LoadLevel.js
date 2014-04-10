var sceneName : int;

function OnMouseDown()
{
	if(Input.GetMouseButton(0))
	{
	Application.LoadLevel(sceneName);
	}
}