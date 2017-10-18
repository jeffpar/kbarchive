---
layout: page
title: "Q175151: FS98/2000 Err Msg: There was an Unrecoverable Exception Error..."
permalink: kb/175/Q175151/
---

## Q175151: FS98/2000 Err Msg: There was an Unrecoverable Exception Error...

	Article: Q175151
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Flight Simulator 98 or Flight Simulator 2000, you may receive the
	following error message:
	
	  There was an Unrecoverable Exception Error in Flight Simulator with C++
	  Runtime Library.
	
	CAUSE
	=====
	
	This behavior can occur if the video driver installed on your computer is not
	designed for the video adapter installed in your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the latest version of the correct video driver
	for your video adapter, and then remove and reinstall Flight Simulator 98 or
	Flight Simulator 2000. To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. Click Change Display Type.
	
	  NOTE: If you are using Microsoft Windows 95 OEM Service Release 2 (OSR2),
	  click Advanced Properties, and then click the Adapter tab. If you are using
	  Microsoft Windows 98, click Advanced, and then click the Adapter tab.
	
	5. If the installed display driver does not match the type of video card you
	  have installed in your computer, install the appropriate video driver for
	  your video card.
	
	For additional information about how to install or change a video driver, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q131806 Windows 95/98: How to Install or Change a Display Driver
	
	6. Restart the computer.
	
	7. Click Start, point to Settings, and then click Control Panel.
	
	8. Double-click Add/Remove Programs.
	
	9. Click Microsoft Flight Simulator 98 or Microsoft Flight Simulator 2000, and
	  then click Add/Remove.
	
	10. Follow the instructions on the screen to remove Flight Simulator 98 or
	  Flight Simulator 2000.
	
	11. Restart the computer.
	
	12. Insert the Flight Simulator 98 or the Flight Simulator 2000 Disk 1 CD-ROM
	  into the CD-ROM drive.
	
	  If the installation program does not start automatically:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\setup.exe
	
	     where <cd-rom> is the drive letter of your CD-ROM drive.
	
	13. Follow the instructions on the screen to install Flight Simulator 98 or
	  Flight Simulator 2000.
	
	Additional query words: msgame flightsim fsim fs98 fs2000 fs2k
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbFlightSim98 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
