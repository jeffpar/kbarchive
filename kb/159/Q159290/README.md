---
layout: page
title: "Q159290: XFOR: Data Truncated in SMTP Protocol Log"
permalink: /kb/159/Q159290/
---

## Q159290: XFOR: Data Truncated in SMTP Protocol Log

	Article: Q159290
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you look at the SMTP protocol log for the Microsoft Exchange Internet Mail
	Connector (IMC), you may see that the data portion of a conversation is
	truncated.
	
	CAUSE
	=====
	
	The function calls being used to output the data to the log file have a buffer
	limited to 1024 bytes and first lines were not terminated with a new line
	parameter. For example, the function calls \*wvpsprintf() and wsprintf() have a
	buffer of only 1024 bytes.
	
	RESOLUTION
	==========
	
	Apply the fix referenced below. Function calls supporting larger buffer sizes
	are now used to output the data to the protocol log and first lines are now
	terminated with new lines. The function calls \* vsprintf() and sprint() are now
	used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
