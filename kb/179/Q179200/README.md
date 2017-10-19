---
layout: page
title: "Q179200: XADM: Removed AB View Containers Are Re-created Automatically"
permalink: /kb/179/Q179200/
---

## Q179200: XADM: Removed AB View Containers Are Re-created Automatically

	Article: Q179200
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Exchange version 5.0, after you remove empty containers from
	Address Book (AB) views, the containers may be automatically regenerated.
	
	CAUSE
	=====
	
	If an Address Book View container stores only hidden recipients, the container
	will appear to be empty, and Microsoft Exchange version 5.0 will allow you to
	remove this container. This can be done either by using the Remove Empty
	Containers button on the Advanced tab of the view's properties dialog box, or by
	highlighting the container and using the Delete command from the Edit menu. In
	either case, the view's container will be removed but will be regenerated in the
	background as the Address Book views are updated.
	
	WORKAROUND
	==========
	
	To remove an Address Book View container that appears to be empty, do the
	following:
	
	1. Verify that there are no hidden recipients within the container. This can be
	  done with the Hidden Recipients command on the View menu.
	
	2. To remove the recipients, either delete them or modify their properties so
	  they are no longer associated with that Address Book view's container.
	
	3. Remove the empty container by clicking Remove Empty Containers on the
	  Advanced tab of the view's Properties dialog box.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
