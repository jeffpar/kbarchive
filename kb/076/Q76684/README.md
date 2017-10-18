---
layout: page
title: "Q76684: SAMPLE: Wsscanf.exe Replaces sscanf in Windows DLLs"
permalink: kb/076/Q76684/
---

## Q76684: SAMPLE: Wsscanf.exe Replaces sscanf in Windows DLLs

	Article: Q76684
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbSample kb16bitonly
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Wsscanf.exe that can serve as a limited replacement for the Microsoft C run-
	time library function sscanf, which is not compatible for use with a
	dynamic-link library (DLL) for the Microsoft Windows graphical environment.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Wsscanf.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The sscanf(), fprintf(), and scanf() functions are not available for Windows
	DLLs.
	
	There are two factors that cause these functions to be incompatible:
	
	1. These functions rely on near pointers.
	
	2. These functions expect SS == DS.
	
	Because neither of these conditions is true when a function in a DLL uses data
	from an application, these functions are not available.
	
	The WSSCANF file in the Microsoft Download Center contains the source code to a
	wsscanf() function that can serve as a limited replacement for the sscanf
	function. It does not support floating point. The wsscanf() code is based on the
	sscanf() source code in the Microsoft C 6.0a run-time library. The source code
	has been modified to work correctly in a DLL, and requires that all parameters
	are specified as FAR pointers. The following code demonstrates using the
	wsscanf() function:
	
	      char   szBuf[] = "1 3 b000:0200";
	     int    nValue1, nValue2;
	     LPSTR  lpPtr;
	
	     wsscanf(szBuf, "%d %d %p", (int FAR *)&nValue1,
	              (int FAR *)&nValue2, (LPSTR FAR *)&lpPtr);
	
	NOTE: The first two parameters are not explicitly typecast in the function call.
	The function prototype typecasts the first two parameters automatically;
	however, the application must typecast each subsequent parameter. If the
	application does not typecast each parameter, when the application calls wsscanf
	an unrecoverable application error (UAE) occurs.
	
	The wsscanf() function does not support floating point numbers (the %f, %g, and
	%e format specifiers).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSample kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
