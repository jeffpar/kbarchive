---
layout: page
title: "Q188772: XADM: Error for Incorrect Journal Recipient Is Informational"
permalink: kb/188/Q188772/
---

## Q188772: XADM: Error for Incorrect Journal Recipient Is Informational

	Article: Q188772
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange administrator may find a repeated error in the event viewer
	application log. This is not a warning (Yellow) or error (Red) event; it is
	listed as an informational event (Blue) and is as follows:
	
	  Event 231    MSExchangeMTA     Configuration
	  (MTA MAIN BASE(33) Proc 252)   Journal not enabled, error in
	  loading configuration.  Journal Recipient Name
	  /o=Organization/ou=Site/cn=Recipients/cn=BadUser (14)
	
	CAUSE
	=====
	
	Microsoft Exchange Server Service Pack 1 contains a feature called Message
	Journal that lets the Exchange administrator have a blind copy of every message
	passed through the system. This copy is sent to a journal recipient or public
	folder.
	
	If the journal recipient name is incorrect or deleted, the above event is
	generated in the Windows NT application event log.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 SP1. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	
	MORE INFORMATION
	================
	
	This problem does not affect the functionality of the product. It only requires
	the Exchange administrator to be aware of the event in case problems occur with
	the Message Journal feature.
	
	Additional query words: dn archive
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
