---
layout: page
title: "Q208590: BUG: CommandBar: &quot;Memory Could Not Be Read&quot; Error"
permalink: /kb/208/Q208590/
---

## Q208590: BUG: CommandBar: &quot;Memory Could Not Be Read&quot; Error

	Article: Q208590
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a ComboBox in a CommandBar has the focus while running a project in
	emulation, and the form is then closed via the CommandBar, an Application Error
	will result.
	
	Note that this behavior occurs only in the emulator.
	
	RESOLUTION
	==========
	
	This error does not occur if another control is selected before the Close button
	of the CommandBar is clicked or if the Close button of the Form is clicked.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE HPC Project in Visual Basic. Form1 is created by
	  default.
	
	2. When the Project Properties dialog appears, ensure that the Run on Target
	  value is set to Handheld PC Emulation.
	
	3. Select Components from the Project menu, and select the Microsoft CE
	  CommandBar Control 6.0.
	
	4. Add a CommandBar control to Form1.
	
	5. Paste the following code into the code module of Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	      Dim C As CommandBarComboBox
	      Set C = CommandBar1.Controls.Add(cbrComboBox, "MyCombo")
	  End Sub
	
	6. Run the project.
	
	7. Set the focus to the ComboBox by selecting it.
	
	8. Click the Close button on the CommandBar to close the form. Note that an
	  Application Error in pvbload.exe results.
	
	The problem happens if any ComboBox on the CommandBar has the focus when the
	Close button on the CommandBar is clicked: the ComboBox does not have to be
	empty.
	
	Additional query words: vbce vbce6 wince wce
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
