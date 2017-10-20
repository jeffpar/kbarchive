---
layout: page
title: "Q259146: XCON: MTA Slow When Sending to Multiple Servers in the Same Site"
permalink: /kb/259/Q259146/
---

## Q259146: XCON: MTA Slow When Sending to Multiple Servers in the Same Site

{% raw %}

	Article: Q259146
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you apply Exchange Server 5.5 Service Pack 3 to an Exchange Server
	computer in a large multiserver (larger than six servers) site, the time that it
	takes to deliver mail to recipients on different servers may increase
	dramatically.
	
	CAUSE
	=====
	
	This issue can occur because a previous fix in build 2576 of the message
	transfer agent (MTA) introduces a blocking issue that negatively affects mail
	delivery performance.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
