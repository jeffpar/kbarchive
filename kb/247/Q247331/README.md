---
layout: page
title: "Q247331: PRB: Error Spawning Compiler for Windows CE 2.12 Platforms"
permalink: /kb/247/Q247331/
---

## Q247331: PRB: Error Spawning Compiler for Windows CE 2.12 Platforms

	Article: Q247331
	Product(s): Microsoft C Compiler
	Version(s): 2.12,6.0
	Operating System(s): 
	Keyword(s): kbVC600 kbDSupport kbGrpDSVCCompiler
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	- Microsoft Windows CE Platform Builder, version 2.12 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With a successful install of the Microsoft Windows CE Toolkit for Microsoft
	Visual C++ 6.0 and a software development kit (SDK) exported from Microsoft
	Windows CE Platform Builder 2.12, attempts to build projects targeting the 2.12
	platform fail with an error similar to the following:
	
	  Error spawning clmips.exe
	
	CAUSE
	=====
	
	The Microsoft Windows CE Toolkit for Visual C++ 6.0 was shipped prior to the
	release of Windows CE version 2.12 and does not include the compilers needed to
	build applications for this operating system.
	
	RESOLUTION
	==========
	
	By using the compilers provided for Windows CE 2.11 you will be able to build
	and debug applications targeting Windows CE 2.12:
	
	1. Start Microsoft Visual C++ 6.0.
	
	2. From the Tools select Options, and then select the Directories tab.
	
	3. Select the 2.12 platform in the WCE Configuration drop-down list.
	
	4. Select Executable Files in the Show Directories for drop-down list.
	
	5. Change the WCE212\BIN entry to WCE211\BIN.
	
	6. Select Library Files in the Show Directories for drop-down list.
	
	7. Change occurrences of "Mfc" to "MFC" (capitalize all of the letters).
	
	8. Change occurrences of "Atl" to "ATL" (capitalize all of the letters).
	
	NOTE: The preceding changes will not allow applications to be built for the
	MIPS16 or Thumb processors, which are supported by Windows CE 2.12. Check the
	Microsoft Windows CE products web site at http://www.microsoft.com/windowsce for
	information on the availability of updated development tools.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install an SDK exported from Platform Builder 2.12 into the Windows CE
	  Toolkit for Visual C++ 6.0.
	
	2. Create or load a Windows CE application and attempt to build for the platform
	  installed in step 1 using a CPU configuration other than x86.
	
	  An error occurs while spawning the Windows CE compiler for the requested
	  processor.
	
	Additional query words: Toolkit Windows CE Platform Builder SDK kbWinCE212
	
	======================================================================
	Keywords          : kbVC600 kbDSupport kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbSDKSearch kbWinCETKVCSearch kbWinCESDKSearch kbWinCESearch kbWinCESDK212 kbWinCETK600VC
	Version           : :2.12,6.0
	Issue type        : kbprb
	
	=============================================================================
	
