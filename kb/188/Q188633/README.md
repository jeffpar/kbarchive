---
layout: page
title: "Q188633: XADM: Error 502: No Permissions When Accessing NNTP Server"
permalink: /kb/188/Q188633/
---

## Q188633: XADM: Error 502: No Permissions When Accessing NNTP Server

{% raw %}

	Article: Q188633
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to access an NNTP service provided on an Exchange Server computer,
	you may receive error 502: No permissions
	
	CAUSE
	=====
	
	The error has one of four possible causes:
	
	- Anonymous access is not enabled for the NNTP protocol.
	
	- The incorrect password has been entered.
	
	- The account used for validation has been incorrectly entered.
	
	- The account used for validation has a duplicate alias between multiple
	  mailboxes for mailbox and custom recipients.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- If anonymous access is not enabled for the NNTP protocol, grant anonymous
	  access.
	
	- If an incorrect password has been entered, verify and use the correct
	  password.
	
	- If the account used for validation has been incorrectly entered, verify and
	  use the correct account.
	
	- If the account used for validation has a duplicate alias between multiple
	  mailboxes for mailbox and custom recipients, change the alias used on the
	  custom recipient so that it does not match the alias on the mailbox.
	
	MORE INFORMATION
	================
	
	The No permissions error is caused by a problem with validation. During the
	validation process, the logon name is compared to the alias of a mailbox or
	custom recipient.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
