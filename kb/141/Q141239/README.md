---
layout: page
title: "Q141239: Stop 0xA Errors May Occur After Installing Service Pack 2"
permalink: /kb/141/Q141239/
---

## Q141239: Stop 0xA Errors May Occur After Installing Service Pack 2

	Article: Q141239
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 2, you may receive a STOP 0x0000000A
	error message when you try to access your floppy disk drive, CD-ROM drive, or
	other removable device while anti-virus software is running. The error may be
	the same as or similar to the following:
	
	  STOP 0x0000000A (0x0000000c, 0x00000002, 0x00000000, 0x801116cf)
	
	
	RESOLUTION
	==========
	
	Obtain the fix mentioned below, or wait for the next Windows NT service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	NOTE: This fix is to be applied only to computers with Service Pack 2 for Windows
	NT 4.0 installed.
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/
	  hotfixes-postsp2/krnl-fix
	
	
	Additional query words: prodnt SP2 0x0A IRQL_NOT_LESS_THAN_OR_EQUAL ntoskrnl.exe
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
