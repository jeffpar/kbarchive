---
layout: page
title: "Q260343: XCON: ContentReturnRequest Field Cannot Be Changed Across a Site"
permalink: /kb/260/Q260343/
---

## Q260343: XCON: ContentReturnRequest Field Cannot Be Changed Across a Site

{% raw %}

	Article: Q260343
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send an e-mail message across an Exchange Server site connector and
	request a delivery receipt, the delivery receipt is returned with the entire
	contents of the message. The entire contents of the message are returned back to
	the last message transfer agent (MTA). At this point the contents are stripped
	from the delivery receipt, and only the delivery receipt is sent to the sender.
	If a large number of messages that contain large attachments, for example, 10
	megabytes (MB) or larger, are sent across the site connector, MTA performance
	may slow.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	To work around this issue, replace the site connector with an X.400 connector.
	If you use an X.400 connector you can set the ContentReturnRequest flag to false
	by changing the heuristic bits. For additional information about how to set the
	ContentReturnRequest flag to false, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q151413 XCON: ContentReturn Requested by Default
	
	MORE INFORMATION
	================
	
	By default, the Exchange Server MTA sets ContentReturnRequest flags to true for
	all messages that travel across the site connector, which requests the return of
	the entire content of the messages.
	
	The PerMessageFlag of a message that the Exchange Server MTA sends is always
	constructed with the ContentReturnRequest field set to true. Therefore, any
	delivery receipt contains the content of the original message. You cannot
	configure the construction of the ContentReturnRequest field by using the
	Microsoft Exchange Server Administrator program or by using the client software
	for the messages that travel across the site connector.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
