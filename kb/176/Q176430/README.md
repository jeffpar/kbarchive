---
layout: page
title: "Q176430: FIX: Controls on Nested Frames on SSTab May Paint Incorrectly"
permalink: kb/176/Q176430/
---

## Q176430: FIX: Controls on Nested Frames on SSTab May Paint Incorrectly

	Article: Q176430
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Controls located inside two nested frames located on an SSTab control may not
	repaint correctly at run-time when resized if the SSTab control they are located
	on was made visible immediately prior to resizing the control. The incorrect
	repaint varies by control, but ranges from lack of a border to not being visible
	at all.
	
	RESOLUTION
	==========
	
	Two workarounds exist:
	
	- Make sure that controls located on nested frames on an SSTab are resized
	  before rather than after making the SSTab visible.
	
	  -or-
	
	- Add the following code after resizing the controls:
	
	        SSTab1.Visible = False
	        SSTab1.Visible = True
	
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
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Add an SSTab (SSTab1 by default) to Form1.
	
	3. Draw a Frame control (Frame1 by default) on Tab0 of SSTab1 so that it is
	  contained by Tab0.
	
	4. Draw another Frame control (Frame2 by default) inside Frame1 so that it is
	  contained by Frame1.
	
	5. Draw a TextBox (Text1 by default) inside of Frame2 so that it is contained by
	  Frame2.
	
	6. Add a CommandButton (Command1 by default) to Form1.
	
	7. Paste the following code in the General Declarations section of Form1:
	
	        Private Sub Command1_Click()
	
	           SSTab1.Visible = False  'this could happen in form load, or any
	                                   'other event.
	
	           SSTab1.Visible = True            'one workaround is to switch
	           Text1.Width = Text1.Width - 50   'the order of these two lines
	
	          'alternate workaround if above workaround is not feasible
	          'SSTab1.Visible = False
	          'SSTab1.Visible = True
	
	        End Sub
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
