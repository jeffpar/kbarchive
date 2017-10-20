---
layout: page
title: "Q215395: BUG: SelChange Event in a Grid Executes on a Selected Cell"
permalink: /kb/215/Q215395/
---

## Q215395: BUG: SelChange Event in a Grid Executes on a Selected Cell

{% raw %}

	Article: Q215395
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
	
	The SelChange Event in the Grid control executes on a highlighted cell. The
	expected behavior is that the SelChange Event only executes when a cell in the
	grid is selected the first time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This section shows how to create a sample project that demonstrates the
	behavior.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE HPC project in Visual Basic. Form1 is created by
	  default.
	
	2. Select Components from the Project menu and select the Microsoft CE Grid
	  Control 6.0.
	
	3. Add a Grid control to Form1.
	
	4. Copy the following code to the Form1 code window:
	
	  Option Explicit
	
	  Private Sub GridCtrl1_SelChange()
	     MsgBox "Executed SelChange Event"   
	  End Sub
	
	5. Press the F5 key to start the project. Select a particular cell in the grid.
	  The message box appears indicating the SelChange Event has executed. Close
	  the message box and click the same cell again.
	
	  BUG: The same message box appears indicating the SelChange Event has executed.
	  The expected behavior is that the SelChange event would not fire when
	  clicking the cell that's already selected.
	
	Additional query words: vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
