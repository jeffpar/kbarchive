---
layout: page
title: "Q167648: XCLN: Free/Busy Connector Errors 1027 and 1029"
permalink: /kb/167/Q167648/
---

## Q167648: XCLN: Free/Busy Connector Errors 1027 and 1029

	Article: Q167648
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Schedule+ Free/Busy Connector logs the following events:
	
	  Event ID: 1029
	  Source: MSExchangeFb
	  Type: Error
	  Category: None
	
	  Unable to find the MS Mail user MS:NETWORK/PONAME/USERNAME the
	  Microsoft Exchange Address Book.
	
	  This address is not defined in the Recipients container.
	  Synchronize your MS Mail Postoffice addresses or create a custom
	  recipient entry for this address.
	
	  Event ID: 1027
	  Source: MSExchangeFb
	  Type: Error
	  Category: None
	
	  Unable to import the Microsoft Schedule+ data for MS:NETWORK/PONAME/ 
	  USERNAME.
	
	  Ensure that this recipient is defined in the Address Book.
	
	CAUSE
	=====
	
	The Admin.prf file on the Microsoft Mail postoffice contains an invalid network
	or postoffice name.
	
	RESOLUTION
	==========
	
	To correct this problem, reset the Admin.prf file on the user's postoffice. For
	details on how to reset the Admin.prf file and the associated POF files, see
	step 11 in the Microsoft Knowledge Base article, Q141755, "How to Setup Schedule
	Distribution."
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
