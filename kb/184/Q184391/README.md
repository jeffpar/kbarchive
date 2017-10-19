---
layout: page
title: "Q184391: XADM: Event 1029 Occurs When Migrating cc:Mail Users"
permalink: /kb/184/Q184391/
---

## Q184391: XADM: Event 1029 Occurs When Migrating cc:Mail Users

	Article: Q184391
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 24-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to migrate a user from cc:Mail using the Exchange 5.5 Migration
	Wizard, the migration may fail and the event log will contain an event 1029 with
	the following text:
	
	  Invalid Token '6' found in the exported file. Token should have been
	  'Message:'. Account '<lastname>, <firstname>' did not migrate
	  successfully.
	
	CAUSE
	=====
	
	Export.exe (a cc:Mail executable) is used to extract user information from the
	cc:Mail mailbox. The Exchange Migration Wizard uses the output files produced by
	Export.exe to perform the migration. The Exchange Migration Wizard assumes all
	information blocks in the exported file will be separated by a carriage-return
	line-feed <CR><LF>. This assumption is incorrect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.0 and 5.5.<A0>
	This problem was first corrected in Exchange Server 5.5 Service Pack 2.<A0> To
	resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
