---
layout: page
title: "Q285788: Mailbox Resources Display &quot;total k&quot; and &quot;total items&quot; Columns"
permalink: /kb/285/Q285788/
---

## Q285788: Mailbox Resources Display &quot;total k&quot; and &quot;total items&quot; Columns

{% raw %}

	Article: Q285788
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On the Mailbox Resource tab in the private information store properties,
	Internet Mail Services may contain a large number in the "total K" column.
	However, if you view the Mailbox Resources container under Private Information
	Store, Internet Mail Services has 0 in the "total k" column.
	
	CAUSE
	=====
	
	When Admin.exe needs to display the mailbox size for the connector's mailbox, a
	Messaging Application Programming Interface (MAPI) property PR_EMAIL_ADDRESS is
	used to obtain the mailbox name. This problem can occur if the mailbox is an
	Internet Mail Service mailbox; Admin.exe ignores the size of the mailbox because
	the size is a useless number. Unfortunately, the PR_EMAIL_ADDRESS property is
	not included (by default) when constructing the query property array, so
	Admin.exe does not realize that the mailbox is a connector mailbox and displays
	the mailbox's size.
	
	WORKAROUND
	==========
	
	To work around this problem, add the "Full mailbox Directory Name" column to the
	display header.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
