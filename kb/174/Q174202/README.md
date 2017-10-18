---
layout: page
title: "Q174202: Configuring SPX Watchdog Timers in Windows 95"
permalink: kb/174/Q174202/
---

## Q174202: Configuring SPX Watchdog Timers in Windows 95

	Article: Q174202
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbnetwork osr1 osr2 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs using the IPX/SPX-compatible protocol (NWLINK) to communicate over a
	wide area network (WAN) or other slow link may not connect or may experience
	dropped connections. Analysis of network traffic may reveal that an SPX Watchdog
	timer has expired on the remote node. This symptom can occur particularly if the
	watchdog parameters on the server are configured to non-default values.
	
	CAUSE
	=====
	
	SPX Watchdog timers are not configurable for the IPX/SPX-compatible protocol in
	Windows 95 and Windows 95 OEM Service Release 2 (OSR2).
	
	RESOLUTION
	==========
	
	You may be able to work around this issue by reconfiguring the SPX watchdog
	timer parameters on the server to their default values.
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	According to Novell documentation (TID #2910905), the following timers are among
	the Watchdog timers that are configurable for Novell's IPX/SPX protocol:
	
	SPX Verify Timeout
	------------------
	
	This parameter controls how long the watchdog waits after it has sent a packet
	before it sends a system packet to keep the connection alive.
	
	SPX Listen Timeout
	------------------
	
	This parameter controls how long the watchdog waits after it has received a
	packet before it sends a system packet requesting an acknowledgement so it will
	know the connection still exists.
	
	Send Timeout
	------------
	
	This parameter controls how long IPX waits for an acknowledgement of a sent
	packet.
	
	For additional information about Novell's implementation of SPX timers, please
	consult Novell or your Novell NetWare documentation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork osr1 osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
