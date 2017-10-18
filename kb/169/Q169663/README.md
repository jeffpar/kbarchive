---
layout: page
title: "Q169663: XADM: User Manager for Domains Hangs During Shutdown of Server"
permalink: kb/169/Q169663/
---

## Q169663: XADM: User Manager for Domains Hangs During Shutdown of Server

	Article: Q169663
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork exc4
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Windows NT Server computers that run User Manager for Domains and also
	have the Microsoft Exchange Server 4.0 Administrator program installed may hang
	during shutdown.
	
	During shutdown, you will notice a dialog box stating that User Manager does not
	respond to the End Task request.
	
	CAUSE
	=====
	
	The User Manager extension for Microsoft Exchange Server fails to deinitialize
	and terminate properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	When the Exchange Server Administrator program is installed on a Windows NT
	computer, it installs an extension into User Manager for Domains. This extension
	allows you to create Windows NT domain accounts and Exchange Server mailboxes
	from User Manager for Domains.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork exc4 
	Technology        : kbWinNTsearch kbWinNTSsearch kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
