---
layout: page
title: "Q146681: XFOR: DXA Improperly Appending 001 to Friendly Names in the GAL"
permalink: /kb/146/Q146681/
---

## Q146681: XFOR: DXA Improperly Appending 001 to Friendly Names in the GAL

	Article: Q146681
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you run Directory Synchronization (DirSync) between Microsoft Exchange
	Server and Microsoft Mail (MSMail) Postoffices, with the Microsoft Exchange
	Server as the DirSync Server, certain friendly names in the Global Address List
	(GAL) on the MSMail side may have a 001 or 002 appended. These names are not
	located on the local MSMail Postoffice. Though this is by design in the case of
	duplicate mailbox or friendly names, which is explained in article Q146676, it
	is not normal behavior in most other circumstance.
	
	CAUSE
	=====
	
	The cause is in the logic behind determining when to add this appendage. There
	are times when this appendage is necessary. Again, please reference article
	Q146676.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: post35fix
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
