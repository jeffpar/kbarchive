---
layout: page
title: "Q142436: XFOR: SMTP Headers That the Exchange IMC Understands"
permalink: /kb/142/Q142436/
---

## Q142436: XFOR: SMTP Headers That the Exchange IMC Understands

	Article: Q142436
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange version 4.0 Internet Mail Connector (IMC) only
	understands the following header information of incoming messages sent from SMTP
	Hosts:
	
	  Received....
	  to:
	  from:
	  date:
	  subject:
	  reply-to:
	  Message-ID:
	  x-ms-attachment:
	  resend-to:
	  return-receipt-to:
	  encoding:
	  MIME version 1.0
	  content-type:
	  content-transfer-encoding:
	  content-disposition: ; this is for incoming mail only
	
	Microsoft Exchange Server Service Pack 2 has added support for:
	
	  Resent-from:
	  Content-type: multipart/appledouble
	  Content-type: application/applefile
	  Encoding: x-binhex
	
	MORE INFORMATION
	================
	
	When an SMTP Host connects to the Microsoft Exchange IMC, there are certain
	headers sent by the SMTP Host that the Microsoft Exchange IMC uses to determine
	the actions to perform. The headers listed above are the headers that the
	Microsoft Exchange IMC understands. If any other headers are received by the
	Microsoft Exchange IMC, the message will be accepted and the unknown headers
	will be ignored.
	
	To save headers in the Microsoft Windows NT Event Log, start the Microsoft
	Exchange Administrator program, open the property page for the Microsoft
	Exchange IMC, choose the Diagnostic Logging tab, and set the Logging level to
	Maximum.
	
	Additional query words: IMC HEADERS SMTP
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
