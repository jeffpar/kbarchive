---
layout: page
title: "Q170067: XADM: New IP Addresses Are Not Added in Order"
permalink: /kb/170/Q170067/
---

## Q170067: XADM: New IP Addresses Are Not Added in Order

	Article: Q170067
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	This problem occurs when you are using the Exchange Server Administrator program
	to add an IP address to the Specify Host property page of the Internet Mail
	Service (or Internet Mail Connector as it iscalled in version 4.0). The new IP
	addresses are not added in order; they are placed in the list in the order they
	are entered (that is, newest first).
	
	CAUSE
	=====
	
	This is by design.
	
	MORE INFORMATION
	================
	
	The selected item in the Specify by Host dialog box becomes the insertion point
	for the subsequent additions to this list.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
