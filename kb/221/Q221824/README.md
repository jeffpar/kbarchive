---
layout: page
title: "Q221824: FS98/2000: Sounds Are Played Through Only One Speaker"
permalink: /kb/221/Q221824/
---

## Q221824: FS98/2000: Sounds Are Played Through Only One Speaker

	Article: Q221824
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbsound fs98 kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Flight Simulator 98 or Microsoft Flight Simulator 2000,
	sounds may be played through only one of the speakers attached to your computer.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- You are playing Flight Simulator on a Packard Bell D141 computer.
	
	- A Sound III sound card is installed in the computer.
	
	RESOLUTION
	==========
	
	To work around this issue, disable stereo sound and reduce the audio sample rate
	in the game. To do this:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. If you are using Flight Simulator 2000, type the following line in the Named
	  box:
	
	  fs2000.cfg
	
	  If you are using Flight Simulator 98, type the following line in the Named
	  box:
	
	  fltsim98.cfg
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. In the list of found files, double-click the Fltsim98.cfg or Fs2000.cfg file.
	
	5. In the "Choose the program you want to use" box, click Notepad.
	
	6. Click to clear the "Always use this program to open this file" check box, and
	  then click OK.
	
	7. Scroll to the end of the file, press ENTER twice, and then type the following
	  lines, pressing ENTER after you type each line:
	
	  [SOUND]
	  Channels=1
	  SamplesPerSec=11025
	
	8. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: 1.00 msgame fs98 flightsim fltsim
	
	======================================================================
	Keywords          : kb3rdparty kbsound fs98 kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbFlightSim98 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
