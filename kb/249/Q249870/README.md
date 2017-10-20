---
layout: page
title: "Q249870: XADM: Can't Access Client Permissions on Internet Newsgroup"
permalink: /kb/249/Q249870/
---

## Q249870: XADM: Can't Access Client Permissions on Internet Newsgroup

{% raw %}

	Article: Q249870
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade to Exchange Server 5.5 Service Pack 3 (SP3), you cannot access
	the client permissions on the Internet Newsgroups folder and you receive the
	following error message:
	
	  The object cannot be found in the directory. This may be because replication
	  has not completed.
	
	  Microsoft Exchange Directory
	  ID no: c1010aae
	
	CAUSE
	=====
	
	Although Internet Newsgroups is a special folder and there is no directory
	object for it, the Microsoft Exchange Server Administrator program seeks a
	directory object for it to check the Administrator permissions.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 SP3. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
