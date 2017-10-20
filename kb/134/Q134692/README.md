---
layout: page
title: "Q134692: PRB: Visual C++ Setup Was Unable to Copy a File"
permalink: /kb/134/Q134692/
---

## Q134692: PRB: Visual C++ Setup Was Unable to Copy a File

{% raw %}

	Article: Q134692
	Product(s): Microsoft C Compiler
	Version(s): 2.20
	Operating System(s): 
	Keyword(s): kb3rdparty kbprb
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Visual C++, you may get the following error immediately after
	clicking the Visual C++ 2.2 button in the "Visual C++ Master Setup" dialog box:
	
	  Visual C++ Setup was unable to copy files necessary to continue
	  running setup to your hard drive.
	
	This error will terminate the setup process.
	
	CAUSE
	=====
	
	During the beginning of Setup \MSVC20\VCSETUP.BIN is copied from the CD-ROM
	drive to the directory specified as your TEMP directory. The file is named
	~vc##.tmp, where ## represents a number. This file is in turn spawned by
	SETUP.EXE. SETUP.EXE is unable to copy ~vc##.tmp correctly to the hard drive.
	The problem is caused by an inability of the CD-ROM driver to copy the
	VCSETUP.BIN file.
	
	RESOLUTION
	==========
	
	Use one of the following five methods to resolve this problem:
	
	Method One
	----------
	
	Problems have been reported when running Windows NT version 3.50 on Zeos P5-90
	Pantera computers using dual- or quad-speed Mitsumi CD-ROM drives that are
	configured to run on IRQ 15 address 0x170. The error presents itself when using
	the default ATAPI.SYS file that ships with Windows NT, which is dated 9-4-94 and
	is 9,328 bytes.
	
	To fix this:
	
	1. Dial the Zeos International BBS at (612) 362-1219, and log on.
	
	2. Select 1) File Exchange from the 3) Group menu.
	
	3. Select 1. See list of File Exchange Areas.
	
	4. Select 7 Multi_Media.
	
	5. Select 6 Mitsumi_CDROM,
	
	6. Download 11 ntatapi.exe, "21 Secondary Controller fix for ATAPI and NT 3.5."
	  NTATAPI.EXE is a self extracting executable file that contains ATAPI.SYS,
	  which is dated 12-14-94 and is 9,520 bytes.
	
	7. Replace \WINNT\SYSTEM32\DRIVERS\ATAPI.SYS with this file and reboot.
	
	If you are using a different system you may wish to consult with your vendor.
	
	Method Two
	----------
	
	From a Windows NT command prompt:
	
	1. Copy the [CD-ROM Drive]\MSVC20\VCSETUP.BIN file to:
	
	  [Local hard drive]VCSETUP.EXE
	
	2. Run VCSETUP.EXE:
	
	  vcsetup /s:[CD Drive]\MSVC20
	
	For example where E: == CD-ROM drive and C: == Local hard drive:
	
	  xcopy e:\msvc20\vcsetup.bin c:\vcsetup.exe /v<Enter>
	  vcsetup /s:e:\msvc20<Enter>
	
	NOTE: If you have trouble copying the file in step 1, be sure to try the copy via
	File Manager from Windows NT as well as from MS-DOS. If you have a dual boot
	operating system (such as Windows For Workgroups), try copying the file from the
	other operating system. If you change operating systems in order to perform the
	copy, be sure to boot back to your original operating system prior to completing
	step 2.
	
	Method Three
	------------
	
	If you have a dual boot operating system boot into it, and try the steps in
	"Method Two" (or their equivalents).
	
	Method Four
	-----------
	
	If you have access to a network, you may be able to share a CD-ROM drive from
	another computer, and run SETUP normally from that CD-ROM drive.
	
	Method Five
	-----------
	
	Using a network, you may be able to copy the contents of the CD-ROM drive to a
	network share, and run setup from the share.
	
	Additional query words: 2.20
	
	======================================================================
	Keywords          : kb3rdparty kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbVC220
	Version           : 2.20
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
