---
layout: page
title: "Q214559: XADM: Clients Hang Using the Offline Address Book"
permalink: /kb/214/Q214559/
---

## Q214559: XADM: Clients Hang Using the Offline Address Book

{% raw %}

	Article: Q214559
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you address a message to a recipient selected from the offline address book
	when the message is sent, your computer may stop responding (hang).
	
	CAUSE
	=====
	
	Corruption in the offline address book can cause this. When the client looks for
	the e-mail address of the user specified in the address book, it will not find
	it and then tries re-reading the file continuously. This causes the computer to
	stop responding.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Directory
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Emsabp32.dll | 5.5.2502.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
