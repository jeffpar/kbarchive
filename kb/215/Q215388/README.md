---
layout: page
title: "Q215388: BUG: AfterLabelEdit Event Fires After Canceling an Edit"
permalink: /kb/215/Q215388/
---

## Q215388: BUG: AfterLabelEdit Event Fires After Canceling an Edit

{% raw %}

	Article: Q215388
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual C++ version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using either the Microsoft CE ListView or CE TreeView control in either a
	Windows CE Toolkit for Visual Basic or eMbedded Visual Basic project, the
	AfterLabelEdit event fires after canceling a label edit. This behavior is not
	consistent with Visual Basic. This event should fire only if the label has
	actually been changed in some fashion.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. From the Project menu, choose Components.
	
	3. Select the Microsoft CE TreeView Control to add it to your toolbox.
	
	4. Place a TreeView control on Form1.
	
	5. Paste the following code into Form1:
	
	  Private Sub Form_Load()
	     TreeViewCtl1.LineStyle = tvwRootLines
	
	     Dim nodX
	     Set nodX = TreeViewCtl1.Nodes.Add(, , "r", "Root")
	     Set nodX = TreeViewCtl1.Nodes.Add("r", tvwChild, "child1", "Child")
	     TreeViewCtl1.Nodes(2).EnsureVisible
	  End Sub
	
	  Private Sub TreeViewCtl1_AfterLabelEdit(Cancel As Integer, NewString As String)
	      MsgBox "AfterLabelEdit"
	  End Sub
	
	  Private Sub TreeViewCtl1_BeforeLabelEdit(Cancel As Integer)
	      MsgBox "BeforeLabelEdit"
	  End Sub
	
	6. Run the project.
	
	7. Select the Child node for editing.
	
	Note that the BeforeLabelEdit event fires.
	
	8. Press the ESC key or select the parent node to cancel the edit.
	
	Note that the AfterLabelEdit event fires. This event should fire only if the
	label has actually been changed in some fashion.
	
	Additional query words: vbce vbce6 wce wince evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbVCeMb kbWinCETK100VB600
	Version           : :1.0,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
