---
layout: page
title: "Q141412: Encarta 1995: Mindmaze May Hang with 8-bit Sound Blaster Cards"
permalink: kb/141/Q141412/
---

## Q141412: Encarta 1995: Mindmaze May Hang with 8-bit Sound Blaster Cards

	Article: Q141412
	Product(s): Microsoft Home Kids Products
	Version(s): 1995 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your computer system has a Sound Blaster 8-bit sound card installed and you
	attempt to run the Encarta 1995 MindMaze game, your system may hang (stop
	responding). No error message is displayed.
	
	RESOLUTION
	==========
	
	Use one of the following two methods to turn the MindMaze Music and Sound
	Effects off.
	
	Method 1
	--------
	
	1. On the MindMaze menu, click the Sound Option.
	
	2. Click the Off option for both Music and Sound Effects.
	
	3. Click OK to close the Sound Options dialog box.
	
	  NOTE: Method 1 only works if MindMaze does not hang when starting. If MindMaze
	  hangs when starting, use Method 2 to turn off sounds.
	
	Method 2
	--------
	
	1. Using a text editor such as Notepad in Windows 3.x, or WordPad in Windows 95,
	  open the Encarta.ini file located in your Windows folder.
	
	2. In the [Mindmaze95] section, change the following entries:
	
	  SoundOn=0
	  MusicOn=0
	
	  NOTE: If your Encarta.ini file does not include a [MindMaze95] section, add
	  the section with the above lines at the bottom of the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Encarta for Windows,
	1995 edition. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Turning off the MindMaze sounds options off will not affect other sounds in
	Encarta.
	
	The third-party products mentioned here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 1995 multi media multimedia multi-media lock locked hung freeze mmtitles kbmm soundblaster win95
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbEncartaSearch kbEncartaEnCyc1995Mac
	Version           : :1995 edition
	
	=============================================================================
	
