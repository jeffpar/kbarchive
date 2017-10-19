---
layout: page
title: "Q175739: XCON: Failure Sending to Mailboxes in Nested Distribution Lists"
permalink: /kb/175/Q175739/
---

## Q175739: XCON: Failure Sending to Mailboxes in Nested Distribution Lists

	Article: Q175739
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When two Exchange Server sites are connected using an X.400 connector with no
	replication, sending mail to recipients that are in nested distribution lists
	may randomly fail. The Exchange Server computer sending mail will report
	directory errors, while the receiving Exchange Server computer reports ASN.1
	decoding errors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0 and 5.0 Service Pack 1. This problem was first corrected in
	Microsoft Exchange Server version 5.0 Service Pack 2. To resolve this problem,
	obtain and apply the Service Pack 2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
