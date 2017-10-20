---
layout: page
title: "Q187183: RDP Client Hangs If the Network Is Unavailable"
permalink: /kb/187/Q187183/
---

## Q187183: RDP Client Hangs If the Network Is Unavailable

{% raw %}

	Article: Q187183
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When network connectivity is not available and the Microsoft Terminal Server
	Client (MSTSC) utility is connected, the computer may stop responding (hang) for
	approximately two minutes when you disconnect the MSTSC utility.
	
	CAUSE
	=====
	
	The MSTSC utility displays the Connect dialog box and makes a NetServerEnum call
	to enumerate the servers. Before the enumeration completes, if you click Cancel
	or press ESC, the dialog box disappears. But the MSTSC utility waits for the
	NetServerEnum call to complete before terminating its process. This process may
	take as long as two minutes. If you wait for the NetServerEnum call to complete
	before pressing ESC, the process terminates immediately.
	
	RESOLUTION
	==========
	
	The NetServerEnum call is a synchronous call; there is no way to cancel it to
	avoid the delay.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
