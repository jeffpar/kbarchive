---
layout: page
title: "Q215402: BUG: Pressing F1 for Windows CE Controls Does Not Display Help"
permalink: kb/215/Q215402/
---

## Q215402: BUG: Pressing F1 for Windows CE Controls Does Not Display Help

	Article: Q215402
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you press F1 to display context sensitive Help topics while focus is set to a
	non-intrinsic control (for example, the Microsoft CE PictureBox Control 6.0)
	within the Visual Basic design environment, a Help topic does not display.
	
	RESOLUTION
	==========
	
	The Help files for these controls exist, but the user has to explicitly browse
	for them in the Microsoft Developer Network (MSDN) Help files. To locate the
	Help topics for the control select the Help menu, and then click Windows CE
	Toolkit Help. Next, select the Index tab and search on the control name (for
	example, PictureBox control).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE Project in Visual Basic.
	
	2. Select any Windows CE control from the Components dialog box located under
	  the Project menu (for example, Microsoft CE PictureBox Control 6.0).
	
	3. Draw the control on the default form (Form1).
	
	4. Press F1 to open the context sensitive help for that control.
	
	RESULT: No help topic displays.
	
	Additional query words: vbce wce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
