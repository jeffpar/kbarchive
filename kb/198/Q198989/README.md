---
layout: page
title: "Q198989: FIX: ATL Local Server Wizard-Generated Code Doesn't Call Term"
permalink: kb/198/Q198989/
---

## Q198989: FIX: ATL Local Server Wizard-Generated Code Doesn't Call Term

	Article: Q198989
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbATL kbCOMt kbLocalSvr kbThreadSync kbVC kbVC500bug kbVC600fix kbGrpDSMFCATL
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating a new ATL COM server application with AppWizard, which was generated as
	an EXE for the Server Type, does not call CComModule::Term() inside of
	tWinMain(). As a result, kernel objects that ATL has created, such as critical
	sections, will not be released until the process has been unloaded entirely by
	the operating system. Also, any class factories that were created and used may
	not be released until CoUninitialize() has been called.
	
	Note that this problem exists in Visual C++ 6.0 only when an ATL Service project
	is selected in the ATL Wizard.
	
	CAUSE
	=====
	
	This problem is due to a bug in the Visual C++ 5.0 AppWizard.
	
	RESOLUTION
	==========
	
	Add a call to the Term function.
	
	For example, you may change the code generated from the following
	
	  extern "C" int WINAPI _tWinMain(HINSTANCE hInstance,
	      HINSTANCE /*hPrevInstance*/, LPTSTR lpCmdLine, int /*nShowCmd*/)
	  {
	      lpCmdLine = GetCommandLine(); //This line necessary for _ATL_MIN_CRT.
	
	      //Code omitted for brevity...
	      CoUninitialize();
	      return nRet;
	  }
	
	to the following:
	
	  extern "C" int WINAPI _tWinMain(HINSTANCE hInstance,
	      HINSTANCE /*hPrevInstance*/, LPTSTR lpCmdLine, int /*nShowCmd*/)
	  {
	      lpCmdLine = GetCommandLine(); //This line necessary for _ATL_MIN_CRT.
	
	      //Code omitted for brevity...
	      _Module.Term();
	      CoUninitialize();
	      return nRet;
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual C++ 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ATL COM Server Application with AppWizard; pick EXE as the
	  Server Type.
	
	2. Examine the _tWinMain function and look for a call:
	
	  _Module.Term();
	
	REFERENCES
	==========
	
	CComModule::Term in MSDN
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbwizard kbATL kbCOMt kbLocalSvr kbThreadSync kbVC kbVC500bug kbVC600fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
