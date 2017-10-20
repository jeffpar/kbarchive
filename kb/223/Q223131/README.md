---
layout: page
title: "Q223131: FIX: Incorrect Firing of LostFocus Event"
permalink: /kb/223/Q223131/
---

## Q223131: FIX: Incorrect Firing of LostFocus Event

{% raw %}

	Article: Q223131
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActivexEvents kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic 6.0 project contains two forms with Form1 containing a TextBox
	and a CommandButton. The LostFocus event of the TextBox displays a second form
	as modal. When you run the project and click the CommandButton, the modal form
	appears and the CommandButton Click event fires, but should not.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, click Add Form, and then click Open. Form2 is added to
	  your project.
	
	3. Add a TextBox and a CommandButton to Form1.
	
	4. Copy the following code to the Code window of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     Debug.Print "Command1_Click"
	  End Sub
	
	  Private Sub Form_Load()
	      Text1.Text = ""
	      Text1.TabIndex = 0
	  End Sub
	
	  Private Sub Text1_LostFocus()
	      Debug.Print "Text1_LostFocus"
	      If Text1.Text = "" Then
	          Form2.Show vbModal
	      End If
	  End Sub
	
	5. With the Immediate Window visible, run the project. On the Run menu, select
	  Start, or press the F5 key to start the program. Click the CommandButton.
	
	  BUG: The Text1 LostFocus event followed by the CommandButton Click event is
	  fired.
	
	  The expected behavior is for the Text1 LostFocus event to fire but the
	  Command1 Click event should not.
	
	REFERENCES
	==========
	
	A similar bug behavior is documented in the following article in the Microsoft
	Knowledge Base:
	
	  Q223101 FIX: WriteProperties Event Executes at Wrong Time
	
	For more information, see the following topics:
	
	  Add Form Command (Project Menu) in the Online Help or the MSDN Web site at
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbcmdforminsert.htm
	  (how to add a form to a project).
	
	  LostFocus Event in the Online Help or the MSDN Web site at
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbevtlostfocus.htm
	  (explains the LostFocus event).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbActivexEvents kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
