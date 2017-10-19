---
layout: page
title: "Q246741: XADM: Admin Doesn't Export NT Accounts in Multiple Domains"
permalink: /kb/246/Q246741/
---

## Q246741: XADM: Admin Doesn't Export NT Accounts in Multiple Domains

	Article: Q246741
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
	
	When you export directory objects through the Exchange Server Administrator
	program by clicking Directory Export on the Tools menu, you may receive the
	following information in the .csv file:
	
	  ?\UNKNOWN Primary Windows NT Accounts
	
	However, the Administrator program displays the Microsoft Windows NT user account
	when you view the mailbox properties.
	
	CAUSE
	=====
	
	This behavior may occur when the Exchange Server service account, the
	Administrator account, and the Windows NT user accounts associated to the
	mailboxes are in different Windows NT domains that are not two-way trusted
	domains, as in the following scenario:
	
	  Domain1 contains the Exchange Server and service account
	  Domain2 contains the Exchange Administrator account
	  Domain3 contains the User accounts
	
	  Domain1 trusts Domain2 and Domain3
	  Domain3 trusts Domain2
	  Domain2 trusts no domain
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5.
	This problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
