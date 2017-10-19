---
layout: page
title: "Q166590: XCLN: Searching for Manager Produces MAPI Error"
permalink: /kb/166/Q166590/
---

## Q166590: XCLN: Searching for Manager Produces MAPI Error

	Article: Q166590
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If no manager is set for a particular recipient, when a messaging developer
	tries to obtain a recipient's manager, the following error occurs:
	
	  MAPI_E_NOT_FOUND
	
	An empty value should be returned.
	
	The problem occurs when a messaging developer runs the Microsoft Visual Basic 5.0
	Active Messaging Autotest Script on Microsoft Exchange Server 5.0 build 1558 (as
	declared in Help About).
	
	RESOLUTION
	==========
	
	With the release of Service Pack 1, Microsoft will check for MAPI_E_NOT_FOUND
	and shadow it to return success. Because the return value for the object is
	initialized to NULL at the outset, the result returned will be empty.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbExchangeActiveServComp500
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
