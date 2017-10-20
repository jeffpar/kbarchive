---
layout: page
title: "Q148802: Microsoft Windows 95 Telnet Has Buffer Limitation of 2180"
permalink: /kb/148/Q148802/
---

## Q148802: Microsoft Windows 95 Telnet Has Buffer Limitation of 2180

{% raw %}

	Article: Q148802
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enter a buffer size of greater than 2180 in the Terminal Preferences
	dialog box in Telnet, one of the following symptoms may occur:
	
	- The Telnet window is reduced to a title bar only.
	
	- Telnet is minimized to a button on the taskbar and cannot be restored or
	  maximized.
	
	Quitting Telnet and restarting it does not resolve the problem.
	
	RESOLUTION
	==========
	
	To gain access to Telnet again, follow these steps:
	
	1. While the current Telnet session is active, press ALT+T.
	
	2. Click Preferences, or press ALT+P.
	
	3. Change the buffer size to a value less than 2180, and then click OK.
	
	4. Click Exit on the Connect menu, and then restart Telnet.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: unix connect
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
