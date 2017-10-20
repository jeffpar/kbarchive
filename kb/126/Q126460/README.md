---
layout: page
title: "Q126460: Cannot Connect to NRN Server with Dial-Up Networking"
permalink: /kb/126/Q126460/
---

## Q126460: Cannot Connect to NRN Server with Dial-Up Networking

{% raw %}

	Article: Q126460
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun msnets kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot connect to a NetWare Remote Network (NRN) server with Dial-Up
	Networking. The modem usually drops the connection while you are entering your
	user name and password.
	
	CAUSE
	=====
	
	This problem is caused by the NRN server's inability to recognize compression or
	error correction by the modem.
	
	RESOLUTION
	==========
	
	To work around this problem, you must use a modem that can turn off these
	features. To turn these features off, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Modems icon.
	
	3. Click your modem and then click the Properties button.
	
	4. Click the Connection tab.
	
	5. Click the Advanced button.
	
	6. Click the Use Error Control check box to clear it. (NOTE: If this check box
	  is unavailable, your modem does not support these features.)
	
	7. Click the OK button.
	
	Additional query words: access disconnect wwt
	
	======================================================================
	Keywords          : dun msnets kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
