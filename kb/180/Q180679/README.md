---
layout: page
title: "Q180679: XCON: Encapsulated Message Properties May Be Lost"
permalink: kb/180/Q180679/
---

## Q180679: XCON: Encapsulated Message Properties May Be Lost

	Article: Q180679
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:1.0,5.0,5.5;winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Exchange Development Kit (EDK), version 5.0 
	- Microsoft Exchange Server, version 5.5 
	- Extended Messaging Application Programming Interface (MAPI), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A gateway developed for Microsoft Exchange Server 5.5 that calls
	iTnef::ExtractProps from the Exchange Development Kit (EDK) may not process all
	of the properties of an attachment's encapsulated message when the encapsulated
	message's PR_DISPLAY_TO property size is greater than 1024 bytes. When this
	happens, an encapsulated message may be missing the body of the message.
	
	A gateway is just one example of a program that can experience this problem. Any
	program that uses the iTnef::ExtractProps method from the EDK may encounter this
	problem.
	
	
	CAUSE
	=====
	
	While iTnef::ExtractProps is processing the properties of the encapsulated
	message, OpenProperty is called and returns MAPI_E_NO_ACCESS if the property
	size is greater than 1024 bytes. When this happens, processing of the
	encapsulated message stops. It will resume with the properties immediately
	following the encapsulated message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Mapi32.dll has been changed to continue processing when this error occurs.
	
	======================================================================
	Keywords          :  
	Technology        : kbEDKsearch kbAudDeveloper kbMAPISearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbEDK500
	Version           : WINDOWS:1.0,5.0,5.5;winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
