---
layout: page
title: "Q187139: Difficult to Determine Who Is Connected to a Terminal Server"
permalink: kb/187/Q187139/
---

## Q187139: Difficult to Determine Who Is Connected to a Terminal Server

	Article: Q187139
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect a network client to a Terminal Server, the title bar in the
	network client window includes the Terminal Server name you are connected to.
	When multiple connections exist, you can locate each of them by looking at the
	title bars. However, it may not be easy to determine from your multiple client
	windows which user is connected on each server.
	
	CAUSE
	=====
	
	The username information is not available to the client software. Also, the
	title is rearranged to show the server name first, so, if you connect to
	different servers, you can locate the correct one using the server name.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
