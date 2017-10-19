---
layout: page
title: "Q159175: XFOR: Inbound Mail Failures on BinHex 4.0 Attachments"
permalink: /kb/159/Q159175/
---

## Q159175: XFOR: Inbound Mail Failures on BinHex 4.0 Attachments

	Article: Q159175
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Internet Mail Connector (IMC) administrator may receive
	inbound mail failures when trying to process BinHex 4.0 attachments from a
	Novell Groupwise 4.1 SMTP mailer. The inbound message will be placed in a file
	called Message.txt and attached to the Inbound Mail Failure notification.
	
	CAUSE
	=====
	
	The problem is that the Novell Groupwise 4.1 BinHex 4.0 encoder uses run length
	encoding when it encounters two characters in a row that are the same. The IMC
	fails the content conversion because it checks the length character to make sure
	it is 3 or greater, which is the only time it is efficient to use run length
	encoding. If the IMC finds a 1 or 2, it considers the message content invalid
	and content conversion fails.
	
	MORE INFORMATION
	================
	
	The BinHex 4.0 compression will find and compress repeating characters, or a
	"run" of the same characters. The specification requires three characters to
	describe the run length encoding. The first character is the repeating
	character, followed by a "90" to indicate compression, then a character is
	dictating the number of times the first character is repeated. For example, the
	left-hand side below would be compressed into what is displayed to the right of
	the arrow:
	
	  11 22 22 22 22 22 22 33   ->   11 22 90 06 33
	
	See RFC 1741, Appendix A, for more information on BinHex encoding.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
