---
layout: page
title: "Q102435: INFO: Reasons for &quot;Unauthorized Copy of Visual C++&quot; Message"
permalink: /kb/102/Q102435/
---

## Q102435: INFO: Reasons for &quot;Unauthorized Copy of Visual C++&quot; Message

	Article: Q102435
	Product(s): Microsoft C Compiler
	Version(s): WIN3X:1.0,1.5;WINNT:1.0,2.0,2.1,4.0,4.1,4.2,5.0;
	Operating System(s): 
	Keyword(s): kbsetup kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under some circumstances, the Visual C++ copyright logo displays the string
	"Unauthorized copy of Microsoft Visual C++" where the registered owner's name
	belongs. This message may occur when the user manually copies the executable
	files from the distribution disks and does not install them with the Setup
	program or when virus protection software is running during installation.
	
	MORE INFORMATION
	================
	
	When you install 16 bit edition of Visual C++, it modifies the following four
	files to reflect the name entered on the registration screen: APSTUDIO.EXE,
	MSVC.EXE, MFCAPPWZ.EXE, and MFCCLSWZ.DLL. If these files are not updated, the
	"unauthorized copy" message appears. To correct this situation, run Setup and
	install the affected component(s). To reinstall only the files the Visual C++
	Setup program modifies, select the following from the Installation Options
	dialog box:
	
	  Microsoft Visual Workbench
	  Microsoft Foundation Classes
	  Microsoft App Studio: Resource Editor
	
	NOTE:There is no App Studio in Visual C++ 2.x and 4.x. The files modified in 2.x
	are MSVC.EXE and SPYXX.EXE. For 2.x, install components "Microsoft Visual C++
	Development Environment" and "Microsoft Foundation Classes". The files modified
	in 4.x are MSDEV.EXE, SPYXX.EXE, and MSDEV\BIN\IDE\MSVCCPP.PKG. For 4.x, install
	component "Microsoft Developer Studio".
	
	In Visual C++ 5.0 and 6.0, a large number of files will be modified due to
	executable binding that occurs during setup. The file that contains the
	authorization information is MSDEV.EXE.
	
	For Visual C++ 2.x, 4.x, and 5.0 another solution is to run setup with the /f
	switch (for example, "setup /f" without the quotes). It is important that you
	run the setup.exe in the Visual C++ subdirectory on the CD. For Visual C++ 4.x
	it is in X:\MSDEV where X: is the letter designation of your CDROM drive. For
	Visual C++ 5.0, it is in X:\DEVSTUDIO.
	
	The "unauthorized copy" message can also appear when VSAFE or other memory-
	resident virus protection software is loaded by AUTOEXEC.BAT. VSAFE is a virus
	protection utility included with MS-DOS version 6.0. By default, the utility
	detects modifications made to executable files. If VSAFE is loaded and the VSafe
	Manager for Windows is running with executable checking enabled, the VSafe
	Manager displays a dialog box when Setup attempts to update the executable
	files.
	
	If VSAFE is loaded, but the VSafe Manager for Windows is not running, the
	computer beeps when Setup attempts to update the executable files and Setup does
	not update the files with registration information. When Visual Workbench
	starts, the logo screen indicates an unauthorized version.
	
	To resolve this situation, edit your AUTOEXEC.BAT file to comment out or remove
	the command that starts VSAFE or the other memory-resident virus protection
	software. The Visual C++ README.TXT file recommends against running VSAFE with
	Visual C++. The Visual Workbench may appear to hang with VSAFE detects that an
	executable file is changing during the linking process. Once you remove VSAFE or
	other memory-resident virus protection software, run Setup to reinstall the
	affected component(s).
	
	Additional query words: licensed
	
	======================================================================
	Keywords          : kbsetup kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : WIN3X:1.0,1.5;WINNT:1.0,2.0,2.1,4.0,4.1,4.2,5.0;
	Issue type        : kbinfo
	
	=============================================================================
	
