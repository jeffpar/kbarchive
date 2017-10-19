---
layout: page
title: "Q176410: PRB: GPF When Opening or Creating a New Project"
permalink: /kb/176/Q176410/
---

## Q176410: PRB: GPF When Opening or Creating a New Project

	Article: Q176410
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
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
	
	If you have a project loaded in Visual Basic 5.0 and you try to open an existing
	project or create a new one, a General Protection Fault (GPF) might occur.
	
	CAUSE
	=====
	
	The GPF appears to be caused by faulty Add-Ins.
	
	RESOLUTION
	==========
	
	To resolve the issue, do the following:
	
	1. From the Add-Ins menu, select Add-In manager.
	
	2. Deselect all Add-ins from the Add-In manager.
	
	
	3. On the Add-In Manager dialog box, click OK.
	
	4. Exit Visual Basic 5.0.
	
	5. Start Visual Basic 5.0.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
