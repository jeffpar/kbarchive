---
layout: page
title: "Q140477: PRB: MFC 4.0 Applications Can't Be Run Under Windows NT 3.5"
permalink: kb/140/Q140477/
---

## Q140477: PRB: MFC 4.0 Applications Can't Be Run Under Windows NT 3.5

	Article: Q140477
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbOSWinNT350 kbVC kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to run an MFC 4.0 application under Windows NT version 3.5 generates
	the following error message:
	
	  The procedure entry point GetProcessVersion could not be located in the
	  dynamic link library KERNEL32.DLL.
	
	Followed by:
	
	  The application failed to initialize properly [0x0000139], click OK to
	  terminate application.
	
	CAUSE
	=====
	
	MFC 4.0 is not compatible with Windows NT 3.5. There were many new features
	added to this version of MFC that require operating system support capabilities
	that do not exist in Windows NT 3.5. This includes, but is not limited to, the
	new Win32 common controls that are now used as an integral part of the Microsoft
	Foundation Classes.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbOSWinNT350 kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
