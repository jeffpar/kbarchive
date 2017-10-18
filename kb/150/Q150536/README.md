---
layout: page
title: "Q150536: Rcmd.exe Err Msg: Error 53 Failed to Connect to Server"
permalink: kb/150/Q150536/
---

## Q150536: Rcmd.exe Err Msg: Error 53 Failed to Connect to Server

	Article: Q150536
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Windows NT Resource Kit utility Remote Command Service (RCMD),
	you may receive the following error message:
	
	  Failed to connect to <\\servername>, Error = 53
	
	where servername is the NetBIOS name of the server on which you are attempting to
	execute a command.
	
	CAUSE
	=====
	
	This error may occur when RCMD cannot communicate with the destination server.
	
	RESOLUTION
	==========
	
	The above error equates to the common networking error 53, "The network path was
	not found." To resolve this issue, you will need to verify connectivity to the
	server. Depending on what networking protocols are in use on your network, this
	may involve hardware issues as well as high-level issues, such as name
	resolution.
	
	For more information, see the following articles in the Microsoft Knowledge
	base:
	
	Q151519Resource Kit Utility Provides Remote Command Execution
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
