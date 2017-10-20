---
layout: page
title: "Q145619: FIX: Maximized Win95 MDI Child Form Disappears"
permalink: /kb/145/Q145619/
---

## Q145619: FIX: Maximized Win95 MDI Child Form Disappears

{% raw %}

	Article: Q145619
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp500bug kbOSWin98fix kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, a maximized MDI child form is invisible and cannot
	be made visible. The problem occurs under Windows 95, Windows NT 4.0, and
	Windows 2000 when using the 32-bit version of Visual Basic 4.0.
	
	RESOLUTION
	==========
	
	When the MaxButton property of Form1 is set to True, the problem does not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in Microsoft Windows 95, Windows NT
	4.0, and Windows 2000. This problem has been fixed in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 4.0, 32-bit. If it is already running, click New Project
	  on the File menu.
	
	2. Use the Insert/MDI Form menu option to add an MDIForm to the project.
	
	3. In the Design Environment Property window, set the following properties for
	  Form1:
	
	  MinButton = False
	  MaxButton = False
	  ControlBox = False
	  MDIChild = True
	  WindowState = 2 - Maximized
	  Caption =
	  Borderstyle = 0 - None 'Options 1 - 5 will also work.
	
	4. Run the application. Form1 will not be visible.
	
	Workaround
	----------
	
	1. Start Visual Basic 4.0, 32-bit. If it is already running, click New Project
	  on the File menu.
	
	2. Use the Insert/MDI Form menu option to add an MDIForm to the project.
	
	3. In the Design Environment Property window, set the following properties for
	  Form1:
	
	  MinButton = False MaxButton = False ControlBox = False MDIChild = True
	  WindowState = 0 - Normal Caption = Borderstyle = 0 - None 'Options 1 - 5 will
	  also work.
	
	4. In the General Declaration section of Form1, paste the following:
	
	               Private Sub Form_Load()
	           'You could copy the following 4 lines to the Resize
	           'event of MDIForm1 as well for best results.
	           Form1.Top = 0
	                   Form1.Left = 0
	           Form1.Width = MDIForm1.Width - 185
	           Form1.Height = MDIForm1.Height - 470
	               End Sub
	
	5. Run the application. Form1 will be visible.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp500bug kbOSWin98fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
