---
layout: page
title: "Q128123: Pentium FDIV Patch for Visual C++ 2.0"
permalink: kb/128/Q128123/
---

## Q128123: Pentium FDIV Patch for Visual C++ 2.0

	Article: Q128123
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbother kbCRT kbVCkbfixlist
	Last Modified: 13-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT) 
	- The C/C++ Compiler (CL.EXE) 
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to get VCFDIV.EXE, a self-extracting file that
	contains a patch that fixes a problem with the fdiv function. Without the patch,
	it is possible that calls to the fdiv function on Intel Pentium chips will
	generate incorrect data. Please see the FDIV.TXT file included in VCFDIV.EXE for
	details.
	
	NOTE: If you have Visual C++ version 2.1, you don't need this patch.
	
	MORE INFORMATION
	================
	
	VCFDIV.EXE upgrades the compiler, and the C-RunTime libraries for both Win32 and
	Win32s, to the versions that were distributed with Visual C++ version 2.1.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Vcfdiv.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbfile kbother kbCRT kbVC kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp kbVC200 kbCRT
	Version           : :2.0
	
	=============================================================================
	
