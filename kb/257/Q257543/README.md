---
layout: page
title: "Q257543: FIX: MouseDown Event Fires Unexpectedly on Modal Form"
permalink: /kb/257/Q257543/
---

## Q257543: FIX: MouseDown Event Fires Unexpectedly on Modal Form

{% raw %}

	Article: Q257543
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActivexEvents kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Validate event for a control shows another form modally, then the
	MouseDown event of the modal form or the control that is under the mouse pointer
	is fired unexpectedly.
	
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
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, add an additional Form and a UserControl to the
	  project.
	
	3. On both Forms, set StartUpPosition = 2 - CenterScreen.
	
	4. Add a Textbox, a CommandButton, a UserControl to Form1.
	
	5. Add the following code to the code window of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	      Debug.Print "click"
	  End Sub
	
	  Private Sub Form_Load()
	      Text1.Text = ""
	      Text1.TabIndex = 0
	  End Sub
	
	  Private Sub Text1_Validate(Cancel As Boolean)
	      Debug.Print "Form1 Text_Validate"
	      If Text1.Text = "" Then
	          Form2.Show vbModal
	      End If
	  End Sub
	
	6. Add the following code to the code window of Form2:
	
	  Option Explicit
	
	  Private Sub Form_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
	      Debug.Print "Form2 Form_MouseDown"
	  End Sub
	
	7. From the View menu, click on Immediate Window to open the immediate window.
	
	8. Save and run the project.
	
	9. When you click on Command1 of Form1, you will see in the immediate window,
	  that the MouseDown event of Form2 gets fired after the Validate event of
	  Text1. This is not the expected behavior.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbActivexEvents kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
