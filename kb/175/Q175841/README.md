---
layout: page
title: "Q175841: XFOR: SMTP Header Discarded with No Message Content"
permalink: kb/175/Q175841/
---

## Q175841: XFOR: SMTP Header Discarded with No Message Content

	Article: Q175841
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Microsoft Exchange Server Internet Mail Service receives an inbound
	Simple Mail Transfer Protocol (SMTP) message, the message is formatted according
	to the header information defined in the Data section of the message (that is,
	Subject:, To:, From:).
	
	If the last header line is not followed by a null line, plus a carriage
	return/line feed (CR/LF), the last header field will not be displayed to the
	recipient of the message.
	
	Some SMTP hosts may send out mail in this format when there is no message
	content, and therefore, the above behavior is expected.
	
	The following excerpt from RFC 822 explains the proper header formatting, so that
	the message content is separated from the header content consistently.
	
	  3.1. GENERAL DESCRIPTION
	  A message consists of header fields and, optionally, a body. The body is
	  simply a sequence of lines containing ASCII characters. It is separated from
	  the headers by a null line (i.e., a line with nothing preceding the CRLF).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
