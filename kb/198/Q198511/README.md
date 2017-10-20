---
layout: page
title: "Q198511: Error 629 with ISDN Multilink"
permalink: /kb/198/Q198511/
---

## Q198511: Error 629 with ISDN Multilink

{% raw %}

	Article: Q198511
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting to a RAS server using multilink ISDN, you get the following
	error message when trying to bring up the second ISDN channel:
	
	  Error 629: the data link has been terminated by the remote machine
	
	The second ISDN channel fails to come up. The first ISDN channel continues to
	work, but the connection speed is only 64 Kbps.
	
	CAUSE
	=====
	
	Multilink is not enabled on the RAS server. Multilink needs to be enabled on
	both the RAS server and the RAS client.
	
	RESOLUTION
	==========
	
	To work around this problem, enable multilink on the RAS server:
	
	1. In Control Panel, double-click Network.
	
	2. On the Services tab, select Remote Access Service and then click Properties.
	
	3. Select the ISDN adapter, click Network, and then click Enable Multilink.
	
	4. Restart the RAS server.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
