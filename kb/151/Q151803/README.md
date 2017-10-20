---
layout: page
title: "Q151803: XADM: Setting Up Receive-Only Mailboxes"
permalink: /kb/151/Q151803/
---

## Q151803: XADM: Setting Up Receive-Only Mailboxes

{% raw %}

	Article: Q151803
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 18-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up a Microsoft Exchange mailbox so that it can
	receive messages but cannot send any mail.
	
	MORE INFORMATION
	================
	
	In the Microsoft Exchange Administrator program follow the steps below.
	
	1. Bring up the properties for the mailbox that needs to be set to "Receive
	  Only". To do this, click to select the mailbox, and then from the File menu,
	  click Properties.
	
	2. Go to the "Advanced Property" Page.
	
	3. In the "Message sizes" section, set "Max Outgoing size" to 0K.
	
	4. In the Information Store storage limits, set "Prohibit Send" to 0K.
	
	Now when the user tries to send a message, the following message will be
	displayed:
	
	  The item could not be sent. You have exceeded the storage limit on your
	  mailbox. Delete some mail from your mailbox or contact your system
	  administrator to adjust your storage limit.
	
	NOTE: This article is only valid for Exchange 4.0, 5.0, and 5.5 but not for
	Exchange 5.5 SP3 and SP4. In Exchange 5.5 SP3 and SP4 a value of 0 means "no
	size restriction".
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
