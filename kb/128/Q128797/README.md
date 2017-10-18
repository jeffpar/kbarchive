---
layout: page
title: "Q128797: Unable to Transfer Files Across DEC 250 and DEC 500 Routers"
permalink: kb/128/Q128797/
---

## Q128797: Unable to Transfer Files Across DEC 250 and DEC 500 Routers

	Article: Q128797
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to copy large files across Digital Equipment Corporation (DEC)
	250 and DEC 500 routers using the TCP/IP protocol, the file transfer fails.
	
	
	CAUSE
	=====
	
	DEC 250 and DEC 500 are IP/DECNet Routers. For wide area networks (WAN) with
	DECNet as the primary protocol, the MTU size may be set to 512 bytes. These
	routers may not send ICMP Destination Unreachable messages with Fragmentation
	Needed in its code field if the datagram requires fragmentation. Instead the
	frame is dropped. When the Windows NT EnablePMTUDiscovery parameter is turned on
	(set by default), the "Don't Fragment" bit is set in the IP datagram indicating
	to the router that it should not fragment this packet. At this time the router
	should respond with a destination unreachable ICMP message.
	
	RESOLUTION
	==========
	
	To correct this problem, you must modify the Registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	3. From the Edit menu choose Add Value.
	
	4. Add the following:
	
	     Value Name:   EnablePMTUDiscovery
	     Data Type:    REG_DWORD
	     Data:         0
	     Radix:        Hex
	
	5. Quit Registry Editor.
	
	6. Shutdown and restart Windows NT.
	
	The products included here are manufactured by Digital Equipment Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
