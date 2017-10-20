---
layout: page
title: "Q175499: XCON: NDR When Replying to Another Exchange Organization"
permalink: /kb/175/Q175499/
---

## Q175499: XCON: NDR When Replying to Another Exchange Organization

{% raw %}

	Article: Q175499
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you reply to a message sent from another Microsoft Exchange Organization or
	from another Site within the same Organization, you may immediately receive the
	following Non-Delivery Report (NDR) by the local Message Transfer Agent (MTA):
	
	  Your message did not reach some or all the intended recipients.
	  Subject:
	  Sent: (Date/Time>
	  The following recipient(s) could not be reached:
	  '' on date / time
	  The recipient name is not recognized
	  MSEXCH:MTA::
	
	CAUSE
	=====
	
	This behavior occurs when the two Microsoft Exchange Organizations are connected
	via the X.400 Connector, or when two Sites are connected via the X.400 Connector
	with the Address Space Tab configured, and have the Allow MSExchange Contents
	setting enabled.
	
	When a computer running Microsoft Exchange Server sends a message to another
	Exchange Server computer, the P1 for that message contains only the X500
	Distinguished Name (DN) for the recipient's address. When the recipient replies
	to the message, they reply to the DN of the message originator. However, in
	seperate Exchange Organizations, as well as two Sites configured with the
	Address Space Tab, this fails because the DN is only comprised of the
	Organization and Site names.
	
	WORKAROUND
	==========
	
	To work around this behavior, the administrator needs to go to the properties
	page for the X.400 connector that connects the two Exchange Organizations or
	Sites and do the following:
	
	1. Click the Advanced tab.
	
	2. Under X400 Link options, click to clear the Allow MSExchange Contents
	  setting.
	
	3. Restart the MTA Service.
	
	Now when messages are sent to the other Exchange Organization or Site, a content
	conversion occurs and the message P1 changes to a true X.400 O/R address that is
	properly handled by the other Exchange Organization or Site.
	
	Additional query words: metamorf allow ms exchange content conv p22 rtf mapi 290
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
