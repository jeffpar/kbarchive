---
layout: page
title: "Q141271: XADM: Changing Recipient Alias Does Not Change Proxy"
permalink: /kb/141/Q141271/
---

## Q141271: XADM: Changing Recipient Alias Does Not Change Proxy

{% raw %}

	Article: Q141271
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Server Administrator program to change the
	alias of a recipient, the e-mail address associated with that mailbox is not
	changed.
	
	WORKAROUND
	==========
	
	You can create a new proxy address for the recipient in question, while keeping
	the old address active.
	
	MORE INFORMATION
	================
	
	The functionality to automatically change e-mail addresses is not available in
	Microsoft Exchange Server. After an e-mail address has been assigned for a
	particular recipient, it will remain until the Administrator explicitly changes
	it.
	
	Additional query words: aliasing
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
