---
layout: page
title: "Q175203: XWEB: Pine 3.96 Cannot Handle IMAP DRAFT Flag"
permalink: /kb/175/Q175203/
---

## Q175203: XWEB: Pine 3.96 Cannot Handle IMAP DRAFT Flag

{% raw %}

	Article: Q175203
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When users and administrators of Microsoft Exchange Server version 5.5 run the
	Pine IMAP client version 3.96 against an Exchange Server computer, any message
	with the IMAP \Draft flag set will present the following error:
	
	  Unknown system flag: \DRAFT
	
	This error is repeated for every message with the \Draft flag attached.
	
	CAUSE
	=====
	
	The Pine IMAP client version 3.96 is unable to interpret the \Draft flag.
	
	WORKAROUND
	==========
	
	To work around this problem, upgrade to version 4.0 of the Pine IMAP client.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
