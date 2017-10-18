---
layout: page
title: "Q183605: XADM: Access Violation in Store.exe"
permalink: kb/183/Q183605/
---

## Q183605: XADM: Access Violation in Store.exe

	Article: Q183605
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Store.exe suddenly stops with an access violation. If Dr. Watson is active as
	the default debugger, then a Dr. Watson log and a User.dmp (if configured to
	create a User.dmp) may be produced.
	
	
	CAUSE
	=====
	
	In very rare circumstances, it is possible that two threads can gain access to
	the same lock. This can cause problems for the second thread when it attempts to
	access the memory held by the lock after the first thread frees the lock.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information about obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: av crash dump
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
