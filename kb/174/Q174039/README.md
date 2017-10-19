---
layout: page
title: "Q174039: XCON: Read or Delivery Reports Show OU2 and OU3 Values"
permalink: /kb/174/Q174039/
---

## Q174039: XCON: Read or Delivery Reports Show OU2 and OU3 Values

	Article: Q174039
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you send a message to an X.400 recipient with a Read or Delivery
	Notification request, you may receive back a report that looks like the
	following:
	
	  Your message
	  To: X400 User
	  Subject: This is a test
	  Sent: 6/27/97 3:03:17 PM
	
	  was delivered to the following recipient(s): c=US;a=
	  ;p=Orgname;o=Sitename;s=User;g=X400;ou2=TEST;ou3=user.test; on
	  6/27/97 3:04:28 PM
	  MSEXCH:MSExchangeMTA:Sitename:servername
	
	CAUSE
	=====
	
	Exchange Server incorrectly handles a report coming back from a 1984 mode X.400
	system. When the Exchange message transfer agent (MTA) receives the report, it
	looks for a Content.tag file to determine the content of the report. Because
	1984 mode does not support the use of content tags, the MTA simply uses the O/R
	address and sends it to the information store. The information store then
	incorrectly switches any Domain Defined Attribute (DDA) type and value fields to
	OU2 and OU3.
	
	WORKAROUND
	==========
	
	If possible, use 1988 mode X.400 for communication between Exchange and another
	system. This will resolve the problem, because 1988 mode supports the use of
	content tags.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words: p2 p22 84 88 dl report probe
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
