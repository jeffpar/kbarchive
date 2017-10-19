---
layout: page
title: "Q138742: NetWare Drive Mappings Lost After Resuming from Suspended Mode"
permalink: /kb/138/Q138742/
---

## Q138742: NetWare Drive Mappings Lost After Resuming from Suspended Mode

	Article: Q138742
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Client for NetWare Networks, any active network
	drives mapped to NetWare servers may be lost when you suspend your computer and
	then resume from suspended mode. If you are using the Microsoft Client for
	Microsoft Networks, mapped drives are not lost.
	
	CAUSE
	=====
	
	The Microsoft Client for NetWare Networks does not retain NetWare drive mappings
	when you suspend the computer.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- If you manually mapped the network drives, map them again.
	
	- If the drives were mapped in a login script, you can restore them by
	  processing the login script again. To do so, click the Start button, click
	  Shut Down, and then click "Close all programs and log on as a different
	  user."
	
	
	Additional query words: apm
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
