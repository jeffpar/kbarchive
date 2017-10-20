---
layout: page
title: "Q152432: XFOR: Comments in SMTP Addresses Cause NDR when Replying"
permalink: /kb/152/Q152432/
---

## Q152432: XFOR: Comments in SMTP Addresses Cause NDR when Replying

{% raw %}

	Article: Q152432
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you receive an Internet message in a Microsoft Exchange client that has
	multiple comments on the Address line, an attempt to reply to this message will
	result in a Non-Delivery Receipt (NDR).
	
	MORE INFORMATION
	================
	
	RFC 822 allows parenthesis, enclosed comments, to be placed anywhere in the
	message header. If a message with multiple comments on the address line is sent
	from the Internet to a Microsoft Exchange client, only the first comment is
	stripped out. When you reply to this message, Microsoft Exchange will attempt to
	resolve the remainder of the address (including the comment) as a valid address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: IMC comment header RFC
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
