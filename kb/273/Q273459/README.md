---
layout: page
title: "Q273459: XADM: Cannot Give &quot;Send on Behalf Of&quot; Permissions to a DL"
permalink: /kb/273/Q273459/
---

## Q273459: XADM: Cannot Give &quot;Send on Behalf Of&quot; Permissions to a DL

{% raw %}

	Article: Q273459
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Exchange Server Administrator program to give "Send on Behalf
	Of" permissions and you click Modify, the global address list appears, however,
	no distribution lists appear.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	To grant "Send on Behalf Of" permissions to all users on a distribution list:
	
	1. In Outlook, log on to the mailbox to which you want to give access.
	
	2. On the Tools menu, click Options.
	
	3. On the Delegates tab, click Add.
	
	4. Click the distribution list to which you want to grant "Send on Behalf Of"
	  permissions, click Add, and then click OK.
	
	5. Choose the delegate permissions that you want, and then set Inbox to Author
	  or Editor for "Send On Behalf Of" permissions.
	
	6. Click OK, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
