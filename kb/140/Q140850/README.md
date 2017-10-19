---
layout: page
title: "Q140850: HOWTO: Properly Export Functions Using the MFC Shared Library"
permalink: /kb/140/Q140850/
---

## Q140850: HOWTO: Properly Export Functions Using the MFC Shared Library

	Article: Q140850
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbnokeyword kbDLL kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to properly implement an exported function from an
	MFC Regular DLL that uses the MFC Shared Library by converting the DLLTRACE
	sample to use the shared version of the MFC DLL. The article also discusses some
	of the general problems that result in any Regular DLL that does not switch the
	module state appropriately.
	
	The Visual C++ 4.0 sample DLLTRACE demonstrates how to create a Regular DLL with
	an exported function that can be called to pop up a modal dialog box. By
	default, this sample is set to statically link MFC to the DLL. In earlier
	versions of Visual C++, this was the only option available for Regular DLLs.
	These kinds of DLLs were formerly known as _USRDLLs.
	
	Now, it is possible for a Regular DLL to use MFC from the shared MFC40 DLL.
	Because there are certain benefits for doing this, you may want to convert the
	DLLTRACE sample to use the shared MFC DLL. However, it is necessary to use the
	macro AFX_MANAGE_STATE in order to switch the proper global MFC module state
	correctly.
	
	MORE INFORMATION
	================
	
	Size is the major advantage for converting a statically-linked Regular DLL to a
	Regular DLL that uses the MFC Shared Library. Converting the Trace.dll from the
	DLLTRACE sample to use the Shared Library will drop the size of a release-build
	DLL from around 95K down to about 12K. The difference between debug builds is
	even more staggering: a debug build Trace.dll drops from nearly a megabyte in
	size down to 25K when using MFC in the Shared Library.
	
	Steps to Convert DLLTRACE to Use MFC in a Shared Library
	--------------------------------------------------------
	
	1. In the Build Settings property sheet, select both the release and debug
	  builds to change settings for.
	
	  Visual C++ .NET:
	  On the Properties dialog for the project, from the Configuration combo box,
	  select All Configurations.
	
	2. In the General tab, in the Microsoft Foundation Classes combo box, change the
	  option to "Use MFC in a Shared DLL (mfc(d).dll)".
	
	  Visual C++ .NET:
	  On the General tab, change Use of MFC option to Use MFC in a Shared DLL.
	
	3. Add the following line of code to the beginning of every function exported
	  from the DLL:
	
	  AFX_MANAGE_STATE(AfxGetStaticModuleState())
	
	The AfxGetStaticModuleState() MFC Function
	------------------------------------------
	
	The code in step 3 uses an MFC-provided macro (AFX_MANAGE_STATE) to swap the
	current module state with the state returned from AfxGetStaticModuleState()
	until the end of the current scope. The AfxGetStaticModuleState() function is a
	special MFC function in Regular DLLs that returns the module state of the
	Regular DLL in the context of the DLL. For example, Trace.dll exports only three
	functions:
	
	  PromptTraceFlags()
	  ProcessDLLIdle()
	  FilterDLLMsg()
	
	Here is what FilterDLLMsg() should look like in the converted form:
	
	  extern "C" BOOL FAR PASCAL EXPORT FilterDllMsg(LPMSG lpMsg)
	     {
	
	        AFX_MANAGE_STATE(AfxGetStaticModuleState())
	        TRY
	        {
	            return AfxGetApp()->PreTranslateMessage(lpMsg);
	        }
	        END_TRY
	        return FALSE;
	
	     }
	
	After making these changes, rebuild the DLLTRACE project. The application will
	use the new DLL and work just as it did before.
	
	Problems Occur If the AFX_MANAGE_STATE Macro Is Not Used
	--------------------------------------------------------
	
	Certain problems occur if the AFX_MANAGE_STATE macro is not used. In discussing
	these problems, this article may shed some light on problems that crop up when
	attempting to convert the old-style _USRDLLs to use the DLL version of MFC.
	
	If the PromptTraceFlags function does not use the AFX_MANAGE_STATE macro at the
	very beginning of execution, an assertion will fail at line 43 in Dlgdata.cpp
	and the following message will appear in the output window:
	
	  Error: no data exchange control with ID xx.
	
	The primary cause of this problem is that MFC is using the resource handle of the
	main application to load the dialog box template for the Prompt Dialog. This
	template is actually stored in the Trace DLL. The root cause, of course, is that
	MFC's module state information has not been switched by the AFX_MANAGE_STATE
	macro. The resource handle is recovered from MFC's module state; not switching
	the module state causes the wrong resource handle to be used.
	
	If the AFX_MANAGE_STATE macro is omitted from the beginning of either the
	FilterDLLMsg or ProcessDLLIdle function, a different problem occurs. In this
	case, immediately after executing the DLLTRACE application it takes a momentary
	siesta and then quits with an error message similar to this one:
	
	  Unhandled exception in dlltrace.exe (MFC40D.DLL):
	  0xC00000FD: Stack Overflow
	
	The primary culprit here is the AfxGetApp() function, which is used to call
	either PreTranslateMessage() in the case of FilterDLLMsg() or OnIdle() in the
	case of ProcessDLLIdle(). Once again, the root evil is the failure to switch the
	module state, which maintains the pointer to the current CWinApp object that is
	returned from AfxGetApp().
	
	In each of these situations, when the module state is not switched, AfxGetApp()
	returns a pointer to the CTheApp object of the application, not the CTracerDLL
	object of the DLL, as it rightfully should. When FilterDLLMsg() goes to call
	AfxGetApp()->PreTranslateMessage(), it calls CTheApp::PreTranslateMessage().
	However, FilterDllMsg() was called by CTheApp::PreTranslateMessage(); so, once
	again, FilterDLLMsg() is called, which in turn calls
	CTheApp::PreTranslateMessage(), creating an infinite recursion. ProcessDLLIdle()
	is invoked in a similar way.
	
	To avoid this recursive state, AFX_MANAGE_STATE is used and AfxGetApp() returns a
	pointer to the CTracerDLL object in the DLL. Because CTracerDLL has no override
	of PreTranslateMessage() or OnIdle(), the default MFC versions are called--not
	the CTheApp overrides. Consequently, there is no infinite recursion.
	
	Final Question
	--------------
	
	Why doesn't AFX_MANAGE_STATE need to be put on every function in the DLL?
	CTracerDLL::InitInstance() is called by the MFC code in the application, why
	doesn't it need to have AFX_MANAGE_STATE?
	
	The answer is that MFC does it for you. MFC manually shifts the module state
	before InitInstance() and then switches it back after InitInstance() returns.
	The same is true for all message map handlers. Regular DLLs actually have a
	special master window procedure that automatically switches the module state
	before routing any message.
	
	REFERENCES
	==========
	
	MFC Technical Note 58.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbnokeyword kbDLL kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
