---
layout: page
title: "Q121096: BUG: Wrong Menu with Maximized MDI Child and No Control Box"
permalink: /kb/121/Q121096/
---

## Q121096: BUG: Wrong Menu with Maximized MDI Child and No Control Box

{% raw %}

	Article: Q121096
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, versions 2.0, 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a maximized MDI child form that doesn't contain a ControlBox
	(ControlBox = False), references to the MDI parent menus will control the wrong
	menu.
	
	WORKAROUND
	==========
	
	The only way to remedy this problem is to set the MDI child form's ControlBox
	property to True.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Visual Basic versions 2.0
	and 3.0 for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic and create a new project.
	
	2. Add an MDI form to the project
	
	3. Add a menu to the MDI form using the following as a guide:
	
	  Caption           Name
	  --------------------------
	  Menu1             mMenu1
	  ....Menu1Item1    mMenu11
	  Menu2             mMenu2
	  ....Menu2Item1    mMenu21
	
	4. Add the following code for menu items:
	
	     Sub mMenu11_Click ()
	        Form1.Show
	     End Sub
	
	5. Set Form1.MDIChild = True and Form1.ControlBox = False
	
	6. Add the following code to Form1:
	
	     Sub Form_Click()
	        MDIForm1!mMenu1.enabled = not MDIForm1!mMenu1.enabled
	     End Sub
	
	7. From the Options Menu, choose Project Options. Change the startup form to
	  MDIForm1
	
	8. Run the program. Choose Menu1Item1 from Menu1. The MDI child should appear.
	  Click the MDI child form. This disables Menu1. Maximize the MDI child, and
	  click it again. Now Menu2 is disabled.
	
	Additional query words: 2.00 3.00 buglist2.00 buglist3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :2.0,3.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
