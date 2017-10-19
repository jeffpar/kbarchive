---
layout: page
title: "Q167057: PRB: Templates Are Not Available After Installing Visual Basic"
permalink: /kb/167/Q167057/
---

## Q167057: PRB: Templates Are Not Available After Installing Visual Basic

	Article: Q167057
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbui kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Visual Basic 5.0, remove the Visual Basic installation directory,
	then reinstall Visual Basic to a new directory, the templates might become
	unavailable. When the templates are not available, you will not be able to run
	any Wizards or load any templates from the New Project dialog.
	
	CAUSE
	=====
	
	This problem may be caused by previous installations of Visual Basic 5.0 or
	Visual Basic 5.0 Control Creation Edition (VB5CCE) that had templates in a now
	non-existent directory.
	
	RESOLUTION
	==========
	
	The following steps fix the problem:
	
	1. With a project open, go to the Tools menu and select Options. The Options
	  dialog appears.
	
	2. In the Options dialog, go to the Environment tab and set the Templates
	  Directory.
	
	3. Enter the Templates directory where your template files reside. For the
	  default templates, set the path to the Template sub-directory below your
	  Visual Basic installation directory. For example:
	
	     C:\PROGRAM FILES\DEVSTUDIO\VB\Template
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbtool kbui kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
