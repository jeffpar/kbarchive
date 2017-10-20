---
layout: page
title: "Q187442: Unable to Create a New Session"
permalink: /kb/187/Q187442/
---

## Q187442: Unable to Create a New Session

{% raw %}

	Article: Q187442
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
	
	A user may log on from a computer where the user connects to the Windows
	Terminal Server with a login name of GUEST, and then disconnects. On a computer
	other than the first, a different user connects to the same Windows Terminal
	Server with same login name GUEST. The second user is reconnected to the
	previously disconnected session opened by the first user.
	
	CAUSE
	=====
	
	This problem is caused by a specific setting in the Terminal Connection
	Configuration utility.
	
	RESOLUTION
	==========
	
	This behavior is a feature that may be turned off or on in the Terminal Server
	Connection Configuration utility. By selecting the Advanced tab in Terminal
	Server Connection Configuration, you can set the default option. While on this
	menu, in the "On a broken or timeout session" drop down menu, you can choose to
	either disconnect or reset the session. Select reset, and new connections may be
	made under the same user name.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
