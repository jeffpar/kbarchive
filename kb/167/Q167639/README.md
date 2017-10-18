---
layout: page
title: "Q167639: XFOR: MSMI Reports Warning 2597 About Un-installed Codepage"
permalink: kb/167/Q167639/
---

## Q167639: XFOR: MSMI Reports Warning 2597 About Un-installed Codepage

	Article: Q167639
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Mail Connector interchange (MSMI) may report the following warning
	when delivering mail:
	
	  EventID   2597
	  Source    MSExchangeMSMI
	  Type      Warning
	  Category  Session Warning
	
	  A message arrived with some information in Codepage 20301.
	  This message will be passed along with some loss of information.
	  To fix this check that Codepage 20301 is installed properly.
	
	Typically, no loss of data occurs; however, it is possible some characters may
	not be translated correctly in a received message. The code page referenced is
	not a valid code page, and may not always be 20301.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.0.
	This problem was corrected in the latest Microsoft Exchange Server 5.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: MSMI 20301 2597 codepage
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
