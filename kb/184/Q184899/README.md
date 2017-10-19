---
layout: page
title: "Q184899: PRB: SelPrint Method Issues an EndDoc When Printing"
permalink: /kb/184/Q184899/
---

## Q184899: PRB: SelPrint Method Issues an EndDoc When Printing

	Article: Q184899
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SelPrint method in Visual Basic, you receive unexpected
	results. If you execute an EndDoc method after a SelPrint, you may receive the
	following error:
	
	  Run-time Error #482:
	  Printer Error
	
	Additionally, if you are printing information after the SelPrint method within
	the same print job, you may find that the information is not printed.
	
	CAUSE
	=====
	
	The SelPrint method of the Rich TextBox control that ships with Visual Basic 6.0
	has an optional second argument. This argument determines whether the SelPrint
	method performs the StartDoc and EndDoc printer control operations, and sends
	data to the printer using only EndPage and StartPage operations as required. If
	you set this second argument to TRUE (or omit it), the SelPrint method performs
	the StartDoc and EndDoc operations. If you set this second argument to FALSE,
	the SelPrint method does not perform the StartDoc and EndDoc operations.
	
	RESOLUTION
	==========
	
	There are two solutions to this problem:
	
	- If you are not printing any information before or after the SelPrint method
	  executes, do not use the EndDoc method and either omit the second argument of
	  SelPrint or set it to True.
	
	- If you want to print additional information after the SelPrint method
	  executes, set the second argument of SelPrint to False so that SelPrint does
	  not issue an EndDoc before your print job completes.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic.
	
	2. On the Project menu, click Components, and check "Microsoft Rich TextBox
	  Control 6.0."
	
	3. Add a RichTextbox control to Form1.
	
	4. Add the following code to the Click event of Form1:
	
	        Printer.Print " "
	        Printer.Print "Hello"
	        RichTextBox1.SelPrint Printer.hDC
	        Printer.Print "Bye"
	        Printer.EndDoc
	
	5. Press F5 to run the project and then Form1.
	
	RESULTS: You receive the run-time error 482. Additionally, you may notice that
	anything printed after the SelPrint method ("Bye" in this case) is not included
	in the output as expected.
	
	Additional query words: kbVBp600 kbVBp kbdsd kbDSupport kbPrinting
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
