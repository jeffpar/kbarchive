---
layout: page
title: "Q152082: XADM: Cannot Modify DL if DL and Owner Not in the Same Site"
permalink: kb/152/Q152082/
---

## Q152082: XADM: Cannot Modify DL if DL and Owner Not in the Same Site

	Article: Q152082
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to modify the contents of a distribution list (DL) that you own but
	that was created in a different site than your mailbox, you will receive the
	following error message:
	
	  Changes to the distribution list membership could not be saved. You do not
	  have sufficient permission to perform the operation on this object.
	
	CAUSE
	=====
	
	This is because you can only see a read-only copy of the DL. For a DL owner to
	be able to modify the contents of a DL, the DL must be created in the same site
	that the owner's mailbox resides in.
	
	RESOLUTION
	==========
	
	This is by product design. To workaround this limitation, export the DL using
	directory export and re-import it into the correct site.
	
	MORE INFORMATION
	================
	
	If the owner of the DL is to administer the DL, the owner's mailbox must reside
	in the same site as the DL.
	
	The account listed in "Windows NT accounts with permissions" on the permissions
	of the DL must be using a mailbox in the site in order to administer the DL. For
	example, if a user is in another NT Domain but their mailbox is in the site
	where the DL resides, the Administration of the DL will be successful.
	
	Global administration of a Distribution List may be accomplished by making a
	"dummy" mailbox in the site where the Distribution List is located and assigning
	a user, local group or a global group from a trusted domain as the "Windows NT
	accounts with permissions."
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
