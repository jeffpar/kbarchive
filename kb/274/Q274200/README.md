---
layout: page
title: "Q274200: XADM: Duplicated Message Received with Store Post-SP3 Hotfix"
permalink: kb/274/Q274200/
---

## Q274200: XADM: Duplicated Message Received with Store Post-SP3 Hotfix

	Article: Q274200
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install any post-Exchange Server 5.5 Service Pack 3 (SP3) information
	store hotfix (between build 5.5.2652.68 and 5.5.2653.16), you may receive
	duplicate messages when the message was originally sent to you or to a
	distribution list that includes your mailbox.
	
	CAUSE
	=====
	
	Any information store fix after build 5.5.2652.68 has been changed to use the
	Internet ID globally unique identifier (GUID) instead of the Instance ID to
	track message duplication. The local delivery pointer is not initialized
	correctly after the modification.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 SP3. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words: IS
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
