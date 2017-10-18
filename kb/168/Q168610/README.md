---
layout: page
title: "Q168610: PRB: Overflow Doesn't Occur Using Pentium Pro or Pentium II"
permalink: kb/168/Q168610/
---

## Q168610: PRB: Overflow Doesn't Occur Using Pentium Pro or Pentium II

	Article: Q168610
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0,97
	Operating System(s): 
	Keyword(s): KbVBA kbVBp kbVBp400bug kbVBp500bug kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 10-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic for Applications, used with:
	   - Microsoft Office 97 for Windows 
	   - Microsoft Office for Windows 95, versions 7.0, 7.0a, 7.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When converting a floating point value to an integer value on Intel Pentium Pro
	and Pentium II processors, a negative value much less than the smallest negative
	integer does not cause a "Run-Time Error '6': Overflow," as would be expected.
	This problem is actually caused by an erratum in the Pentium Pro and Pentium II
	processors. The following code illustrates this problem:
	
	     Debug.Print CInt(-2.59615E+33)
	     'Where -2.59615E+33 = -2,596,150,000,000,000,000,000,000,000,000,000
	
	Normally, this code will generate "Run-Time Error '6': Overflow." However, on
	Pentium Pro and Pentium II processors, this code does not generate an overflow.
	
	For conversion to type Integer, the failure to report an overflow occurs only
	when the value is in the range -1.84 x 10^19 to -2.60 x 10^33; that is,
	between:
	
	  -18,400,000,000,000,000,000
	
	  -and-
	
	  -2,600,000,000,000,000,000,000,000,000,000,000
	
	Within the range above, fewer than one out of every 65,000 values is affected.
	
	For conversion to type Long, the failure to report an overflow occurs only when
	the value is in the range -1.84 x 10^19 to -3.96 x 10^28; that is, between:
	
	  -18,400,000,000,000,000,000
	
	  -and-
	
	  -39,600,000,000,000,000,000,000,000,000.
	
	Within the range above, fewer than one out of every 4,000,000,000 values is
	affected.
	
	For this problem to be relevant to the Visual Basic developer, the application
	must meet the following conditions:
	
	- Large negative numbers in the ranges given above could possibly be used by
	  the application.
	
	- The application may attempt to convert those numbers to an Integer or a Long.
	
	- The application uses an On Error statement to catch the run-time error that
	  would be caused by an overflow during the conversion.
	
	CAUSE
	=====
	
	Intel Corporation has identified an erratum in the Pentium Pro and Pentium II
	processors relating to the conversion of floating point values to signed integer
	values when using the Floating Point Integer Store (FIST) instruction available
	with these processors. The FIST instruction converts floating point numbers to
	16-, 32-, or 64-bit signed integers. Because the range of a floating point
	number is larger than any of these formats, some floating point numbers cannot
	be converted to integers. When attempting to convert a floating point number
	that is too large to an integer, the processor should signal an "Invalid
	Operation" exception. Visual Basic uses this signal to report "Run-Time Error
	'6': Overflow." The erratum in the Pentium Pro and Pentium II processors causes
	them to not signal the "Invalid Operation" exception for certain numbers in the
	ranges given above.
	
	RESOLUTION
	==========
	
	An application may be affected by this problem if all three of the conditions
	listed under the SYMPTOMS section above are met. In that case, the application
	must be modified to explicitly test for large negative values and raise the
	exception itself. This must be done at any point that a floating point number,
	Single or Double, is converted to Integer or Long, including the following
	situations:
	
	- use of CInt or CLng.
	
	- implicit conversion by assigning to an Integer or Long variable.
	
	- implicit conversion by passing a value to an Integer or Long procedure
	  parameter.
	
	For conversion to either Integer or Long, the following line of code should be
	added immediately before the conversion:
	
	     If FloatingPointValue < -1E+18 Then Error 6
	
	For example:
	
	     Dim IntegerValue As Integer
	     Dim FloatingPointValue As Single
	   
	     FloatingPointValue = -2.59615E+33
	     If FloatingPointValue < -1E+18 Then Error 6
	     IntegerValue = FloatingPointValue
	
	This test and conversion may be encapsulated into a pair of functions, as
	follows:
	
	  Public Function FloatToInt(Expression as Variant) As Integer
	        If Expression < -1E+18 Then Error 6
	        FloatToInt = Expression
	     End Function
	
	     Public Function FloatToLong(Expression as Variant) As Long
	        If Expression < -1E+18 Then Error 6
	        FloatToLong = Expression
	     End Function
	
	Using the FloatToInt function above, the previous example becomes:
	
	     Dim IntegerValue As Integer
	     Dim FloatingPointValue As Single
	
	     FloatingPointValue = -2.59615E+33
	     IntegerValue = FloatToInt(FloatingPointValue)
	
	STATUS
	======
	
	Microsoft has confirmed that this erratum in the processor affects the Microsoft
	products listed at the beginning of this article. Visual Basic version 6.0 is
	not affected by this erratum.
	
	MORE INFORMATION
	================
	
	For more details on this erratum in the Pentium Pro processor, refer to:
	
	  http://developer.intel.com/design/pro/update/pprosu.htm
	
	For more details on this erratum in the Pentium II processor, refer to:
	
	  http://developer.intel.com/design/PentiumII/update/ppiisu.htm
	
	Intel's documentation on this erratum will note additional ranges of values in
	which the "Invalid Operation" exception is not set. Visual Basic is not affected
	by these additional value ranges and it will report the overflow error correctly
	for them.
	
	REFERENCES
	==========
	
	For additional information on a similar problem that affected earlier versions
	of Visual Basic, see the following article in the Microsoft Knowledge Base:
	
	  Q126455 How to Avoid Rounding & Overflow Probs on Pentium Processors
	
	Additional query words:
	
	======================================================================
	Keywords          : KbVBA kbVBp kbVBp400bug kbVBp500bug kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2 kbVBA500Search kbVB400Search kbVBASearch kbZNotKeyword3 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0,97
	Issue type        : kbprb
	
	=============================================================================
	
