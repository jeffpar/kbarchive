---
layout: page
title: "Q132806: Persistent Connections Not Preserved on Upgrade"
permalink: /kb/132/Q132806/
---

## Q132806: Persistent Connections Not Preserved on Upgrade

	Article: Q132806
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
	
	When you upgrade to Windows 95 and the Microsoft Client for Microsoft Networks
	from the Microsoft LAN Manager 2.2 client, persistent connections are no longer
	made at startup.
	
	CAUSE
	=====
	
	Persistent connections in LAN Manager 2.2 are stored in a format not recognized
	by Windows 95.
	
	RESOLUTION
	==========
	
	Make a note of all persistent connections before you upgrade, or view the
	contents of the Lmuser.ini file after setup. After you upgrade, re- establish
	these connections manually and check the Reconnect At Logon check box to make
	the connections persistent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: lanman drive mappings
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
