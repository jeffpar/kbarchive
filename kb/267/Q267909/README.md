---
layout: page
title: "Q267909: HOWTO: Save TreeView Data to a Formatted File"
permalink: /kb/267/Q267909/
---

## Q267909: HOWTO: Save TreeView Data to a Formatted File

	Article: Q267909
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbFileIO kbTreeView kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TreeView control does not offer built-in functionality to save its contents
	to a file. To generate this behavior, a routine can be used recursively to write
	the data from a TreeView control to a file and maintain the visual layout.
	
	MORE INFORMATION
	================
	
	The steps included here create a project that saves the text property of each
	node in a TreeView control to a file. The saved nodes are indented in the file
	to mimic the layout of the TreeView as displayed on the Form.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Set the BorderStyle property of Form1 to 4 - FixedToolWindow.
	
	3. On the Project menu, click to select Components. In the Components dialog
	  box, select the Microsoft Windows Common Controls 6.0, and then click OK.
	
	4. Add one TreeView and one CommandButton control to Form1.
	
	5. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Const strFile = "c:\tvn_tree.txt"
	  Const intIndentSpaces = 4
	
	  Dim ff As Integer
	  Dim intIndentLevel As Integer
	
	  Private Sub Command1_Click()
	      Dim objNode As Node
	      
	      ' Open up a text file to export the
	      ' indented TreeView nodes into.
	      ff = FreeFile
	      Open strFile For Output As #ff
	
	      ' Set the indent for the root node
	      intIndentLevel = 0
	      
	      ' Set the root node
	      Set objNode = TreeView1.Nodes(1)
	      
	      ' Call the print routine with the root node
	      ParseTree objNode
	
	      ' Close the text file
	      Close #ff
	  End Sub
	
	  Private Sub Form_Load()
	      ' Layout Form User Interface
	      Form1.Caption = "Export TreeView"
	      Form1.Move 0, 0, 4140, 4425
	      
	      TreeView1.Move 240, 240, 3500, 2895
	      
	      Command1.Move 240, 3350, 3500, 495
	      Command1.Caption = "Save Treeview nodes to file: " & strFile
	
	      ' Add data to the TreeView control
	      TreeView1.LineStyle = tvwRootLines
	      TreeView1.Nodes.Add , , "TopLevelBranch1", "TopLevelBranch1"
	      TreeView1.Nodes.Add "TopLevelBranch1", tvwChild, "SubBranch1_1", "SubBranch1_1"
	      TreeView1.Nodes.Add "SubBranch1_1", tvwChild, "Node1_1_1", "Node1_1_1"
	      TreeView1.Nodes.Add "SubBranch1_1", tvwChild, "Node1_1_2", "Node1_1_2"
	      TreeView1.Nodes.Add "SubBranch1_1", tvwChild, "Node1_1_3", "Node1_1_3"
	      TreeView1.Nodes.Add "TopLevelBranch1", tvwChild, "SubBranch1_2", "SubBranch1_2"
	      TreeView1.Nodes.Add "SubBranch1_2", tvwChild, "Node1_2_1", "Node1_2_1"
	      TreeView1.Nodes.Add "SubBranch1_2", tvwChild, "Node1_2_2", "Node1_2_2"
	      TreeView1.Nodes.Add , , "TopLevelBranch2", "TopLevelBranch2"
	      TreeView1.Nodes.Add "TopLevelBranch2", tvwChild, "SubBranch2_1", "SubBranch2_1"
	      TreeView1.Nodes.Add "TopLevelBranch2", tvwChild, "SubBranch2_2", "SubBranch2_2"
	      TreeView1.Nodes.Add "SubBranch2_2", tvwChild, "Node2_2_1", "Node2_2_1"
	  End Sub
	
	  Sub ParseTree(objNode As Node)
	      ' Print the node that was passed in and
	      ' account for the node's level
	      Print #ff, Space(intIndentLevel * intIndentSpaces) & objNode.Text
	      
	      ' Check to see if the current node has children
	      If objNode.Children > 0 Then
	          ' Increase the indent if children exist
	          intIndentLevel = intIndentLevel + 1
	          ' Pass the first child node to the print routine
	          ParseTree objNode.Child
	      End If
	      ' Set the next node to print
	      Set objNode = objNode.Next
	      ' As long as we have not reached the last node in
	      ' a branch, continue to call the print routine
	      If TypeName(objNode) <> "Nothing" Then
	          ParseTree objNode
	      Else
	          ' If the last node of a branch was reached,
	          ' decrease the indentation counter
	          intIndentLevel = intIndentLevel - 1
	      End If
	  End Sub
	
	6. Run the project and click the button to save the TreeView data to a file
	  named tvn_tree.txt that resides in the root directory of the C: drive. If the
	  newly created file is opened in a text editor such as Notepad, note that the
	  formatting mimics the TreeView layout.
	
	REFERENCES
	==========
	
	For additional information on using the TreeView control in Visual Basic, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q172272 FILE: TREEVIEW.EXE Manipulating Nodes in a TreeView Control
	
	Additional query words: export
	
	======================================================================
	Keywords          : kbCtrl kbFileIO kbTreeView kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
