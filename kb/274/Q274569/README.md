---
layout: page
title: "Q274569: FIX: MTS or IIS w/ ODBC Connection Pooling Hangs If DB Unavail."
permalink: kb/274/Q274569/
---

## Q274569: FIX: MTS or IIS w/ ODBC Connection Pooling Hangs If DB Unavail.

	Article: Q274569
	Product(s): Internet Information Server
	Version(s): WINDOWS:2.1 SP2; winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Transaction Server 2.0 
	- Microsoft Data Access Components version 2.1 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When ODBC connection pooling is enabled, if database servers are down or
	unavailable due to network connectivity issues, Internet Information Server
	(IIS) or Microsoft Transaction Server (MTS) may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior is caused by a bug in the resource dispenser (Mtxdm.dll). The
	threads that perform connection pooling wait for the ODBC thread that is trying
	to perform an ODBC call, which results in a deadlock condition.
	
	
	RESOLUTION
	==========
	
	The resource dispenser has been modified to resolve this problem. To obtain the
	corrected version of Mtxdm.dll, install Microsoft Data Access Components (MDAC)
	version 2.5 or later from the following Microsoft Web Site:
	
	  http://www.microsoft.com/data (http://www.microsoft.com/data)
	
	You can also obtain this fix by installing Microsoft Windows NT 4.0 Service Pack
	6a or later. For more information, see the following Web site:
	
	  http://www.microsoft.com/ntserver/ (http://www.microsoft.com/ntserver/)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in MDAC version 2.5 and later, and in Windows NT
	4.0 Service Pack 6a and later.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbMTSsearch kbiisSearch kbAudDeveloper kbiis400 kbMDACSearch kbMDAC210SP2 kbMTS200
	Version           : WINDOWS:2.1 SP2; winnt:2.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
