---
layout: page
title: "Q194171: App Request UDP Only, &quot;Netstat -an&quot; Displays TCP and UDP"
permalink: kb/194/Q194171/
---

## Q194171: App Request UDP Only, &quot;Netstat -an&quot; Displays TCP and UDP

	Article: Q194171
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Winsock applications can specify what UDP ports they listen on. You can use the
	NETSTAT utility with the -an option to display the status of a socket. However,
	NETSTAT -an may display both UDP and TCP listening on the same socket when only
	UDP is bound to the socket.
	
	  NETSTAT [-a] [-n]
	
	   -a  Displays all connections and listening ports. Server-side
	       connections are normally not shown.
	
	   -n  Displays addresses and port numbers in numerical form.
	
	CAUSE
	=====
	
	This behavior does not affect socket connections, but is simply a display.
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
