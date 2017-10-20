---
layout: page
title: "Q254812: XADM: MTA Backlogs to Private and Public Information Store"
permalink: /kb/254/Q254812/
---

## Q254812: XADM: MTA Backlogs to Private and Public Information Store

{% raw %}

	Article: Q254812
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Message transfer agent (MTA) queues to the private or public information stores
	may increase during the day. The MTA does not stop delivering e-mail, but it is
	sluggish and only delivers approximately three to five messages each minute.
	
	This may happen randomly on servers throughout the organization. Performance
	improves when fewer users work on the server, usually later in the afternoon.
	The MTA queue clears within an hour of the close of business. The following day
	the affected server behaves normally. When the MTA queues are large, users may
	experience a delay in e-mail delivery (incoming e-mail messages), but outgoing
	e-mail messages are not affected.
	
	CAUSE
	=====
	
	This issue can occur because of a space tree issue. Exchange Server tries to
	coalesce a page that is being freed with one of the neighbors of the page and
	navigates thousands of empty btree pages when it does so.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue:
	
	1. Restart the server.
	
	2. Perform an offline defragmentation.
	
	3. Add more random access memory (RAM).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	This issue is a variation of a space tree issue. For additional information,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q230691 XADM: Space Tree Fragmentation in Exchange Database Engine Can
	  Degrade Server Performance
	
	  Q234702 XGEN: MTA Queue to Information Store Processing Slowly
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Component         : JET
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
