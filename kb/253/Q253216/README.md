---
layout: page
title: "Q253216: XADM: Online Backup Doesn't Detect Corruption on Multiprocessor"
permalink: /kb/253/Q253216/
---

## Q253216: XADM: Online Backup Doesn't Detect Corruption on Multiprocessor

	Article: Q253216
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use a backup program on a multiprocessor computer that uses a buffer
	setting of more than 64 kilobytes (KB), the backup program does not detect a
	corrupted page during the online backup. The database is backed up successfully,
	even though it is corrupted.
	
	The online backup program successfully detects the corrupted page on a single
	processor computer, regardless of the buffer setting.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
