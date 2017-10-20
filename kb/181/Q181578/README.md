---
layout: page
title: "Q181578: HOWTO: Callback Visual Basic Functions From a C DLL"
permalink: /kb/181/Q181578/
---

## Q181578: HOWTO: Callback Visual Basic Functions From a C DLL

{% raw %}

	Article: Q181578
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the new AddressOf operator in Microsoft Visual Basic 5.0, you can pass a
	DLL the pointer to a Microsoft Visual Basic function and have the DLL call that
	function through the pointer. This article gives you some sample code to get
	started and also demonstrates how to pass strings from your DLL to Microsoft
	Visual Basic.
	
	MORE INFORMATION
	================
	
	To use this article, follow the steps below to create a Microsoft Visual Basic
	5.0 .exe project and a Microsoft Visual C++ 5.0 .dll project. Then run your
	Microsoft Visual Basic program to test it.
	
	Steps to Create the Microsoft Visual Basic 5.0 Project
	------------------------------------------------------
	
	1. Create a new Standard EXE project in Microsoft Visual Basic 5.0.
	
	2. Add a Command button to Form1.
	
	3. Add the following declare statement to the General Declarations section of
	  Form1:
	
	        Private Declare Sub ExecuteCallback Lib "vcvbdll" ( _
	           ByVal pFunc as Long)
	
	4. Add the following code to the Click event of the Command button:
	
	        Call ExecuteCallback(AddressOf MyCallback)
	
	5. Add a new module to the project, and add the following code to the module.
	
	        Sub MyCallback(ByVal parm as String)
	           MsgBox "You are inside the VB callback function!"
	           MsgBox "Parameter passed in was: " & parm
	        End Sub
	
	Steps to Create the Microsoft Visual C++ 5.0 Project
	----------------------------------------------------
	
	1. Create a new Microsoft Visual C++ 5.0 MFC AppWizard (dll) project named
	  "vcvbdll" and accept all of the default options.
	
	2. Add the following code to the end of the vcvbdll.cpp file:
	
	        void __stdcall ExecuteCallback(long cbAddress) {
	           // Declare the function pointer, with one string argument.
	           typedef void (__stdcall *FUNCPTR)(BSTR pbstr);
	           FUNCPTR vbFunc;
	
	           // Point the function pointer at the passed-in address.
	           vbFunc = (FUNCPTR)cbAddress;
	
	           // Call the function through the function pointer.
	           vbFunc(SysAllocString(L"Hi! This message came from your DLL!"));
	        }
	
	3. Add the following line to the end of the vcvbdll.def file to export the
	  ExecuteCallback function:
	
	        ExecuteCallback
	
	4. Compile the project, and copy the .dll to the \Windows\System directory to
	  test it.
	
	REFERENCES
	==========
	
	Microsoft Visual Basic 5.0 Books Online: AddressOf
	
	For additional information about using the AddressOf operator for callbacks, see
	the following article in the Microsoft Knowledge Base:
	
	  Q171729 : HOWTO: Do Generic Callbacks Using a Helper DLL
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Joe Crump,
	Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVC500 kbVBp kbDSupport kbdsd kbDLL
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
