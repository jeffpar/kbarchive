---
layout: page
title: "Q190128: XCLN: Messages with Attachments Sent over IMS, Attachments Move"
permalink: /kb/190/Q190128/
---

## Q190128: XCLN: Messages with Attachments Sent over IMS, Attachments Move

{% raw %}

	Article: Q190128
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,95,98; winnt:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Outlook 98, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user sends a message with an attachment embedded in the text through the
	Internet Mail Service (Internet Mail Connector in Exchange Server 4.0), when the
	message is received, the attachment moves to either the top or the bottom of the
	message depending on the client. In the Microsoft Outlook client, the attachment
	will be located at the bottom of the received message with all the text above
	it. When you open the same message in the Microsoft Exchange 5.0 Client, the
	attachment is located above the text. Moreover, when the message received in the
	Outlook client is printed, the attachment moves to the top of the message with
	the text below it.
	
	WORKAROUND
	==========
	
	If the received message has an attachment, have the recipients look both at the
	top and the bottom of the messages for the attachments.
	
	STATUS
	======
	
	This is by design. It is the default behavior of the Microsoft Exchange and
	Microsoft Outlook clients for messages received through the Internet Mail
	Service. The only way to preserve attachment position at this time is with TNEF
	(Transport Neutral Encoding Format).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,95,98; winnt:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
