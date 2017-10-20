---
layout: page
title: "Q177420: Rcmd.exe Err Msg: Failed to Connect"
permalink: /kb/177/Q177420/
---

## Q177420: Rcmd.exe Err Msg: Failed to Connect

{% raw %}

	Article: Q177420
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Remote Command Service (RCMD), Rcmd.exe, from the Windows NT
	Resource Kit, to connect to a computer running Windows NT, you may receive one
	or more of the following errors:
	
	  Error - Failed to connect <\\server>, system not found or service not
	  active
	
	-or-
	
	  Error - Failed to connect to <\\w.x.y.z>, system not found or service
	  not active
	
	where \\server is the NetBIOS name of the RCMD server and w.x.y.z is the IP
	address of the RCMD server.
	
	For more information on RCMD, see the following article in the Microsoft
	Knowledge base:
	
	ARTICLE-ID: Q151519
	TITLE : Resource Kit Utility Provides Remote Command Execution
	
	CAUSE
	=====
	
	The above error messages may be caused by one or more of the following reasons:
	
	- RemoteCMD Server Service is not installed or the RCMDSVC Daemon (server
	  service) is not running on the server <\\server> or <\\w.x.y.z>.
	
	  -or-
	
	- The user who uses the RCMD command is a member of 15 or more global groups.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- To verify that your Remote Command Server Service is installed correctly,
	  refer to the following article in the Microsoft Knowledge base:
	
	  ARTICLE-ID: Q151519
	  TITLE : Resource Kit Utility Provides Remote Command Execution
	
	  -or-
	
	- Reduce the number of global groups to which you belong. For more information,
	  see the following article in the Microsoft Knowledge base:
	
	  ARTICLE-ID: Q150108
	  TITLE : User in 15 or More Groups Can t Connect to RCMD Service
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
