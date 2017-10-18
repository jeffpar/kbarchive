---
layout: page
title: "Q178939: XADM: Language Not Maintained with Cyrillic (KOI8-R) Messages"
permalink: kb/178/Q178939/
---

## Q178939: XADM: Language Not Maintained with Cyrillic (KOI8-R) Messages

	Article: Q178939
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message written in a Cyrillic (KOI8-R) language, and then
	another person receives the message, the properties for the message may indicate
	that a different language was used. This problem frequently occurs when
	Microsoft Internet Explorer 4.0 is installed on the Microsoft Exchange Server
	computer.
	
	CAUSE
	=====
	
	Microsoft Exchange Server does not properly handle messages written in Cyrillic
	(KOI8-R) languages. The Cyrillic (KOI8-R) character set is installed by
	Microsoft Internet Explorer 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
