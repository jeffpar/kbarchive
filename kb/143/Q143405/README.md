---
layout: page
title: "Q143405: PRB: Arrow Key Doesn't Fire Keypress Tree/Listview Controls"
permalink: kb/143/Q143405/
---

## Q143405: PRB: Arrow Key Doesn't Fire Keypress Tree/Listview Controls

	Article: Q143405
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcode kbVBp400 kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pressing an arrow key does not fire the keypress event for the Treeview and
	Listview controls because they have built-in functionality for these keys. It is
	not obvious which event is available to determine that the selected node has
	changed because of this behavior.
	
	MORE INFORMATION
	================
	
	The ItemClick event for the Listview control and the NodeClick for the Treeview
	control get fired whenever an item's selection changes, even if it changes as a
	result of a keystroke.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and click New Project (ALT, F, N) on the File menu.
	
	2. Click Custom controls on the Tools menu.
	
	3. Inside of the Custom controls dialog box, check the "Microsoft Windows Common
	  Controls." Then click the OK button.
	
	4. Place a TreeView control on the form.
	
	5. Insert the following code in the Form_Load event:
	
	        Private Sub Form_Load()
	
	        Dim nodX As Node
	        Set nodX = TreeView1.Nodes.Add(, , "Root", "Root")
	        Set nodX = TreeView1.Nodes.Add("Root", 4, "Node1", "Node1")
	        Set nodX = TreeView1.Nodes.Add("Node1", 4, "Node2", "Node2")
	        Set nodX = TreeView1.Nodes.Add("Node2", 4, "Node3", "Node3")
	
	        End Sub
	
	6. Add the following line to the TreeView1_Keydown event:
	
	       Debug.Print  "TreeView Keydown "; KeyCode
	
	7. Add the following line to the Form_Keydown event:
	
	       Debug.Print  "Form Keydown "; KeyCode
	
	8. Set the Form's KeyPreview property to True.
	
	9. Run the program. The TreeView control should have the focus. Use the arrow
	  keys to move around the tree. Note that the keydown events are not triggered
	  and no text appears in the debug window.
	
	10. Press the letter "N." Note that the node having the focus changes and you
	  can monitor the keys in the debug window. This works correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbVBp400 kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.0
	Issue type        : kbprb
	
	=============================================================================
	
