---
layout: page
title: "Q159285: XFOR: Japanese Text in NDR from MS-Mail Is Replaced with &quot;?&quot;"
permalink: kb/159/Q159285/
---

## Q159285: XFOR: Japanese Text in NDR from MS-Mail Is Replaced with &quot;?&quot;

	Article: Q159285
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0, Japanese version 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article applies only to the Japanese version of Microsoft Exchange Server.
	In a Japanese computing environment, when you are using the Japanese version of
	the Microsoft Exchange Microsoft Mail Connector to send and receive mail
	messages between the Japanese versions of the Microsoft Mail for PC Networks
	version 3.5 postoffices, Japanese text in the non- delivery report (NDR) from
	Microsoft Mail postmaster is replaced with question marks.
	
	CAUSE
	=====
	
	The code page and language ID for the Japanese Microsoft Mail for PC Networks
	message transfer agent (PCMTA) is not set correctly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: NDR Japanese JPN DBCS
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHLangJapanese kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
