---
layout: page
title: "Q179325: FS98: Computer Hangs When You Click Time &amp; Season"
permalink: kb/179/Q179325/
---

## Q179325: FS98: Computer Hangs When You Click Time &amp; Season

	Article: Q179325
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Flight Simulator 98 and you click Time & Season on the
	World menu, your computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if Adobe Type Manager is installed. Adobe Type Manager
	makes the following modifications to the System.ini file:
	
	  [Boot]
	  SYSTEM.DRV=ATMSYS.DRV
	  ATMSYS.DRV=SYSTEM.DRV
	
	RESOLUTION
	==========
	
	To resolve this behavior, disable Adobe Type Manager. To do so, use the
	following steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "system.ini" (without the quotation marks), and then
	  click OK.
	
	3. In the [Boot] section of the System.ini file, locate the following lines:
	
	  SYSTEM.DRV=ATMSYS.DRV
	  ATM.SYSTEM.DRV=SYSTEM.DRV
	
	4. Type a semicolon (;) at the beginning of both lines, for example:
	
	  ;SYSTEM.DRV=ATMSYS.DRV
	  ;ATM.SYSTEM.DRV=SYSTEM.DRV
	
	5. Type the following line in the [Boot] section of the System.ini file:
	
	  System.drv=System.drv
	
	6. On the File menu, click Save.
	
	7. On the File menu, click Exit.
	
	8. Restart the computer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: fs98 flightsim fltsim flt sim atm sys freeze locks lock up
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim98 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
