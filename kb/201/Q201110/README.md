---
layout: page
title: "Q201110: Page xxv: Microsoft Mail Not Found in Information Services"
permalink: /kb/201/Q201110/
---

## Q201110: Page xxv: Microsoft Mail Not Found in Information Services

	Article: Q201110
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Team Manager 97 Step by Step ISBN 1-57231-217-3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Page xxv, step 2, asks you to be sure that Microsoft Mail is the only
	information service selected in the "Use The Following Information Services"
	list box. However, the list of information services may not include Microsoft
	Mail.
	
	CAUSE
	=====
	
	The Microsoft Mail information service requires Msfs32.dll to be installed in
	your Windows\System directory. If this DLL file is not present, Microsoft Mail
	will not appear in the information services list.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method for your operating system.
	
	If you have Windows NT
	----------------------
	
	Copy Msfs32.dll from the Windows NT CD-ROM to the \%SYSTEMROOT%\System32
	directory.
	
	If you have Windows 95
	----------------------
	
	1. Copy EXTRACT.EXE from Disk 1 of the Microsoft Windows 95 diskette pack, or
	  from the root directory of your Microsoft Windows 95 CD-ROM. (If you have the
	  Microsoft Windows 95 CD-ROM and you do not find EXTRACT.EXE in the root
	  directory, please skip to step 5.)
	
	2. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	3. If you have Microsoft Windows 95 on 3 1/2" diskettes, type the following
	  command into the MS-DOS window:
	
	  EXTRACT A:\WIN95_07.CAB MSFS32.DLL /L C:\WINDOWS\SYSTEM
	
	  Replace "A:" with the drive letter of your 3.5" drive if necessary.
	
	4. If you have Windows 95 on a CD-ROM, type the following command into the
	  MS-DOS window:
	
	  EXTRACT D:\WIN95_06.CAB MSFS32.DLL /L C:\WINDOWS\SYSTEM
	
	  Replace the "D:" with the drive letter of your CD-ROM if necessary.
	
	5. The proper file should now be installed in your system directory. Please
	  close any open windows and begin the directions on page xxiv once again.
	
	
	Additional query words: press ms_press bookbug teamman 1-57231-217-3
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Issue type        : kbprb
	
	=============================================================================
	
