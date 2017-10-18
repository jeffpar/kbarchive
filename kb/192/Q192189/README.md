---
layout: page
title: "Q192189: XADM: Database Does Not Shrink after Several Mailbox Deletions"
permalink: kb/192/Q192189/
---

## Q192189: XADM: Database Does Not Shrink after Several Mailbox Deletions

	Article: Q192189
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may find that the database size does not shrink after you delete several
	mailboxes and run an offline defragmentation.
	
	MORE INFORMATION
	================
	
	The database file sizes will not shrink after mailboxes are deleted or removed.
	The data will be deleted and the space will be reused, but the Exchange Server
	computer will not reduce the file size online. To reduce the file size, it is
	necessary to take the system offline and run an offline defragmentation on the
	Priv.edb database. If the services are stopped immediately after the deletion is
	finished, the file size may not be reduced by the offline defragmentation
	process. This is because, when a mailbox is deleted, it is only marked for
	deletion. Data deletion is done by a background thread and space is not freed up
	until after the background process has deleted the data. To reclaim the space
	after the deletion of several mailboxes, wait for at least ten minutes before
	stopping the Information Store service. Then defragment the database offline
	using the command ESEUTIL /d.
	
	For more information on ESEUTIL command line switches, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q182903 XADM: ESEUTIL Command Line Parameters
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
