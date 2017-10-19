---
layout: page
title: "Q195657: PRB: Type Conversion Functions Can Return Unexpected Results"
permalink: /kb/195/Q195657/
---

## Q195657: PRB: Type Conversion Functions Can Return Unexpected Results

	Article: Q195657
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbFloatPoint kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbCodeSam
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Type conversion functions, such as CInt, may sometimes return unexpected
	results. For example, CInt(2.5) should return 2 according to the documentation.
	However, CInt(25.0 * 0.1) will sometimes result in 3.
	
	CAUSE
	=====
	
	This is caused by the way floating point values are handled in computers.
	Because most floating point values cannot be accurately represented with fixed
	length binary values, the internal result of the floating point calculation may
	differ slightly. For example, 25.0 * 0.1 may be 02.5000... 001 or 02.4999...999
	depending on many factors. This rounding error causes the CInt function to
	return 2 or 3 in different situations.
	
	RESOLUTION
	==========
	
	This is expected behavior and there is no fix for this. However, you can make
	these functions return the expected values more often by using wrapping
	functions. For example, you can use the following function instead of using
	CInt:
	
	     Private Function MyCInt(ByVal dTemp As Double) As Integer
	        MyCInt = CInt(dTemp)
	     End Function
	
	This works by forcing the expression to be evaluated and stored into an
	intermediate variable. This forces rounding, which often discards the small
	difference between the correct value and the real value in the computer. This
	method can also be used for CLng, etc.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add two CommandButtons to Form1 and keep the default names, Command1 and
	  Command2.
	
	3. Add the following code to the code window of Form1:
	
	        Option Explicit
	
	        Private Function MyCInt(Byval dTemp As Double) As Integer
	           MyCInt = CInt(dTemp)
	        End Function
	
	        Private Sub Command1_Click()
	           Dim t As Single, s As Single
	           Dim z As Integer, h As Integer
	           Dim Msg As String
	
	           Msg = "Using CInt for these calculations:" & vbCrLf
	           t = 25#
	           s = t * 0.1
	           Msg = Msg & "The result of 25.0 * 0.1 = " & s & vbCrLf
	
	           h = CInt(s)
	           Msg = Msg & "Where t = 25#, and s = t * 0.1, the result of " _
	           & "CInt(t * 0.1) = " & h & vbCrLf
	
	           z = CInt(t * 0.1)
	           Msg = Msg & "And the result of CInt(t * 0.1) = " & z
	
	           MsgBox Msg
	        End Sub
	
	        Private Sub Command2_Click()
	           Dim t As Single, s As Single
	           Dim z As Integer, h As Integer
	           Dim Msg As String
	
	           Msg = "Using MyCInt for these calculations:" & vbCrLf
	           t = 25#
	           s = t * 0.1
	           Msg = Msg & "The result of 25.0 * 0.1 = " & s & vbCrLf
	
	           h = MyCInt(s)
	           Msg = Msg & "Where t = 25#, and s = t * 0.1, the result of " _
	           & "MyCInt(t * 0.1) = " & h & vbCrLf
	
	           z = MyCInt(t * 0.1)
	           Msg = Msg & "And the result of MyCInt(t * 0.1) = " & z
	
	           MsgBox Msg
	        End Sub
	
	4. Press the F5 key to run the application. Click Command1 and the result of
	  CInt(2.5 * 0.1) is 3 (incorrect). Click Command2 and the result of MyCInt(2.5
	  * 0.1) is 2 (correct).
	
	REFERENCES
	==========
	
	For more information regarding precision and accuracy in floating point
	calculations, please see the following articles in the Microsoft Knowledge
	Base:
	
	  Q125056 INFO: Precision and Accuracy in Floating-Point Calculations
	
	  Q145889 INFO: Why Floating Point Numbers May Lose Precision
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbFloatPoint kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbCodeSam 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
