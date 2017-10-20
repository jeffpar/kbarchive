---
layout: page
title: "Q187447: Unlocking a Computer with an Admin Account Shuts Down Computer"
permalink: /kb/187/Q187447/
---

## Q187447: Unlocking a Computer with an Admin Account Shuts Down Computer

{% raw %}

	Article: Q187447
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you unlock a workstation during a Remote Desktop Protocol (RDP) client
	session) by providing an administrator name and password, the station is logged
	off and there is no new session for the administrator.
	
	MORE INFORMATION
	================
	
	When you unlock a session as administrator, you are presented with a dialog that
	states, "This will log off the current user. Any unsaved work will be lost." If
	you select OK, the dialog disappears. After about one minute, the client shuts
	down.
	
	
	RESOLUTION
	==========
	
	This behavior is by design. When the current user is logged off, this shuts down
	the client.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
