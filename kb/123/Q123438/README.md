---
layout: page
title: "Q123438: Cannot Launch FTP Batch File and Have Interactive Session"
permalink: kb/123/Q123438/
---

## Q123438: Cannot Launch FTP Batch File and Have Interactive Session

	Article: Q123438
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Microsoft TCP/IP protocol (from either Windows NT 3.5 or TCP/IP- 32),
	you can't launch FTP from a batch file and use it interactively.
	
	CAUSE
	=====
	
	Some implementations of Berkeley's FTP client give you the ability to launch FTP
	from I/O redirection and then use FTP interactively. Microsoft's implementation
	of FTP does not support this functionality.
	
	Windows NT 3.5 and TCP/IP-32 use batch files on the command line with the - S
	switch. When the script finishes, FTP exits.
	
	Additional query words: prodtcp32 wfw wfwg prodnt 3.11
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311
	Version           : 3.50
	
	=============================================================================
	
