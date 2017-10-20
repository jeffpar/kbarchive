---
layout: page
title: "Q274601: XADM: Mailbox Manager Does Not Detect Hidden Mailboxes"
permalink: /kb/274/Q274601/
---

## Q274601: XADM: Mailbox Manager Does Not Detect Hidden Mailboxes

{% raw %}

	Article: Q274601
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mailbox Manager may not detect hidden mailboxes. For example, when you start the
	Microsoft Exchange Server Administrator program, open the properties for Mailbox
	Manager, click Policies, click Recipients, and then click Excluded Mailboxes, a
	list of mailboxes are displayed. When you click mailboxes in this list, Mailbox
	Manager does not process them. However, hidden mailboxes are not displayed in
	this list.
	
	CAUSE
	=====
	
	This issue can occur if Lightweight Directory Access Protocol (LDAP) is
	disabled.
	
	RESOLUTION
	==========
	
	To resolve this issue, enable LDAP.
	
	MORE INFORMATION
	================
	
	Mailbox Manager uses LDAP to query the directory to build the list of
	recipients. If LDAP is disabled, Mailbox Manager cannot resolve hidden
	mailboxes.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
