---
layout: page
title: "Q174059: XADM: Cannot Create Custom Recipient with ^ as First Character"
permalink: /kb/174/Q174059/
---

## Q174059: XADM: Cannot Create Custom Recipient with ^ as First Character

	Article: Q174059
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you try to create a custom Internet address with a caret (^) as the first
	character, the caret is not handled correctly. It is deleted upon validation.
	
	CAUSE
	=====
	
	This is caused by a mapping error in the character translation table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	
	=============================================================================
	
