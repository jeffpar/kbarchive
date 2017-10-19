---
layout: page
title: "Q171505: FIX: VB5 IDE Disappears or IPFs When &quot;End&quot; Button Is Pressed"
permalink: /kb/171/Q171505/
---

## Q171505: FIX: VB5 IDE Disappears or IPFs When &quot;End&quot; Button Is Pressed

	Article: Q171505
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
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
	
	While running in debug mode, Visual Basic may disappear or generate an Illegal
	Page Fault (IPF) error message when the "End" Toolbar item is pressed.
	
	CAUSE
	=====
	
	Visual Basic encounters an unhandled exception and terminates.
	
	RESOLUTION
	==========
	
	Upgrade to Visual Studio 97 Service Pack 2 (SP2).
	
	  -or-
	
	Avoid stopping program execution inside events.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project with 3 forms (Form1, Form2, and Form3).
	
	2. Place one CommandButton on both Form1 and Form2.
	
	3. Place the following code in the Command1_click event on Form1:
	
	        Form2.show vbModal
	
	4. Place the following code in the Command1_click event on Form2:
	
	        Form3.show vbModal
	
	5. Add the following code to the Form3_load event:
	
	        Dim a, b
	        Debug.print "Loading Form"
	
	6. Add the following to the Form3_Unload event:
	
	        Debug.print "Unloading Form"
	
	7. Press the F5 key to start execution.
	
	8. Press CTRL+BREAK to enter debug mode.
	
	9. In the Immediate Window (CTRL+G), enter "Command1_click" (without the quotes)
	  to activate the Command1_click event.
	
	10. Press CTRL+BREAK to enter debug mode.
	
	11. Press the F8 key to Begin Stepping through code.
	
	12. Click the Command1 button on Form 2.
	
	13. Press the F8 key to step into load event of Form3.
	
	14. When you reach the Debug.print line (before executing this line), stop
	  program execution.
	
	  At this point, Visual Basic will appear to continue running the program.
	  Click the End button again. The Visual Basic IDE will disappear or Visual
	  Basic will generate an Invalid Page Fault(IPF) error message.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
