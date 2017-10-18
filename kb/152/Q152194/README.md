---
layout: page
title: "Q152194: Stop 0x0A When NWNBLNK Accesses Memory in Free Pool"
permalink: kb/152/Q152194/
---

## Q152194: Stop 0x0A When NWNBLNK Accesses Memory in Free Pool

	Article: Q152194
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Computers that use NWLink NetBIOS may experience blue stop screens with a
	bugcheck code of
	
	  0x0A: IRQL_NOT_LESS_OR_EQUAL.
	
	Examination of a crashdump, or a live debug, usually reveals that the exception
	occurred in function KeAcquireSpinLock called from function
	HandleConnectionZero, and is caused by NWLNKNB accessing memory that is either
	in free pool or which has been acquired by another process.
	
	
	CAUSE
	=====
	
	Due to incorrect synchronization logic, there is an exposure in NWNBLNK that
	causes a bugcheck when multiple requests are processed for the same NWNBLNK
	connection. If one of the requests is a disconnect, in some rare circumstances
	the disconnect is completed first, freeing the memory structure used for the
	NWNBLNK connection structure. When processing of the remaining requests resume,
	a Stop 0x0A results when attempting to access the now freed (and possibly
	reused) connection structure.
	
	Due to the nature of this problem it occurs very infrequently. When the problem
	does occur, it is most likely to be seen on faster computers, particularly on
	multi-processor computers, such as multi-processor DEC Alpha servers.
	
	RESOLUTION
	==========
	
	Apply the hotfix described below or upgrade to Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: 3.51 csnw nwcs gsnw prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
