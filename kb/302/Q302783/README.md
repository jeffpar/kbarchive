---
layout: page
title: "Q302783: Launching Internet Explorer Does Not Launch MSN Explorer Dialer"
permalink: /kb/302/Q302783/
---

## Q302783: Launching Internet Explorer Does Not Launch MSN Explorer Dialer

{% raw %}

	Article: Q302783
	Product(s): The Microsoft Network
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Install MSN Explorer 6.0 and go through Setup using the MSN Internet Access
	dialer (this will be the first option listed when the connections are
	displayed). After you have completed Setup successfully, you quit MSN Explorer,
	and then start Internet Explorer. In some cases, the MSN Explorer dialer does
	not launch
	
	CAUSE
	=====
	
	If the default Internet connection is set to something other than the MSN
	Explorer dialer, then the MSN Explorer dialer will not be launched.
	
	RESOLUTION
	==========
	
	To force the MSN Explorer dialer to launch when you start Internet Explorer, set
	the MSN Explorer as the default Internet connection for your computer. After
	this is done, when you start Internet Explorer the MSN Explorer dialer will also
	start.
	
	Note: This is not an issue with MSN Explorer 6.1 and higher.
	
	To set the MSN Explorer as the default Internet connection for your computer
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Internet Options icon (for Windows Millenium and Windows
	  2000, you may have to click the Display all Control Panel options link to
	  display this icon).
	
	3. At the top of the Internet Properties window click the Connection tab.
	
	4. Click Dial whenever a network connection is not present.
	
	5. Under Dial-up settings, select the MSN Explorer connection.
	  Note: For co-branded versions of MSN Explorer, this connection may be named
	  differently (Dellnet by MSN for the DellNet branded version of Explorer).
	
	6. Click the Set Default button.
	
	7. At the bottom of the window, click the Apply button, and then click the OK
	  button.
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN610 kbMSNExplorer
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
