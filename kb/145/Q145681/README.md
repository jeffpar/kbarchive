---
layout: page
title: "Q145681: FIX: TreeView Nodeclick Differences with Mouse and Keyboard"
permalink: /kb/145/Q145681/
---

## Q145681: FIX: TreeView Nodeclick Differences with Mouse and Keyboard

{% raw %}

	Article: Q145681
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SelectedItem property of the TreeView control is updated at different times
	depending on whether the selected node is changed with the mouse or keyboard.
	
	RESOLUTION
	==========
	
	Within the NodeClick event, take into account that the SelectedItem property may
	be different depending on the action that caused the NodeClick event. One method
	to workaround the specific problem mentioned above would be to create a private
	form-level variable and store a reference to the node each time the NodeClick
	event is fired. In the example above, this node can be compared to the Node
	object passed to the NodeClick event to determine whether or not the NodeClick
	is a result of clicking on a new node. After declaring the form-level variable
	with this code in the Declarations section
	
	     Private LastNode as Node
	
	the following two lines of code can be used in the NodeClick event to compare
	Node objects and exit the subroutine if the same node is still selected. This
	code will work for both mouse and keyboard generated events.
	
	     If LastNode = Node Then Exit Sub
	     LastNode = Node
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	When the current node of a TreeView control is touched using the mouse, the
	SelectedItem property is updated after the NodeClick event. When the node is
	modified by using the keyboard, SelectedItem is updated before the NodeClick.
	This makes it difficult to execute code based on the Node object because a
	different object will be passed to the NodeClick event depending on whether the
	mouse or keyboard was used to generate the NodeClick. For example, if the intent
	of the code in the NodeClick event should be fired only when a new node is
	clicked upon, the following line of code will work fine if the mouse is used,
	but will not work if a user changes the selected node with the keyboard:
	
	     If Node = TreeView1.SelectedItem Then Exit Sub
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic 4.0, or, if it is already running, start a new project.
	
	2. Add a single TreeView control to the form.
	
	3. Add this code to the Form_Load event of Form1:
	
	     Private Sub Form_Load()
	        Dim nodX as Node
	        Dim i As Integer
	
	        For i = 1 To 10
	           Set nodX = TreeView1.Nodes.Add(, , , "Node " & i)
	        Next i
	     End Sub
	
	4. Add this code to the TreeView1_NodeClick event of the TreeView control:
	
	     Private Sub TreeView1_NodeClick(ByVal Node As Node)
	         If Node = TreeView1.SelectedItem Then
	             Debug.Print "Clicked on same node"
	         Else
	             Debug.Print "Clicked on other node"
	         End If
	     End Sub
	
	5. Press F5 to start the application. Click on Node 1 and see the string
	  "Clicked on same node" in the debug window (as expected). Click on Node 2 and
	  see "Clicked on other node" in the debug window (also as expected). Now use
	  the down arrow key to move from Node 2 to Node 3. The output string seen in
	  the debug window is "Clicked on same node."
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
