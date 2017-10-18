---
layout: page
title: "Q174155: PRB: Format Function May Return Incorrect Values"
permalink: kb/174/Q174155/
---

## Q174155: PRB: Format Function May Return Incorrect Values

	Article: Q174155
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbVBp600fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Decimal values rounded by the Format function may be incorrect. For a specific
	decimal number, the rounded value returned by the Format function may differ for
	different data types and between different versions of Microsoft Visual Basic.
	
	CAUSE
	=====
	
	When a variable is passed into the Format function, an algorithm is used to
	determine the most appropriate numeric data-type to convert the value to, and
	how to format it. This algorithm may not evaluate certain decimal values as
	expected.
	
	RESOLUTION
	==========
	
	To avoid these unexpected conversions, explicitly convert the value to the
	desired data type before using the Format function. For instance, use the CCur
	function to convert the decimal value to a currency data-type that maintains
	more accuracy in rounding.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem does not occur in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Decimal values stored in single and double data-types are binary representations
	of the number. Certain decimal values cannot be exactly represented in binary
	and are approximately represented. When evaluated by the Format function, these
	values may not be rounded as expected.
	
	There are two methods recommended to minimize these errors:
	
	1. Use the Currency data type rather than singles or doubles. Currency values
	  are actually stored as integers with the decimal point scaled four places.
	
	2. Convert the values to Currency before evaluation by the Format function.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Microsoft Visual Basic, create a new Standard EXE project. Form1 is
	  created by default.
	
	2. On Form1, add a textbox (Text1) and three labels (Label1, Label2, and
	  Label3).
	
	3. Set the Text property of Text1 to a zero and the Caption property of each of
	  the labels to nothing.
	
	4. Add the following code to the Change event of the textbox:
	
	        Dim dblValue As Double
	        Dim sngValue As Single
	        Dim curValue As Currency
	
	        dblValue = Text1.Text
	        sngValue = Text1.Text
	        curValue = Text1.Text
	
	        Label1.Caption = Format(dblValue, "#.000")
	        Label2.Caption = Format(sngValue, "#.000")
	        Label3.Caption = Format(curValue, "#.000")
	
	5. Run the project, and enter some decimal values in the textbox, such as:
	
	  0.9125
	  0.7125
	  0.0915
	
	  Note that the values displayed in the labels are different. The Format
	  function rounds some values up and some down based upon the data-type. For
	  instance, 0.9125 may be displayed as .912 and .913.
	
	To correct this problem and to keep all values consistent, do one of the
	following:
	
	1. Use the CCur() function to convert the values to a Currency data type before
	  using the Format() function: (This should not be used if the values will have
	  more than 13 digits.)
	
	  TextDblCur = Format(CCur(dblValue), "#.000")
	  TextSngCur = Format(CCur(sngValue), "#.000")
	
	2. Declare the variables as Currency.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	(Complete) Tutorial to Understand IEEE Floating-Point Errors
	
	HOWTO: Work Around Floating-Point Accuracy/Comparison Problems
	
	Additional query words: Precision
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbVBp600fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
