---
layout: page
title: "Q159187: XADM: French Extended Chars in Read Receipts Convert Incorrectly"
permalink: /kb/159/Q159187/
---

## Q159187: XADM: French Extended Chars in Read Receipts Convert Incorrectly

	Article: Q159187
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a French Microsoft Exchange client receives a message from an X.400 sender
	with a Read Notification request, the client returns a Read Receipt to the X.400
	sender containing the string
	
	  a (233)t(233) lu le
	
	in the field IM_SUPPLEMENTARY_RECIEPT_INFO, instead of
	
	  a ete lu le
	
	The accent marks are replaced by "(233)."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: accute ague grave
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
