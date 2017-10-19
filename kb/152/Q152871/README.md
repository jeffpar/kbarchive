---
layout: page
title: "Q152871: XADM: Restore Re-populates Deleted Folders"
permalink: /kb/152/Q152871/
---

## Q152871: XADM: Restore Re-populates Deleted Folders

	Article: Q152871
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible that one or more folders that were deleted from a Microsoft
	Exchange Server may return after you perform a restore from a backup. This will
	happen if the folders were deleted between the time of the backup and the time
	of the restore.
	
	MORE INFORMATION
	================
	
	This can happen if a Microsoft Exchange Server in the Microsoft Exchange Site
	has a bad folder tombstone table. The Microsoft Exchange Server being restored
	might try to backfill the missing changes from the Microsoft Exchange Server
	with the bad tombstone table. This will cause the deleted folder to be returned
	via the backfill process.
	
	The only workaround is to delete the folder again and let the delete replicate
	throughout the Site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
