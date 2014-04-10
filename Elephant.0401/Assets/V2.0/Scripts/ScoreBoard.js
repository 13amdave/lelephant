static var playerOneScore = 0;
static var playerTwoScore = 0;

var tex0 : Texture;
var tex1 : Texture;
var tex2 : Texture;
var tex3 : Texture;
var tex4 : Texture;
var tex5 : Texture;
var tex6 : Texture;
var tex7 : Texture;
var tex8 : Texture;
var tex9 : Texture;
var tex10 : Texture;

var timer = 3.0f;

function Update ()
{
	/*if(Input.GetKeyDown(KeyCode.UpArrow))
	{
		playerTwoScore++;
	}
	
	if(Input.GetKeyDown(KeyCode.W))
	{
		playerOneScore++;
	}*/
	
}


function OnGUI ()

{
	
	if(playerOneScore==0)
	{
		GUI.DrawTexture(Rect(20,Screen.height-106,237,91), tex0, ScaleMode.ScaleToFit, true, 0);
	}
	
	if(playerTwoScore==0)
	{
		GUI.DrawTexture(Rect(Screen.width-257,Screen.height-106,237,91), tex0, ScaleMode.ScaleToFit, true, 0);
	}
	
	
	if(playerOneScore==1)
	{
		GUI.DrawTexture(Rect(20,Screen.height-90,127,70), tex1, ScaleMode.ScaleToFit, true, 0);
	}
	
	if(playerTwoScore==1)
	{
		GUI.DrawTexture(Rect(Screen.width-147,Screen.height-90,127,70), tex1, ScaleMode.ScaleToFit, true, 0);
	}
	
	
	if(playerOneScore==2)
	{
		GUI.DrawTexture(Rect(20,Screen.height-91,230,71), tex2, ScaleMode.ScaleToFit, true, 0);
	}
	
	if(playerTwoScore==2)
	{
		GUI.DrawTexture(Rect(Screen.width-250,Screen.height-91,230,71), tex2, ScaleMode.ScaleToFit, true, 0);
	}
	
	
	if(playerOneScore==3)
	{
		GUI.DrawTexture(Rect(20,Screen.height-90,265,75), tex3, ScaleMode.ScaleToFit, true, 0);
	}
	
	if(playerTwoScore==3)
	{
		GUI.DrawTexture(Rect(Screen.width-285,Screen.height-90,265,75), tex3, ScaleMode.ScaleToFit, true, 0);
	}
	
	
	if(playerOneScore==4)
	{
		GUI.DrawTexture(Rect(20,Screen.height-90,340,75), tex4, ScaleMode.ScaleToFit, true, 0);
	}
	
	if(playerTwoScore==4)
	{
		GUI.DrawTexture(Rect(Screen.width-360,Screen.height-90,340,75), tex4, ScaleMode.ScaleToFit, true, 0);
	}
	
	
	if(playerOneScore==5)
	{
		GUI.DrawTexture(Rect(20,Screen.height-90,209,75), tex5, ScaleMode.ScaleToFit, true, 0);
	}
	
	if(playerTwoScore==5)
	{
		GUI.DrawTexture(Rect(Screen.width-229,Screen.height-90,209,75), tex5, ScaleMode.ScaleToFit, true, 0);
	}
	
		
	if(playerOneScore==6)
	{
		GUI.DrawTexture(Rect(20,Screen.height-91,150,71), tex6, ScaleMode.ScaleToFit, true, 0);
	}
	
	if(playerTwoScore==6)
	{
		GUI.DrawTexture(Rect(Screen.width-170,Screen.height-91,150,71), tex6, ScaleMode.ScaleToFit, true, 0);
	}
		
		
	if(playerOneScore==7)
	{
		GUI.DrawTexture(Rect(20,Screen.height-91,217,71), tex7, ScaleMode.ScaleToFit, true, 0);
	}
	
	if(playerTwoScore==7)
	{
		GUI.DrawTexture(Rect(Screen.width-237,Screen.height-91,217,71), tex7, ScaleMode.ScaleToFit, true, 0);
	}
		
		
	if(playerOneScore==8)
	{
		GUI.DrawTexture(Rect(20,Screen.height-90,209,70), tex8, ScaleMode.ScaleToFit, true, 0);
	}
	
	if(playerTwoScore==8)
	{
		GUI.DrawTexture(Rect(Screen.width-229,Screen.height-90,209,70), tex8, ScaleMode.ScaleToFit, true, 0);
	}
		
		
	if(playerOneScore==9)
	{
		GUI.DrawTexture(Rect(20,Screen.height-90,216,70), tex9, ScaleMode.ScaleToFit, true, 0);
	}
	
	if(playerTwoScore==9)
	{
		GUI.DrawTexture(Rect(Screen.width-236,Screen.height-90,216,70), tex9, ScaleMode.ScaleToFit, true, 0);
	}
		
		
	if(playerOneScore==10)
	{
		GUI.DrawTexture(Rect(20,Screen.height-91,349,71), tex10, ScaleMode.ScaleToFit, true, 0);
		timer-=Time.deltaTime;
		if(timer<=0)
		{
			Application.LoadLevel("Title");
			timer=3.0f;
			playerOneScore=0;playerTwoScore=0;
		}
	}
	
	if(playerTwoScore==10)
	{
		GUI.DrawTexture(Rect(Screen.width-369,Screen.height-91,349,71), tex10, ScaleMode.ScaleToFit, true, 0);
		timer-=Time.deltaTime;
		if(timer<=0)
		{
			Application.LoadLevel("Title");
			timer=3.0f;
			playerOneScore=0;playerTwoScore=0;
		}
	}
}
