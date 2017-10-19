---
layout: page
title: "Q175952: NETSTAT Displays a LISTENING Port with IP Address 0.0.0.0"
permalink: /kb/175/Q175952/
---

## Q175952: NETSTAT Displays a LISTENING Port with IP Address 0.0.0.0

	Article: Q175952
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you carry out the command netstat -an, you may receive a display that shows
	an IP address of 0.0.0.0 in LISTENING status similar to the following:
	
	  TCP   0.0.0.0:110   0.0.0.0:0   LISTENING
	
	NOTE: The normal, or expected, behavior is to have your local computer's IP
	address listed instead of 0.0.0.0.
	
	CAUSE
	=====
	
	The Winsock application that is listening on the designated port was written so
	that it binds to any local IP address by using INADDR_ANY. This means that the
	application will listen to all local interfaces and you can connect to the port
	of any of them. This is why netstat -an shows IP address 0.0.0.0 listening on
	the port.
	
	MORE INFORMATION
	================
	
	This is by design. However, if you do not want the Winsock application to listen
	to all local interfaces, it must be designed to bind to a specific IP address.
	Netstat.exe will then show a local IP address in LISTENING status.
	
	NOTE: Netstat.exe began displaying TCP ports that are in LISTENING state with
	Windows NT 4.0 Service Pack 3.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
