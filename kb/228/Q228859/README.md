---
layout: page
title: "Q228859: FIX: GDI Resource Leak Using Checkboxes in Treeview Control"
permalink: /kb/228/Q228859/
---

## Q228859: FIX: GDI Resource Leak Using Checkboxes in Treeview Control

{% raw %}

	Article: Q228859
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCmnCtrls kbCtrl kbTreeView kbVBp600bug kbVBp600fix kbGrpDSVB kbVS600sp2
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form containing a Treeview control(s) that uses checkboxes is loaded and
	unloaded, a memory and GDI resource leak occurs.
	
	CAUSE
	=====
	
	The GDI resources used by the checkboxes on the controls are not freed when the
	form is unloaded.
	
	RESOLUTION
	==========
	
	Only load each form once and keep the form loaded. Hide the form when it is not
	in use and show the form when it is needed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3 and Visual Basic 6.0
	Service Pack 4. For more information about Visual Studio service packs, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add a Command Button to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Command1_Click()
	     Dim f As Form2
	     Dim i As Long
	     For i = 0 To 100
	        Set f = New Form2
	        f.Show
	        Unload f
	        DoEvents
	        Set f = Nothing
	     Next i
	  End Sub
	
	4. On the Project menu, click Add Form to add a second form to the project.
	  Form2 is created by default.
	
	5. On the Project menu, click Components. Check Microsoft Windows Common
	  Controls 6.0 and click OK.
	
	6. Add a Treeview control to Form2.
	
	7. Add the following code to the General Declarations section of Form2:
	
	  Private Sub Form_Load()
	     TreeView1.Checkboxes = True
	     TreeView1.Nodes.Add , , , "Item1"
	     TreeView1.Nodes.Add , , , "Item2"
	     TreeView1.Nodes.Add , , , "Item3"
	  End Sub
	
	8. Start a program to monitor system resources as follows:
	
	   - Windows NT: Enter CTRL+ALT+DEL and click the Task List button. Select the
	     Monitor tab.
	
	   - Windows 95/98/Me: Start the System Monitor tool, which is located in the
	     System Tools folder in the Accessories folder. (If the System Monitor tool
	     is not available, it can be installed from the Control Panel using the
	     Add/Remove Programs option.) On the Edit menu, click Add Item. Click the
	     Memory Manager Category, click the Allocated Memory Item, and click OK.
	
	9. Run the project. Click the Command1 button on Form1. Notice the resource
	  usage. Most of the time, resources fall below the critical level on the first
	  run and, if not, they should on the second run.
	
	  Result: Excessive resource use.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCmnCtrls kbCtrl kbTreeView kbVBp600bug kbVBp600fix kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
