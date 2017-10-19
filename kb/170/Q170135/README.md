---
layout: page
title: "Q170135: Error Message: WINS Client (TCP/IP) Service Fails to Start"
permalink: /kb/170/Q170135/
---

## Q170135: Error Message: WINS Client (TCP/IP) Service Fails to Start

	Article: Q170135
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your Windows NT 4.0 computer starts, you may get a message saying a service
	failed to start.
	
	In the event log, the following errors appear:
	
	  4315 - Source NETBT: Unable to read the drivers exported linkage
	  configuration information.
	
	  7000 - The WINS Client(TCP/IP) service failed to start due to the following
	  error: A device attached to the system is not functioning.
	
	CAUSE
	=====
	
	A corrupt network interface card driver or incorrect binding information can
	cause this problem.
	
	RESOLUTION
	==========
	
	Remove and re-install the network interface card driver and the TCP/IP
	protocol.
	
	NOTE: If you have applied any service pack, make sure to reapply the service pack
	after re-installing TCP/IP and the network interface card driver. See the
	following article in the Microsoft Knowledge Base for more information:
	
	  Q162837 Replacing TCP/IP After SP2 Causes STOP 0x00000050
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
