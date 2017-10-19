---
layout: page
title: "Q159183: XADM: Err Msgs About Previously Deleted Msgs in Sync Log"
permalink: /kb/159/Q159183/
---

## Q159183: XADM: Err Msgs About Previously Deleted Msgs in Sync Log

	Article: Q159183
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Synchronize, All Folders on the Tools menu in a Microsoft
	Exchange client, you may receive the following errors in the Synchronization Log
	on messages that were previously deleted from the Inbox:
	
	  15:50:22 Synchronizing Folder 'Inbox'
	  15:50:22 Begin CTX: 310
	  15:50:23 Error synchronizing message 'RE: Directory Synchronization'
	  15:50:23       [80004005-501-0-322]
	  15:50:23       The client operation failed.
	  15:50:23       Microsoft Exchange Server Information Store
	  15:50:23 End CTX: 340
	  15:50:23 End CTX: 450
	  15:50:23 Error synchronizing folder
	  15:50:23       [80004005-501-0-322]
	  15:50:23       The client operation failed.
	  15:50:23       Microsoft Exchange Server Information Store
	  15:50:23 End CTX: 620
	
	CAUSE
	=====
	
	The tombstone table for the Inbox folder is corrupted and this is causing local
	replication to fail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: remote mail ost offline folder sync this folder fail exclnfaqold
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
