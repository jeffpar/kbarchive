---
layout: page
title: "Q279620: MechWarrior 4 Err Msg: Invalid to Call ApplyFilters..."
permalink: kb/279/Q279620/
---

## Q279620: MechWarrior 4 Err Msg: Invalid to Call ApplyFilters...

	Article: Q279620
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork igz kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to Zone.com from Microsoft MechWarrior 4: Vengeance,
	the ZoneMatch button may be unavailable, or you may receive one of the following
	error messages when you click ZoneMatch:
	
	   - STOP: Invalid to call ApplyFilters when no game list has been created.
	
	   - TCP/IP may not be enabled.
	
	CAUSE
	=====
	
	This behavior can occur if one of the following conditions is true:
	
	- The Znmatch.dll and Zonenet.dll files are not registered properly on your
	  computer.
	
	- The TCP/IP network protocol is not installed on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method for the error message that you
	received.
	
	STOP: Invalid to Call ApplyFilters When No Game List Has Been Created
	---------------------------------------------------------------------
	
	To resolve this issue, manually register the Znmatch.dll and Zonenet.dll files:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line (including the quotation marks), and
	  then click OK
	
	  regsvr32 "<drive>:\program files\microsoft games\mechwarrior
	  vengeance\znmatch.dll"
	
	  where <drive> is the drive letter of the hard disk on which MechWarrior
	  4 is installed.
	
	3. When you receive the message stating that the Znmatch.dll file was registered
	  successfully, click OK.
	
	4. Click Start, and then click Run.
	
	5. In the Open box, type the following line (including the quotation marks), and
	  then click OK
	
	  regsvr32 "<drive>:\program files\microsoft games\mechwarrior
	  vengeance\zonenet.dll"
	
	  where <drive> is the drive letter of the hard disk on which MechWarrior
	  4 is installed.
	
	6. When you receive the message stating that the Zonenet.dll file was registered
	  successfully, click OK.
	
	TCP/IP May Not Be Enabled
	-------------------------
	
	To resolve this issue, install the TCP/IP network protocol:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Configuration tab, click Add.
	
	4. In the "Click the type of network component you want to install" box, click
	  Protocol, and then click Add.
	
	5. In the Manufacturers box, click Microsoft.
	
	6. In the Network Protocols box, click TCP/IP.
	
	7. Click OK, and then click OK again.
	
	8. When you are prompted to restart the computer, click Yes.
	
	Additional query words: 4.00 msgame mech warrior apply filters
	
	======================================================================
	Keywords          : kberrmsg kbnetwork igz kbimu msgame 
	Technology        : kbGamesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
