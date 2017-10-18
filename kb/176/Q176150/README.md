---
layout: page
title: "Q176150: XADM: P42 Message Delivery Fails Setting ENTRYID"
permalink: kb/176/Q176150/
---

## Q176150: XADM: P42 Message Delivery Fails Setting ENTRYID

	Article: Q176150
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When attempting to retrieve a P42 signed/encrypted message, the client may
	experience problems opening the message. Support for the P42 protocol (Secure
	Data Network Systems Message Security Protocol Support) gives Microsoft Exchange
	Server DMS users the benefit of adding hardware-based (for example, Fortezza
	cards) end-to-end security, including signed receipts, non- repudiation,
	privacy, and content integrity to their communications.
	
	CAUSE
	=====
	
	When opening signed/encrypted P42 messages, the DMS extension DLL creates non
	Unicode one off entry identifiers in a flat entry list
	(PR_REPLY_RECIPIENT_ENTRIES) for recipients that are to get a reply. The MAPI
	methods SetProps and GetProps are used to retrieve or modify the
	PR_REPLY_RECIPIENT_ENTRIES property for the entry identifier. During GetProps,
	the address type, e-mail address, and display name in the one-off entry
	identifier is converted to the client's codepage. Because entry identifiers are
	binary, there is no associated codepage information, except to indicate if it is
	Unicode. Microsoft Exchange Server assumes that if the entry identifier is not
	Unicode, the destination must be Unicode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	To resolve this issue, the address type, e-mail address, and display name are
	converted to Unicode during SetProps for the property
	PR_REPLY_RECIPIENT_ENTRIES. During GetProps for this property, no conversion
	will be done if the one off entry identifier is in Unicode and the destination
	code page is in Unicode, or if the entry identifier nor the destination code
	page is in Unicode.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
