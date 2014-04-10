var startTime = 2.0f;

function Update () {
		
			startTime-=Time.deltaTime;
			if(startTime<=0)
			{
			renderer.material.mainTexture.Play();
			}
		
	
}