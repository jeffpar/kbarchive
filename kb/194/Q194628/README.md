---
layout: page
title: "Q194628: PRB: Learning Edition Does Not Ship With the Data Form Wizard"
permalink: /kb/194/Q194628/
---

## Q194628: PRB: Learning Edition Does Not Ship With the Data Form Wizard

	Article: Q194628
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to create a Data Access Form through an Application Wizard project
	results in the following error message:
	
	  "Failed to load the Data Form Wizard".
	
	CAUSE
	=====
	
	The Data Form Wizard does not ship with the Microsoft Visual Basic 6.0 Learning
	Edition.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new VB Application Wizard project in Microsoft Visual Basic 6.0
	  Learning Edition.
	
	2. Once the Application Wizard launches, click the "Next" command button to
	  accept all default settings until the "Data Access Forms" screen appears.
	
	3. Select the "Create New Form" command button on the "Data Access Forms
	  dialog." The following error message will appear:
	
	  "Failed to load the Data Form Wizard"
	
	Additional query words: kbDSupport kbdss kbVBp600 kbWizard kbLEdition kbAppSetUp kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
