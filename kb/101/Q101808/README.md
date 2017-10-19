---
layout: page
title: "Q101808: PRB: Insufficient Memory or Not Enough Memory for Application"
permalink: /kb/101/Q101808/
---

## Q101808: PRB: Insufficient Memory or Not Enough Memory for Application

	Article: Q101808
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,2.6x,3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6x 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	One of the following error messages may occur when you attempt to start FoxPro
	for Windows or when you are running FoxPro for Windows:
	
	  Insufficient memory
	
	  -or-
	
	  Not enough memory for application (minimum 2187264 required)
	
	  -or-
	
	  Not enough memory for application (minimum 2158592 required)
	
	NOTE: FoxPro for Windows versions 2.5 and 2.5a generate different "Not enough
	memory for application (minimum <x> required)" error messages, where
	"<x>" is the amount of memory. For version 2.5, "<x>" is 2158592,
	and for version 2.5a, "<x>" is 2187264.
	
	CAUSE
	=====
	
	There is not enough virtual memory available to start FoxPro for Windows.
	Virtual memory is a technique used by Windows to simulate additional memory for
	an application to use. Applications access the memory through virtual addresses,
	which are mapped to physical addresses on the disk.
	
	RESOLUTION
	==========
	
	Use one of the following methods to increase the amount of virtual memory.:
	
	METHODS FOR FOXPRO 2.x FOR WINDOWS ONLY
	---------------------------------------
	
	Method 1
	--------
	
	Reduce the minimum amount of memory allocated to FoxPro for Windows by the
	MEMLIMIT statement in the CONFIG.FPW file.
	
	NOTE: This method does not apply if you are just starting FoxPro.
	
	Method 2
	--------
	
	Increase the percentage of available memory allocated to FoxPro for Windows in
	the MEMLIMIT statement in the CONFIG.FPW file.
	
	METHODS FOR FOXPRO 2.x AS WELL AS VISUAL FOXPRO
	-----------------------------------------------
	
	Method 1
	--------
	
	Increase the size of the Windows swap file. In Windows 3.1, do the following:
	
	1. From the Main group in Program Manager, run Control Panel, and then choose
	  the 386 Enhanced icon.
	
	2. Choose the Virtual Memory button.
	
	3. Choose the Change button.
	
	4. Select the type of virtual memory you want to use (Temporary or Permanent)
	  from the Type list box, then enter a larger size in the New Size box. The new
	  swap file does not take effect until Windows is restarted.
	
	Method 2
	--------
	
	If an Expanded Memory Specification (EMS) emulator is in use, remove it or reduce
	the amount of expanded memory it provides. EMM386.EXE, provided with MS-DOS and
	Windows, has this emulation capability.
	
	Method 3
	--------
	
	Reduce the size of your disk-caching software. Windows cannot use XMS memory that
	a disk cache is using. SMARTDRV.EXE is the disk cache provided with MS-DOS and
	Windows.
	
	Method 4
	--------
	
	Verify a valid path exists for the temporary files that FoxPro creates, and that
	there is at least 5 MB of room available for the creation of these temporary
	files.
	
	For more information on using virtual memory and swap files, query on the
	following words here in the Microsoft Knowledge Base:
	
	  swap and file and determines and maximum
	
	NOTE: These error messages may also be caused if the resource file, FOXUSER.DBF,
	is corrupted. To resolve this, perform the following:
	
	1. At the MS-DOS prompt, type the following command:
	
	  
	
	        RENAME foxuser.dbf foxuser.dbk
	
	2. Restart FoxPro. A new FOXUSER.DBF file is automatically created.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	"Microsoft Windows Resource Kit," version 3.1, page 456
	
	Additional query words: VFoxWin FoxWin 2.50 2.60x errmsg WATCOM Win386 err msg kbvfp300 kbvfp300b kbvfp500 kbvfp600 akz
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:2.5,2.5a,2.5b,2.6x,3.0,3.0b,5.0,6.0
	
	=============================================================================
	
