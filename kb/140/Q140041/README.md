---
layout: page
title: "Q140041: PATCH: Visual C++ 4.0 Crash Fixes"
permalink: /kb/140/Q140041/
---

## Q140041: PATCH: Visual C++ 4.0 Crash Fixes

	Article: Q140041
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0;
	Operating System(s): 
	Keyword(s): kbide kbVC kbGrpDSTools
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to get a patch to fix the problems discussed below in
	the SYMPTOMS section.
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  ~ Vcpatch.exe
	  (http://support.microsoft.com/download/support/mslfiles/Vcpatch.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	SYMPTOMS
	========
	
	This patch fixes three different types of Visual C++ 4.0 Developer Studio
	crashing problems. The scenarios are described below:
	
	1. When the current project has sub-projects and the create browser file option
	  is turned on, the Developer Studio may randomly generate an access violation.
	  This can happen in response to one of the following actions:
	
	  a. Building the project.
	
	  b. Closing the project, including closing MSDEV.
	
	  c. Opening a different project or creating a new project.
	
	  d. Saving all the files using the Save All command.
	
	2. When stopping a debugging session then restarting a new debugging session
	  with a project loaded, the Developer Studio fails with an access violation.
	  The error message could be something like :
	
	  
	
	  msdev.exe -  Application Error.
	  The instruction at "0x77f85064" referenced memory at "0x00000010".
	       The memory could not be "read".
	
	  Restarting a new debugging session, the Developer Studio will crash with the
	  following error message :
	
	  Microsoft Developer Studio
	  (NTDLL.DLL): OxC0000005: Access Violation.
	
	3. When deleting sub-projects from a main project, the Developer Studio may
	  sometimes crash with an access violation.
	
	RESOLUTION
	==========
	
	1. Download the self-extracting patch file to a temporary directory.
	
	2. Run VCPATCH.EXE. This will create three files : patch.exe, patch.rtp, and
	  readme.txt.
	
	3. Copy patch.exe and patch.rtp to the \msdev\bin directory.
	
	4. Run patch.exe. The patch will modify the MSVCBLD.PKG file in the
	  \msdev\bin\ide directory. It will also modify the MSVCCLS.PKG file in the
	  \msdev\bin\ide directory and the MSVCSRC.DLL in the \msdev\bin directory.
	
	5. Delete patch.exe and patch.rtp from \msdev\bin directory.
	
	Note: You need to close the Developer Studio when applying the patch. Otherwise
	the files will not be modified.
	
	This patch should be applied to the English version of Visual C++ 4.0 only.
	
	These problems were fixed in Visual C++ 4.1.
	
	======================================================================
	Keywords          : kbide kbVC kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC32bitSearch
	Version           : WINNT:4.0;
	
	=============================================================================
	
