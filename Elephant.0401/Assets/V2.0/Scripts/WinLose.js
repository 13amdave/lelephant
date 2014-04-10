var playerOne = false;
var playerTwo = false;
var poof : Transform;

function Update () 
{
	if(playerOne==true)
	{
		if(ScoreBoard.playerTwoScore==10)
		{
			Instantiate(poof,transform.position,transform.rotation);
			Destroy(gameObject);
		}
	}
	
	if(playerTwo==true)
	{
		if(ScoreBoard.playerOneScore==10)
		{
			Instantiate(poof, transform.position, transform.rotation);
			Destroy(gameObject);
		}
	}
}