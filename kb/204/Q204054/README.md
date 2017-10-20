---
layout: page
title: "Q204054: PRB: ErrMsg 35603 &quot;Invalid Key&quot; w/TreeView or ListView Control"
permalink: /kb/204/Q204054/
---

## Q204054: PRB: ErrMsg 35603 &quot;Invalid Key&quot; w/TreeView or ListView Control

{% raw %}

	Article: Q204054
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbListView kbTreeView kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add a ListItem to a ListView control or a node to a TreeView control when
	the value being assigned to the key is numeric or is a string that evaluates to
	a number (such as "123"), the following error message is raised:
	
	  Run-time error '35603':
	
	  Invalid key
	
	CAUSE
	=====
	
	Keys are restricted to non-numeric values for compatibility with the Visual
	Basic for Applications (VBA) Collection Object. Although collections allow
	numeric keys, an error could occur if an item in a collection was accessed using
	exclamation (!) syntax with a numeric key.
	
	RESOLUTION
	==========
	
	Append a non-numeric character to numeric keys.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click to select Components, check Microsoft Windows
	  Common Controls, and then click OK.
	
	3. Add a ListView control, a TreeView control, and a CommandButton control to
	  Form1.
	
	4. Add the following code to the Declarations section of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	  ' Uncomment either of the following lines to raise the error
	  ' ListView1.ListItems(1).Key = "123"
	  ' TreeView1.Nodes(1).Key = "123"
	  End Sub
	
	  Private Sub Form_Load()
	   ListView1.ListItems.Add , , "Test1"
	   TreeView1.Nodes.Add , , , "Node1"
	
	  ' Uncomment either of the following lines to raise the error
	  ' ListView1.ListItems.Add , "123", "Test2"
	  ' TreeView1.Nodes.Add , , "123", "Node2"
	  End Sub
	
	5. Uncomment any of the commented lines of code in the Form_Load event and run
	  the project. Note that the error message in the "Symptoms" section appears
	  immediately. Clicking the Debug button selects the uncommented line.
	
	6. Stop the project and comment the line again.
	
	7. Uncomment either line of code in the Command1_Click event, run the project,
	  and click on Command1. The error message in the "Symptoms" section appears.
	  Clicking the Debug button selects the uncommented line.
	
	Additional Notes
	----------------
	
	- You can use the IsNumeric function to test values before you use them as
	  keys.
	
	- The use of white space (such as spaces) as the only non-numeric characters or
	  appending only a single Alpha character may fail, depending on the language
	  selected in Regional Settings.
	
	Additional query words: comctl32 mscomctl 35603
	
	======================================================================
	Keywords          : kbCmnCtrls kbListView kbTreeView kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
