---
layout: page
title: "Q162354: XADM: DS_E_COMMUNICATIONS_PROBLEM Running ISINTEG -PATCH"
permalink: /kb/162/Q162354/
---

## Q162354: XADM: DS_E_COMMUNICATIONS_PROBLEM Running ISINTEG -PATCH

	Article: Q162354
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0 5.0 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Microsoft Exchange Information Store Integrity Checker
	(Isinteg.exe) with the -PATCH option, the following error message appears:
	
	  The private store could not be updated.
	  Reason : DS_E_COMMUNICATIONS_PROBLEM
	
	RESOLUTION
	==========
	
	To resolve this problem, start the Microsoft Exchange Server Directory Service.
	This service is required when running Isinteg.exe with the -PATCH option.
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0 5.0 5.5
	
	=============================================================================
	
