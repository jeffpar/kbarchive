---
layout: page
title: "Q236601: XADM: Notes Proxy Address Generation Fails on Extended Chars"
permalink: /kb/236/Q236601/
---

## Q236601: XADM: Notes Proxy Address Generation Fails on Extended Chars

{% raw %}

	Article: Q236601
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The generation of the Lotus Notes proxy address for names containing the
	following characters
	
	- Unicode 0161: Small s with v-sign above
	- Unicode 017d: Capital Z with v-sign above
	
	fails with the event ID:
	
	  Event ID: 6
	  Source: NOTESProxy
	  Description: Email Address Generation Failure: The email address specified
	  (<address>) contains illegal characters.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
