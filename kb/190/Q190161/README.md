---
layout: page
title: "Q190161: TCP/IP Device Driver Doesn't Remember Endpoint Share Flags"
permalink: /kb/190/Q190161/
---

## Q190161: TCP/IP Device Driver Doesn't Remember Endpoint Share Flags

{% raw %}

	Article: Q190161
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
	
	The TCP/IP device driver used in Windows NT and in Terminal Server does not
	remember share flags of previously opened endpoints. Even if the previous
	endpoint is opened exclusively, another application can open the same endpoint
	with share flags, and capture all network traffic.
	
	The problem is in TCP/IP and is applicable to all variants of Windows NT,
	including Terminal Server.
	
	RESOLUTION
	==========
	
	There is no resolution at this time.
	
	STATUS
	======
	
	A fix should be available for Windows NT 4.0 in Service Pack 4. It has not yet
	been determined if that fix will be applicable to Terminal Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
