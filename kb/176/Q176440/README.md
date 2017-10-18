---
layout: page
title: "Q176440: XCON: Exchange Server MTA Blocked by Very Large Message"
permalink: kb/176/Q176440/
---

## Q176440: XCON: Exchange Server MTA Blocked by Very Large Message

	Article: Q176440
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server may stop delivering messages; no error messages
	appear. The message transfer agent (MTA) cannot be stopped by using the Control
	Panel. When you look at the MTA CPU time in Performance Monitor, it is
	constantly at 90 percent or more. After several hours, the MTA comes back to
	normal operation. This is caused by a very large message that corresponds with a
	large DAT file in the Exchsrvr\Mtadata directory.
	
	CAUSE
	=====
	
	The MTA is very busy while performing content conversion code when dealing with
	very large text message body-parts. The issue does not occur when processing
	messages with large attachments.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: stuck silent
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
