---
layout: page
title: "Q176219: XADM: DXA Objects Do Not Have Support for Hebrew"
permalink: kb/176/Q176219/
---

## Q176219: XADM: DXA Objects Do Not Have Support for Hebrew

	Article: Q176219
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
	
	When you configure the Microsoft Exchange Server as a directory synchronization
	server, some mailboxes may not participate in dirsync.
	
	CAUSE
	=====
	
	This occurs if there are Hebrew characters in the Display Name of the Mailbox.
	
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
	
	When configuring the dirsync requestor in the Microsoft Exchange Administration
	Program, the General Page doesn't have a listing for Hebrew in the Requestor
	Language list.
	
	Additional query words: Dir-Sync
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
