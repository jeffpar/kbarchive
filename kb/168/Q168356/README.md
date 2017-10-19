---
layout: page
title: "Q168356: XFOR: Cannot Reply to SMTP Mail Coming from the ccMail Connector"
permalink: /kb/168/Q168356/
---

## Q168356: XFOR: Cannot Reply to SMTP Mail Coming from the ccMail Connector

	Article: Q168356
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With the cc:Mail SMTP gateway installed on a cc:Mail postoffice, if Microsoft
	Exchange Server does not have the Internet Mail Service (IMS) installed,
	Microsoft Exchange users can send and receive SMTP mail, but all replies to
	incoming SMTP mail immediately result in non-delivery reports (NDRs).
	
	CAUSE
	=====
	
	The cc:Mail Connector maps all addresses of the form "user@domain.domain AT
	POname" to SMTP addresses. Therefore, the Microsoft Exchange user cannot reply
	to SMTP mail messages coming from the cc:Mail SMTP gateway.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
