---
layout: page
title: "Q192164: Home Directories Are Created with Incorrect Permissions"
permalink: /kb/192/Q192164/
---

## Q192164: Home Directories Are Created with Incorrect Permissions

{% raw %}

	Article: Q192164
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): TSESP4Fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select multiple users in User Manager for Domains on Terminal Server
	and select Properties/Profile/Terminal Server Home Directory/ Connect X: to
	\\SERVERNAME\SHARE\%USERNAME%, after you click OK, the user's home directories
	are created with incorrect permissions. The user's home directories will have
	Everyone - Full Control and System - Full Control.
	
	CAUSE
	=====
	
	An administrator currently must manually change permissions on user's home
	directories created this way. This problem only appears when multiple users are
	selected, not when selecting an individual user.
	
	RESOLUTION
	==========
	
	If users home directories are created individually, permissions will be set
	correctly. The user's home directories will have Administrators - Special
	Access, System - Full Control, and %username% - Full Control. To resolve this
	problem, obtain the latest service pack for Windows NT Server 4.0, Terminal
	Server Edition. For additional information, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: home directory permissions termserv
	
	======================================================================
	Keywords          : TSESP4Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
