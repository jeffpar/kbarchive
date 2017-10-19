---
layout: page
title: "Q280803: PRB: CoCreateInstance Stops and Creates Many ATL Objects"
permalink: /kb/280/Q280803/
---

## Q280803: PRB: CoCreateInstance Stops and Creates Many ATL Objects

	Article: Q280803
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbATL
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0 
	- Microsoft Visual C++, 32-bit Editions, version 6.0 
	- The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual C++:
	
	If you call CoCreateInstance on a large number of Active Template Library (ATL)
	objects (for example, about 100, although this number varies), the call may not
	succeed and may return an HRESULT of 0x80040154 (REGDB_E_CLASSNOTREG).
	
	In Visual Basic:
	
	This behavior can also occur with CreateObject because it is a wrapper for
	CoCreateInstance. If you call CreateObject from Microsoft Visual Basic, from
	Microsoft Visual Basic for Applications (VBA), or from Visual Basic Script on a
	large number of Active Template Library (ATL) objects, the call may not
	succeed.
	
	For example, in Visual Basic Script, you may receive the following error
	message:
	
	  Microsoft VBScript runtime error: ActiveX component can't create object:
	  'Class67.Object67'
	
	CAUSE
	=====
	
	MFC Libraries:
	
	This problem can also occur if the MFC libraries are statically linked to the
	associated DLLs, because the MFC libraries use TLS slots.
	
	CRT Libraries:
	
	This problem can occur if the objects contain a large number of ATL DLL files,
	and if the C run-time libraries (CRT) are linked statically. The default setting
	for any build of ATL DLL is to be statically linked.
	
	NOTE: Most of the CRT is linked when _ATL_MIN_CRT is not defined.
	
	The CRT library uses thread-local storage (TLS). Each time that a
	statically-linked CRT-dependent DLL is mapped into a process, the CRT is
	initialized, during which a TLS slot is allocated. There are only
	TLS_MINIMUM_AVAILABLE slots available for each process. This constant is
	guaranteed to be at least 64 slots on all Win32 platforms.
	
	For additional information about this limitation in TLS slots, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q193462 PRB: A Process Can Map 64 (or Less) Statically-linked CRT DLLs
	
	RESOLUTION
	==========
	
	Make sure that the ATL DLLs link dynamically with the CRT libraries or with the
	MFC libraries.
	
	When you link dynamically with the CRT and MFC, you can benefit from the
	following:
	
	- Faster DLL load times
	- Better memory usage
	- Improved speed
	
	CRT Libraries:
	
	To link the ATL DLLs dynamically with the CRT libraries, follow these steps:
	
	1. In Project Settings for the build in question, click the C/C++ tab, and then
	  set the Category to Code Generation.
	
	2. In the Use run-time library list, change the setting as follows:
	
	  a. For Release builds, change Multithreaded to Multithreaded DLL.
	
	  b. For Debug builds, change Debug Multithreaded to Debug Multithreaded DLL.
	
	MFC Libraries:
	
	To link the ATL DLLs dynamically with the MFC libraries, follow these steps:
	
	1. In Project Settings for the build in question, click the General tab.
	
	2. On the General tab, in the Microsoft Foundation Classes list, change "Use MFC
	  in a Static Library" to "Use MFC in a Shared DLL".
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a large number of ATL DLL projects that are named Class"X" (without
	  the quotation marks), where X is a number between 1 and 100 for computers
	  that are running on one of the following operating systems:
	
	   - Windows NT
	   - Windows Millennium Edition
	   - Windows 98
	   - Windows 95
	
	2. Insert an ATL simple object named ObjectX into each DLL project.
	
	3. Build each project.
	
	4. Paste the following code into a file that has an extension of .vbs, for
	  example, TestTls.vbs:
	
	  FOR i = 1 TO 100
	  	ProgId = "Class" & CSTR(i) & "." & "ObjectX"
	  	WScript.Echo "Creating component " & CSTR(i)
	  	SET Obj = CreateObject(ProgId)
	  	SET Obj = NOTHING
	  NEXT
	
	5. Run the TestTls.vbs file: at the command prompt, type the following
	  (CScript.exe must be in the PATH environment variable):
	
	  CScript TestTls.vbs
	
	  The exact output that you receive will vary depending on the version of the
	  OS. The following is an example of the output produced on one computer:
	
	  ....
	  Creating component 65
	  Creating component 66
	  Creating component 67
	  TestTLS.VBS(4, 2) Microsoft VBScript runtime error: ActiveX component can't create object: 'Class67.ObjectX'
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL 
	Technology        : kbVCsearch kbAudDeveloper kbMFC kbATLsearch kbATL300 kbVC600 kbVC32bitSearch
	Version           : :3.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
