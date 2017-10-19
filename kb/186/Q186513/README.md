---
layout: page
title: "Q186513: Terminal Server Commands: DISCONN"
permalink: /kb/186/Q186513/
---

## Q186513: Terminal Server Commands: DISCONN

	Article: Q186513
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
	
	DISCONN disconnects a session.
	
	Syntax
	------
	
	disconn [sessionname] [/server:servername] [/v] [/?]disconn [sessionID]
	[/server:servername] [/v] [/?]
	
	Parameters
	----------
	
	sessionname
	Identifies the session. The name was created by the system administrator when the
	session was configured.
	
	sessionID
	Specifies the ID of a session.
	
	/server:servername
	Specifies the Terminal Server. Otherwise, the current Terminal Server is used.
	
	/v (verbose)
	Displays information about the actions being performed.
	
	/? (help)
	Displays the syntax for the command and information about the command's options.
	
	DISCONN -- Additional Notes
	---------------------------
	
	If no ID or name for the session is specified, disconn uses the current session
	ID. If you specify the name of the session, it must identify an active session.
	
	Any processes associated with the session ID continue to run in the background.
	DISCONN is not the same as logoff, which terminates all processes associated
	with the session ID. Sessions running at the system console cannot be
	disconnected.
	
	DISCONN -- Examples
	-------------------
	
	To disconnect the current session, type:
	disconn
	
	To disconnect from a specific session, for example session 10, type:
	disconn 10
	
	To disconnect from the session TERM04, type:
	disconn TERM04
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
