---
layout: page
title: "Q199192: XFOR:IMS Ignores MIME Settings for Specific Domains"
permalink: /kb/199/Q199192/
---

## Q199192: XFOR:IMS Ignores MIME Settings for Specific Domains

{% raw %}

	Article: Q199192
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Administrators may configure different MIME settings for specific e-mail domains
	in the Internet Mail Service properties by clicking the Internet Mail tab. Prior
	to Exchange Server 5.0 (that is, Exchange Server 4.0), all messages that were
	rerouted to those domains reflected the target domain's settings on the Internet
	Mail Service or Internet Mail Connector. Exchange Server 5.0 and Exchange Server
	5.5 no longer behave in this manner.
	
	CAUSE
	=====
	
	Both Exchange Server 5.0 and 5.5 now preserves message fidelity. If an SMTP
	message came in to the Internet Mail Service as MIME and is rerouted to another
	SMTP domain, the original message's encoding type takes precedence over any
	settings for that target domain. However, if a message originated from Exchange
	Server for that target domain, it would inherit the encoding settings configured
	by the administrator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0, 5.0, and 5.5 for Windows NT.
	
	MORE INFORMATION
	================
	
	Although this problem can be seen in Exchange Server versions 5.0 and 5.5, the
	root of the problem is Exchange Server 4.0 retaining the MIME settings.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
