---
layout: page
title: "Q181713: XCLN: Cannot Resolve Name When Sending To SMTP Address Using Bro"
permalink: kb/181/Q181713/
---

## Q181713: XCLN: Cannot Resolve Name When Sending To SMTP Address Using Bro

	Article: Q181713
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send to an SMTP recipient via an Internet browser over the
	MailTo: Protocol (URL), you may not be able to resolve the recipient's name or
	add that SMTP address to a personal address book.
	
	CAUSE
	=====
	
	This problem can occur if the Use Simplified Form to Send From Other
	Applications option is checked in the Send Options on the Exchange Client
	computer.
	
	This feature was added in Exchange 4.0 Service Pack 2 (Build 4.0.993).
	
	WORKAROUND
	==========
	
	Uncheck the Use Simplified Form to Send From Other Applications option by doing
	the following:
	
	1. Start the Microsoft Exchange Client.
	
	2. From the Options menu, click Tools.
	
	3. Click the Send tab.
	
	4. Clear the Use Simplified Form to Send From Other Applications check box.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q156073 File, Send Brings Up Window with Missing Options
	
	  Q174215 MapiSendMail Incorrectly Returns Success Using Outlook Form
	
	Additional query words: URL:MailTo Protocol, URL, Internet Address
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
