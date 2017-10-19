---
layout: page
title: "Q188673: XADM: How to Assign a Group as Owner of a Distribution List"
permalink: /kb/188/Q188673/
---

## Q188673: XADM: How to Assign a Group as Owner of a Distribution List

	Article: Q188673
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An Exchange distribution list cannot be the owner of another Exchange
	distribution list. Only a mailbox or custom recipient can own a distribution
	list.
	
	To configure multiple owners of an Exchange distribution list, you can use the
	Permissions page of the distribution list to assign administrative permissions
	to multiple users. But this method may be difficult to manage and update.
	
	(By default in Exchange Administrator, the Permissions page is not visible for a
	distribution list. You can make it visible by going to Tools, clicking Options,
	clicking Permissions, and selecting Show Permissions Page for All Objects.)
	
	Alternately, you can manage multiple ownership of a distribution list through a
	Windows NT group. To do this, do the following:
	
	1. Create a mailbox or custom recipient whose Primary Windows NT Account is a
	  Windows NT group.
	
	2. Assign this mailbox as owner of the distribution list.
	
	You can now manage multiple ownership for the distribution list by adding or
	removing members of the Windows NT group account.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
