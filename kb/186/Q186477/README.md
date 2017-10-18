---
layout: page
title: "Q186477: Terminal Server Commands: LOGOFF"
permalink: kb/186/Q186477/
---

## Q186477: Terminal Server Commands: LOGOFF

	Article: Q186477
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	LOGOFF
	
	terminates the session.
	
	Syntax
	------
	
	logoff [sessionID] [/server:servername] [/v] [/?]
	
	logoff [sessionname] [/server:servername] [/v] [/?]
	
	Parameters
	----------
	
	sessionID
	
	Specifies the ID of the session.
	
	sessionname
	
	Identifies the name of the session. The name was created by the system
	administrator when the session was configured.
	
	/server:servername
	
	Specifies the Terminal Server containing the user session from which you want to
	log off. Otherwise, the current Terminal Server is used.
	
	/v (verbose)
	
	Displays information about the actions being performed.
	
	/? (help)
	
	Displays the syntax for the command and information about the command's options.
	
	Security Restrictions
	---------------------
	
	You can always log off from the session where you are currently logged on. You
	must have logoff access permission to log off other sessions.
	
	LOGOFF -- Additional Notes
	--------------------------
	
	It is recommended that you terminate your session by switching to each program
	and ending the program normally. This allows each program to terminate without
	losing any data.
	
	If no ID or name for the session is specified, logoff terminates the current
	session. If you specify the name of the session, it must identify an active
	session.
	
	LOGOFF -- Examples
	------------------
	
	To terminate the current session, type:
	
	logoff
	
	To terminate session 12, type:
	
	logoff 12
	
	To terminate session TERM04 on server WF12, type:
	
	logoff TERM04 /server:WF12
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
