---
layout: page
title: "Q186508: Terminal Server Commands: CONNECT"
permalink: kb/186/Q186508/
---

## Q186508: Terminal Server Commands: CONNECT

	Article: Q186508
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
	
	The CONNECT command connects a session to a computer you specify.
	
	Syntax
	------
	
	connect [sessionID] [/password:password] [/server:servername] [/dest:sessionname]
	[/v] [/?]
	
	connect [sessionname] [/password:password] [/server:servername]
	[/dest:sessionname] [/v] [/?]
	
	Parameters
	----------
	
	sessionID
	
	  Specifies the ID of the session.
	
	sessionname
	
	  Identifies the name of the session. The name was created by the system
	  administrator when the session was configured.
	
	/password:password
	
	  Specifies the password associated with the user of the session you want to
	  connect. It is required when the session belongs to a user that is different
	  from the current one.
	
	/dest:sessionname
	
	  Connects the session to the destination computer name you specify. If a
	  session is currently connected at the computer, it is disconnected.
	
	/server:servername
	
	  Specifies the Terminal Server to use. Otherwise, the current Terminal Server
	  is used.
	
	/v (verbose)
	
	  Displays information about the actions being performed.
	
	/? (help)
	
	  Displays the syntax for the command and information about the command's
	  options.
	
	Security Restrictions
	---------------------
	
	You can always connect to the session where you are currently logged on. To
	connect to a different session, you must have Connect access permission for the
	session.
	
	CONNECT -- Additional Notes
	---------------------------
	
	If you specify a name of a session, it must identify an active session. The /dest
	parameter allows you to connect a user's session to a different computer. The
	computer must have an active connection to the Terminal Server.
	
	If you do not specify a password in the /password parameter, and the target
	session belongs to a user that is different from the current one, connect will
	fail.
	
	Sessions disconnected from the Terminal Server cannot be connected to the
	console. Sessions running at the system console cannot be disconnected.
	
	CONNECT -- Examples
	-------------------
	
	To connect session 12 to the current Terminal Server and disconnect the current
	session, type:
	
	  "connect 12" (without the quotation marks)
	
	To connect session 23 to the current Terminal Server, using the password mypass,
	type:
	
	  "connect 23 /password:mypass" (without the quotation marks)
	
	To connect the session at computer TERM03 to computer TERM05, and then disconnect
	the session at TERM05, if any, type:
	
	  "connect TERM03 /v /dest:TERM05" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
