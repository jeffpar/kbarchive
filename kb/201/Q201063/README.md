---
layout: page
title: "Q201063: XADM: Advanced Security Only Available for Mailboxes in Exchange"
permalink: /kb/201/Q201063/
---

## Q201063: XADM: Advanced Security Only Available for Mailboxes in Exchange

{% raw %}

	Article: Q201063
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you enroll Exchange Server users in Advanced Security using the Bulk
	Enrollment option in the Microsoft Exchange Server Administrator program, tokens
	are only assigned to valid Exchange Server mailboxes within the specified
	container.
	
	MORE INFORMATION
	================
	
	If there are custom recipients, public folders, or distribution lists in the
	selected container, they will not be assigned a token for the setup of Advanced
	Security. This is by Exchange Server design. Exchange Server mailboxes are the
	only objects the Exchange Key Management Server will enroll in Advanced
	Security.
	
	Additional query words: kms dl cr pf certificate authority ca certserv digital sig signature encryption
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
