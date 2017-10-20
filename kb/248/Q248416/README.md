---
layout: page
title: "Q248416: FIX: Wrong TreeView Node Selected When SingleSel Property = True"
permalink: /kb/248/Q248416/
---

## Q248416: FIX: Wrong TreeView Node Selected When SingleSel Property = True

{% raw %}

	Article: Q248416
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbTreeView kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Visual Basic 6.0 service pack 3 (SP3) version of the
	TreeView Control, in a project with the SingleSel property set to True, when you
	click a node sometimes a different node will be selected and expanded.
	
	RESOLUTION
	==========
	
	To work around the problem set the SingleSel property to False and implement the
	SingleSel functionality with your code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic 6.0 SP3 Standard EXE project. Form1 is created by
	  default.
	
	2. On the Project menu, select Components. In the Components dialog box, select
	  "Microsoft Windows Common Control 6.0(SP3)" and then click OK.
	
	3. Add a TreeView control to Form1, retaining the default name, Treeview1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Const CHILD1 = "Child1"
	  Const CHILD2 = "Child2"
	  Const CHILD3 = "Child3"
	
	  Private Sub Form_Load()
	     Dim strRoot As String
	     Dim strChild As String
	     Dim i As Long
	     
	     ' Set Treeview control properties.
	     TreeView1.LineStyle = tvwRootLines  ' Linestyle 1
	     TreeView1.SingleSel = True  ' Single Selection
	     
	     ' populate the treeview control
	     For i = Asc("A") To Asc("Z")
	        strRoot = Chr(i)
	        Call TreeView1.Nodes.Add(, , strRoot, "Root-" & strRoot)
	
	        Call TreeView1.Nodes.Add(strRoot, tvwChild, strRoot & "1", CHILD1)
	        Call TreeView1.Nodes.Add(strRoot, tvwChild, strRoot & "2", CHILD2)
	        Call TreeView1.Nodes.Add(strRoot, tvwChild, strRoot & "3", CHILD3)
	
	        strChild = strRoot & "1"
	        Call TreeView1.Nodes.Add(strChild, tvwChild, strChild & "1", CHILD1)
	        Call TreeView1.Nodes.Add(strChild, tvwChild, strChild & "2", CHILD2)
	        Call TreeView1.Nodes.Add(strChild, tvwChild, strChild & "3", CHILD3)
	
	        strChild = strRoot & "2"
	        Call TreeView1.Nodes.Add(strChild, tvwChild, strChild & "1", CHILD1)
	        Call TreeView1.Nodes.Add(strChild, tvwChild, strChild & "2", CHILD2)
	        Call TreeView1.Nodes.Add(strChild, tvwChild, strChild & "3", CHILD3)
	
	        strChild = strRoot & "3"
	        Call TreeView1.Nodes.Add(strChild, tvwChild, strChild & "1", CHILD1)
	        Call TreeView1.Nodes.Add(strChild, tvwChild, strChild & "2", CHILD2)
	        Call TreeView1.Nodes.Add(strChild, tvwChild, strChild & "3", CHILD3)
	     Next
	  End Sub
	
	5. Run the application by pressing F5. Select a child of "Root-A" in the third
	  level.
	
	6. Select "Root-I". Note that "Root-L" is selected and expanded instead of
	  "Root-I". This behavior is incorrect.
	
	Steps to Work Around the Problem
	--------------------------------
	
	1. In the Form_Load() sub, replace the following line:
	
	     TreeView1.SingleSel = True  ' Single Selection
	
	with
	
	     TreeView1.SingleSel = False  ' Not Single Selection
	
	2. Append the following code to the General Declarations section of Form1:
	
	  Private Sub TreeView1_NodeClick(ByVal node As MSComctlLib.node)
	     Call SimulateSingleSel(node)
	  End Sub
	
	  Private Sub SimulateSingleSel(ByVal node As MSComctlLib.node)
	     ' expand current node
	     node.Expanded = True
	
	     ' collapse all siblings and parents' siblings
	     Dim nodeParent As MSComctlLib.node
	     Set nodeParent = node
	     Do Until nodeParent Is Nothing
	        CollapseSiblings nodeParent
	        Set nodeParent = nodeParent.Parent
	     Loop
	
	     ' collapse child's siblings (collapse all children)
	     Dim nodeChild As MSComctlLib.node
	
	     Set nodeChild = node.Child
	     If nodeChild Is Nothing Then Exit Sub
	     nodeChild.Expanded = False
	     Call CollapseSiblings(nodeChild)
	  End Sub
	
	  Private Sub CollapseSiblings(ByVal node As MSComctlLib.node)
	     Dim n As Integer
	
	     n = node.FirstSibling.Index
	     If n <> node.Index Then node.FirstSibling.Expanded = False
	     
	     Do While n <> node.LastSibling.Index
	        n = TreeView1.Nodes(n).Next.Index
	        If n <> node.Index Then TreeView1.Nodes(n).Expanded = False
	     Loop
	  End Sub
	
	3. Run the application by pressing F5. It now works as expected.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbCtrl kbTreeView kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
