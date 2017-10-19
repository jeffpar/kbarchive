---
layout: page
title: "Q186616: Terminal Server Client Error 13D at Logon"
permalink: /kb/186/Q186616/
---

## Q186616: Terminal Server Client Error 13D at Logon

	Article: Q186616
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on using the Terminal Server Client, you may get an error
	message:
	
	  Logon Message: The system can not log you on (13D). Please try again or
	  consult your system administrator.
	
	RESOLUTION
	==========
	
	This error message means that you do not have permission to log on. The
	administrator has limited or denied your access in Terminal Server Connection
	Configuration.
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Terminal Server Connection Configuration.
	
	2. Click the connection object with the restricted permissions.
	
	3. On the Security menu, click Permissions. The minimum permissions needed to
	  connect is "Guest."
	
	Additional query words: cannot
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Issue type        : kbprb
	
	=============================================================================
	
