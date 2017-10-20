---
layout: page
title: "Q184991: XFOR: Embedded Message Title Line Truncated to 30 Chars"
permalink: /kb/184/Q184991/
---

## Q184991: XFOR: Embedded Message Title Line Truncated to 30 Chars

{% raw %}

	Article: Q184991
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 13-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you send a message from Exchange Server to Lotus cc:Mail with an embedded
	message that contains a message subject line longer than 30 characters, the
	subject line will be truncated. The subject (of the parent message) is seen in
	the item's title in cc:Mail, as truncated after the thirtieth character.
	
	MORE INFORMATION
	================
	
	This truncation is by design. Exchange Server does not add ellipses when it
	truncates the parent subject to indicate the text is actually longer than it
	appears. However the message body will still contain the original message
	subject (up to 60 characters).
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
