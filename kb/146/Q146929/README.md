---
layout: page
title: "Q146929: XCON: ORName Not Included in Reported IPMessageId"
permalink: /kb/146/Q146929/
---

## Q146929: XCON: ORName Not Included in Reported IPMessageId

	Article: Q146929
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A foreign message transfer agent (MTA), for example, the Olivetti MTA, may be
	unable to correlate a read receipt (also known as a read notification [RN]) back
	to the original message. For example, this may occur with a message sent from
	Microsoft Exchange Server to a foreign MTA by means of a 1984 X.400 Connector.
	
	CAUSE
	=====
	
	The read receipt sent by Microsoft Exchange Server does not include the ORName
	within the reported IPMessageId if this ORName is part of the original message.
	
	WORKAROUND
	==========
	
	If the foreign MTA allows it, configure the MTA to not include the ORName in the
	IPMessageId.
	
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
	
	According to the CITT's 1984 X series of recommendations (also known as the Red
	Book), this behavior does not conform to the 1984 X.420 recommendations.
	Recommendation X.420, p. 192,states that the IPMessageId is made up of the
	following two components:
	
	  ORNameOPTIONAL
	  PrintableString
	
	Even though the ORName is an optional part in the IPMessageId, it must be
	included in the read receipt?s reported IPMessageId. The reported IPMessageId
	must contain the IPMessageId as it was originally sent. Recommendation X.420,
	4.2.2.3, Table6.X.420, page 203, concerning components of the interpersonal
	messaging (IPM) status report user agent protocol data unit (SR-UAPDU), states:
	
	  This is the same identifier conveyed in the IM-UAPDU [IP-message user agent
	  protocol data unit] to which the report refers. Exchange does not include the
	  ORName into the reported IPMessageId but only sends back the
	  PrintableString.
	
	For more information about SR-UAPDUs and read receipts, see the following
	sections of the Red Book:
	
	  SR-UAPDU: Rec X.420, 3.3, page 190
	  Receipt Notification: Rec X.420, 4.2.2.3, page 202
	
	The Olivetti MTA is manufactured by Olivetti, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	
	Additional query words: Conformance Interoperability
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
