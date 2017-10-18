---
layout: page
title: "Q184190: XADM: System Instabilities After Restoring Information Store"
permalink: kb/184/Q184190/
---

## Q184190: XADM: System Instabilities After Restoring Information Store

	Article: Q184190
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you restore an information store from a backup, the Microsoft Exchange
	Server computer may assign non-unique object identifiers to an offline storage
	file (OST). If the same identifier is assigned to multiple objects, you may be
	unable to create new messages in the information store or synchronize folders,
	or you may experience other system instabilities.
	
	CAUSE
	=====
	
	When you perform the restore, the globally unique identifier (GUID) and counter
	associated with offline folder synchronization are not reset. Therefore, when
	the server assigns an identifier range to an OST file, it may assign an
	identifier range that has already been assigned to a different OST file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
