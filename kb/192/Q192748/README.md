---
layout: page
title: "Q192748: XADM: Admin Program Quits Unexpectedly When Creating Newsfeed"
permalink: /kb/192/Q192748/
---

## Q192748: XADM: Admin Program Quits Unexpectedly When Creating Newsfeed

{% raw %}

	Article: Q192748
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55 exc55sp1
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a newsfeed in the Microsoft Exchange Server 5.5 Administrator
	program, the program may terminate unexpectedly after you import an active file
	from an Internet Service Provider (ISP). A progress dialogue will appear briefly
	and then the Exchange Server Administrator program will terminate. No events are
	logged or crash dumps produced.
	
	CAUSE
	=====
	
	The active file contains a list of all newsgroups that the ISP will be supplying
	through this newsfeed. If the name of one of these newsgroups exceeds 578
	characters, then this problem will occur.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Administrator Program
	
	  File Name   Version
	  ----------------------
	  Admin.exe   5.5.2315.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc55 exc55sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
