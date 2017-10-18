---
layout: page
title: "Q182521: XADM: AV Using Directory Import to Delete Windows NT Accounts"
permalink: kb/182/Q182521/
---

## Q182521: XADM: AV Using Directory Import to Delete Windows NT Accounts

	Article: Q182521
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the directory import function of the Exchange Administrator program is used
	to delete Windows NT accounts, an access violation occurs.
	
	CAUSE
	=====
	
	A wrong parameter is used to call the function GetDomainDescrBySid().
	
	WORKAROUND
	==========
	
	To resolve this problem, remove the delete transactions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Microsoft Exchange Server 5.5
	Service Pack 1.
	
	
	
	
	Additional query words: bimport
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
