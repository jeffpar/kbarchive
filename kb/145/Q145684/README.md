---
layout: page
title: "Q145684: BUG: ClearSel Method of Slider Sets SelStart Property to -1"
permalink: kb/145/Q145684/
---

## Q145684: BUG: ClearSel Method of Slider Sets SelStart Property to -1

	Article: Q145684
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
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
	
	SYMPTOMS
	========
	
	After using the Slider control's ClearSel method, the SelStart property is set
	to -1. According to the Visual Basic documentation and to the Online Help, the
	SelStart property should be identical to the Value property after using the
	ClearSel method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	1. Start Visual Basic.
	
	2. Start a new project. Form1 is created by default.
	
	3. Add a Slider control to Form1.
	
	  Note: With Visual Basic Versions 5.0 and later, you must first reference the
	  Microsoft Windows Common Controls library.
	
	4. Change the SelectRange property of Slider1 to True.
	
	5. From the Run menu, choose Start (ALT, R, S) or press F5 to start the
	  application. Immediately press CTRL+BREAK, select Break from the Run menu, or
	  press the Pause button on the toolbar to pause execution.
	
	6. The following lines of code will select a range in the Slider control. Type
	  them on separate lines in the Debug window.
	
	        Slider1.SelStart = 2
	        Slider1.SelLength = 3
	
	7. After visually verifying that the correct range is selected in the slider
	  control, invoke the slider's ClearSel method by typing the following in the
	  Debug window:
	
	        Slider1.ClearSel
	
	8. Examine the SelStart property of the slider by typing
	
	        Print Slider1.SelStart
	
	  in the Debug window.
	
	  According to the documentation, this should return a 0, because the Value
	  property of the slider is 0 by default and has not been changed. However, it
	  instead returns a value of -1.
	
	Additional query words: kbVBp400bug kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
