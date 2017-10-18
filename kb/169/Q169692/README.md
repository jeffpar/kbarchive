---
layout: page
title: "Q169692: XADM: Exchange PAB Allows Invalid X.400 Characters In DDA Fields"
permalink: kb/169/Q169692/
---

## Q169692: XADM: Exchange PAB Allows Invalid X.400 Characters In DDA Fields

	Article: Q169692
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When a new entry with an X.400 address type is added to the Personal Address Book
	(PAB) and a DDA value is included, invalid characters are accepted in the DDA
	Type and Value fields.
	
	CAUSE
	=====
	
	The filter string for these fields is set to "*" which allows all characters.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
