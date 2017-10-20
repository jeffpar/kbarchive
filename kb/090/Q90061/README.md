---
layout: page
title: "Q90061: Volume Control Loops Endlessly with Microsoft SoundBits"
permalink: /kb/090/Q90061/
---

## Q90061: Volume Control Loops Endlessly with Microsoft SoundBits

{% raw %}

	Article: Q90061
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Volume Control or Recording Control window can get stuck in a loop with
	Microsoft SoundBits if the volume and recording controls are set to display when
	a sound is played or recorded.
	
	MORE INFORMATION
	================
	
	In the above configuration, a loop will occur with the control windows
	minimizing, the SoundBits playing, and the control windows restoring.
	
	To correct the situation, use one of the following two procedures:
	
	1. Run Volume Control.
	
	2. From the Control menu, choose Preferences.
	
	3. Clear the Show Window When Sound Is Played box.
	
	4. Run Recording Control.
	
	5. From the Control menu, choose Preferences.
	
	6. Clear the Show Window When Sound Is Played.
	
	-or-
	
	1. Run Control Panel.
	
	2. Choose the Sound icon.
	
	3. In the Events box, select Application Max.
	
	4. In the Files box, select None.
	
	5. In the Events box, select Application Min.
	
	6. In the Files box, select None.
	
	7. Choose the OK button.
	
	These procedures will both prevent the loop from occurring.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	

{% endraw %}
