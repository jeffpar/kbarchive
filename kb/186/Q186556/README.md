---
layout: page
title: "Q186556: Terminal Server Commands: SHADOW"
permalink: kb/186/Q186556/
---

## Q186556: Terminal Server Commands: SHADOW

	Article: Q186556
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
	
	The SHADOW function is not built into version 4 of the Terminal Server and
	Terminal Server client. The SHADOW utility is included for use if Citrix
	Metaframe and the Citrix ICA client are used with Terminal Server, which allows
	shadowing.
	
	Shadow allows you to monitor a session of another user. All information displayed
	on the computer of the session you are shadowing also appears on your computer.
	
	Syntax
	------
	
	shadow sessionname [/server:servername] [/v] [/?] shadow sessionID
	[/server:servername] [/v] [/?]
	
	Parameters
	----------
	
	sessionname
	
	  Identifies the name of the session. The name was created by the system
	  administrator when the session was configured.
	
	sessionID
	
	  Specifies the ID of the session you want to shadow. Use query user to get a
	  list of sessions and their IDs.
	
	/server:servername
	
	  Specifies the Terminal Server to use. Otherwise, the current Terminal Server
	  is used.
	
	/v (verbose)
	
	  Displays information about the actions being performed.
	
	/? (help)
	
	  Displays the syntax for this command and information about the command's
	  options.
	
	Security Restrictions
	---------------------
	
	You must have Shadow access permission for the session you want to shadow.
	
	SHADOW -- Additional Notes
	
	Before shadowing begins, the server warns the user that the session will be
	shadowed and allows the user to confirm or deny shadowing, unless this warning
	is disabled. Use Terminal Server Connection Configuration and User Manager for
	Domains to configure shadowing for users and sessions. The shadowing session
	must be capable of supporting the video resolution used at the shadowed session.
	Otherwise, the operation fails. You cannot shadow the system console from
	another session, and you cannot shadow other sessions from the system console.
	Press CTRL+* (or whatever hotkey you define) to terminate shadowing..
	
	SHADOW -- Examples
	
	To shadow session 93, type:
	
	  "Shadow 93" (without the quotation marks)
	
	To shadow the session ACCTG01, type:
	
	  "Shadow ACCTG01" (without the quotation marks)
	
	NOTE: Shadowing is not currently supported with the Windows Terminal Server 4.0
	client. To use the Shadow function, you must use the Citrix ICA Client and the
	Terminal Server add-on from Citrix called Metaframe. If you attempt to shadow a
	session without the ICA Client and Metaframe, you will receive the following
	error:
	
	  Shadow failed. Error code 50. Error [50]: The network request is not
	  supported.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
