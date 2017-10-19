---
layout: page
title: "Q199914: XADM:  ESE Will not Retry Operations during ESEUTIL /G"
permalink: /kb/199/Q199914/
---

## Q199914: XADM:  ESE Will not Retry Operations during ESEUTIL /G

	Article: Q199914
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When the Exchange Database Engine encounters a read verification failure,
	referred to as an -1018 error, (in accordance with Knowledge Base article
	Q151789, XADM: Error -1018 (JET_errReadVerifyFailure)), it will now retry to
	successfully read the page a maximum of 16 times. This is a new feature of the
	Exchange Database Engine, referred to as "ESE," and was introduced in build
	5.5.2395.0 of Ese.dll.
	
	However, when using ESEUTIL to perform an Integrity Check (ESEUTIL /G), retry
	operations are not performed if the Exchange Database Engine encounters a read
	verification failure. If ESE retries to read the page it originally failed on
	(when running either Repair or Integrity Check), the length of time to run
	ESEUTIL increases dramatically.
	
	MORE INFORMATION
	================
	
	Retry operations will occur when running ESEUTIL in either Repair (/P) or
	Integrity Check (/G) modes using a build of Ese.dll between 5.5.2395.0 and (but
	not including) 5.5.2416.0.
	
	However, because Ese.dll build 5.5.2416.0 retry operations are not performed if
	the Exchange Database Engine encounters a read verification failure during
	ESEUTIL in either Repair (/P) or Integrity Check (/G) modes, this version of
	Ese.dll is included with Microsoft Exchange Server 5.5 Service Pack 2.
	
	For additional information about the retry functionality in Ese.dll, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q197060 XADM: JET Retry Hotfix Makes Repair (ESEUTIL /P) Very Slow
	
	Additional query words: jet re-read sixteen
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
