---
layout: page
title: "Q165429: Stop 0x0000001E in Ntoskrnl.exe Caused by an Invalid VCB"
permalink: kb/165/Q165429/
---

## Q165429: Stop 0x0000001E in Ntoskrnl.exe Caused by an Invalid VCB

	Article: Q165429
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the mounting of an NTFS volume, Windows NT 4.0 may stop with the
	following stop message.
	
	  STOP: 0x0000001E (0xc0000005, 0x8016b630, 0x00000000, 0x00000030)
	
	NOTE: The second parameter (0x8016b630) should be the same on x86 platforms.
	
	CAUSE
	=====
	
	An entry in the volume control block (VCB) of the volume being mounted is
	invalid.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: 0x1e ntfs Ntoskrnl
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
