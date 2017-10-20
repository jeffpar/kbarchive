---
layout: page
title: "Q243601: XADM: Backups Time Out on Large DBs when DB Scrubbing Is Enabled"
permalink: /kb/243/Q243601/
---

## Q243601: XADM: Backups Time Out on Large DBs when DB Scrubbing Is Enabled

{% raw %}

	Article: Q243601
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform online backups of large information stores with the Database
	Scrubbing option enabled during backup, the backup process may time out.
	
	CAUSE
	=====
	
	Scrubbing the database during backup requires the metadata to be preread. On
	large databases, it may take longer than the default value of two minutes to
	preread the metadata. This causes the backup process to time out prematurely.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 SP2. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information on the Database Scrubbing option introduced in
	Microsoft Exchange Server 5.5 Service Pack 2, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q223161 XADM: Information on ESE Zeroing
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
