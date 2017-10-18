---
layout: page
title: "Q255697: XADM: How to Forward Mail from Exchange Mailbox to POP3 Address"
permalink: kb/255/Q255697/
---

## Q255697: XADM: How to Forward Mail from Exchange Mailbox to POP3 Address

	Article: Q255697
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 09-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to forward e-mail messages from an Exchange Server
	mailbox to a Post Office Protocol (POP3) address by using the Exchange
	Administrator program. As an administrator, you can forward messages from a
	particular mailbox to a POP3 mail account (or another type of mail account) by
	using the custom recipient option.
	
	This article also describes how to hide the custom recipient from the global
	address list.
	
	MORE INFORMATION
	================
	
	To forward mail from an Exchange mailbox to a hidden custom recipient:
	
	1. Create a custom recipient that maps to the user's alias on the foreign mail
	  server. For example, create a custom recipient with a Simple Mail Transfer
	  Protocol (SMTP) address in the following format:
	
	  <Name>@microsoft.com
	
	2. In the properties of the native Exchange Server recipient mailbox, click the
	  Modify button in the Alternate Recipients section on the Delivery Options
	  tab.
	
	3. Click the custom recipient that you created in step 1, and then click OK. You
	  can also click to select the "Deliver messages to both recipient and
	  Alternate recipient" check box.
	
	4. To hide the custom recipient from the global address list, select the custom
	  recipient in the Exchange Administrator program, open the custom recipient's
	  properties, click to select the "Hide from address book" check box, and then
	  click OK.
	
	5. If you have more than one e-mail address you want to have e-mails forwarded
	  to; you need to create a Distribution List (DL) in Exchange 5.5, or a Global
	  Distribution Group in Exchange 2000, and then add all of the e-mail addresses
	  you want e-mail forwarded to, to the new DL or Group.
	
	When you hide the custom recipient from the global address list, the custom
	recipient does not appear and cannot be selected in the global address list. Any
	mail sent to the Exchange Server mailbox is copied and forwarded to the
	alternate recipient (the user's POP3 mailbox).
	
	Additionally, when you hide the custom recipient from the global address list,
	the user can change their POP3 account without requiring Microsoft Outlook users
	to update their Contact information. To do this, modify the e-mail address that
	is assigned to the custom recipient.
	
	Additional query words: forward
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
