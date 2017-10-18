---
layout: page
title: "Q186598: Terminal Server Commands: RESET SESSION"
permalink: kb/186/Q186598/
---

## Q186598: Terminal Server Commands: RESET SESSION

	Article: Q186598
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
	
	RESET SESSION replaces RWINSTA from Citrix Winframe. It resets the subsystem
	hardware and software of the session to known initial values.
	
	Syntax
	------
	
	reset session sessionname [/server:servername] [/v] [/?]
	reset session sessionID [/server:servername] [/v] [/?]
	
	Parameters
	----------
	
	sessionname
	Identifies the name of the session. The name was created by the system
	administrator when the session was configured. Query session can be used to
	determine the name of the session.
	
	sessionID
	Identifies the ID of the session.
	
	/server:servername
	Specifies the Terminal Server. Otherwise, the current Terminal Server is used.
	
	/v (verbose)
	Displays additional information.
	
	/? (help)
	Displays the syntax for the command and information about the command's options.
	
	Security Restrictions
	---------------------
	
	You can always reset your session, but you must have Reset access permission to
	reset other sessions.
	
	NOTE: Users can also reset sessions of other users who log on with the same name.
	This is by design in version 4.0 of Terminal Server. To avoid this, give users
	unique logon names or deny access to the RESET SESSION utility.
	
	RESET SESSION -- Additional Notes
	---------------------------------
	
	Reset Session causes the device to close and then to reopen. Use reset session
	when the session malfunctions or when the session appears to be down. When you
	reset a session, the underlying hardware is reset and the drivers and data are
	reloaded and reinitialized.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
