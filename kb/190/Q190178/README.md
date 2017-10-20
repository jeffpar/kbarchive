---
layout: page
title: "Q190178: BUG: PDW Creates an Invalid Setup for a VB 5.0 Project"
permalink: /kb/190/Q190178/
---

## Q190178: BUG: PDW Creates an Invalid Setup for a VB 5.0 Project

{% raw %}

	Article: Q190178
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp500bug kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create and compile a project under Microsoft Visual Basic 5.0, and use
	the Package and Deployment Wizard (PDW) in Visual Basic 6.0 to create a setup
	package for the project, the PDW will create an invalid setup program without
	any warning. After you deploy the setup package in another machine, you cannot
	run the application.
	
	CAUSE
	=====
	
	The problem arises because the original executable (EXE) of your Visual Basic
	project expects to use the MSVBVM50.DLL run-time library. When the PDW creates a
	setup package for the Visual Basic 5.0 project, the PDW adds the MSVBVM60.DLL
	run-time library to the setup package. When you deploy the package and run the
	application, the original Visual Basic 5.0 EXE is in conflict with the files the
	setup package installed. Therefore, it fails to run.
	
	RESOLUTION
	==========
	
	Recompile your Visual Basic 5.0 project using Microsoft Visual Basic 6.0 before
	using the PDW to create a setup package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp500bug kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
