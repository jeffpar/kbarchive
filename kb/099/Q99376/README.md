---
layout: page
title: "Q99376: Status Frames Skipped Returns a Value of Zero"
permalink: /kb/099/Q99376/
---

## Q99376: Status Frames Skipped Returns a Value of Zero

{% raw %}

	Article: Q99376
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the MCI Command String sequence Status Frames Skipped from Media
	Player 2.0 that ships with Video for Windows, you may receive a return value of
	0 even when you are dropping frames. This will occur if the Auto Rewind check
	box is selected in the Options dialog box (accessed by choosing Options from the
	Media Player's Edit menu.)
	
	MORE INFORMATION
	================
	
	After opening a file in Media Player version 2.0, pressing CTRL+F5 displays the
	Send MCI String Command dialog box. This utility can be used to send MCI command
	strings to the current instance of Media Player.
	
	After you play an .AVI file from Media Player, the command string Status Frames
	Skipped will report the number of frames dropped during the most recent playback
	instance. However, this reports a value of 0 if the Auto Rewind check box is
	selected in the Options dialog box. This occurs because rewinding the current
	file begins a new playback instance which has not yet dropped any frames.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	

{% endraw %}
