---
layout: page
title: "Q257771: FS2000: Computer Stops Responding During Game Play"
permalink: kb/257/Q257771/
---

## Q257771: FS2000: Computer Stops Responding During Game Play

	Article: Q257771
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay fsim kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are playing Microsoft Flight Simulator 2000, you may experience either
	of the following symptoms:
	
	- You may receive the following error message on a blue screen
	
	  Fs2000.exe caused a General Protection Fault in module Fusion16.drv.
	
	  and the computer may stop responding (hang).
	
	- Flight Simulator 2000 may hang.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- A Diamond Monster Fusion AGP video adapter is installed in your computer.
	
	- Version 1.20 of the video BIOS for the Diamond Monster Fusion video adapter
	  is installed on your computer.
	
	- An AMD microprocessor (CPU) is installed in your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the latest Voodoo Banshee reference
	drivers from the following 3Dfx Web site:
	
	  http://www.3dfxgamers.com/view.asp?IOID=44
	
	MORE INFORMATION
	================
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: msgame flightsim fltsim fs2k hangs freeze lock
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay fsim kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
