---
layout: page
title: "Q190708: XFOR: Internet Mail Service Is Not Copying Administrator on NDRs"
permalink: /kb/190/Q190708/
---

## Q190708: XFOR: Internet Mail Service Is Not Copying Administrator on NDRs

{% raw %}

	Article: Q190708
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message through the Internet Mail Service, with a bad SMTP
	address, the receiving host may respond with a "550"' error after the RCPT TO:
	command is sent (RFC-821). The Internet Mail Service then generates a
	non-delivery report (NDR) and sends it to the user. This NDR is not copied to
	the Administrator mailbox, even though the notifications button on the Internet
	Mail Service is set to "All."
	
	Examples of NDRs that do make it to the Administrator mailbox include the
	following:
	
	- Unbalanced open & closed brackets
	
	- Host unknown
	
	- Max time for delivery expired
	
	NOTE: This may not be a complete listing and is subject to change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
