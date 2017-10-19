---
layout: page
title: "Q187929: XCON: Recovery Checkpoint Size Different, MTA Connection Fails"
permalink: /kb/187/Q187929/
---

## Q187929: XCON: Recovery Checkpoint Size Different, MTA Connection Fails

	Article: Q187929
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the message transfer agent (MTA) on one Microsoft Exchange Server computer
	attempts to connect to the MTA on another Exchange Server computer, it proposes
	a particular checkpoint size. When the second MTA accepts the connection, it may
	propose a different checkpoint size. If the connection ends unexpectedly, the
	first MTA attempts to connect again. However, the second MTA may not propose the
	same checkpoint size that it originally proposed, even if the first MTA does.
	
	Note that if the first MTA established a monologue connection, the inconsistency
	between the original session protocol data unit (SPDU) and the recovery SPDU may
	prevent the first MTA from reconnecting after the original connection ends.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
