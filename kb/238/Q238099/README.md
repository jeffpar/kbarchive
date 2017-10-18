---
layout: page
title: "Q238099: Flight Simulator 98: GPF in Module User.exe"
permalink: kb/238/Q238099/
---

## Q238099: Flight Simulator 98: GPF in Module User.exe

	Article: Q238099
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsound fs98 kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Flight Simulator 98, you may receive the following
	error message:
	
	  Flight Sim98 caused a General Protection Fault in Module User.exe at
	  0015:xxxxxxxxxx
	
	CAUSE
	=====
	
	This behavior can occur if a 16-bit driver is loaded when the computer starts.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete all the reference to 16-bit drivers in the
	System.ini:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "sysedit" (without the quotation marks), and then click
	  OK.
	
	3. On the Window menu, click "c:\WINDOWS\SYSTEM.INI".
	
	4. Under the [386h] section of the System.ini file, type a semi-colon (;) in
	  front of each line that ends in a .386 extension.
	
	5. On the File menu, click Save.
	
	6. On the File, and then Exit.
	
	7. Restart the computer.
	
	Additional query words: msgame fltsim
	
	======================================================================
	Keywords          : kbsound fs98 kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim98 kbSimSearch
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
