---
layout: page
title: "Q157000: XFOR: Korean UUENCODED Attachments Corrupted"
permalink: kb/157/Q157000/
---

## Q157000: XFOR: Korean UUENCODED Attachments Corrupted

	Article: Q157000
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outgoing messages with UUENCODED attachments from the Microsoft Exchange
	Internet Mail Connector (IMC) in the Korean language might have corrupt
	attachments, and the receiving SMTP host might not be able to uudecode the
	attachments correctly. This can occur if a message is sent with an attachment
	with a Korean file name, or a message with a Korean body followed by an
	attachment with a Korean file name.
	
	CAUSE
	=====
	
	In the first case, the X-MS-Attachment header line has the Korean Escape
	sequence, which adds a carriage-return line-feed (CRLF) sequence that corrupts
	the header. It will look like this:
	
	  X-MS-Attachment: $)C
	  E8@O.bmp 0 00-00-1980 00:00
	
	In addition, the Begin line of the UUENCODEd data is incorrect. It will look like
	this:
	
	  begin 600 $)C
	  E8@O.bmp
	  M0DU"`@```````$(````H````( ```" ````!``0````````"```3"P``$PL`
	
	In the second message example, a Korean body with an attachment that has a Korean
	file name, you will see the same issues as with the first message, and also an
	Escape sequence in the message body. It will look like this:
	
	                       $)C
	  0!3*4Y
	
	  begin 600 $)C
	  E8@O.bmp
	  M0DU"`@```````$(````H````( ```" ````!``0````````"```3"P``$PL`
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
