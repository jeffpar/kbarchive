---
layout: page
title: "Q187443: Unable to Reconnect at Maximum Number of Sessions"
permalink: /kb/187/Q187443/
---

## Q187443: Unable to Reconnect at Maximum Number of Sessions

	Article: Q187443
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	The Maximum Connection Count defines the number of active (connected) sessions.
	Disconnected sessions do not belong to any connection type. While disconnected,
	it does not make sense to charge the session against any connection type. If the
	desire is to prevent a large number of disconnected sessions, disconnect-access
	can be restricted, or you can set the disconnect timeout to a small value (this
	is the time during which a session can remain disconnected before a reset is
	forced). However, disconnected sessions are typically not doing any active work,
	thus their CPU usage is usually zero, and their physical memory use will shrink
	toward zero as they are paged out over a short time because pages are not
	referenced.
	
	
	SYMPTOMS
	========
	
	When you attempt to connect to a previously disconnected session and you reached
	the maximum number of sessions, you may receive the following error message:
	
	  The Terminal Server has ended the connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0,
	Terminal Server Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
