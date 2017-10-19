---
layout: page
title: "Q149638: PRB: Statically linked MFC App Causes Trouble on Win32s"
permalink: /kb/149/Q149638/
---

## Q149638: PRB: Statically linked MFC App Causes Trouble on Win32s

	Article: Q149638
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbprogramming kbnokeyword kbMFC kbVC kbVC400bug kbVC410bug kbOSWin32s kbGrpDSMFCATL kbN
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MFC application that statically links to the MFC library may cause strange
	problems when it's run under Win32s.
	
	One known problem with static MFC applications in Win32s occurs when one static
	MFC application is started and then two instances of another MFC application
	that dynamically links to MFC in the Shared Library (Mfc40.dll) are run. The
	second instance of the Shared Lib MFC application will fail and return this
	message:
	
	  Win32s - Error. Initialization of dynamic link library failed. The process is
	  terminating abnormally.
	
	CAUSE
	=====
	
	The static MFC library uses the static version of the C Run-Time Library.
	However, the static version of the C Run-Time Library was not designed to be
	used in Win32s.
	
	Visual C++ versions 4.2 and later do not support building Win32s applications.
	
	RESOLUTION
	==========
	
	Change the build settings for the application linking to MFC in the static
	library to use MFC in the Shared Library (Mfc40.dll).
	
	There are special versions of the Mfc40.dll and Msvcrt40.dll for running under
	the Win32s platform that can be found in the \Win32s\Redist directory on the
	Visual C++ 4.0 CD-ROM. These two DLLs will need to be distributed with the new
	application.
	
	REFERENCES
	==========
	
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbnokeyword kbMFC kbVC kbVC400bug kbVC410bug kbOSWin32s kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
