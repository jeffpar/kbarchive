---
layout: page
title: "Q199397: XFOR: POP3 Reply Address Contains Numerous Invalid Addresses"
permalink: /kb/199/Q199397/
---

## Q199397: XFOR: POP3 Reply Address Contains Numerous Invalid Addresses

{% raw %}

	Article: Q199397
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reply to a message sent from a POP3 client, the To field in the reply
	message may contain numerous recipient addresses. These address may be invalid
	but contain the proper SMTP format such as
	<user_name>@<domain_name>.com. However, the reply address does not
	contain the original POP3 sender address.
	
	CAUSE
	=====
	
	The POP3 sender has placed incorrect information, such as the user's residential
	address, in the Reply-to-address option in the POP3 client configuration.
	
	RESOLUTION
	==========
	
	Verify that the POP3 user has placed the proper e-mail address in the
	Reply-to-address option in the POP3 client configuration. To verify this
	information, on the Tools menu, click Accounts, click the Mail tab, select the
	account, and then click Properties. On the General tab there is a place to enter
	a reply address. This is the address that is creating a problem. If the POP3
	user has any question about what this value should be, he or she should contact
	his or her Internet service provider (ISP), or administrator. Removing the
	address should not create delivery problems.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
