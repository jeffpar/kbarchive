---
layout: page
title: "Q152487: Rcmd.exe Err Msg: Error 123 Failed to Connect to &#92;&#92;&#92;&#92;Servername"
permalink: kb/152/Q152487/
---

## Q152487: Rcmd.exe Err Msg: Error 123 Failed to Connect to &#92;&#92;&#92;&#92;Servername

	Article: Q152487
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
	you may receive the following error message:
	
	  Failed to connect to <\\\\servername>, Error = 123
	
	CAUSE
	=====
	
	This error message may appear because, while in an interactive multisession, you
	entered the server name with leading backslashes.
	
	RESOLUTION
	==========
	
	When in interactive multisession mode, RCMD prompts for the server name on which
	to run a remote command and expects only the NetBIOS name of the server without
	the leading backslashes.
	
	For more information on the proper usage for Rcmd.exe, type the following at a
	command prompt and press ENTER:
	
	" rcmd /? " (without the quotation marks)
	
	For more information on RCMD, see the following article in the Microsoft
	knowledge base:
	
	Q151519Resource Kit Utility Provides Remote Command Execution
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
