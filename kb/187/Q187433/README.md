---
layout: page
title: "Q187433: Messages Sent From TSAdmin Display While Session Is Locked"
permalink: kb/187/Q187433/
---

## Q187433: Messages Sent From TSAdmin Display While Session Is Locked

	Article: Q187433
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
	
	The messages sent by the Actions menu of Terminal Server Administration are
	always displayed at the recipient's Terminal Server Client station, even if the
	client's session has been locked by running Windows NT Security and selecting
	Lock Workstation.
	
	This can be a security problem for users who lock their sessions but do not want
	the messages sent to them to be seen by anyone else.
	
	RESOLUTION
	==========
	
	Users should choose to disconnect their sessions rather than locking their
	client session. Messages cannot be sent from the Terminal Server Administration
	utility to a disconnected session.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
