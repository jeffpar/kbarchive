---
layout: page
title: "Q172105: FIX: NewPage Method Followed by EndDoc Method Prints Blank Page"
permalink: kb/172/Q172105/
---

## Q172105: FIX: NewPage Method Followed by EndDoc Method Prints Blank Page

	Article: Q172105
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a call is made to the EndDoc method of the Printer Object (or the application
	is closed) after having issued the NewPage method, a page is ejected from the
	printer regardless of whether any actual printing has taken place.
	
	This is contrary to the behavior of Visual Basic 4.0, as well as the online Help
	in Visual Basic 5.0 for the EndDoc method, which states the following:
	
	  If EndDoc is invoked immediately after the NewPage method, no additional
	  blank page is printed.
	
	RESOLUTION
	==========
	
	To work-around this problem, do not call the NewPage method until you know you
	are going to print something on the page.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project.
	
	2. Add a CommandButton to Form1.
	
	3. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	           Printer.Print "Page 1"
	           Printer.NewPage
	           Printer.EndDoc
	        End Sub
	
	4. Press the F5 key to run the project.
	
	5. Click the button. Note that two pages are printed. The first page prints as
	  expected, but it is followed by a blank page.
	
	REFERENCES
	==========
	
	Visual Basic 5.0 Online Help for the EndDoc Method
	
	Additional query words: kbVBp500bug kbVBp600fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
