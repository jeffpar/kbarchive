---
layout: page
title: "Q152953: XADM: SMTP Proxy Generation Fails After 21st Address"
permalink: kb/152/Q152953/
---

## Q152953: XADM: SMTP Proxy Generation Fails After 21st Address

	Article: Q152953
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the process of proxy generation, the following error message may appear:
	
	  238 The e-mail address specified for import object PJV22 is not unique. SMTP
	  has already been assigned to Address book entry %3.
	
	CAUSE
	=====
	
	There are more than 21 aliases with identical values (for example PJV, or
	adminsch). There is a limit to the number of SMTP proxies created; SMTP proxies
	are created only for the first 21 aliases.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: SMTP
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
