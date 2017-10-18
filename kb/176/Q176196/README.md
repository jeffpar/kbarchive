---
layout: page
title: "Q176196: XADM: Some Mailboxes Not Included in Directory Synchronization"
permalink: kb/176/Q176196/
---

## Q176196: XADM: Some Mailboxes Not Included in Directory Synchronization

	Article: Q176196
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure Microsoft Exchange Server as a directory synchronization
	(dirsync) server, some mailboxes may not participate in dirsync.
	
	CAUSE
	=====
	
	This problem occurs when there are Thai characters in the display name of the
	mailbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When configuring the DirSync Requestor in Exchange Admin, the General Page
	doesn't have a listing for Thai in the Requestor Language drop-down box.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
