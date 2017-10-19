---
layout: page
title: "Q149029: XFOR: IMC Re-Maps Return-Receipts-To Header to Delivery Receipt"
permalink: /kb/149/Q149029/
---

## Q149029: XFOR: IMC Re-Maps Return-Receipts-To Header to Delivery Receipt

	Article: Q149029
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Internet Mail Connector (IMC) receives mail containing a "Return
	Receipt To" header, the IMC re-maps this header in MAPI to a "Delivery Receipt"
	header.
	
	MORE INFORMATION
	================
	
	In addition, when the IMC is used to route mail from the Internet to Microsoft
	Mail for PC Networks users, the converted Delivery Receipts will not get to the
	Microsoft Mail for PC Networks users. In summary, the delivery receipts will not
	be sent from Microsoft Exchange over the Microsoft Mail for PC Networks
	Connector Interchange. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q140963 XADM: Error When Deleting a Public Folder Container
	
	Additional query words: IMC
	
	======================================================================
	Keywords          : kbenv exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
