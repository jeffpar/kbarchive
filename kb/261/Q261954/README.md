---
layout: page
title: "Q261954: XADM: Exmerge Archive Function Requests Too Much Disk Space"
permalink: /kb/261/Q261954/
---

## Q261954: XADM: Exmerge Archive Function Requests Too Much Disk Space

	Article: Q261954
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Exmerge utility in the two-step mode and archive to the target
	store, it may report that you need several gigabytes (GB) of space (sometimes
	larger than the size of the Priv.edb file) even though you are filtering for a
	particular attachment.
	
	CAUSE
	=====
	
	The Exmerge utility figures the required disk space to perform the copy or
	archive function based on every item in each mailbox even if you specify a
	criterion of a particular message or a particular attachment.
	
	WORKAROUND
	==========
	
	Map a drive letter to a server that has more than the required space and then
	change the default c:\Exmergedata folder to that mapped drive letter. When you
	scan for viruses or particular files, the required space is the size of the
	attachment plus between 60 kilobytes (KB) and 100 KB at the most.
	
	An additional way to work around this behavior is to specify a date range using
	the Options button. This bypasses the addition of the size of the mailbox, and
	Exmerge will display Unknown for the size, and subsequently ignore how much free
	space is available.
	
	STATUS
	======
	
	This behavior is by design; the Exmerge utility assumes that there is the
	possibility of moving every message.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q246916 XADM: How to Find Mailboxes That Contain a Specific Message
	
	  Q232006 XADM: How to Delete a Confidential Message From Exchange Server
	
	Additional query words: mailbox move pst virus melisa melissa love bug variant clean
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
