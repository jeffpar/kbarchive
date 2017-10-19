---
layout: page
title: "Q263898: XCON: E. European Extended Char. Lost in T.61 Content Conversion"
permalink: /kb/263/Q263898/
---

## Q263898: XCON: E. European Extended Char. Lost in T.61 Content Conversion

	Article: Q263898
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbExchange2000SP1Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Users on a client computer that has regional settings set to one of the Eastern
	European values (such as Hungarian, or Croatian) may see either missing
	characters, or the wrong characters, where they are expecting characters from
	the extended character set.
	
	CAUSE
	=====
	
	The message has arrived over an X.400 Connector from a system that has sent the
	message in a T.61 (Teletex) body part. The message transfer agent (MTA)
	conversion code translates characters only from Code Page 850 (Western European)
	in this body part, so characters from Code Page 852 (Eastern European) are not
	translated correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words: t61 teletex content conversion
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbExchange2000SP1Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
