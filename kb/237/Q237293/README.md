---
layout: page
title: "Q237293: XADM: Owner Field Blank in Distribution List Properties"
permalink: /kb/237/Q237293/
---

## Q237293: XADM: Owner Field Blank in Distribution List Properties

	Article: Q237293
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you view the properties of a distribution list from the Microsoft Outlook
	client, the Owner field is blank. However, if you view the properties of the
	distribution list from the Microsoft Exchange Server Administrator program, the
	Owner field is populated.
	
	MORE INFORMATION
	================
	
	This behavior is by design. The owner of the distribution list has been hidden
	from the global address list.
	
	The owner of a distribution list must be in the same site as the distribution
	list. You can assign a mailbox to manage a distribution list; create a "dummy"
	mailbox in the site where the distribution list is located and assign owner
	rights to this mailbox. Then hide this mailbox from the global address list so
	that the user only has one valid mailbox in the global address list.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q152082 XADM: Cannot Modify DL if DL and Owner Not in the Same Site
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
