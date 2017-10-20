---
layout: page
title: "Q193335: PRB: Error Loading Form With Reference to UserControl1.ctl"
permalink: /kb/193/Q193335/
---

## Q193335: PRB: Error Loading Form With Reference to UserControl1.ctl

{% raw %}

	Article: Q193335
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Visual Basic project, if you have a form that references a CTL file (such
	as UserControl1.ctl) instead of a compiled OCX, the reference will point to the
	specific project that contains the control only. If you add the UserControl and
	Form to a project of a different name later, the following error occurs:
	
	  Errors during loading. See <path to form>.log for details.
	
	CAUSE
	=====
	
	The reference to the control is bound specifically to the project that the
	control resides in. When the form is added to another project, the reference
	becomes invalid.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. Place a CommandButton on Usercontrol1.
	
	3. Save the control by selecting Save Usercontrol1 As from the File menu.
	
	4. Create a new Standard EXE project and name it Project1. Form1 is created by
	  default.
	
	5. Add Usercontrol1.ctl to the new project by selecting Add User Control from
	  the Project menu.
	
	6. Add an instance of Usercontrol1 to Form1 by dragging it from the toolbox to
	  Form1.
	
	7. Save the Form by selecting Save Form1 As from the File menu.
	
	8. Create another new Standard EXE project and name it Project2.
	
	9. In Project Explorer, right-click on Form1 and select Remove Form1.frm.
	
	10. Add Usercontrol1.ctl, then Form1.frm subsequently to Project2. When
	  Form1.frm is loading, the above error occurs.
	
	  NOTE: If you open up Form1.frm in Notepad, you will find a reference to
	  Project1.Usercontrol1 Usercontrol11.
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600 kbCtrl kbCtrlCreate
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
