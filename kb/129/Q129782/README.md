---
layout: page
title: "Q129782: FIX: MFCN30.DLL and MFCN30D.DLL Not Copied with Win32S Setup"
permalink: /kb/129/Q129782/
---

## Q129782: FIX: MFCN30.DLL and MFCN30D.DLL Not Copied with Win32S Setup

{% raw %}

	Article: Q129782
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbsetup kbMFC kbVC kbVC210 kbWinsock kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to run an MFC application that uses the socket classes generates the
	following File Error under Win32s:
	
	  Cannot find MFCN30D.DLL
	
	Then when you click the Close button, the following error appears:
	
	  Cannot Run Program
	  Unexpected error: 21.
	
	NOTE: A release build of an application would list MFCN30.DLL instead of
	MFCN30D.DLL in the first message box.
	
	CAUSE
	=====
	
	The Win32S setup included on the Visual C++ CD does not copy MFCN30.DLL or
	MFCN30D.DLL.
	
	RESOLUTION
	==========
	
	Copy MFCN30.DLL and MFCN30D.DLL from the CD to the WINDOWS\SYSTEM directory of
	the Win32S machine:
	
	- MFCN30.DLL can be found on the CD in this directory: \MSVC20\REDIST
	
	- MFCN30D.DLL can be found on the CD in this directory: \MSVC20\DEBUG
	
	If your application has a set-up program, make sure it also copies these files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 2.2.
	
	Additional query words: 2.10 3.10 CSocket CAsyncSocket win32-s
	
	======================================================================
	Keywords          : kbsetup kbMFC kbVC kbVC210 kbWinsock kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
