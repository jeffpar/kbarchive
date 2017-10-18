---
layout: page
title: "Q175235: XFOR: Greek Outlook Client Cannot Send Message to MS Mail User"
permalink: kb/175/Q175235/
---

## Q175235: XFOR: Greek Outlook Client Cannot Send Message to MS Mail User

	Article: Q175235
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Greek Outlook Client to send a message to a Microsoft Mail user
	through Microsoft Exchange, you may receive the following non-delivery report
	(NDR):
	
	  Delivery failed to MS:MICROSOFT/KESWICK/MARKCAT.
	  Reason: 0 (transfer failed)
	  diagnostic: -1 (no diagnostic).
	  MSEXCH:MSExchangeMTA:KESWICK:MARKCAT01.
	
	CAUSE
	=====
	
	This problem occurs when using the Greek Outlook Client with a Greek version of
	Exchange Server that has a Microsoft Mail Connector. When you send a message to
	a Microsoft Mail user through the Exchange global address list, the user
	receives the non-delivery report. This is caused by an error in the code page
	translation for Greek characters going to the MS Mail postoffice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  SERVPACK
	
	
	Additional query words: xcln
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
