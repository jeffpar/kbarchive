---
layout: page
title: "Q121435: Err Msg: Secondary Interrupt Controller Detected..."
permalink: kb/121/Q121435/
---

## Q121435: Err Msg: Secondary Interrupt Controller Detected...

	Article: Q121435
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to run any application located on a Netware server by way of the
	Gateway Service for Netware, the Netware server may stop responding (hang) and
	display the following message:
	
	  1.1.141 Secondary Interrupt Controller detected a lost hardware interrupt.
	
	CAUSE
	=====
	
	The Netware operating system displays this message whenever it detects a lost
	hardware interrupt. Lost interrupts occur when a driver or a board requests a
	service with an interrupt call and then drops the request before the CPU can
	respond to the request.
	
	RESOLUTION
	==========
	
	To avoid this problem, the following procedure is recommended:
	
	1. Check for outdated drivers loading on the Netware server.
	
	2. Unload all the drivers and reload them one at a time to isolate which driver
	  (and/or adapter) is causing the problem. Then contact the vendor of the
	  driver.
	
	3. If the error is non-fatal, the message can be turned off by using the
	  following command either in the STARTUP.NCF file or from the command prompt:
	
	  set display lost interrupt alerts=off
	
	The Netware product discussed here is manufactured Novell Incorporated, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
