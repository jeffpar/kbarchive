---
layout: page
title: "Q194163: E-mail Sent Using MSN Is Not Delivered"
permalink: /kb/194/Q194163/
---

## Q194163: E-mail Sent Using MSN Is Not Delivered

{% raw %}

	Article: Q194163
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use MSN, The Microsoft Network, to send an e-mail message, the message
	may not be delivered, and you may not receive a "message was not delivered"
	administrative e-mail message.
	
	CAUSE
	=====
	
	This behavior can occur if the e-mail address you type in the From box is not an
	MSN e-mail address.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure your e-mail program to use an MSN e-mail
	address. To do this, use the appropriate method for your e-mail program.
	
	Microsoft Outlook Express and Microsoft Outlook 98 (IMO)
	--------------------------------------------------------
	
	1. Start Outlook Express or Outlook 98.
	
	2. On the Tools menu, click Accounts.
	
	3. On the Mail tab, click MSN Mail, and then click Properties.
	
	4. On the General tab, type the following line in the E-mail Address box
	
	  "<username>@email.msn.com" (without the quotation marks)
	
	  where <username> is your MSN Member ID.
	
	5. If you want replies to your messages to be received at a different e-mail
	  address, type that address in the Reply Address box.
	
	Microsoft Outlook 97 (with IMEP) and Outlook 98 (CW)
	----------------------------------------------------
	
	1. Start Outlook 97 or Outlook 98.
	
	2. On the Tools menu, click Services.
	
	3. Click Internet E-mail, and then click Properties.
	
	4. On the General tab, type the following line in the E-mail Address box
	
	  "<username>@email.msn.com" (without the quotation marks)
	
	  where <username> is your MSN Member ID.
	
	5. If you want replies to your messages to be received at a different e-mail
	  address, type that address in the Reply Address box.
	
	MORE INFORMATION
	================
	
	All MSN e-mail servers now use anti-spam filters to check the From line on all
	outbound e-mail messages. If the e-mail address on this line is not a valid MSN
	e-mail address, the e-mail server discards the message and does not notify the
	sender.
	
	Additional query words: msnetwork microsoft-net outexw95 ol97 ol98
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbMSNSearch kbMSN250
	Version           : WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
