---
layout: page
title: "Q190992: BUG: Mouse Events Do Not Fire From ADODC"
permalink: /kb/190/Q190992/
---

## Q190992: BUG: Mouse Events Do Not Fire From ADODC

{% raw %}

	Article: Q190992
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbADO200 kbCtrl kbVBp kbVBp600bug kbGrpDSVBDB kbDSupport kbADO250
	Last Modified: 18-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clicking on the ADODC during run-time will not fire the mouse events associated
	with the control. It does not matter if you have the ADODC control bound to a
	recordset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open up a standard.exe project. Form1 is created by default.
	
	2. Go to Projects/Components, and select the Microsoft ADO Data Control (ADODC)
	  6.0. Drop the ADODC on the form.
	
	3. Insert the following code in the General Declarations of the Form:
	
	      Private Sub Adodc1_MouseDown(Button As Integer, Shift As Integer, x _
	      As Single, y As Single)
	        Debug.Print "Down"
	      End Sub
	
	      Private Sub Adodc1_MouseMove(Button As Integer, Shift As Integer, x _
	      As Single, y As Single)
	        Debug.Print "Move"
	      End Sub
	
	      Private Sub Adodc1_MouseUp(Button As Integer, Shift As Integer, x _
	      As Single, y As Single)
	        Debug.Print "Up"
	      End Sub
	
	4. Run the Visual Basic application.
	
	5. Move the mouse over the ADODC, and click a few times anywhere on the control.
	  Note that none of the mouse events are fired.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO200 kbCtrl kbVBp kbVBp600bug kbGrpDSVBDB kbDSupport kbADO250 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
