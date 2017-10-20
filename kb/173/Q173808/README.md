---
layout: page
title: "Q173808: XADM: Cannot Log On If Mailbox Name Appears Anonymously"
permalink: /kb/173/Q173808/
---

## Q173808: XADM: Cannot Log On If Mailbox Name Appears Anonymously

{% raw %}

	Article: Q173808
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Administrators of Microsoft Exchange version 5.5 will find when they grant
	anonymous access to a mailbox with a specific account name and then revoke that
	same access, users will still not be able to log on to the specified mailbox.
	
	CAUSE
	=====
	
	This behavior is by design. The configuration is indicating that you should use
	account X as the anonymous account. Anonymous access for account X has been
	denied. The error received reflects this.
	
	WORKAROUND
	==========
	
	The workaround is to specify another name for the anonymous account.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	

{% endraw %}
