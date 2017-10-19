---
layout: page
title: "Q162370: Flight Simulator 95 Err Msg: Invalid Page Fault in Winsmsg.dll"
permalink: /kb/162/Q162370/
---

## Q162370: Flight Simulator 95 Err Msg: Invalid Page Fault in Winsmsg.dll

	Article: Q162370
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	6.0
	WINDOWS
	kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Flight Simulator for Windows 95, version 6.0, you may
	receive the following error message:
	
	  Invalid Page Fault in Winsmsg.dll.
	
	The program will stop and return you to the Windows 95 Desktop.
	
	RESOLUTION
	==========
	
	To prevent this error message, reduce the scroll rate for the aircraft
	communications as follows:
	
	1. On the Aircraft menu, click Communications.
	
	2. Move the Communications Rate slider bar to the Low position.
	
	3. Click OK.
	
	MORE INFORMATION
	================
	
	The above error message is rare. The Winsmsg.dll controls the window that the
	communication message scrolls in. Reducing the scroll rate will usually resolve
	this problem.
	
	Terminate-and-stay-resident (TSR) programs have also been known to cause this
	problem. If reducing the scroll rate does not resolve this issue, check for any
	TSR's that may be running in the background, including any Virus detection
	programs.
	
	Additional query words: 1.00 6.00 winsmsg.dll flightsim fs6 fs95 err msg
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbFlightSim95 kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
