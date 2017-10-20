---
layout: page
title: "Q193174: PRB: Filename Must Contain Text Error Msg When Packaging Project"
permalink: /kb/193/Q193174/
---

## Q193174: PRB: Filename Must Contain Text Error Msg When Packaging Project

{% raw %}

	Article: Q193174
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to use the Package and Deployment Wizard (PDW) to package an
	ActiveX DLL/EXE project, the following error is received:
	
	  Filename must contain text
	
	This occurs when the ActiveX DLL/EXE project is part of a project group that
	contains and references a UserControl project, and the projects are saved before
	being compiled.
	
	CAUSE
	=====
	
	The PDW reads all of the objects and references out of the VBP file. When you
	compile the control only after saving both the ActiveX Control project and the
	ActiveX DLL/EXE project, the latter's VBP does not reflect the current state of
	the referenced control and is therefore invalid. When you open the VBP in
	Notepad, note that the reference to the control is:
	
	Object=*\A[Name of Control Project].vbp
	
	However, if you choose to save the projects, the correct reference is saved:
	
	Object={GUID}#version#version; [Name of Control Project].ocx
	
	When the PDW fails to parse correctly in the first case, it tries to add a file
	named "" to make up for the name of the compiled OCX. This results in the above
	error.
	
	RESOLUTION
	==========
	
	To update the VBP file with correct references, save both projects before using
	the PDW to package them.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL in Visual Basic. Class1 is created by default.
	
	2. In Project Explorer, right-click Class1 and select Remove Class1.
	
	3. Add a User Document (UserDocument1) to Project1.
	
	4. Add an ActiveX Control project (Project2). UserControl1 is created by
	  default.
	
	5. Close the designer of UserControl1. The control becomes visible in the
	  toolbar. Place an instance of the control on UserDocument1 of Project1.
	
	6. Save the projects in the project group by selecting Save Project Group under
	  the File menu. Accept the default location suggested by Visual Basic.
	
	7. Click on Project2 and select Make Project2.ocx under the File menu.
	
	8. Click on Project1 and select Make Project1.dll under the File menu.
	
	9. Select Add-In Manager under Add-Ins and select Package and Deployment Wizard
	  (PDW) to load it.
	
	10. Select Project1 and start the PDW by selecting it from the Add-Ins menu.
	
	11. Choose No when asked to save the projects before packaging, and then select
	  Package.
	
	Note that the following error occurs and further attempts to package the project
	result in the same error:
	
	  Filename must contain text
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
