---
layout: page
title: "Q190166: PRB: PDW Does Not Include .ASP and .HTM Files for Standard Setup"
permalink: kb/190/Q190166/
---

## Q190166: PRB: PDW Does Not Include .ASP and .HTM Files for Standard Setup

	Article: Q190166
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp600 kbWebClasses kbGrpDSVB kbDSupport
	Last Modified: 04-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Package and Deployment Wizard (PDW) to create a Standard Setup
	Package for an application containing Web Classes, .ASP and/or .HTM files will
	not be automatically included in the application distribution set.
	
	RESOLUTION
	==========
	
	To work around this issue, any .ASP or .HTM files must be added manually using
	the PDW Include Files section during the packaging of the application
	distribution set.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Microsoft Visual Basic, creating a new IIS application.
	
	2. From the File menu, click Make to compile the project.
	
	3. Exit Microsoft Visual Basic, and save the changes to the project.
	
	4. Start the Package and Deployment Wizard (PDW) and create a Standard Setup
	  Package, accepting all default values.
	
	  NOTE: Any .ASP or .HTM files necessary for the application will not be
	  included. These files must be included in the PDW's Include File section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp600 kbWebClasses kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
