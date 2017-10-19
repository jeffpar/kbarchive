---
layout: page
title: "Q157317: PRB: &quot;Invalid Library File&quot; Loading .fll Created with VC++ 4.2"
permalink: /kb/157/Q157317/
---

## Q157317: PRB: &quot;Invalid Library File&quot; Loading .fll Created with VC++ 4.2

	Article: Q157317
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b 5.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An .fll or .dll file has been built with Microsoft Visual C++, version 4.2. The
	.fll loads correctly on the development computer, but loading it on another
	computer with Visual FoxPro or in a distributed .exe file causes the following
	error message:
	
	  Invalid Library File
	
	CAUSE
	=====
	
	Beginning with Visual C++ 4.2, if an .fll or .dll file is compiled with the
	Multithreaded dynamic-link library (DLL) (/MD) option, the Msvcrt.dll C run-
	time library is needed for it to function properly. The Multithreaded DLL
	compiler option is needed when building an .fll file using the FoxPro Library
	Construction Kit.
	
	RESOLUTION
	==========
	
	Obtain the Msvcrt.dll that is installed with Visual C++ 4.2 and place it in the
	System (Windows 95) or System32 (Windows NT) subdirectory of the Windows
	directory.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Msvcrt.dll is installed with Visual C++ 4.2 and is also shipped with Windows
	NT 4.0 and the Windows 95 OEM Service Release 2 (OSR 2). It is not included with
	Visual FoxPro 3.0 or 5.0, Windows NT 3.x, or Windows 95 (including Service Pack
	1).
	
	Developers shipping .fll files created with Visual C++ 4.2 with their Visual
	FoxPro applications need to include the Msvcrt.dll file in the source directory
	with their .exe file when running the Visual FoxPro Setup Wizard. Then in step 6
	of the Setup Wizard, specify that the Msvcrt.dll should be installed in the
	WinSysDir.
	
	Visual FoxPro includes other versions of the Visual C++ run-time libraries with
	the Distribution Source files. They are Msvcrt20.dll, Msvcrt40.dll, and
	Msvcrt10.dll (Visual FoxPro 3.0). The Setup Wizard automatically includes these
	on the setup disks that it creates.
	
	Note that these C runtime libraries, especially Msvcrt.dll, are needed even if
	Microsoft Foundation Classes (MFC) are not used in the .fll or . dll file.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q154753 What Are the C/C++ Libraries My Program Would Link With?
	
	
	  Q154419 Standard C++ Library Frequently Asked Questions
	
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : 3.00 3.00b 5.00
	
	=============================================================================
	
