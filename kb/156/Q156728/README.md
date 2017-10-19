---
layout: page
title: "Q156728: XFOR: MSMI Mistakenly Returns NDR Instead of DR"
permalink: /kb/156/Q156728/
---

## Q156728: XFOR: MSMI Mistakenly Returns NDR Instead of DR

	Article: Q156728
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send messages from Microsoft Mail by means of the Microsoft Exchange MS
	Mail Connector Interchange (MSMI), thus using Microsoft Exchange to address
	recipients in foreign X.400 systems, you may receive non-delivery reports
	(NDRs). These NDRs may be followed by a read receipt (RR) or a reply that
	obviously shows that the message was delivered to the intended recipient.
	
	CAUSE
	=====
	
	Various X.400 Message Transfer Agents (MTAs) can be configured to send out
	Delivery Reports (DRs) for every incoming message. Because MSMI does not
	differentiate between DRs and NDRs, an NDR will be returned to you.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The above described configuration on foreign MTAs might be necessary for User
	Agents (UAs) residing on various Legacy Systems. Such UAs might not be able to
	handle the PerRecipientFlag as defined in the X.400 standards. UAs receiving
	messages that contain a PerRecipientFlag, indicating that a Read Receipt was
	requested by the originating sender, would not be able to fulfill this request.
	As a common and valid workaround, some MTAs can be configured to reply to every
	incoming message destined for local delivery with a DR. These DRs do not contain
	a P2/P22 content. This missing content is the reason that MSMI mistakenly
	renders DRs as NDRs.
	
	
	
	Additional query words: ESS
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
