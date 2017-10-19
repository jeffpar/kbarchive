---
layout: page
title: "Q191913: XCLN: Can't Send Internet/SMTP Mail with MS Mail Postoffice"
permalink: /kb/191/Q191913/
---

## Q191913: XCLN: Can't Send Internet/SMTP Mail with MS Mail Postoffice

	Article: Q191913
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a message to an Internet/SMTP address, you may receive a
	non-delivery report (NDR) from the System Administrator indicating that it was
	unable to deliver the message. Also, if you can receive messages from
	Internet/SMTP addresses, you may not be able to reply to the messages. The NDR
	has the following text:
	
	  No Gateway Installed.
	
	CAUSE
	=====
	
	This problem can be caused by the processing order of the Microsoft Mail and
	Internet Mail services in your profile.
	
	WORKAROUND
	==========
	
	To resolve this problem, do the following:
	
	1. Start Outlook.
	
	2. From the Tools menu, click Services. Note that this menu item will not be
	  available if you are in a message.
	
	3. Select the Delivery tab.
	
	4. Change the order of the information services. Typically, the Microsoft Mail
	  Transport is listed first, followed by the Internet Mail Transport. Change
	  the order, so that the Internet Mail Transport is listed first.
	
	MORE INFORMATION
	================
	
	Setting the processing order of services is necessary only if you have more than
	one information service that supports the same address type. For example, you
	may have Microsoft Exchange Server and then Internet Mail, in that order. Any
	message you send to an Internet recipient is processed and sent via Microsoft
	Exchange Server, because this service also supports Internet addresses. If you
	want all messages addressed to Internet recipients to be processed by the
	Internet Mail Service, move this service to the top of the list.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
