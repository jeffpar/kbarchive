---
layout: page
title: "Q117270: Named Pipe Applications Without Network Adapter Fail"
permalink: /kb/117/Q117270/
---

## Q117270: Named Pipe Applications Without Network Adapter Fail

	Article: Q117270
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
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
	
	When you run an application that uses named pipes as an Interprocess
	Communication (IPC) mechanism on a Windows NT computer without network support
	installed, it fails to connect to the named pipe resource either locally or
	remotely.
	
	RESOLUTION
	==========
	
	For remote named pipe resources, the system must have a physical network card
	installed. However, for local named pipe resources, you can install the
	MSLoopback adapter driver for support.
	
	MORE INFORMATION
	================
	
	MSLoopback driver provides the redirector for both the Win16 and Win32 named
	pipe applications. Windows NT provides named pipes as one of the IPC mechanisms
	for applications to share data either on the same computer or across the
	network. Named pipes are implemented as a file system. All the calls to this
	file system by WOW and Win32 resolve to the redirector. If there is no network
	adapter installed, there is no redirector available for both 32-bit and 16-bit
	applications, thus these applications fail.
	
	Additional query words: prodnt npfs np sql
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
