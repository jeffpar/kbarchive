---
layout: page
title: "Q191092: PRB: PDW Appends Script Information to Existing PDM File"
permalink: kb/191/Q191092/
---

## Q191092: PRB: PDW Appends Script Information to Existing PDM File

	Article: Q191092
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Package and Deployment Wizard (PDW) script is saved over an existing script
	file (.pdm), the new information is written at the beginning of the existing
	file, instead of replacing the entire contents.
	
	CAUSE
	=====
	
	The PDW will assume if an existing .pdm file exists in the same directory as the
	Visual Basic Project file (.vbp) that the .pdm file is for that project and will
	write information to this file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The PDW can save package and deployment information for each application
	processed by the wizard. This information is stored in a .pdm file in the
	project directory and with the same name as the project. For example, if the
	project was named Project1.vbp, the PDW will create a Project1.pdm in the same
	directory as Project1.vbp.
	
	A .pdm file is a text file containing one or more scripts with all information as
	to the packaging and/or deployment of an application, including all necessary
	files, installation locations, and the name of the script.
	
	Since a project can be distributed several different ways, several deployment
	packages can be created for a project, and all of the package/deployment scripts
	are stored in the same .pdm file. New scripts are added to the beginning of the
	projects .pdm file.
	
	REFERENCES
	==========
	
	For additional information, please consult the Scripts keyword under Package and
	Deployment Wizard in MSDN.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
