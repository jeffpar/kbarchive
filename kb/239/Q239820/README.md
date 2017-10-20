---
layout: page
title: "Q239820: XADM: MTA Queue Message Time Ahead One Hour Following DST Change"
permalink: /kb/239/Q239820/
---

## Q239820: XADM: MTA Queue Message Time Ahead One Hour Following DST Change

{% raw %}

	Article: Q239820
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp2 exc55sp3
	Last Modified: 17-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With Exchange Server 5.5 Service Pack 2 (SP2), post-SP2 fixes, and Service Pack
	3, the message transfer agent (MTA) queues may show the message submit time as
	one hour ahead of the actual submit time after the local Daylight Saving time
	(DST) changeover occurs.
	
	This is only visible when you are monitoring MTA queues with the Exchange Server
	Administrator program. It does not affect message delivery nor client message
	information.
	
	WORKAROUND
	==========
	
	Cycling (stopping and restarting) the MTA following DST changeover causes the
	Administrator program to display the correct submit time for messages in MTA
	queues.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: daylight DST time timestamp
	
	======================================================================
	Keywords          : exc55sp2 exc55sp3 
	Component         : Admin MTA
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
