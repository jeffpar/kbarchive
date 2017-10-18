---
layout: page
title: "Q171815: FIX: Printer.TextWidth Returning Inconsistent Results in IDE"
permalink: kb/171/Q171815/
---

## Q171815: FIX: Printer.TextWidth Returning Inconsistent Results in IDE

	Article: Q171815
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Printer.TextWidth from the IDE works correctly the first time a project is
	run, but may return incorrect values after that. You must completely close
	Visual Basic and restart to see correct results again. The TextWidth method
	works correctly for other objects, and Printer.TextWidth works correctly in an
	EXE.
	
	CAUSE
	=====
	
	Visual Basic closes the Printer Object's Font information incorrectly when
	switching from run-time to design-time, so, on subsequent runs, the Font
	information may not be retrieved properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic 5.0 Standard EXE Project.
	
	2. Add a CommandButton to Form1.
	
	3. Add code to the Click of the CommandButton to set the Printer object's Font
	  information and to report Printer.TextWidth(<text string>) for a
	  string. For example:
	
	        Private Sub Command1_Click()
	           Printer.FontName = "Arial"
	           Printer.FontSize = 8
	           Debug.Print Printer.Font.Name;
	           Debug.Print Printer.FontSize;
	           Debug.Print Printer.TextWidth("Any text string")
	
	           Printer.FontName = "Arial"
	           Printer.FontSize = 12
	           Debug.Print Printer.Font.Name;
	           Debug.Print Printer.FontSize;
	           Debug.Print Printer.TextWidth("Any text string")
	
	           Printer.FontName = "Arial"
	           Printer.FontSize = 8
	           Debug.Print Printer.Font.Name;
	           Debug.Print Printer.FontSize;
	           Debug.Print Printer.TextWidth("Any text string")
	        End Sub
	
	4. Run the project and click the button. Observe the Immediate Window. You will
	  see the correct value for the text width of the string.
	
	5. Return to design view.
	
	6. Repeat steps 4 and 5 one or more times.
	
	RESULTS: Values will be correct the first time this runs. But reported values
	will sometimes be incorrect on subsequent runs. When compiled into an EXE, the
	results are consistently correct.
	
	Results are unaffected by using a StdFont object or by resetting the Printer and
	Font. For example, adding this before setting the font does not help:
	
	     Printer.Print ""
	     Printer.Font = ""
	     Printer.ScaleMode = 1
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
