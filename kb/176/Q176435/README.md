---
layout: page
title: "Q176435: PRB: Compiling to Native Code Can Be Slow"
permalink: kb/176/Q176435/
---

## Q176435: PRB: Compiling to Native Code Can Be Slow

	Article: Q176435
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling a large project to native code, especially with optimizations
	selected, the compile time may be so long as to give the appearance of having
	"hung" the machine. Because there is no status bar to indicate the progress of
	the compiler, the only indicator available is to watch for hard drive activity,
	which may only occur once or twice a minute as this is a CPU intensive activity.
	
	CAUSE
	=====
	
	This is by design. Compiling to native code takes more time than compiling to
	p-code. There are some techniques suggested below for taking advantage of some
	Visual Basic language features to speed up compile time.
	
	MORE INFORMATION
	================
	
	Using the techniques outlined below can result in significantly faster compile
	time. In some cases it has reduced compile time for large projects from over an
	hour to less than 10 minutes.
	
	Minimize the Dots
	-----------------
	
	When referencing objects in Visual Basic, you use the dot syntax '.' to navigate
	an object's hierarchy of collections, objects, properties, and methods. It is
	not uncommon to create very lengthy navigation strings. For example:
	
	     ' Refers to cell A1 on Sheet1 in the first workbook
	     ' of an Microsoft Excel spreadsheet.
	     Application.Workbooks.Item(1).Worksheets.Item_
	     ("Sheet1").Cells.Item(1,1)
	
	In addition to being a rather lengthy string to type, this line of code is fairly
	difficult to read and it is extremely inefficient.
	
	The compiler must resolve each dot every time a dot is encountered. To write
	applications that compile quickly, minimize the use of dots when referencing an
	object.
	
	You can usually minimize the dots by analyzing the objects and methods available
	to you. For example, the above line of code can be shortened by removing the
	Item method (this is the default method for collections anyway, so you'll rarely
	use it in code) and by using the more efficient Range method:
	
	     ' Refers to cell A1 on Sheet1 in the first workbook
	     ' of an Microsoft Excel spreadsheet.
	     Application.Workbooks(1).Worksheets("Sheet1").Range("A1")
	
	You can shorten this even further by rewriting the code so that it refers to the
	active sheet in the active workbook, instead of a specific sheet in a specific
	workbook:
	
	     ' Refers to cell A1 on the active sheet in the
	     ' active workbook.
	     Range("A1")
	
	Of course, the above example assumes it's OK to refer to cell A1 of any sheet
	that happens to be active.
	
	Use Set and With...End With
	---------------------------
	
	Using the Set statement also allows you to shorten navigation strings and gives
	you a bit more control over your code. The following example uses the Dim and
	Set statements to create variables that refer to frequently-used objects:
	
	     Dim xlRange As Object
	     Set xlRange = Application.ActiveSheet.Cells(1,1)
	     xlRange.Font.Bold = True
	     xlRange.Width = 40
	
	Visual Basic provides the With...End With construct to set an implied object
	within code:
	
	     With Application.ActiveSheet.Cells(1,1)
	        .Font.Bold = True
	        .Width = 40
	     End With
	
	REFERENCES
	==========
	
	Books Online, Programmer's Guide, Optimizing Objects
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
