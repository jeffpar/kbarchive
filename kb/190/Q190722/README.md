---
layout: page
title: "Q190722: XADM: MoveUser Fails After Running ISINTEG"
permalink: /kb/190/Q190722/
---

## Q190722: XADM: MoveUser Fails After Running ISINTEG

	Article: Q190722
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to move users from one Exchange Server computer to another, the
	following warning message may be written to the Windows NT application event
	log:
	
	  Event ID: 1151
	  Source: MSExchangeIS Private
	  Type:   Warning
	  Category: Rules
	
	  A Rule synchronization error (1144) has occurred.
	  The private folder is Top of Information Store\Inbox
	  The distinguished name of the owning mailbox is:
	  /O=ORG/OU=SITE/CN=Recipients/CN=123456
	
	The affected user can not move messages from the Exchange information store to a
	PST file. The user will receive the following error message:
	
	  An item could not be moved. The client operation failed.
	
	CAUSE
	=====
	
	The ISINTEG utility was run with the following parameters:
	
	  ISINTEG -pri -fix -detailed -test namedprop
	
	The issue occurs when messages have MAPI properties assigned that have no mapped
	name; this can be caused by third-party applications.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	It is also necessary to run Isinteg.exe again with the following parameters:
	
	  ISINTEG -pri -fix -detailed -test namedprop
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
