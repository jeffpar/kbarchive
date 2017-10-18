---
layout: page
title: "Q171511: FIX: Controls in Frame/PictureBox Do Not Repaint in Design Mode"
permalink: kb/171/Q171511/
---

## Q171511: FIX: Controls in Frame/PictureBox Do Not Repaint in Design Mode

	Article: Q171511
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
	
	In the versions of Visual Basic listed at the beginning of this article, if you
	have an SSTab control with nested container controls where the inner-most
	container contains other controls, you may experience painting problems while in
	design mode.
	
	For example, on an SSTab control, if you have a Frame control (Frame2) within
	another Frame control (Frame1), and Frame2 contains TextBox1, you may encounter
	a situation where Frame2 and TextBox1 do not paint correctly in design mode.
	
	CAUSE
	=====
	
	A form may exhibit this problem under the following circumstances:
	
	- The form consists of nested container controls (such as a PictureBox or a
	  Frame) on an SSTab.
	
	  - and -
	
	- The innermost container control holds other controls (such as a TextBox or an
	  OptionButton).
	
	  - and -
	
	- The form is not maximized.
	
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
	
	1. Start a new "Standard EXE" project.
	
	2. Choose Components from the Project menu and select "Microsoft Tabbed Dialog
	  Control 5.0." (An SSTab control is added to the Toolbox.)
	
	3. Add an SSTab control to Form1.
	
	4. Add a Frame control (Frame1) so that it is placed within Tab 0 of the SSTab
	  control.
	
	5. Add another Frame control (Frame2) so that it is contained in Frame1.
	
	6. Add a Textbox control so that it is contained in Frame2.
	
	7. With Textbox1 selected, minimize Visual Basic.
	
	8. Restore the Visual Basic window. Note that Frame2 and TextBox1 are not
	  visible but the controls can be selected. Frame2 and TextBox1 did not
	  repaint.
	
	Additional query words: IDE container picture tabctl32.ocx kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
