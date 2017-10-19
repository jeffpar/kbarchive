---
layout: page
title: "Q146795: XFOR: IMC Messages Left in &#92;Imcdata&#92;Out Directory"
permalink: /kb/146/Q146795/
---

## Q146795: XFOR: IMC Messages Left in &#92;Imcdata&#92;Out Directory

	Article: Q146795
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Microsoft Exchange Internet Mail Connector (IMC) fails to resolve the
	destination host for a message because the chain of CNAME records is greater
	that eight records long, the message will not be returned with a Non-Delivery
	Report (NDR). Instead, it will sit in the \Imcdata\Out subdirectory in retry
	mode.
	
	MORE INFORMATION
	================
	
	The following is a chain of CNAME records from a sample DNS server:
	
	  cname0of8.test.microsoft.com.   IN CNAME
	  cname1of8.test.microsoft.com.
	  cname1of8.test.microsoft.com.   IN CNAME
	  cname2of8.test.microsoft.com.
	  cname2of8.test.microsoft.com.   IN CNAME
	  cname3of8.test.microsoft.com.
	  cname3of8.test.microsoft.com.   IN CNAME
	  cname4of8.test.microsoft.com.
	  cname4of8.test.microsoft.com.   IN CNAME
	  cname5of8.test.microsoft.com.
	  cname5of8.test.microsoft.com.   IN CNAME
	  cname6of8.test.microsoft.com.
	  cname6of8.test.microsoft.com.   IN CNAME
	  cname7of8.test.microsoft.com.
	  cname7of8.test.microsoft.com.   IN CNAME
	  cname8of8.test.microsoft.com.
	  cname8of8.test.microsoft.com.   IN CNAME
	  test.microsoft.com.
	
	If you compose a message to user@cname0of8.test.microsoft.com, the message will
	not be NDR'd. The message will sit in the \Imcdata\Out subdirectory in the retry
	mode. If you check the status of the message, it will report that there was a
	network error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: InCon IMC Exchange internet mail DNS CNAME
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
