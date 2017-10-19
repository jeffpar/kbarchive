---
layout: page
title: "Q166555: XADM: Address Book Views Fail If Referenced Object Is Deleted"
permalink: /kb/166/Q166555/
---

## Q166555: XADM: Address Book Views Fail If Referenced Object Is Deleted

	Article: Q166555
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an Address Book view by server or site and then delete that
	referenced server or site, clients who try to access these views will encounter
	errors.
	
	CAUSE
	=====
	
	The reference count on the server or site objects is not updated when these
	views are created. If the server or site is deleted and the Address Book view is
	not deleted before the expired tombstones are deleted at the next garbage
	collection interval, then the server or site objects referenced in the view
	cannot be read and will generate an error when accessed.
	
	WORKAROUND
	==========
	
	If a server or site is deleted and there is an Address Book view that references
	these objects, the address book view should be deleted before the tombstone
	expires and the garbage collection interval occurs.
	
	RESOLUTION
	==========
	
	Apply the fix described below. The reference count for the server or site
	objects is now updated correctly. This prevents the server or site object from
	being deleted until the view is deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
