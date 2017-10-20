---
layout: page
title: "Q156570: XFOR: How to Prevent MSMail from Delivering to SMTP Addresses"
permalink: /kb/156/Q156570/
---

## Q156570: XFOR: How to Prevent MSMail from Delivering to SMTP Addresses

{% raw %}

	Article: Q156570
	Product(s): Microsoft Exchange
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT, versions 3.5, 3.51 
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send Internet (SMTP) mail using the Internet Mail service in
	a Microsoft Exchange client and you have Microsoft Mail with a LAN connection
	configured at the same time, your message will not stay at the Outbox until you
	force delivery via the Internet Mail service. Instead, you might receive a
	Non-Delivery Notification (NDN) from your Microsoft Mail Postoffice or the
	message will be delivered by Microsoft Mail via the configured gateway.
	
	CAUSE
	=====
	
	The problem occurs when the Microsoft Mail transport has been enabled to deliver
	to SMTP addresses through the mail gateway on the Microsoft Mail Server side.
	
	WORKAROUND
	==========
	
	To keep the Microsoft Mail transport from delivering the SMTP message and let
	the Internet Mail service deliver it via the Internet Service Provider, follow
	these steps:
	
	1. Double-click the Inbox icon on the desktop to start the Microsoft Exchange
	  client.
	
	2. From the Tools menu, click Services.
	
	3. Select Microsoft Mail from Services and click Properties.
	
	4. Select the Delivery tab and click Address Type.
	
	5. Clear SMTP checkbox under Only Send Mail to These Address Types.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
