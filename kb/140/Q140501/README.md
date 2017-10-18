---
layout: page
title: "Q140501: No Sounds When Playing 3D Pinball"
permalink: kb/140/Q140501/
---

## Q140501: No Sounds When Playing 3D Pinball

	Article: Q140501
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play 3D Pinball you may not hear any sounds, although sounds are played
	correctly in other programs.
	
	CAUSE
	=====
	
	This behavior can occur if the WaveOutDevice setting specified in the
	Wavemix.inf file for 3D Pinball does not correspond to the preferred playback
	device in the Multimedia audio settings.
	
	RESOLUTION
	==========
	
	Edit the Wavemix.inf file in the Program Files\Plus!\Pinball folder and change
	the WaveOutDevice setting to correspond to the preferred playback device in the
	Multimedia audio settings. To determine the preferred playback device,
	double-click the Multimedia icon in Control Panel, and check the Preferred
	Device box on the Audio tab.
	
	Using any text editor, open the Wavemix.inf file in the Program Files\
	Plus!\Pinball folder. In the [General] section of the file, locate the following
	line:
	
	  WaveOutDevice=0
	
	Change this line to read:
	
	  WaveOutDevice=1
	
	Save the Wavemix.inf file and then restart the computer.
	
	Notes
	-----
	
	- Be sure to edit the Wavemix.inf file in the Pinball folder. Do not edit any
	  other Wavemix.inf file.
	
	- If you are using a Creative Labs Phone Blaster, or possibly other
	  multiple-function devices, it may be necessary to change the WaveOutDevice
	  setting to 2 instead of 1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! version 1.0 for
	Windows 95. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
