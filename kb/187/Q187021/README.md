---
layout: page
title: "Q187021: Client Reconnects to Non-Responding Application"
permalink: kb/187/Q187021/
---

## Q187021: Client Reconnects to Non-Responding Application

	Article: Q187021
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
	
	If a user disconnects, either by choice or otherwise, the processes and all
	virtual memory space remain mapped to that users session ID. When the user logs
	back on, his or her domain/username is associated with the original session ID,
	which reconnects the user to his or her existing session, no matter what state
	that session was in when he or she disconnected.
	
	For the user to establish a new session ID, log on to the Terminal Server as an
	Administrator and open the Terminal Server Administration console. Right-click
	that user's RPD-TCP connection and select Reset. This will force the client to
	be disconnected from the Terminal Server. After the client logs back on, he or
	she will have a new session established, which does not contain the application
	that is not responding.
	
	SYMPTOMS
	========
	
	If you are in remote session running a single application, the application stops
	responding (hangs), and the client is disconnected, when the client reconnects,
	it will go right back to the session that was not responding.
	
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
	
