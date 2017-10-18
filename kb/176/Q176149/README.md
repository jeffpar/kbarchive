---
layout: page
title: "Q176149: XADM: Store.exe Stops Unexpectedly When Handling Unicode Msg"
permalink: kb/176/Q176149/
---

## Q176149: XADM: Store.exe Stops Unexpectedly When Handling Unicode Msg

	Article: Q176149
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A message received or sent via the POP interface can cause Store.exe to generate
	an access violation error.
	
	CAUSE
	=====
	
	The problem occurs when Internet Mail (also known as IMAIL) incorrectly attempts
	to convert UNICODE text format messages with attachments.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
