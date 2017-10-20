---
layout: page
title: "Q118968: SMTP: RFC822 Header Fields Used by the Gateway"
permalink: /kb/118/Q118968/
---

## Q118968: SMTP: RFC822 Header Fields Used by the Gateway

{% raw %}

	Article: Q118968
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to SMTP uses the following RFC 822 headers:
	
	  TO
	  CC
	  FROM
	  SUBJECT
	  RETURN-RECEIPT-TO
	  RR
	  ENCODING
	  X-MS-ATTACHMENT (for SMTP Gateway 3.0 and later, used for SMTP backbone mail)
	  X-NC-ATTACHMENT (for SMTP Gateway 2.1b or earlier)
	
	All other fields are preserved and passed on in the message to the recipient,
	unused by the gateway.
	
	Additional query words: 3.00 smtp header RFC822
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
