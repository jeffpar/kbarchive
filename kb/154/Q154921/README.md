---
layout: page
title: "Q154921: Telnet Icon Missing from Accessories Menu"
permalink: kb/154/Q154921/
---

## Q154921: Telnet Icon Missing from Accessories Menu

	Article: Q154921
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add the TCP/IP protocol to your Windows NT 4.0-based workstation under
	one user logon ID, the Telnet icon does not appear on the Accessories menu when
	another user logs on to the workstation.
	
	CAUSE
	=====
	
	The configuration of the Accessories menu is specific to each user. If the
	TCP/IP protocol is installed by one user, the Telnet icon is added to the
	Accessories menu only for that user.
	
	RESOLUTION
	==========
	
	To make the Telnet icon and other icons available to all users of the
	workstation, add the icons to a common folder. You can move the Telnet icon to
	the common folder, or create a new shortcut for Telnet in the common folder. For
	information about creating a common folder, please see the following article in
	the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q154808
	  TITLE : How to Create a Common Folder in Windows NT 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
