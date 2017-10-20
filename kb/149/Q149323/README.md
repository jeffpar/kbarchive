---
layout: page
title: "Q149323: BUG: Treeview Root Property Returns Reference to First Node"
permalink: /kb/149/Q149323/
---

## Q149323: BUG: Treeview Root Property Returns Reference to First Node

{% raw %}

	Article: Q149323
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Node property of the TreeView custom control has a property named Root. The
	Help states that Root "returns a reference to the root Node object of a selected
	Node." Due to the way the Root property was designed, this statement isn't
	always true. The Root property of a Node always returns a reference to the first
	root level node; that is, it returns a reference to the first node that was
	added with this syntax:
	
	     TreeView1.Nodes.Add , , , "MyText"
	
	If the Root property is used with any descendant nodes of this first node, it
	will work correctly. However, if another root level node is added with the above
	line of code, then the Root property of all descendant nodes will still return a
	reference to the first node added.
	
	RESOLUTION
	==========
	
	To work around this problem, use the following small function to determine the
	Root node of a given node instead of the inherent Root property. FindRoot
	returns a reference to the correct root node for the specified Node object
	passed as a parameter.
	
	     Function FindRoot(ByVal nodX As Node) As Node
	         Dim n As Integer
	
	         On Error GoTo ErrHandler
	
	         n = nodX.Index
	         While n <> nodX.Root.Index
	             n = TreeView1.Nodes(n).Parent.Index
	         Wend
	
	     ErrHandler:
	         Set FindRoot = TreeView1.Nodes(n)
	     End Function
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic and create a Standard EXE project.. Form1 is created by
	  default.
	
	2. Add a single TreeView control to Form1.
	
	3. Add this code to the Form_Click event of Form1:
	
	     Sub Form_Click()
	        With TreeView1
	           .Nodes.Add , , , "abc"
	           .Nodes.Add , , , "def"
	           MsgBox .Nodes(1).Root.Text 'returns 'abc'
	     MsgBox .Nodes(2).Root.Text 'returns 'abc' also - you expect it
	     ' to return 'def'
	        End With
	     End Sub
	
	4. Press F5 or select Start from the Run menu to run the application. Observe
	  that both message boxes display the same string.
	
	Additional query words: kbControl kbVBp500bug kbVBp400bug kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
