---
layout: page
title: "Q152930: XCON: IMC Might Stop if RFC 821 From Address is &gt; 64 Characters"
permalink: /kb/152/Q152930/
---

## Q152930: XCON: IMC Might Stop if RFC 821 From Address is &gt; 64 Characters

{% raw %}

	Article: Q152930
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Connector will stop when it receives incoming mail if the RFC
	821 "from" address is longer than 64 characters and there is no RFC 822 "from"
	address.
	
	CAUSE
	=====
	
	If the message does not have an RFC 822 "from" address, the IMC will only
	allocate 64 characters in which to save the RFC 821 "from" address. If the
	message contains an RFC 821 "from" address that is longer than 64 characters,
	the IMC will stop in the middle of the SMTP conversation.
	
	MORE INFORMATION
	================
	
	If the message has an RFC 822 address, the IMC will not stop if the length of
	the RFC 821 "from" address is longer than 64 characters.
	
	The RFC 821 "from" address is the address after the "MAIL FROM" command in an
	SMTP conversation. The RFC 822 "from" address is the address in the message
	headers, after the "From:" header.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
