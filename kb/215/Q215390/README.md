---
layout: page
title: "Q215390: BUG: Grid: It Takes Two Clicks to Move Focus Away from the Grid"
permalink: /kb/215/Q215390/
---

## Q215390: BUG: Grid: It Takes Two Clicks to Move Focus Away from the Grid

{% raw %}

	Article: Q215390
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,3.0
	Operating System(s): 
	Keyword(s): kbListView kbTabCtrl kbToolkit kbTreeView kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual C++ version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an eVB/VBCE project, when you change the focus from the Grid control to any
	of the following controls, the focus might not change until you click the other
	control twice:
	
	- CommandButton
	- ListView
	- PictureBox
	- TabStrip
	- TreeView
	
	This behavior occurs both in emulation and on the remote device. The expected
	behavior is that the focus changes after the first click to the new control.
	
	RESOLUTION
	==========
	
	This behavior tends to occur when other screen-related events are involved, such
	as when you use the message box in the code example below. If other
	screen-related events do not occur, the focus events should occur as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This section shows how to create a sample project that demonstrates this
	behavior.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Add the following controls to Form1:
	
	   - CommandButton
	   - Grid
	   - ListView
	   - PictureBox
	   - TabStrip
	   - TreeView
	
	3. Copy the following code to the Form1 code window:
	
	  Option Explicit
	
	  Private Sub Command1_GotFocus()
	      MsgBox "Command"
	  End Sub
	
	  Private Sub GridCtrl1_GotFocus()
	      MsgBox "Grid"
	  End Sub
	
	  Private Sub ListViewCtrl1_GotFocus()
	      MsgBox "ListView"
	  End Sub
	
	  Private Sub PictureBox1_GotFocus()
	      MsgBox "PictureBox"
	  End Sub
	
	  Private Sub TabStrip1_GotFocus()
	      MsgBox "TabStrip"
	  End Sub
	
	  Private Sub TreeViewCtl1_GotFocus()
	      MsgBox "TreeView"
	  End Sub
	
	4. Press the F5 key to run the project. Set the focus by clicking the grid
	  control. A message box appears to confirm that the GotFocus event executed.
	  Click OK to close the message box. Click on another control.
	
	  BUG: The GotFocus event for that control does not execute until you click the
	  control for the second time. The expected behavior is that the GotFocus event
	  executes on the first click.
	
	NOTE: If the code above is modified to avoid other screen activities, the focus
	events should occur as expected. For instance, add a Listbox to the form and
	change the instances of "MsgBox" to "List1.AddItem" (without the quotes). The
	focus changes should occur as expected and be correctly reflected in the
	Listbox.
	
	REFERENCES
	==========
	
	Microsoft Windows CE Toolkit for Visual Basic 6.0
	
	Additional query words: VBCE WINCE vbce6 eVB
	
	======================================================================
	Keywords          : kbListView kbTabCtrl kbToolkit kbTreeView kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbVCeMb kbWinCETK100VB600
	Version           : :1.0,3.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
