---
layout: page
title: "Q163080: XFOR: Event 4081 Occurs When IMC Encounters Invalid Code Page"
permalink: /kb/163/Q163080/
---

## Q163080: XFOR: Event 4081 Occurs When IMC Encounters Invalid Code Page

	Article: Q163080
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following event may be logged in the Application Event Log when the
	Microsoft Exchange Server Internet Mail Connector (IMC) receives an inbound SMTP
	mail message:
	
	  Event ID: 4081
	  Source: MSExchangeIMC
	  Type: Warning
	  Category: Content Conversion
	  Originator:  Subject: <message subject> Time: <date and time>
	  Conversion failed while processing file
	  d:\exchsrvr\imcdata\in\<file name>.
	
	The IMC administrator may also receive the following mail notification:
	
	  From: System Administrator
	  Subject: Notification: Inbound Mail Failure - The message conversion
	  failed.
	
	  The message that caused this notification was:
	
	     <message attachment>
	
	The recipient of the message will receive the following mail notification:
	
	  The Internet Mail Connector received a message that could not be
	  processed.
	  View the original content by opening the attached message.
	
	     <message attachment>
	
	CAUSE
	=====
	
	This error may occur when the inbound SMTP mail message contains a reference to
	a character set that is not installed on the Microsoft Exchange Server. To
	verify this as the source of the problem, look for following field in the SMTP
	header of the message (there may be more than one):
	
	  Content-Type: <content type>; charset=<character set id>
	
	Verify that the Microsoft Exchange Server computer has the proper code page
	installed for the character set referenced by charset.
	
	RESOLUTION
	==========
	
	To avoid receiving the content conversion error stated above, install the proper
	code page for the character set referenced in the mail message.
	
	For additional information on how to add code pages to a Windows NT Server using
	the Control Panel, International, Language applet, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q151701 How to Manually Add Code Pages for Mixed Languages
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
