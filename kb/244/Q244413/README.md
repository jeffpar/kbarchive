---
layout: page
title: "Q244413: XFOR: Can't Reply to E-mail from MEMO"
permalink: /kb/244/Q244413/
---

## Q244413: XFOR: Can't Reply to E-mail from MEMO

	Article: Q244413
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Verimation MEMO user sends e-mail to an Exchange Server user, the mail
	appears in the Exchange Server user?s Inbox. The Exchange Server user can read
	the e-mail but might not be able to reply to this e-mail because the originator
	address had been changed to MEMOGWY(SNADS) or MEMOGWY.SNADS. This behavior
	appears only if the MEMO user has an address with a hyphen (-) in the
	distribution group name (DGN), for example, GROUP-ONE(XYZ123). There are no
	problems sending e-mail from Exchange Server to the Verimation MEMO user. If the
	Exchange Server user sends e-mail to the MEMO user, the MEMO user can reply to
	the e-mail, and the message reaches the Exchange Server user. But the Exchange
	Server user still cannot reply.
	
	This problem doesn?t appear if the MEMO user address has no hyphen in it.
	
	RESOLUTION
	==========
	
	This problem is based on the configuration of the connector at the SNADS side.
	It?s related to the fact that the DGN.DEN has invalid characters for SNADS, such
	as a hyphen. The connector or gateway at SNADS exchanges the invalid DGN.DEN
	with an syntactical correct expression, "MEMOGWY.SNADS" or "MEMOGWY(SNADS)",
	although the recipient can no longer reply to this address.
	
	There are three options to resolve this issue:
	
	- At MEMO, use only a DGN.DEN with correct syntax, which is allowed from SNADS.
	  This is the preferred solution.
	
	- Accept this behavior, so that MEMO users still can send to Exchange Server,
	  but Exchange Server users cannot use the reply functionality of their e-mail
	  client software. They must choose the reply address from the global address
	  list or type the one-off address manually to send e-mail to the MEMO user.
	
	- At SNADS, configure the settings at Exit GWYZXR01 in such a way that these
	  invalid addresses are already refused at the SNADS side. This causes a
	  non-delivery report (NDR) for all DGN.DEN with invalid characters. MEMO users
	  who have this kind of DGN.DEN cannot deliver mail to the Exchange Server
	  system.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
