---
layout: page
title: "Q304607: PRB: Visual Basic Doesn't Load .ocx When Starting Visual Basic"
permalink: kb/304/Q304607/
---

## Q304607: PRB: Visual Basic Doesn't Load .ocx When Starting Visual Basic

	Article: Q304607
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a new Visual Basic 6.0 project (such as a Standard EXE
	project), you receive the following error message:
	
	  Failed to load control image list mscomctl.ocx
	
	When you click Continue in the dialog box, the Visual Basic integrated
	development environment (IDE) closes the application.
	
	CAUSE
	=====
	
	When the Visual Basic IDE is being loaded, the control image list file
	Mscomctl.ocx does not load. This problem can occur when the the default
	temporary folder contains a large number of files (for example, more than 65,000
	files).
	
	RESOLUTION
	==========
	
	Delete all temporary files in the default temporary file folder.
	
	To locate your default temporary files, and then delete them, follow these
	steps:
	
	1. On the Start menu, click Run.
	
	2. In the Run dialog box, type "%TEMP%" (without the quotation marks), and then
	  click OK.
	
	3. A window opens that displays your temporary files; select the files you want
	  to delete.
	
	4. Press the DELETE key, click Yes to confirm the deletion, and then close the
	  Temp window.
	
	NOTE: You may receive a warning that any files that another program uses will not
	be deleted until you close the program that uses these files.
	
	MORE INFORMATION
	================
	
	Other files also may not load when Visual Basic IDE is being loaded, depending
	on the available space in the %Temp% folder.
	
	Additional query words: closure
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
