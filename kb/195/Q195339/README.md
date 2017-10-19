---
layout: page
title: "Q195339: Stop 0xa Using NetSupport PC-Duo"
permalink: /kb/195/Q195339/
---

## Q195339: Stop 0xa Using NetSupport PC-Duo

	Article: Q195339
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer running Windows NT and NetSupport PC-Duo, the system fails with a
	STOP 0x0000000A. This STOP error may happen even when you have not used PC-Duo
	for a while.
	
	CAUSE
	=====
	
	GDIHOOK is a kernel-mode driver installed by PC-Duo. Gdihook4.dll allocates a
	mutex in paged memory. After several days of (remote control) inactivity, or
	less on a computer that is short of memory, the mutex can be paged out of
	physical memory. If Gdihook4 then attempts to access the mutex from a high IRQL,
	the system will be forced to STOP.
	
	
	RESOLUTION
	==========
	
	This problem has been fixed in later versions of PC-Duo. The current release,
	v3.72, has been tested with Windows NT 3.51 SP5, Windows NT 4.0, and Windows NT
	4.0 SP1, SP2, and SP3. Support for Windows NT 3.50 was withdrawn after v3.60.
	The product is available in Germany under the name REMCON PC-Duo.
	
	NOTE: To deactivate PC-Duo, it is not sufficient to disable the Client32 service.
	The problem described here is caused by a kernel-mode driver that can only be
	removed by completely uninstalling the product.
	
	
	MORE INFORMATION
	================
	
	The product included here is manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: pc duo pc-duo remote stop 0xa gdihook4
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
