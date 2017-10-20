---
layout: page
title: "Q240229: PRB: Treeview Control NodeClick Event Not Raised"
permalink: /kb/240/Q240229/
---

## Q240229: PRB: Treeview Control NodeClick Event Not Raised

{% raw %}

	Article: Q240229
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): kbActivexEvents kbCmnCtrls kbTreeView kbVBp600 kbVS600sp3bug
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Studio 6.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After setting the SingleSel property of the Treeview control to True, the
	NodeClick event for this control is not always raised. This only occurs with the
	version of Mscomctl.ocx that is included in Visual Basic 6.0 Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual Basic 6.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Confirm that Visual Basic 6.0 Service Pack 3 installed.
	
	2. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	3. From the Project menu select Components. In the Components dialog box, select
	  "Microsoft Windows Common Controls 6.0 (SP3)", and then click OK.
	
	4. Add a Treeview control to Form1.
	
	5. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Form_Load()
	     Dim nodx As Node  ' Declare Node variable.
	
	     TreeView1.SingleSel = True
	
	     ' Add Node objects.
	     Set nodx = TreeView1.Nodes.Add(, , "r", "Root1")
	
	        Set nodx = TreeView1.Nodes.Add("r", tvwChild, "child1a", "Child1")
	        Set nodx = TreeView1.Nodes.Add("r", tvwChild, "child1b", "Child2")
	
	     Set nodx = TreeView1.Nodes.Add(, tvwChild, "r2", "Root2")
	
	        Set nodx = TreeView1.Nodes.Add("r2", tvwChild, "child2a", "Child1")
	        Set nodx = TreeView1.Nodes.Add("r2", tvwChild, "child2b", "Child2")
	        Set nodx = TreeView1.Nodes.Add("r2", tvwChild, "child2c", "Child3")
	
	     Set nodx = TreeView1.Nodes.Add(, tvwChild, "r3", "Root3")
	
	        Set nodx = TreeView1.Nodes.Add("r3", tvwChild, "child3a", "Child1")
	        Set nodx = TreeView1.Nodes.Add("r3", tvwChild, "child3b", "Child2")
	          
	     Set nodx = TreeView1.Nodes.Add(, tvwChild, "r4", "Root4")
	  End Sub
	
	  Private Sub TreeView1_NodeClick(ByVal Node As MSComctlLib.Node)
	     MsgBox Node.Text
	  End Sub
	
	6. Run the project. Root1 will be selected. Click on Root2. No message box
	  displays, indicating that the NodeClick event was not raised.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActivexEvents kbCmnCtrls kbTreeView kbVBp600 kbVS600sp3bug 
	Technology        : kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVS600SP3 kbVS600Search
	Version           : WINDOWS:6.0,6.0 SP3
	Issue type        : kbbug kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
