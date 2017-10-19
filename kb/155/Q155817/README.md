---
layout: page
title: "Q155817: XIMS: Chinese MIME-encoded Attachments Corrupted by IMC"
permalink: /kb/155/Q155817/
---

## Q155817: XIMS: Chinese MIME-encoded Attachments Corrupted by IMC

	Article: Q155817
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send or receive Simplified, or Traditional, Chinese messages that
	contain attachments encoded using MIME, through the Microsoft Exchange Internet
	Mail Connector, the Chinese characters will be corrupted.
	
	CAUSE
	=====
	
	The IMC character set is US-ASCII and it should be either Big5 or GB2312.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in both the Simplified and the
	Traditional Chinese versions of Microsoft Exchange Server 4.0. This problem was
	corrected in the latest Microsoft Exchange Service Pack. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 DBCS CHT CHS IANA
	
	======================================================================
	Keywords          : exc4 exc55 
	Technology        : kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.5
	
	=============================================================================
	
