---
layout: page
title: "Q168789: How to Play a Sound File at a Specified Time Using System Agent"
permalink: kb/168/Q168789/
---

## Q168789: How to Play a Sound File at a Specified Time Using System Agent

	Article: Q168789
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbsound kbtool win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have Microsoft Plus! for Windows 95 and a functional sound card
	installed, you can create a new task in System Agent to play a sound at a
	specified time. This might be useful if you want to play a chime at noon or hear
	a reminder to take a break at a certain time every day.
	
	MORE INFORMATION
	================
	
	To create a new task in System Agent to play a sound at a specified time, follow
	these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click System Agent.
	
	2. On the Program menu, click Schedule A New Program.
	
	3. Type the following text in the Program box:
	
	  " c:\windows\sndrec32.exe /play /close <path to sound file> " (without
	  the quotation marks)
	
	  For example, to play the "The Microsoft Sound.wav" file, you would type:
	
	  " c:\windows\sndrec32.exe /play /close c:\windows\media\ the microsoft
	  sound.wav " (without the quotation marks)
	
	4. Click When To Run. Choose how often to play the sound file in the Run box,
	  and then choose a time to play the sound file in the Start At box.
	
	5. Click OK, and then close System Agent.
	
	======================================================================
	Keywords          : kbsound kbtool win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	Issue type        : kbhowto
	
	=============================================================================
	
