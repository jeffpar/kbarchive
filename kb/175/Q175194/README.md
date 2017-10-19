---
layout: page
title: "Q175194: Err Msg: FLTSIM98 Caused an Exception &#42;num&#42; in Module Panels.dll"
permalink: /kb/175/Q175194/
---

## Q175194: Err Msg: FLTSIM98 Caused an Exception &#42;num&#42; in Module Panels.dll

	Article: Q175194
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg fs98 kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Flight Simulator 98 or Flight Simulator 2000, the program may not
	start, or you may receive an error message similar to the following:
	
	  FLTSIM98 caused an exception c0000006h in module panels.dll.
	
	NOTE: The exception numbers may vary.
	
	CAUSE
	=====
	
	This behavior can occur if the PowerDesk terminate-and-stay-resident (TSR)
	utility is running on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, quit the PowerDesk utility before you start Flight
	Simulator 98. To do this:
	
	1. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	2. Click PowerDesk, and then click End Task. If you receive a message stating
	  that the program is not responding, click End Task again.
	
	3. Start Flight Simulator 98.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: fltsim fs2000 fs2k fs98 power desk msgame
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg fs98 kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbFlightSim98 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
