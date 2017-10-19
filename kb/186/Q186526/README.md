---
layout: page
title: "Q186526: Terminal Server Commands: KILL"
permalink: /kb/186/Q186526/
---

## Q186526: Terminal Server Commands: KILL

	Article: Q186526
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
	
	KILL is a utility from the Windows NT Server Resource Kit. It terminates a
	process.
	
	Syntax
	------
	
	kill [processID] [/server:servername] [/v] [/?]
	
	kill [pattern] [/server:servername] [/id:logonid] [/a] [/v] [/?]
	
	Parameters
	----------
	
	processID
	
	  Identifies a process.
	
	pattern
	
	  Identifies a pattern.
	
	/server:servername
	
	  Specifies the Terminal Server containing the process to be terminated.
	  Otherwise, the current Terminal Server is used.
	
	/id: logonid
	
	  Specifies a session on the Terminal Server containing the process to be
	  terminated.
	
	/a (all)
	
	  Specifies all sessions on the Terminal Server.
	
	/v (verbose)
	
	  Displays information about the actions being performed.
	
	/? (help)
	
	  Displays the syntax for the command and information about the command's
	  options.
	
	Security Restrictions
	---------------------
	
	You can use kill only to terminate processes belonging to you, unless you have
	security classification to terminate processes belonging to other users.
	Administrators have full access to all kill functions.
	
	KILL -- Additional Notes
	------------------------
	
	If no process ID is specified, kill displays an error message. When all processes
	running in a session terminate, the session also terminates.
	
	KILL -- Examples
	----------------
	
	To kill process 8, type:
	
	  " kill 8 " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
