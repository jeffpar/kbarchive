---
layout: page
title: "Q146588: XCON: Content Not Supported NDR When Using X.400 Connector"
permalink: /kb/146/Q146588/
---

## Q146588: XCON: Content Not Supported NDR When Using X.400 Connector

	Article: Q146588
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a mail message over an X.400 connection to a Microsoft Exchange
	recipient, it might result in the following Non-Delivery Report (NDR):
	
	  The message contains a content type that is not supported.
	
	This can happen regardless of whether it was sent with an attachment or using
	Rich-Text Format (RTF).
	
	The following error will be generated in the Application Log of the Microsoft
	Exchange Server:
	
	  MSExchangeMTA Event ID 210
	  An internal MTA error occurred. Content conversion for message
	  C=US;A=ADMD;P=PRMD;L=servername
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange.
	
	MORE INFORMATION
	================
	
	This error is caused by duplication of information on the X.400 address. For
	example:
	
	  c=US;p=Microsoft;o=Mail;g=Exchange;s=User;ou=Seattle;cn=Test;s=User
	
	Notice that there are two s= fields. Regardless of whether or not they contain
	identical information, it is an illegal address.
	
	The Microsoft Exchange Message Transfer Agent (MTA) does not filter the address
	itself, but rather passes it down to the content converter to build an O/R
	address. This is the point at which it fails and is the reason for the content
	type not supported NDR message.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
