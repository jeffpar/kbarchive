---
layout: page
title: "Q151362: Rcmd.exe Err Msg: Failed to Connect Error 1326"
permalink: kb/151/Q151362/
---

## Q151362: Rcmd.exe Err Msg: Failed to Connect Error 1326

	Article: Q151362
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Windows NT Resource Kit utility Remote Command Service (RCMD),
	you may receive one of the following error messages:
	
	  Failed to connect to <\\servername>, Error = 1326
	
	-or-
	
	  Failed to connect to <\\IP address>, Error = 1326
	
	CAUSE
	=====
	
	The above error indicates that there has been a logon failure to the server.
	
	RESOLUTION
	==========
	
	To resolve this issue, first establish a secure channel to the server by
	connecting to the Inter-Process Communication share (IPC$) by typing the
	following at a command prompt and pressing ENTER:
	
	  "net use \\<servername>\ipc$ /user:<domain>\<username>"
	  (without the quotation marks)
	
	In the above example, <servername> is the server on which you are
	attempting to run a command remotely. <Domain>\<username> must be a
	user account that has administrative rights on the target server.
	
	For more information on RCMD, see the following article in the Microsoft
	knowledge base:
	
	Q151519Resource Kit Utility Provides Remote Command Execution
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
