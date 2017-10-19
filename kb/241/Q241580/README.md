---
layout: page
title: "Q241580: H/PC Terminal Server Clients Using Too Many Licenses"
permalink: /kb/241/Q241580/
---

## Q241580: H/PC Terminal Server Clients Using Too Many Licenses

	Article: Q241580
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kbhw kbHardware
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Handheld PC (H/PC) may use multiple Universally Unique Identifiers (UUID).
	The UUIDs are created when you change the H/PC's network card or IP address.
	
	CAUSE
	=====
	
	This issue can occur if the UUID is incorrectly implemented.
	
	NOTE: The Terminal Server Client uses the OEM-provided UUID (if available) for
	licensing purposes with the server. If your H/PC incorrectly implemented UUIDs,
	the client can obtain a different UUID each time you connect to a server.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, install the latest Service Pack for Windows NT 4.0
	Terminal Server Edition
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Terminal Server 4.0.
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	Terminal Server 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
