---
layout: page
title: "Q186480: Terminal Server Commands: MSG"
permalink: /kb/186/Q186480/
---

## Q186480: Terminal Server Commands: MSG

	Article: Q186480
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
	
	MSG sends a message.
	
	Syntax
	------
	
	msg [username] [/server:servername] [/time:seconds] [/v] [/w] [/?]
	[message]msg [sessionname] [/server:servername] [/time:seconds] [/v] [/w]
	[/?] [message]msg [sessionID] [/server:servername] [/time:seconds] [/v]
	[/w] [/?] [message]msg [@filename] [/server:servername] [/time:seconds]
	[/v] [/w] [/?] [message]msg * [/server:servername] [/time:seconds] [/v]
	[/w] [/?] [message]
	
	Parameters
	----------
	
	username
	Identifies the user.
	
	sessionname
	Identifies the name of the session. The name was created by the system
	administrator when the session was configured.
	
	sessionID
	Specifies the ID of the session.
	
	filename
	Identifies a file containing a list of usernames, sessionnames, and sessionIDs to
	which to send the message.
	
	message (message string)
	The text of the message you want to send. If no message is entered, standard
	input (STDIN) is read for the message.
	
	/server:servername
	Allows the Terminal Server to be specified. Otherwise, the current Terminal
	Server is used.
	
	/time:seconds (time delay)
	Sets the amount of time you must wait before you receive confirmation from the
	target session that the message has been received.
	
	/w (wait)
	Wait for a response from the target user(s).
	
	/v (verbose)
	Displays information about the actions being performed.
	
	/? (help)
	Displays the syntax for the command and information about the command's options.
	
	Security Restrictions
	---------------------
	
	The user must have Message access permission for the session.
	
	MSG -- Additional Notes
	-----------------------
	
	If no user or session is specified, msg displays an error message. If the you
	specify the name of a session, it must identify an active session. Wildcards may
	be used for parameters. If a single wildcard is present (*), it specifies all
	users in the system.
	
	MSG -- Examples
	---------------
	
	To send the message titled Falafel? to all sessions for user MIKES, type:
	msg MIKES Falafel?
	
	To send a message to session MODEM02, type:
	msg modem02 Let's meet at 1PM today
	
	To send a message to session 12, type:
	msg 12 Call John at 11:00
	
	To send a message to all sessions contained in the file USERLIST, type:
	msg @userlist Logout because your session will be reset
	
	To send the text in the file MSG.DAT as a message to all sessions for username
	TERRYJ, type:
	msg TerryJ < MSG.DAT
	
	To send a message to all logged-on users, type:
	msg * Meeting in 5 minutes
	
	To send the message to all users, with an acknowledgment timeout of 10 seconds,
	type:
	msg * /TIME:10 Coffee break!?!
	
	NOTE: Messages do not queue on the Client screen. It may be useful to use the
	TIME: parameter so initial messages will expire and be replaced by new messages.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
