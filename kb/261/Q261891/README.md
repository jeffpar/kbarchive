---
layout: page
title: "Q261891: XADM: Public Folder Size Displayed Incorr. If Larger Than 4.3 GB"
permalink: /kb/261/Q261891/
---

## Q261891: XADM: Public Folder Size Displayed Incorr. If Larger Than 4.3 GB

	Article: Q261891
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Public Folders that contain more than 4.3 gigabytes (GB) of content may report a
	value of zero in the Exchange Server Administrator program under Public Folder
	Resources.
	
	CAUSE
	=====
	
	This problem can occur because the data is calculated in the information store
	as a MAPI property called PR_MESSAGE_SIZE. This variable is defined as an
	unsigned long variable, which only holds 4.3 GB of content.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Microsoft Exchange 2000 Server. In Exchange
	2000, the PR_MESSAGE_SIZE variable has been changed to PR_MESSAGE_SIZE_EXTENDED,
	which is an 8-byte integer that holds as much as 16 terabytes of content.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The PR_MESSAGE_SIZE variable cannot be changed because the change can
	potentially destabilize the information store.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
