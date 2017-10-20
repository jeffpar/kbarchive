---
layout: page
title: "Q190084: XFOR: 12006 and 4117 Errors when IMS Receives an SMTP Message"
permalink: /kb/190/Q190084/
---

## Q190084: XFOR: 12006 and 4117 Errors when IMS Receives an SMTP Message

{% raw %}

	Article: Q190084
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Exchange Server Internet Mail Service receives an SMTP
	message, the following events may be logged in the event viewer:
	
	  Event ID: 12006
	  Source: MSExchangeIS
	  Type: error
	  Category: content engine
	  Description: Error 80040C05-F20000E9 occurred while processing message
	  <> from 'Test User'. The archive filename is 'NQ1NQYQK'.
	
	  Event ID: 4117
	  Source: MSEechangeIMC
	  Type: error
	  Category: internal processing
	  Description: An error was returned from the messaging software the
	  Internet Mail Service uses to process messages on the Microsoft
	  Exchange Server. As a result, the message in spool file NQ1NQYQK failed
	  to be delivered. The message has been moved to the IMCDATA\IN\ARCHIVE
	  directory.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: STORE version 5.0
	
	  File Name    Version
	  -----------------------
	  Store.exe    5.0.1461.77
	  Mdbmsg.dll   5.0.1461.77
	
	  Component: STORE version 5.5
	
	  File Name    Version
	  -----------------------
	  Store.exe    5.5.2402.0
	  Mdbmsg.dll   5.5.2402.0
	  Gapi32.dll   5.5.2402.0
	  Gapi32.dll   5.5.2402.0
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	The errors above indicate that the Internet Mail Service is having difficulty
	with the headers in the SMTP message that it received, in particular, the
	Received line in the headers. In the archive are the following headers:
	
	  Received: from testserver.microsoft.com ([1.1.1.1]) by VHAISHEXC1 with
	  SMTP (Microsoft Exchange Internet Mail Service Version 5.5.1960.3) id
	  ND9X2LS1; Wed, 17 Jun 1998 16:41:18 -0500
	
	  Received: (from uucp@localhost) by testserver.microsoft.com
	  (8.6.12/8.6.11) id QAA16339 for <test.user@testserver.microsoft.com>;
	  Wed, 17 Jun 1998 16:35:59 -0500
	
	  Received: from 1.1.1.2 by testserver.microsoft.com via smap (3.2) id
	  xma015989; Wed, 17 Jun 98 16:35:11 -0500
	
	  Received: from [1.1.1.3] by unixtest.microsoft.com;
	  (5.65/1.1.8.2/14Feb98-0313PM) id AA06568; Wed, 17 Jun 1998 14:35:47
	  -0700
	
	In examining the headers above, the following line is the important one:
	
	  Received: from [1.1.1.3] by unixtest.microsoft.com;
	  (5.65/1.1.8.2/14Feb98-0313PM) id AA06568; Wed, 17 Jun 1998 14:35:47
	  -0700
	
	Notice that the comment section in parentheses contains a date. The Internet Mail
	Service is trying to use the date in the comment section and failing on
	conversion. Code was added to the Exchange Server information store to ignore
	the comment section.
	
	Additional query words: XADM XFOR MIME IMC IMS
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
