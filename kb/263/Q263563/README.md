---
layout: page
title: "Q263563: XCON: Domain Defined Attributes Value Is Not Displayed in NDR"
permalink: kb/263/Q263563/
---

## Q263563: XCON: Domain Defined Attributes Value Is Not Displayed in NDR

	Article: Q263563
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send an X.400 message to a distribution list and the message cannot be
	delivered to one of the recipients, the non-delivery report (NDR) that you
	receive may not contain the Domain Defined Attributes (DDA) value from the
	recipient's address. As a result, you cannot determine which recipient did not
	receive the message.
	
	CAUSE
	=====
	
	When you send an X.400 message through an Exchange Server computer, the message
	transfer agent (MTA) moves each recipient's distinguished name (DN) from the DDA
	value to the X.500 portion of the originator/recipient (O/R) address. The MTA
	moves the DN back to the DDA value before sending the recipient information to
	the information store, but when the recipient report is generated, this DN is
	not removed from the DDA value. When the recipient report is sent to the
	information store using the X.400 Application Programming Interface (XAPI), the
	DN is removed because it is not an Exchange DN. Because the DDA value no longer
	exists, it cannot be displayed in the NDR.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
