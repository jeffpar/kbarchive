---
layout: page
title: "Q190918: XADM: Eseutil Fails with JetDuplicateKey Error"
permalink: /kb/190/Q190918/
---

## Q190918: XADM: Eseutil Fails with JetDuplicateKey Error

	Article: Q190918
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Eseutil /p on a corrupted database, the utility fails to complete
	with a Jet_errKeyDuplicate error.
	
	CAUSE
	=====
	
	There is a page in the database where the nodes are out of order and duplicated.
	Eseutil does not detect this and tries to incorporate the page into the database
	during repair. The database in question was corrupted by a faulty RAID Array
	writing bad data over a period of time. This causes node shuffling and key
	duplication that is undetected by Eseutil.exe reporting as Jet_errKeyDuplicate
	error.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: -1605 Jet_errKeyDuplicate
	
	======================================================================
	Keywords          : exc55sp2fix exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
