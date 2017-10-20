---
layout: page
title: "Q188979: XADM: NDR When Sending to Recipient From Offline Address Book"
permalink: /kb/188/Q188979/
---

## Q188979: XADM: NDR When Sending to Recipient From Offline Address Book

{% raw %}

	Article: Q188979
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you work offline and send a message to a recipient selected from the
	Offline Address Book, you may receive a systematic Non Delivery Report for a
	specific recipient:
	
	  No transport provider was available for delivery to this recipient
	
	CAUSE
	=====
	
	Duplicate alias names cannot occur inside an Exchange Server site; however, they
	can occur inside an Exchange Server organization, causing the NDR above.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	
	Additional query words: OAB
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
