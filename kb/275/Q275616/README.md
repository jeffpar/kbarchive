---
layout: page
title: "Q275616: XCON: Messages Are Lost When Domain Controller Is Unavailable"
permalink: /kb/275/Q275616/
---

## Q275616: XCON: Messages Are Lost When Domain Controller Is Unavailable

{% raw %}

	Article: Q275616
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you attempt to send messages through an Exchange Server 5.5 computer, and the
	domain controller becomes unavailable in the domain in which the Exchange Server
	5.5 computer is a member, some of the messages may be lost. When this problem
	occurs, you do not receive a non-delivery report (NDR), and the messages are
	never delivered.
	
	CAUSE
	=====
	
	This problem occurs when the message transfer agent (MTA) cannot obtain the
	information it needs to deliver the messages from the directory service. The
	domain controller must be available for the MTA to obtain this information.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
