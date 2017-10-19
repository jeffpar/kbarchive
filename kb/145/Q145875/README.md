---
layout: page
title: "Q145875: XFOR: cc:Mail Messages Are Not Delivered by DEC Mail Bus"
permalink: /kb/145/Q145875/
---

## Q145875: XFOR: cc:Mail Messages Are Not Delivered by DEC Mail Bus

	Article: Q145875
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages that originate from cc:Mail and pass through an X.400 connector to DEC
	Mail Bus may end up in the BAD Mail Directory on the DEC Mail Bus system. The
	message will not be delivered to the final recipient, and a non- delivery-report
	(NDR) is not sent back to the originator of the message.
	
	CAUSE
	=====
	
	The cc:Mail Connector is incorrectly setting the MAPI property
	PR_RECIPIENT_NUMBER to -1, which the store then maps to the corresponding XAPI
	attribute for Recipient Number.
	
	MORE INFORMATION
	================
	
	The DEC Mail Bus system will report the following error as a reason for the
	failure:
	
	  <OriginallySpecifiedRecipientNo>
	  ERROR: ASN.1 Encoding Error, Integer Value Exceeds 32 bits
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange 5.0
	Server U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 5.00 cc:Mail X.400 ASN1 DEC MAIL BUS NDR OriginallySpecifiedRecipientNo
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
