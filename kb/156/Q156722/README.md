---
layout: page
title: "Q156722: XCON: Invalid Parameters When Using X.121 Field in X.400 Address"
permalink: /kb/156/Q156722/
---

## Q156722: XCON: Invalid Parameters When Using X.121 Field in X.400 Address

	Article: Q156722
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem occurs when you send a message from Microsoft Exchange to a fax by
	means of an X.400 address (form 1 variant 3) such as the following:
	
	  C=FR;A=ATLAS;X.121=93312345678
	
	A non- delivery report (NDR) is returned from the remote X.400 system, with the
	following:
	
	  diagnostics = 11 : invalid parameters.
	
	Sending to X.121=93312345678 is correctly handled by remote systems.
	
	CAUSE
	=====
	
	In the first case, the P2 O/R name is incorrectly coded; it contains only
	C=FR;A=ATLAS. The X.121 field is missing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc55 
	Technology        : kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
