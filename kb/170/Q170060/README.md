---
layout: page
title: "Q170060: XADM: Store Uses 100% of CPU on Incoming MIME Binhex Message"
permalink: kb/170/Q170060/
---

## Q170060: XADM: Store Uses 100% of CPU on Incoming MIME Binhex Message

	Article: Q170060
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience the information store service using 100 percent of the CPU
	(central processing unit) when processing a specific message coming from the
	Internet Mail Service.
	
	CAUSE
	=====
	
	This is caused by a MIME message with Content-Type = application/mac- binhex40.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
