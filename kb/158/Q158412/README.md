---
layout: page
title: "Q158412: Cannot Install MSN with Proxy Server Set Up"
permalink: /kb/158/Q158412/
---

## Q158412: Cannot Install MSN with Proxy Server Set Up

{% raw %}

	Article: Q158412
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5,95
	Operating System(s): 
	Keyword(s): kbsetup kbmsnkbfaq
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the new MSN, The Microsoft Network, you may receive
	the following error message:
	
	  Could not connect to download server, or could not complete the download.
	  Setup is not complete; you must run Setup again to complete the installation.
	
	CAUSE
	=====
	
	This behavior can occur if you have Microsoft Internet Explorer configured to
	connect using a proxy server.
	
	RESOLUTION
	==========
	
	To resolve this behavior, configure Internet Explorer to not use a proxy server.
	To do so, follow these steps:
	
	1. Right-click the Internet Explorer icon on the desktop, and then click
	  Properties.
	
	2. Click the Connection tab.
	
	3. Click the "Access the Internet using a proxy server" check box to clear it.
	
	4. Click OK.
	
	You can now install MSN.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbsetup kbmsn kbfaq
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN200 kbMSN250
	Version           : WINDOWS:2.0,2.5,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
