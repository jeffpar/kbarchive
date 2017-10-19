---
layout: page
title: "Q166532: XFOR: Incorrect Codepage SJIS Used When JIS Set as Default"
permalink: /kb/166/Q166532/
---

## Q166532: XFOR: Incorrect Codepage SJIS Used When JIS Set as Default

	Article: Q166532
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Internet Mail Service (IMS) incorrectly uses the SJIS character set when
	encoding messages. The IMS incorrectly places the wrong character set
	information in the header of the MIME message generated and uses the SJIS
	character set instead of the JIS character set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
