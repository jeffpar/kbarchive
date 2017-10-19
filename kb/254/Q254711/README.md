---
layout: page
title: "Q254711: XADM: Certificate Renewal Occurs Right After Clicking Renew All"
permalink: /kb/254/Q254711/
---

## Q254711: XADM: Certificate Renewal Occurs Right After Clicking Renew All

	Article: Q254711
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you click Renew All on an Exchange Server 5.5 Key Management (KM) server,
	the action happens immediately. The option is tied to a function that sets an
	attribute value to true (for each mailbox).
	
	MORE INFORMATION
	================
	
	The client is not fully renewed until it performs some type of secure operation.
	It is also recommended that after you click Renew All, send a secure e-mail
	message to all users who have had their certificate renewed.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
