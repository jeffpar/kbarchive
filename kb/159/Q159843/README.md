---
layout: page
title: "Q159843: PRB: GPF with MDI Child Form System Menu and Right Arrow Key"
permalink: /kb/159/Q159843/
---

## Q159843: PRB: GPF with MDI Child Form System Menu and Right Arrow Key

{% raw %}

	Article: Q159843
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a Visual Basic application on Windows 95 and you click the
	ControlBox at the upper-left corner of a MDIChild form and then press the right
	arrow key, you receive the following error:
	
	  VB caused a general protection fault in module USER.EXE at 0007:00005b71
	
	This problem does not occur on Windows NT or if the MDIChild form has a menu.
	
	
	WORKAROUND
	==========
	
	You need to add a menu on the MDIChild form to work around this problem.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Change MDIChild property of Form1 to "True."
	
	3. Insert a MDIForm.
	
	4. Bring the MDIChild form, Form1, to the foreground.
	
	5. Select Tools/Menu Editor.
	
	6. Fill in the Caption field or leave it blank.
	
	7. Fill in the Name field with a name, for example, MnuHidden. Leave the other
	  fields unchanged. "Visible" must be checked. Otherwise, a GPF will occur.
	
	8. Click OK, and run the program. Press the RIGHT ARROW key to switch back and
	  forth between the system menus of the parent and child forms.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by May Ji,
	Microsoft Corporation
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Change the MDIChild property of Form1 to "True."
	
	3. Insert a MDIForm.
	
	4. Run the program.
	
	5. Click the ControlBox at the upper-left corner of Form1 (the MDIChild form.
	  The system menu drops down.
	
	6. Press the RIGHT ARROW key and note that Windows 95 or Windows 98 displays a
	  General Protection Fault dialog box and terminates the application.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
