---
layout: page
title: "Q154537: XCON: Congestion in Message Transfer Service, Sending to DL"
permalink: /kb/154/Q154537/
---

## Q154537: XCON: Congestion in Message Transfer Service, Sending to DL

{% raw %}

	Article: Q154537
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sending a message to a Distribution List the client receives the following
	Undeliverable Message:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: Message Subject.
	  Sent: 8/8/96 6:49:59 AM
	
	  The following recipient(s) could not be reached:
	
	  <DL Name> on 8/8/96 6:50:00 AM
	  The recipient could not be processed due to congestion in the message transfer
	  service MSEXCH:MSExchangeMTA:<Site>:<Server_Name>
	
	CAUSE
	=====
	
	This error occurs if you send a message to a Distribution List that has no
	Expansion Server defined. By default "Any Server in Site" is set for the
	expansion server. If you define a specific server as the Distribution List's
	Expansion Server, and then delete that Server from the Site, the result is that
	the Expansion Server entry on the General Properties page will become blank.
	When the message transfer agent (MTA) attempts to determine which Exchange
	Server is the Expansion Server for the Distribution List it does not find an
	entry, resulting in the above error.
	
	WORKAROUND
	==========
	
	To correct this problem,
	
	1. Select the Distribution List, and select Properties on the File menu.
	
	2. On the General tab, there is an Expansion Server list box. From the list box
	  select a new Expansion Server.
	
	
	Additional query words: NDR MTA
	
	======================================================================
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
