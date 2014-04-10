var particle1 : GameObject;
var particle2 : GameObject;
var thisGoal : Transform;
var thisSprite : Transform;

var moveSpeed = 30;
var canScore = true;
var scoreTimer = 3;


function Update()
{
	if(transform.position.y<=0)
	{
		transform.Translate(Vector3.up * Time.deltaTime * moveSpeed);
	}
	

	
}


function OnTriggerEnter (goal : Collider)
{

	if(goal.gameObject.name == "Astronaut1")
		{
		canScore=false;
		ScoreBoard.playerTwoScore++;
		Instantiate (particle1, Vector3(transform.position.x, transform.position.y, -1), transform.rotation);
		Instantiate (particle2, Vector3(transform.position.x, transform.position.y, -1), transform.rotation);
		transform.position.y=transform.position.y-75;
		
		}

	
	if(goal.gameObject.name == "Astronaut2")
		{
		canScore=false;
		ScoreBoard.playerTwoScore++;
		Instantiate (particle1, Vector3(transform.position.x, transform.position.y, -1), transform.rotation);
		Instantiate (particle2, Vector3(transform.position.x, transform.position.y, -1), transform.rotation);
		transform.position.y=transform.position.y-75;
		
		}
		
	}
