---
layout: page
title: "Q134964: Rcmd.exe Err Msg: Error 3 Failed to Connect to Server"
permalink: /kb/134/Q134964/
---

## Q134964: Rcmd.exe Err Msg: Error 3 Failed to Connect to Server

{% raw %}

	Article: Q134964
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
	
	When you attempt to use the Windows NT Resource Kit utility Remote Command
	Service (RCMD), you may receive one of the following error messages:
	
	  Failed to connect to <servername>, Error = 3
	
	  -or-
	
	  Failed to connect to <IP address>, Error = 3
	
	where <servername> and <IP address> refer to the server on which you
	are attempting to execute a command.
	
	CAUSE
	=====
	
	The command line that you specified may be incorrect. The servername must have
	the preceding backslashes, for example:
	
	  rcmd \\servername
	
	RESOLUTION
	==========
	
	For more information on the proper usage for Rcmd.exe, type the following at a
	command prompt and press ENTER:
	
	  rcmd /?
	
	For more information on RCMD, see the following article in the Microsoft
	Knowledge base:
	
	  ARTICLE-ID: Q151519
	  TITLE : Resource Kit Utility Provides Remote Command Execution
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
