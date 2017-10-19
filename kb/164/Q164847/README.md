---
layout: page
title: "Q164847: XCON: Win95 Client w/ Mail Service Won't Prompt for RAS Callback"
permalink: /kb/164/Q164847/
---

## Q164847: XCON: Win95 Client w/ Mail Service Won't Prompt for RAS Callback

	Article: Q164847
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Microsoft Exchange Client on a computer running Windows 95 with a
	profile configured to be offline and to use the Microsoft Mail Service, you are
	correctly prompted for a callback number the first time you dial up to a RAS
	server from your Microsoft Exchange Client.
	
	However, for the next connections, the Microsoft Exchange Client automatically
	uses the previous callback number without prompting you to confirm or to modify
	the phone number.
	
	This problem may be an issue for field people with laptop computers that run
	Microsoft Exchange Client offline and want to use callback functionality from
	different locations each time.
	
	This problem only occurs on computers running Windows 95, and not on computers
	running Windows NT Workstation.
	
	This problem only occurs with the Microsoft Mail Service, and not when connecting
	to a computer running Microsoft Exchange Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem was corrected in the latest Microsoft
	Exchange Server 4.0 and 5.0 U.S. Service Packs. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
