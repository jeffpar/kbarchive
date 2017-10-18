---
layout: page
title: "Q146143: XCON: DeferredDeliveryTime Echoed Within DeliveryReportEnvelope"
permalink: kb/146/Q146143/
---

## Q146143: XCON: DeferredDeliveryTime Echoed Within DeliveryReportEnvelope

	Article: Q146143
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On constructing a delivery report (DR) for a message that originally contained
	the DeferredDeliveryTime field, Microsoft Exchange Server does not conform to
	the CCITT' s 1984 X series of recommendations. This only applies to connections
	using a 1984 X.400 Connector.
	
	CAUSE
	=====
	
	Microsoft Exchange Server echoes the DeferredDeliveryTime value of the original
	message within the DR' s DeliveryReportEnvelope.
	
	WORKAROUND
	==========
	
	If the foreign messaging system allows it, configure it in a way that it does
	not need to use the DeferredDeliveryTime within the X.400 P1 (Message Transfer
	Protocol) fields.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	To achieve deferred delivery within an X.400 Message Handling System (MHS), the
	P1 field DeferredDeliveryTime as part of the UMPDUEnvelope (UMPDU: User Message
	Protocol Data Unit) can be used. On generating a DR to a message having this
	field included, this field might be included within the DR's
	DeliveryReportContent in the Intermediate TraceInformation field. The DR's
	envelope itself carries trace information about its own MPDU (MPDU: Message
	Protocol Data Unit) within the DR' s DeliveryReportEnvelope. The field used to
	carry this information is the TraceInformation field. Within the
	TraceInformation field's DomainSuppliedInfo exists an optional field:
	
	  deferred
	
	This field has been used by Microsoft Exchange to echo the original message's
	DeferredDeliveryTime.
	
	Recommendation X.411, cite 3.4.3.1, p. 161, states:
	
	  The TraceInformation records information about the passage of this MPDU (not
	  the subject UMPDU) through the MTL [Message Transfer Layer](see cite
	  3.4.1.5).
	
	The subject UMPDU in this recommendation refers to the original message.
	
	
	
	Additional query words: Conformance Interoperability Delivery Report
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
