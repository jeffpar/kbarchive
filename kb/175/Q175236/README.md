---
layout: page
title: "Q175236: XFOR: Failed Message Conversion Error on Inbound Messages"
permalink: /kb/175/Q175236/
---

## Q175236: XFOR: Failed Message Conversion Error on Inbound Messages

{% raw %}

	Article: Q175236
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Internet Mail Service may fail to convert an
	incoming internet mail message.
	
	CAUSE
	=====
	
	This problem can be caused by the Internet Mail Service receiving messages with
	wrapped mail message headers. When the Internet Mail Service unwraps these
	headers it removes all spaces. Although this conforms to RFC, this creates a
	message with an invalid message header and thus the message cannot be processed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  SERVPACK
	
	Additional query words: bounced message undeliverable mail
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
