---
layout: page
title: "Q187136: NetDDE Error Messages During Logon"
permalink: /kb/187/Q187136/
---

## Q187136: NetDDE Error Messages During Logon

	Article: Q187136
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
	
	When you log on to Windows Terminal Server using the RDP client, you may receive
	the following error message:
	
	  NetDDE Services:
	
	  Another user or machine has the same name as this account on the network.
	  Network DDE services will not be available.
	
	CAUSE
	=====
	
	This message appears if someone else is logged on with the same user name. The
	error message means that Network Dynamic Data Exchange (NetDDE) programs, such
	as Microsoft Chat, cannot function because, if someone wants to chat with you,
	there is no way to know which user to contact.
	
	RESOLUTION
	==========
	
	Log on to each computer with a unique user name.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The NetDDE service on Terminal Server registers with the user name instead of
	the computer name. This is necessary because all network clients that use the
	Terminal Server will have the same computer name.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
