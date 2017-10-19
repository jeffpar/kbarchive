---
layout: page
title: "Q197255: XFOR: Changing Site Address is not Updated in cc:Mail Directory"
permalink: /kb/197/Q197255/
---

## Q197255: XFOR: Changing Site Address is not Updated in cc:Mail Directory

	Article: Q197255
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Mail addressed from Lotus cc:Mail post office "A" to Exchange Server SITE2 may
	never be picked up after you change the site proxy address for cc:Mail on the
	Exchange Server site (SITE1) that has a cc:Mail Connector to "A". Site1 and
	Site2 have a replication connector between them, and you ran dirsync with "A"
	after you changed the site proxy address for cc:Mail. You will find that the old
	Exchange Server addresses were deleted from the cc:Mail directory on Site2, but
	the new ones are not added by dirsync. Also, the post office entry for SITE1,
	and the post office address indirection for SITE2 are not deleted from the
	cc:Mail directory.
	
	CAUSE
	=====
	
	There are two issues that are causing this problem.
	
	- Changing the Exchange Server site proxy cc:Mail address requires two dirsync
	  cycles to resynchronize. This is by design because cc:Mail requires unique
	  names in its directory, and "name at PO" is not unique to cc:Mail. So the
	  cc:Mail connector's dirsync process must first delete the old proxy Exchange
	  Server addresses and then re-add the new proxy addresses.
	
	- The post office address indirection for SITE2 in the cc:Mail directory will
	  not be changed by the cc:Mail connector's dirsync process. This is by design
	  as the dirsync process will not update post office addresses or post office
	  indirection in cc:Mail if it already exists. The reason for this is if
	  cc:Mail Administrators customize their post office indirection, dirsync
	  should not be overwriting it. The only solution for this is to manually
	  change post office definitions.
	
	This is by design.
	
	RESOLUTION
	==========
	
	
	MORE INFORMATION
	================
	
	
	Running dirsync again between SITE1 and the cc:Mail post office will re-add the
	Exchange Server proxy cc:Mail addresses to the cc:Mail directory with their new
	addresses. The post office address indirection for SITE2 in the cc:Mail
	directory, however will still be directing message traffic through SITE1, which
	now should be SITE_NEW. This will result in mail addressed to SITE2 never
	getting picked up.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
