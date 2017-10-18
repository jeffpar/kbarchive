---
layout: page
title: "Q166607: XFOR:  JPN: Outbound MIME Message Has Incorrect Label"
permalink: kb/166/Q166607/
---

## Q166607: XFOR:  JPN: Outbound MIME Message Has Incorrect Label

	Article: Q166607
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	This occurs when you are using the Japanese version of Microsoft Exchange Client
	5.0. For outbound MIME messages, if the configured character set is a Windows
	code page, the wrong character set name is used in the MIME headers. The result
	is outbound Japanese MIME messages get labeled with incorrect character set
	names.
	
	CAUSE
	=====
	
	The problem is in the logic used to get the character set name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
