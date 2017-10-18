---
layout: page
title: "Q197431: PRB: Year Returned by DateSerial may be Unanticipated"
permalink: kb/197/Q197431/
---

## Q197431: PRB: Year Returned by DateSerial may be Unanticipated

	Article: Q197431
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DateSerial function can seem to return unanticipated results using years
	represented by numeric expressions. For example, the following evaluates to
	1/1/100 and not 1/1/00 or 1/1/2000 because 99 + 1 or 100 is a valid full size
	date:
	
	     DateSerial(99 + 1, 1, 1)
	
	CAUSE
	=====
	
	Visual Basic documentation gives the following rule concerning year arguments
	used by the DateSerial function:
	
	  For the year argument, values between 0 and 29, inclusive, are interpreted as
	  the years 2000-2029. Values between 30 and 99, inclusive, are interpreted as
	  the years 1930-1999.
	
	This rule only applies to year arguments represented with 1 or 2 digits. This can
	sometimes produce results that may not be anticipated. For example, in the
	following line of code the year is actually 100, which is a valid 3 digit value
	in the range of 100 to 9999:
	
	  DateSerial(99 + 1, 1, 1)
	
	Therefore, DateSerial correctly returns the date 1/1/100. In this case DateSerial
	will not return 1/1/00 or 1/1/2000. This type of behavior can occur whenever the
	numeric expression in the year argument evaluates to a year having more than 2
	digits.
	
	RESOLUTION
	==========
	
	There are several ways to get the desired result (1/1/2000) using years passed
	as numeric expressions. One way would be to use DateSerial with the full 4 digit
	year. This example returns 1/1/00:
	
	  DateSerial(1999 + 1, 1, 1)
	
	DateSerial can also be used in conjunction with the year function. This example
	also returns 1/1/00:
	
	  DateSerial(Year(#1/1/99#)+1, Month(#1/1/99#), Day(#1/1/99#))
	
	In addition to the DateSerial function, the DateAdd or DateDiff functions can
	also be used. The following example also returns 1/1/00:
	
	  DateAdd("yyyy", 1, "1/1/99")
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE Project in Visual Basic. Form1 is created by
	  default.
	
	2. Add three command buttons and one text box to the default form (Form1).
	
	3. Add the following code to the General Declarations of the form:
	
	        Dim k As Integer
	        Private Sub Command1_Click()
	           k = MsgBox(DateAdd("yyyy", 1, Text1), vbOKOnly, _
	           "DateAdd")
	        End Sub
	
	        Private Sub Command2_Click()
	           k = MsgBox(DateSerial(Year(Text1) + 1,Month(Text1), _
	           Day(Text1)), OKOnly, "DateSerial with Year")
	        End Sub
	
	        Private Sub Command3_Click()
	           k = MsgBox(DateSerial(Right(Text1, 2) + 1,Month(Text1), _
	           Day(Text1)), vbOKOnly, "DateSerial without Year")
	        End Sub
	
	        Private Sub Form_Load()
	           Text1 = "1/1/99"
	        End Sub
	
	4. Run the program and try clicking the different buttons.
	
	Notice that Command1 and Command2 display the date 1/1/00 and Command3 displays
	the date 1/1/100.
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
