---
layout: page
title: "Q182204: XADM: Offline Address Book Generated on Global Address List Fail"
permalink: /kb/182/Q182204/
---

## Q182204: XADM: Offline Address Book Generated on Global Address List Fail

	Article: Q182204
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 16-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you generate the Offline Address Book (OAB) from the Global Address List
	(GAL), it may fail with the following error message:
	
	  Event 5012, Source MSExchangeSA,
	  Description: Failed to generate offline Address Book for container: /o=
	  <org> /ou=<site>/cn=<container>.
	  Result: An empty table was passed to the MAPI call.
	
	CAUSE
	=====
	
	The container specified in the error message is empty. The offline address book
	generation function makes a quick scan of each container listed in the Address
	Books list to verify container population. If it identifies an empty container,
	it will fail.
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	Add a user to this container and the error will no longer be reported.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	
	=============================================================================
	
