---
layout: page
title: "Q125476: PRB: Error &quot;...MSVCRT20.DLL is not compatible with Win32s&quot;"
permalink: kb/125/Q125476/
---

## Q125476: PRB: Error &quot;...MSVCRT20.DLL is not compatible with Win32s&quot;

	Article: Q125476
	Product(s): Microsoft C Compiler
	Version(s): 2.0 2.1 2.2 4.0 4.1
	Operating System(s): 
	Keyword(s): kberrmsg kbCRT kbVC kbOSWin32s
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a Win32-based application that was linked with MSVCRT.LIB on
	Win32s, a message box titled "MSVCRT??.DLL for Win32" displays the message
	"Error: This version of MSVCRT??.DLL is not compatible with Win32s" where ??
	specifies the runtime version. The application terminates following this
	message.
	
	CAUSE
	=====
	
	There are two versions of each MSVCRT??.DLL -- one for Win32s and one for
	Windows NT/Windows 95. If you use the wrong version on Win32s, the error
	described above occurs.
	
	The following is a list of Visual C++ versions and the runtime DLLs that are
	included with them:
	
	  Visual C++ File                         Size       Date / Time
	  ---------- ---------------              --------   -----------
	    2.0      WIN32S\REDIST\MSVCRT20.DLL   237,568    09-12-94 / 7:00a
	    2.0      MSVC20\REDIST\MSVCRT20.DLL   243,200    09-12-94 / 8:00a
	
	    2.1      WIN32S\REDIST\MSVCRT20.DLL   244,736    01-20-95 / 9:46a
	    2.1      MSVC20\REDIST\MSVCRT20.DLL   250,368    01-20-95 / 9:45a
	
	    2.2      WIN32S\REDIST\MSVCRT20.DLL   244,736    01-20-95 / 1:46a
	    2.2      MSVC20\REDIST\MSVCRT20.DLL   253,952    02-23-95 / 11:32a
	
	    4.0      WIN32S\DEBUG\MSVCR40D.DLL    437,760    09-29-95 / 9:33p
	    4.0      WIN32S\REDIST\MSVCRT40.DLL   320,000    09-29-95 / 9:35p
	    4.0      MSDEV\DEBUG\MSVCR40D.DLL     439,296    09-29-95 / 9:25p
	    4.0      MSDEV\REDIST\MSVCRT40.DLL    312,832    09-29-95 / 10:06p
	
	    4.1      WIN32S\DEBUG\MSVCR40D.DLL    439,296    02-14-96 / 4:43p
	    4.1      WIN32S\REDIST\MSVCRT40.DLL   332,048    02-07-96 / 3:24a
	    4.1      MSDEV\DEBUG\MSVCR40D.DLL     444,928    02-19-96 / 5:05P
	    4.1      MSDEV\REDIST\MSVCRT40.DLL    326,656    02-19-96 / 5:03p
	
	RESOLUTION
	==========
	
	On the Visual C++ product CD, you will find the Windows NT/Windows 95 version of
	the runtime DLL in the MSVC20\REDIST or MSDEV\ directories shown above and the
	Win32s version of the runtime DLL under the WIN32S\ directories shown above. The
	files that end with the letter "D" are the debug versions of the libraries which
	are accompanied by a debug info file that has the same name and a ".PDB" file
	extension.
	
	You should ship both release versions of the runtime DLL with your application if
	it is to be run under Win32s. Your setup program should detect which platform
	you are installing the application under and copy the appropriate DLL. Install
	the Win32s version in the WINDOWS\SYSTEM directory of your Windows or Windows
	for Workgroups machine.
	
	MORE INFORMATION
	================
	
	A similar error occurs if the Win32s version of MSVCRT??.DLL is used on a
	Windows NT machine or a Windows 95 machine. The error's title is "MSVCRT??.DLL
	for Win32s," and the message is:
	
	  Error: This version of MSVCRT??.DLL is only intended for Win32s.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbCRT kbVC kbOSWin32s 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : 2.0 2.1 2.2 4.0 4.1
	Issue type        : kbprb
	
	=============================================================================
	
