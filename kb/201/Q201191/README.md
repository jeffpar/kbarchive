---
layout: page
title: "Q201191: PRB: Registering ATL Server Causes 0x80040154 Error"
permalink: /kb/201/Q201191/
---

## Q201191: PRB: Registering ATL Server Causes 0x80040154 Error

{% raw %}

	Article: Q201191
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL200 kbATL210 kbCOMt kbCtrlCreate kbInprocSvr kbRegistry kbVC500 kbVC600
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you register an ATL server, you might get error 0x80040154 (Class not
	registered). For DLLs, REGSVR32.exe returns this error. For .exes, the call to
	_Module::RegisterServer(CComModule::RegisterServer) in _tWinMain() returns this
	error.
	
	CAUSE
	=====
	
	ATL70.dll is not installed, or it is not registered.
	
	NOTE: For Visual Studio 6.0 and earlier, the ATL runtime is contained in ATL.dll.
	If you are using Visual Studio 6.0 or earlier, use ATL.dll instead of the later
	Visual Studio .NET version.
	
	RESOLUTION
	==========
	
	Install ATL70.dll (or ATL.dll for earlier versions of Visual Studio) in the
	Windows\System or Winnt\System32 directory, and then register it by using
	Regsvr32.exe. There are UNICODE and ANSI versions of ATL70.dll and ATL.dll.
	Install the appropriate version on the target operating system (that is, UNICODE
	for Microsoft Windows NT, and ANSI for Microsoft Windows 95 or Microsoft Windows
	98).
	
	NOTE: The following steps apply only to Visual Studio 6.0 and earlier. Visual
	Studio .NET does not have a MinDependency build target.
	
	As an alternative, do not use ATL.dll. When you rebuild your ATL server with a
	build target of ReleaseMinDependency, the code in ATL.dll is statically linked
	to your project.
	
	Even for a 'Release MinDependency' ATL.dll may need to be shipped.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q244955 PRB: MinDependency Project May Need to Include Atl.dll
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	ATL has a registrar component that is used during registration. This component
	resides in ATL.dll. During registration, the error 0x80040154 is returned from
	CoCreateInstance() when it fails to create the registrar component.
	
	Location of ATL.DLL in the Visual C++ 5.0 CD::
	
	OS\SYSTEM (UNICODE version)
	OS\SYSTEM\ANSI (ANSI version)
	
	Location of ATL.DLL in the Visual C++ 6.0 CD::
	
	DevStudio\VC\Redist (UNICODE version)
	DevStudio\VC\Redist\Ansi (ANSI version)
	
	Location of ATL70.DLL in the Visual C++ .NET CD::
	
	Win\System (UNICODE version)
	Win\System\ansi (ANSI version)
	
	REFERENCES
	==========
	
	MSDN Library: Registrar, ATL Registry Component; Regsvr32, using
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Samson
	Tanrena, Microsoft Corporation.
	
	
	Additional query words: REGDB_E_CLASSNOTREG
	
	======================================================================
	Keywords          : kbActiveX kbATL200 kbATL210 kbCOMt kbCtrlCreate kbInprocSvr kbRegistry kbVC500 kbVC600 kbATL300 kbFAQ 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.0,2.1,3.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
