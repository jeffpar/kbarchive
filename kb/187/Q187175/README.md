---
layout: page
title: "Q187175: Network Error Message When Maximum Connection Limit Exceeded"
permalink: /kb/187/Q187175/
---

## Q187175: Network Error Message When Maximum Connection Limit Exceeded

	Article: Q187175
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
	
	When you connect to a Terminal Server that is at its maximum number of
	connections allowed, you may receive the following error message:
	
	  Because of a network error, the session will be disconnected. Please try to
	  reconnect.
	
	CAUSE
	=====
	
	The host has exceeded the maximum number of connections available. When a
	Terminal Server exceeds its maximum network connection limit, an event is logged
	so that the administrator knows why the network client was rejected. The network
	client will receive the above error message.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: misleading too many
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
