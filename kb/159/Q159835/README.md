---
layout: page
title: "Q159835: XFOR: Exchange IMC Sends Unwanted Notifications"
permalink: /kb/159/Q159835/
---

## Q159835: XFOR: Exchange IMC Sends Unwanted Notifications

{% raw %}

	Article: Q159835
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Internet Mail Connector (IMC) may send
	notifications of non-delivery reports (NDRs) to the postmaster even if the
	particular notification is not selected.
	
	If all notifications except for "Message conversion failed" are selected,
	notifications for this particular NDR will still be sent to the postmaster.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Set up an "Inbox Assistant" rule to automatically delete the notifications
	  for "Message conversion failed" NDRs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
