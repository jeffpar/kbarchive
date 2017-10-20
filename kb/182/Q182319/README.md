---
layout: page
title: "Q182319: XADM: Admin.exe Dr. Watsons While Importing an Active Newsgroup"
permalink: /kb/182/Q182319/
---

## Q182319: XADM: Admin.exe Dr. Watsons While Importing an Active Newsgroup

{% raw %}

	Article: Q182319
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix exc5 exc55
	Last Modified: 15-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	While attempting to import a new active newsgroups list, the Microsoft Exchange
	Administrator program generates a Dr. Watson at 80 percent completion.
	
	CAUSE
	=====
	
	The Exchange Administrator program finds public folders that it thinks should be
	a part of the active list, and when it tries to retrieve the newsgroup name of
	the folder, the name is not available and an invalid address is returned.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	MORE INFORMATION
	================
	
	The Exchange Administrator reads in the active list from either your newsfeed
	server or from an active list. At 80 percent, the Exchange Administrator program
	completes the reading of the list and begins searching for public folders that
	have been designated as newsgroups. Once these folders have been found, the
	Exchange Administrator program traverses the list of subfolders searching for
	the folder's newsgroup name and adds it to the list of newsgroups to be
	displayed.
	
	======================================================================
	Keywords          : exc55sp2fix exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
