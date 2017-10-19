---
layout: page
title: "Q153546: HOWTO: Pass Optional Parameters to a C DLL Function from VB"
permalink: /kb/153/Q153546/
---

## Q153546: HOWTO: Pass Optional Parameters to a C DLL Function from VB

	Article: Q153546
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to pass optional parameters to a C DLL function from Visual
	Basic. Visual Basic supports the Optional Keyword in the Declare statement that
	tells the compiler to pass a VARIANT of type VT_ERROR if the corresponding
	parameter is omitted in the function call. Otherwise, if the parameter is not
	omitted, it is passed according to however it may be declared. In any case,
	nothing is optional on the C side of things -- the function always accepts the
	fixed number of parameters for which it has been defined.
	
	This article provides a step-by-step example that demonstrates how to pass
	optional parameters to a C DLL function.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a 32-bit Windows C DLL with the following function:
	
	        long _stdcall OptionalParamCall(LPSTR pStr, VARIANT op1, VARIANT op2)
	        {
	           if (op1.vt == VT_ERROR && op1.scode == DISP_E_PARAMNOTFOUND)
	           MessageBox (NULL, "Optional Param1 is Empty!", "Test DLL", MB_OK);
	
	           if (op2.vt == VT_ERROR && op2.scode == DISP_E_PARAMNOTFOUND)
	           MessageBox (NULL, "Optional Param2 is Empty!", "Test DLL", MB_OK);
	
	           MessageBox (NULL, pStr, "Test DLL", MB_OK);
	           return 1;
	        }
	
	  Export the function in a .DEF file as follows:
	
	     LIBRARY   TESTDLL
	
	     CODE      PRELOAD MOVEABLE DISCARDABLE
	     DATA      PRELOAD SINGLE
	
	     EXPORTS
	     OptionalParamCall     @1
	
	  Name this DLL as Testdll.dll and put the file into the \system (Windows 95/98)
	  or \system32 (Windows NT/2000) directory.
	
	2. Create a new project in Visual Basic, and add the following code to Form1:
	
	     Private Declare Function OptionalParamCall Lib "testdll.dll" _
	        (ByVal s As String, Optional ByVal op1, Optional ByVal op2) As Long
	
	        Private Sub Form_Click()
	           ret& = OptionalParamCall("hello")
	           ret& = OptionalParamCall("hello", 7)
	           ret& = OptionalParamCall("hello", , "world")
	           ret& = OptionalParamCall("hello", 8.2, "Mike")
	        End Sub
	
	3. Run the Visual Basic program, and click the form. A series of Msgboxes will
	  appear to tell you which optional parameters are empty and give the value of
	  the string passed as the first parameter.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
