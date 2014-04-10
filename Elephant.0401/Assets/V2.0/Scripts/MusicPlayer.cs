using UnityEngine;
using System.Collections;

public class MusicPlayer : MonoBehaviour {
	
	private static MusicPlayer instance = null;

	void Awake () 
	{
		if (instance != null && instance != this) 
		{
			Destroy(this.gameObject);
			return;
		} 
		else 
		{
			instance = this;
		}

		DontDestroyOnLoad(this.gameObject);
	}
}