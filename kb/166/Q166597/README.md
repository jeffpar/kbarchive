---
layout: page
title: "Q166597: XFOR: Outlook Chinese SFS Client Receives NDRs on Replies"
permalink: /kb/166/Q166597/
---

## Q166597: XFOR: Outlook Chinese SFS Client Receives NDRs on Replies

{% raw %}

	Article: Q166597
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Outlook client (Chinese edition) with the MS Mail
	service and reply to mail that you received from a U.S. Microsoft Exchange
	Server computer, a non-delivery report (NDR) will be generated as follows:
	
	  your message
	  ...
	  was not delivered for the following reasons:
	  Delivery Failed to MS:<NETWORK>/<PO>/<MAILBOX>
	  Reason: 0 (transfer failed)
	  diagnostic: -1 (no diagnostic)
	  MSEXCH:MSExchangeMTA:<Exchange Site>:<Exchange Server>
	
	WORKAROUND
	==========
	
	As a workaround to this problem, use the Microsoft Exchange client version 4.0
	or 5.0 (Chinese edition) with the MS Mail Service in lieu of the Outlook client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: xcln
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
