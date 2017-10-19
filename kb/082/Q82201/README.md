---
layout: page
title: "Q82201: DR DOS 6.0 EMM386.SYS and Windows"
permalink: /kb/082/Q82201/
---

## Q82201: DR DOS 6.0 EMM386.SYS and Windows

	Article: Q82201
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to the DR DOS version 6.0 user's guide, "[the DR DOS version of]
	EMM386.SYS works with Windows 3.0 in real, standard, and enhanced modes." To run
	Windows in standard mode, the switch /WINSTD should be added to the device line
	for EMM386.SYS line in the CONFIG.SYS file.
	
	
	MORE INFORMATION
	================
	
	Digital Research recommends using the DR DOS EMM386.SYS memory manager in place
	of the HIMEM.SYS memory manager that is installed during the Microsoft Windows
	operating system version 3.0 setup.
	
	Microsoft has confirmed that Microsoft Windows version 3.0 will load in 386
	enhanced mode while using the DR DOS 6.0 memory manager EMM386.SYS. The device
	line in the CONFIG.SYS file will appear as follows:
	
	  DEVICE=C:\DRDOS\EMM386.SYS
	
	Windows standard mode requires the addition of the /WINSTD switch to the device
	line as follows:
	
	  DEVICE=C:\DRDOS\EMM386.SYS /WINSTD
	
	This switch, according to the DR DOS user's guide, "forces compatibility with
	Windows 3.0 in standard mode. Note that using /WINSTD will reduce the amount of
	conventional memory available to applications because upper memory is
	disabled."
	
	If you attempt to load Windows in standard mode without the /WINSTD switch, the
	following message is displayed:
	
	  EMM386: Cannot let Windows run in standard mode as upper and/or EMS memory is
	  in use. If standard mode is required, use the /WINSTD option of EMM386.
	
	For additional information, contact Digital Research Technical Support.
	
	DR DOS is manufactured by a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this product's performance or reliability.
	
	Additional query words: 3.0 3.00 3.0a 3.00a DRDOS DR-DOS DRI
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
