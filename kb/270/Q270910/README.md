---
layout: page
title: "Q270910: XCON: NDR Says Recipient Not Recognized When Large Message Sent"
permalink: /kb/270/Q270910/
---

## Q270910: XCON: NDR Says Recipient Not Recognized When Large Message Sent

{% raw %}

	Article: Q270910
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After a user attempts to send an e-mail message over an X.400 Connector, the
	user may receive a non-delivery report (NDR) that contains the following text:
	
	  The recipient name is not recognized.
	
	The X.400 Connector has a size-limit restriction that is set lower than the size
	of the sent message. In this case, the NDR should state that the message is too
	large, not that the recipient is not recognized.
	
	CAUSE
	=====
	
	This issue can occur if the message transfer agent (MTA) is build number
	5.5.2651.92 or later.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	
	Additional query words: recipient-not-recognised size
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
