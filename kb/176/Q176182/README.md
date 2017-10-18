---
layout: page
title: "Q176182: XADM: Information Store Crash Due to Incorrect Caching"
permalink: kb/176/Q176182/
---

## Q176182: XADM: Information Store Crash Due to Incorrect Caching

	Article: Q176182
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Information Store may crash when rendering a UTF (unicode translation
	format) message with a One-Off reply address.
	
	CAUSE
	=====
	
	A call that is causing cache corruption by allowing buffer sizes to be set
	incorrectly may cause the information store to crash. The above occurs when
	using the POP3 or IMAP4 protocol.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	A fix to correct this problem has been included in Exchange Server version 5.5
	and will be included in Exchange Server version 5.0 SP2.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
