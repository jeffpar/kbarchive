---
layout: page
title: "Q172611: FTP Client Fails to Suppress Remote Server Responses Using -V"
permalink: /kb/172/Q172611/
---

## Q172611: FTP Client Fails to Suppress Remote Server Responses Using -V

{% raw %}

	Article: Q172611
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the File Transfer Protocol (FTP) client with the -v command-line
	option, the remote server responses may display even though they are supposed to
	be suppressed.
	
	CAUSE
	=====
	
	When using redirected input to the FTP command line, verbose mode has a default
	setting of OFF. In this scenario, the -v parameter toggles verbose mode to a
	setting of ON.
	
	RESOLUTION
	==========
	
	The only known workaround for this issue is to use separate commands for your
	processes. For example, when you need to execute the FTP client with redirected
	input, then do not use the -v parameter. When you need to execute the FTP client
	without the redirected input, then use the -v parameter to suppress the remote
	server responses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
