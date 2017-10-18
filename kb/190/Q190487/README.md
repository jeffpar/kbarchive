---
layout: page
title: "Q190487: PRB: MFC Debug DLLs Are Not Compatible Between Versions"
permalink: kb/190/Q190487/
---

## Q190487: PRB: MFC Debug DLLs Are Not Compatible Between Versions

	Article: Q190487
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbDLL kbMFC kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Various errors or asserts can occur when you attempt to run a debug version of
	an MFC application with the MFC debug DLLs of another version. Possible errors
	include:
	
	   - Ordinal could not be found.
	
	   - Access violation.
	
	This occurs if you attempt to debug an MFC application built with Visual C++ 5.0
	in Visual C++ 6.0 and vice versa. This can also occur if you run your MFC debug
	application on a machine that does not have the corresponding debug DLLs
	installed.
	
	CAUSE
	=====
	
	Debug versions of MFC are not binary compatible with previous versions. However,
	this problem does not occur with release builds because they are binary
	compatible between versions.
	
	RESOLUTION
	==========
	
	To debug an MFC project built with Visual C++ 5.0 in Visual C++ 6.0, you must
	rebuild the project. To run a debug version of an MFC project on a machine that
	does not have Visual C++ installed, make sure the proper version of the MFC
	debug DLLs are installed. Note that redistribution of MFC debug DLLs is a
	violation of the Visual C++ license agreement.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Build a DEBUG Build MFC application with Visual C++ 5.0.
	
	2. Copy the .exe file to a machine with Visual C++ 6.0 installed.
	
	3. Run the .exe file.
	
	  RESULT: Runtime errors such as:
	
	  The ordinal 3255 could not be located in the dynamic link library
	  MFCO42D.DLL
	
	  -or-
	
	  Unhandled exception in thisisatest.exe: 0xC0000005: Access Violation.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Mike
	Francis, Microsoft Corporation.
	
	
	Additional query words: 0xC0000005
	
	======================================================================
	Keywords          : kbDebug kbDLL kbMFC kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
