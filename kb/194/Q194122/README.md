---
layout: page
title: "Q194122: XADM: MSW: Public Folder Contents Not Available"
permalink: kb/194/Q194122/
---

## Q194122: XADM: MSW: Public Folder Contents Not Available

	Article: Q194122
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp1
	Last Modified: 19-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After moving an Exchange Server computer out of a site, an administrator may
	receive the following error message when trying to view properties on a public
	folder in the original site.
	
	  The contents of this public folder are currently unavailable. Either
	  the Microsoft Exchange Server Computer servicing this public folder is
	  down or the public folder has not been replicated to this site. See your
	  administrator.
	
	The public folder may also appear in distribution lists or in Microsoft Outlook,
	but is not available. To make the public folder available, create a replica of
	the public folder on an Exchange Server computer in the site where you want to
	use the public folder. See the Move Server Wizard documentation for alternatives
	for handling public folder contents.
	
	Additional query words: Move Server Wizard
	
	======================================================================
	Keywords          : exc55sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
