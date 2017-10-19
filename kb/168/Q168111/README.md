---
layout: page
title: "Q168111: FIX: #import Does Not Compensate for Gaps in vtable"
permalink: /kb/168/Q168111/
---

## Q168111: FIX: #import Does Not Compensate for Gaps in vtable

	Article: Q168111
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbCompiler kbVC500bug kbVS97sp1fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An access violation may occur when you #import a type library of a COM object
	that was produced by Visual Basic 5.0.
	
	CAUSE
	=====
	
	The compiler does not compensate for gaps in the vtable left by Visual Basic for
	properties that are Objects. The sample code below demonstrates this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following Visual Basic code in a Class Module of an ActiveX DLL
	  project: Option Explicit Public Obj As Object Public Val As Long
	
	        Private Sub Class_Initialize()
	           Val = 2
	        End Sub
	
	2. Make a native dll from the above code. In this example, it is named Test.dll
	  and the Class Module is named TestClass.
	
	3. Place the following code in a .cpp file: #import "test.dll" no_namespace
	
	        void func()
	        {
	           _TestClassPtr p( __uuidof(TestClass) );
	           int i = p->Val;  // 0xc0000005 here
	        }
	
	When the C++ code is executed, an access violation occurs on the commented line
	of code.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbCompiler kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
