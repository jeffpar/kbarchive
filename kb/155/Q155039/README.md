---
layout: page
title: "Q155039: Foreground Program Unavailable During Scheduled Connection"
permalink: /kb/155/Q155039/
---

## Q155039: Foreground Program Unavailable During Scheduled Connection

	Article: Q155039
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a scheduled Microsoft Exchange connection starts, you cannot access the
	program in the foreground until the connection dialog box closes.
	
	NOTE: You can switch to programs other than the foreground program while the
	connection dialog box is present.
	
	CAUSE
	=====
	
	The Microsoft Exchange connection uses a modal dialog box and switches the
	window focus from the foreground program to the connection dialog box. The focus
	cannot be switched back to the foreground program until one of the following
	items occurs:
	
	- The downloading of Internet mail finishes normally.
	
	- You click Cancel to terminate the downloading operation.
	
	RESOLUTION
	==========
	
	To switch back to the foreground program, use either of the following methods:
	
	- Let the Internet mail finish downloading.
	
	- Click Cancel to terminate the downloading operation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: ras dun dialup networking
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
