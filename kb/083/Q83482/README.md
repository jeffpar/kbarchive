---
layout: page
title: "Q83482: Windows 3.0 Files May Cause Windows 3.1 Boot Errors"
permalink: kb/083/Q83482/
---

## Q83482: Windows 3.0 Files May Cause Windows 3.1 Boot Errors

	Article: Q83482
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Windows 3.0 version of KRNL386.EXE and/or DOSX.EXE are present in the
	Windows directory after you upgrade to the Microsoft Windows operating system
	version 3.1, the following error messages may occur.
	
	Error:
	
	  Enhanced Mode Error Message
	
	  KRNL386: Unable to enter Protected Mode
	
	CAUSE:
	
	The KRNL386.EXE (Windows 3.0) file is in the Windows 3.1 directory.
	
	Error:
	
	  STANDARD MODE Error Messages
	
	  Standard Mode: Fault outside of MS-DOS Extender. EC=0344 CS=031F IP=85E2
	  AX=001D BX=0005 CX=1800 DX=155F SI=0178 DI=0178 BP=016E DS=027F ES=027F
	  SS=027F SP=0166
	
	Cause:
	
	  The KRNL386.EXE (Windows 3.0) file is in the Windows directory. (The values
	  of address registers in the memory dump may be different each time.)
	
	Error:
	
	  Cannot run Windows in standard mode;
	
	  Check to ensure you are not running other protected-mode software, or run in
	  real mode.
	
	Cause:
	
	  The DOSX.EXE (Windows 3.0) file is in the Windows directory.
	
	MORE INFORMATION
	================
	
	To correct this situation delete or rename these files from the Windows 3.1
	Windows directory.
	
	Note: There may be other Windows 3.0 files that could have a similar effect on
	Windows 3.1 if they are present.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  win31 and 386 and enhanced and fault
	
	
	KBCategory: kbenv kberrmsg
	KBSubcategory: win30 win31 winmem
	
	Additional query words: 3.10 msdos
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
