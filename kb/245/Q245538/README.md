---
layout: page
title: "Q245538: &quot;STOP 0x0000000A&quot; Error Message While Using Rcmdsvc.exe"
permalink: /kb/245/Q245538/
---

## Q245538: &quot;STOP 0x0000000A&quot; Error Message While Using Rcmdsvc.exe

	Article: Q245538
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 11-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Remote Command Service utility (Rcmdsvc.exe) from the
	Microsoft Windows NT 4.0 Resource Kit, you may receive a "Stop 0x0000000A in
	Ntoskrnl.exe" error message, similar to either of the following error messages:
	
	  0x0000000A (0xC0503000, 0x00000002, 0x00000000, 0x8012FAE3)
	
	  -or-
	
	  0x0000000A (0xC0503000, 0x00000002, 0x00000000, 0x8012FB49)
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the Remote Command Service utility.
	
	
	MORE INFORMATION
	================
	
	The Remote Command Service (Rcmd.exe) provides a secure, stable way to remotely
	administer and run command-line programs.
	
	The Remote Command Service consists of client and server components. The client
	component is a command-line program, Rcmd.exe. The server component,
	Rcmdsvc.exe, is installed and run as a service. That is, you can stop and start
	it remotely through the Control Panel Network application or locally through the
	net start and net stop commands. Because it is a service, it runs whenever the
	system is running if you configure it for automatic startup, whether or not a
	user is locally logged on.
	
	A client connection to the server creates a command session, or 'virtual
	console'. It is not visible on the desktop and does not in any way interfere
	with it. Up to 10 clients can be simultaneously connected to the remote command
	server on a computer, all operating securely and independently of each other.
	
	For more information on the Remote Command Service and its use, please consult
	the Microsoft Windows NT Server 4.0 Resource Kit documentation.
	
	
	Additional query words: rcmd exe
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
