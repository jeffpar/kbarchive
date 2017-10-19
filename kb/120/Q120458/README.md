---
layout: page
title: "Q120458: 2 RAS Client/RAS IPX Server's Cannot Dial into Another IPX Netwk"
permalink: /kb/120/Q120458/
---

## Q120458: 2 RAS Client/RAS IPX Server's Cannot Dial into Another IPX Netwk

	Article: Q120458
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If multiple computers are configured as both RAS clients and RAS IPX servers on
	the same network, only one of them at a time can dial into a second network
	using IPX.
	
	CAUSE
	=====
	
	When a RAS client connected to Network A and configured as a RAS IPX server,
	dials through IPX into a RAS server on Network B, the server assigns the client
	a Network B number. The client (configured as an IPX router because it's a RAS
	IPX server) advertises the Network B number on Network A. Other RAS IPX servers
	pick up the Network B number in their routing tables, and when they try to dial
	into Network B with IPX, they receive the RASPHONE.EXE message:
	
	  IPX CP reported error 744: Cannot use the IPX network number
	  assigned by remote server. Check the eventlog.
	
	The eventlog shows RemoteAccess Error # 20078:
	
	  The IPX network number XXXXXXXX configured for the WAN interface is already
	  in use on the LAN. Possible solutions: 1) Disconnect this computer from the
	  LAN and wait 3 minutes before dialing again; 2) Configure this computer for
	  dialout only."
	
	WORKAROUND
	==========
	
	Make the other IPX clients dialout-only,
	
	-or-
	
	Configure the RAS server to assign different network numbers to IPX clients. Here
	is the procedure:
	
	(Control Panel->Network->Configure RAS->Network-> Server Settings:
	IPX->Configure..-> un-check the checkbox: "Assign same network number to
	all IPX clients.
	
	Additional query words: prodnt 3.5 4.0
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
