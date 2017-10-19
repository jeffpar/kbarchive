---
layout: page
title: "Q181931: XADM: Information Store Crashes in JetMove"
permalink: /kb/181/Q181931/
---

## Q181931: XADM: Information Store Crashes in JetMove

	Article: Q181931
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange information store may stop unexpectedly and record the
	following error in the Application event log:
	
	  2/6/98  6:33:11  DrWatson  Information  None  4097  N/A
	  The application, exe\store.dbg, generated an application error. The
	  error occurred on 2/6/1998 @ 3:33:10.437 The exception generated was
	  c0000005 at address 6fe951f0 (JetMove)
	
	
	CAUSE
	=====
	
	A page at an internal level of the Exchange database engine b-tree became
	corrupted. This prevents the information store from successfully starting and
	prevents the Exchange Information Store Integrity Checker (Isinteg.exe) from
	completing successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Isinteg.exe has been strengthened to avoid the crash.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
