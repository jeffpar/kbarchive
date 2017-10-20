---
layout: page
title: "Q154466: FIX: Unable to Locate URLMON.DLL on Windows NT 3.51"
permalink: /kb/154/Q154466/
---

## Q154466: FIX: Unable to Locate URLMON.DLL on Windows NT 3.51

{% raw %}

	Article: Q154466
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.0; winnt:4.2,5.0
	Operating System(s): 
	Keyword(s): kbole kbIE400 kbMFC kbOSWinNT351 kbVC420bug kbVC500bug kbVC600fix kbGrpDSMFCATL kbNoUpd
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Internet Explorer (Programming) version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to run an application built with Visual C++ 4.2 and 5.0, an
	error may be reported that the Urlmon.dll cannot be found. After this error, the
	application aborts.
	
	This error occurs only under the following circumstances:
	
	- The operating system is Windows NT 3.51.
	
	- The executable is a debug build.
	
	- The project is statically linked to MFC library.
	
	- The project has enabled OLE functionality (directly or indirectly includes
	  afxole.h or afxdisp.h).
	
	CAUSE
	=====
	
	The Urlmon.dll is the DLL that supports the URL moniker. It is a part of the
	ActiveX SDK. The MFC library that ships with Visual C++ 4.2 and 5.0 uses this
	DLL for much of the Internet functionality added in Visual C++ 4.2. Urlmon.dll
	is not supported on Windows NT 3.51. Therefore, the DLL is not installed to your
	Windows NT 3.51 System32 directory.
	
	MFC applications that target Windows NT 3.51 cannot use the URL moniker SDK
	functions. However, an application that meets all of the criteria listed in the
	SYMPTOMS section of this article but does not use these functions will still
	attempt to load the DLL. Therefore, the run-time error occurs.
	
	RESOLUTION
	==========
	
	To work around this problem, you must link the debug build of the application
	with the MFC DLL. The release build can continue to link statically to MFC. To
	link the debug build of the application to the MFC DLL, select Project Settings
	on the Build menu in Visual C++. Select Debug Project in the Settings For list,
	and select "Use MFC in a Shared Dll(mfc42(d).dll)" on the General Settings tab.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Visual C++ 4.2 and 5.0 ship the Urlmon.dll as part of the self-extracting
	installation files Axdist.exe and Wintdist.exe. This is covered in the
	\msdev\redist\redistrb.wri file.
	
	Additional query words: urlmon.dll
	
	======================================================================
	Keywords          : kbole kbIE400 kbMFC kbOSWinNT351 kbVC420bug kbVC500bug kbVC600fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : WINDOWS:4.0; winnt:4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
