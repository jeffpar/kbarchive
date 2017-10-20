---
layout: page
title: "Q196775: PRB: TreeView SelectedItem Property Does Not Return Correct Node"
permalink: /kb/196/Q196775/
---

## Q196775: PRB: TreeView SelectedItem Property Does Not Return Correct Node

{% raw %}

	Article: Q196775
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbole kbVBp500 kbVBp600 kbGrpDSVBDB kbCodeSam
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to drag a node from a TreeView control, the SelectedItem property
	does not point to the correct node.
	
	CAUSE
	=====
	
	The SelectedItem property of a TreeView control is not updated until the MouseUp
	event is fired. This means that in the MouseDown and OLEStartDrag events, the
	SelectedItem property returns the node that was previously selected.
	
	This behavior is by design so that the user can select a node and then move the
	mouse off that node if he or she decides not to select that node. The item is
	not officially selected until the MouseUp event is fired.
	
	RESOLUTION
	==========
	
	To work around this behavior, keep track of the currently selected item manually
	rather than relying on the SelectedItem property. Use the HitTest method in the
	MouseDown event to specify this node, as shown in step 9 of the "More
	Information" section of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a new Standard EXE project. By default, Form1 is created.
	
	2. On the Project menu, click Components, click to select the "Microsoft Windows
	  Common Controls 6.0" check box, and then click OK.
	
	3. Add a TreeView and a TextBox control to Form1.
	
	4. Set the OLEDragMode property of the TreeView control to ccOLEDragAutomatic.
	
	5. Set the OLEDropMode property of the TextBox to Automatic.
	
	6. Add the following code to the General Declarations section of Form1:
	
	        Private Sub Form_Load()
	           TreeView1.Nodes.Add , , , "Node1"
	           TreeView1.Nodes.Add , , , "Node2"
	           TreeView1.Nodes.Add , , , "Node3"
	        End Sub
	
	        Private Sub TreeView1_OLEStartDrag(Data As _
	         MSComctlLib.DataObject, AllowedEffects As Long)
	           AllowedEffects = vbDropEffectCopy
	           Data.SetData TreeView1.Nodes _
	             (TreeView1.SelectedItem.Index).Text, vbCFText
	        End Sub
	
	7. Save and then run the project.
	
	8. Click the mouse button down on either Node2 or Node3, and then drag the node
	  text to the text box without letting the mouse button up until the cursor is
	  over the text box.
	
	  RESULT: The item that is dragged is not the intended item; instead, it is the
	  item that had focus before you tried to drag it.
	
	9. To work around this, store the current node in a private variable, and then
	  use that node instead of the SelectedItem property. Replace the code in Form1
	  with the following to test the workaround:
	
	        Private CurrentNode As Node
	
	        Private Sub Form_Load()
	           TreeView1.Nodes.Add , , , "Node1"
	           TreeView1.Nodes.Add , , , "Node2"
	           TreeView1.Nodes.Add , , , "Node3"
	        End Sub
	
	        Private Sub TreeView1_MouseDown(Button As Integer, _
	         Shift As Integer, x As Single, y As Single)
	           Set CurrentNode = TreeView1.HitTest(x, y)
	           CurrentNode.Selected = True
	        End Sub
	
	        Private Sub TreeView1_OLEStartDrag(Data As _
	         MSComctlLib.DataObject, AllowedEffects As Long)
	           AllowedEffects = vbDropEffectCopy
	           Data.SetData TreeView1.Nodes(CurrentNode.Index).Text, vbCFText
	        End Sub
	
	10. Click the mouse button down on either Node2 or Node3, and then drag the node
	  text to the Text1 box without letting the mouse button up until the cursor
	  is over Text1. Notice that the intended item is plaed in the Text1 box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbole kbVBp500 kbVBp600 kbGrpDSVBDB kbCodeSam 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
