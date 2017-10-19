---
layout: page
title: "Q153586: HOWTO: Call C Functions That Use the _cdecl Calling Convention"
permalink: /kb/153/Q153586/
---

## Q153586: HOWTO: Call C Functions That Use the _cdecl Calling Convention

	Article: Q153586
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is not possible to directly call a C function in a DLL if that function uses
	the _cdecl calling convention. This is because Visual Basic uses the _stdcall
	calling convention for calling functions. This is a problem because if _cdecl is
	used, the calling function is responsible for cleaning up the stack. However, if
	_stdcall is used, the called function is responsible for cleaning up the stack.
	
	NOTE: An .EXE file created in Visual Basic will allow you to call a DLL function
	that has been declared with the _cdecl calling convention without an error. It
	is only when you try to call such a function when running a program from the
	Visual Basic IDE, that Visual Basic generates the following error:
	
	  Run-time Error '49':
	  Bad DLL Calling Convention
	
	The fact that the EXE version allows you to call such functions has been
	confirmed to be a bug by Microsoft. You should not rely on this behavior as this
	might change in future versions of Visual Basic.
	
	
	MORE INFORMATION
	================
	
	If it is necessary to call functions that use the _cdecl calling convention
	(such as the MSTEST DLLs), wrap the _cdecl call inside a _stdcall call that is
	exposed or exported to Visual Basic. This is demonstrated in the following
	step-by-step example.
	
	Step-by-Step Example
	--------------------
	
	1. Create a 32-bit Windows C DLL with the following functions:
	
	        long _cdecl PassStr(LPSTR pStr)
	        {
	         MessageBox (NULL, pStr, "Test DLL", MB_OK);
	         return 1;
	        }
	
	        long _stdcall PassStrStdCall(LPSTR pStr)
	        {
	         return PassStr(pStr);
	        }
	
	  Export the functions in a .DEF file as follows:
	
	        LIBRARY   TESTDLL
	
	        CODE      PRELOAD MOVEABLE DISCARDABLE
	        DATA      PRELOAD SINGLE
	
	        EXPORTS
	        PassStr            @1
	        PassStrStdCall     @2
	
	  Name this DLL Testdll.dll, and save the file to the Windows\System directory
	  in Windows 95 or Windows 98, or the Windows\System32 directory in Windows NT
	  or Windows 2000.
	
	2. Create a new project in Visual Basic. Form1 is created by default. Add the
	  following code to the general declarations portion of Form1:
	
	        Private Declare Function PassStrStdCall Lib "testdll.dll" _
	                                     (ByVal s As String) As Long
	
	        Private Sub Form_Click()
	           ret& = PassStrStdCall("hello")
	           Print ret&
	        End Sub
	
	3. Run the Visual Basic program, and click the form. A Msgbox will show the
	  value of the passed string.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
