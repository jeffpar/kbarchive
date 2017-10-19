---
layout: page
title: "Q139017: Cannot Monitor Recording with Compaq ESS ES688 Sound Chip"
permalink: /kb/139/Q139017/
---

## Q139017: Cannot Monitor Recording with Compaq ESS ES688 Sound Chip

	Article: Q139017
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to record a .wav file from an audio CD using the Compaq ESS ES688
	integrated sound chip, the sound from the CD may stop playing while the
	recording is in progress. The sound does not return until you stop recording.
	
	CAUSE
	=====
	
	This behavior can occur if the Monitor While Recording option is not turned on
	in the Mixer tool. By default, this option is turned off with the Compaq ESS
	ES688 AudioDrive.
	
	RESOLUTION
	==========
	
	Turn on the Monitor While Recording option in the Mixer tool. To do so, follow
	these steps:
	
	1. Use any text editor (such as Notepad) to open the System.ini file. Verify
	  that the line "drivers=msmixmgr.dll" exists in the [boot] section of the
	  file. If the line does not exist, add it, save the file, and then restart
	  your computer.
	
	2. Start the Mixer tool by double-clicking the speaker icon on the taskbar.
	
	3. On the Options menu, click Properties.
	
	4. Click the Recording option, and verify that there is a check mark in the
	  Recording Controls check box. If there is no check mark, click the Recording
	  Controls check box to select it. Click OK.
	
	5. On the Options menu, click Advanced Controls to display the advanced
	  controls.
	
	6. Click the Advanced button.
	
	7. In the Other Controls section, click the Monitor While Recording check box to
	  select it. Click OK.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
