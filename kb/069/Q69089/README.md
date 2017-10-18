---
layout: page
title: "Q69089: Manifest Crash with EMM386 on COMPAQs"
permalink: kb/069/Q69089/
---

## Q69089: Manifest Crash with EMM386 on COMPAQs

	Article: Q69089
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	Manifest is a diagnostic program distributed by Quarterdeck Office
	Systems, the makers of QEMM386.
	
	If the Manifest EMS Performance Test is run with EMM386 loaded on a
	COMPAQ 386 machine, it will crash if the mouse is moved during the
	test.
	
	This is a problem with Manifest's detection of the extended BIOS data
	area (XBDA). The problem may not occur with other memory managers that
	relocate the XBDA, such as COMPAQ'S CEMM, or Quarterdeck QEMM386.
	
	Additional query words: 3rdparty WIN30 3.00 3.0 3.00a 3.0a winmem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
