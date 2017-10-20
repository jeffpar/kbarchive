---
layout: page
title: "Q257703: FIX: ListView Control Still Active After Opening Modal Form"
permalink: /kb/257/Q257703/
---

## Q257703: FIX: ListView Control Still Active After Opening Modal Form

{% raw %}

	Article: Q257703
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbListView kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a ListView control on a form. From an event in the ListView control,
	you show a modal form. Despite the fact that a modal form has been displayed,
	the ListView control still receives events, such as a mouse click.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Standard EXE project in Visual Basic 6.0. Form1 is created by
	  default.
	
	2. On the Project menu, select Components. Select the Microsoft Windows Common
	  Controls 6.0 (SP3), and then click OK.
	
	3. Add a ListView control to Form1.
	
	4. Set the View property of the ListView control to 3 - lvwReport.
	
	5. Add the following code to the module of Form1:
	
	  Private Sub Form_Load()
	      ListView1.ColumnHeaders.Add , , "column 1"    
	  End Sub
	
	  Private Sub ListView1_ColumnClick(ByVal ColumnHeader As MSComctlLib.ColumnHeader)
	      Form2.Show vbModal
	  End Sub
	
	6. From the Project menu, add a second form to the project.
	
	7. Add a CommandButton to Form2.
	
	8. Add the following code to the module of Form2:
	
	  Private Sub Command1_Click()
	      Unload Me
	  End Sub
	
	  Private Sub Form_Load()
	      Me.Top = Form1.Top + Form1.Height
	      Me.Left = Form1.Left + Form1.Width
	  End Sub
	
	9. Run the project.
	
	10. Click on Column 1 in the ListView control.
	
	11. Click on Column 1 a second time. This should not be possible. You should
	  receive an error stating that the form is already loaded.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbListView kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
