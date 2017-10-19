---
layout: page
title: "Q141025: PRB:Can't Create new .EXE w/ Same Name If It's Already Running"
permalink: /kb/141/Q141025/
---

## Q141025: PRB:Can't Create new .EXE w/ Same Name If It's Already Running

	Article: Q141025
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a copy of an executable is running on your computer, and you try to create a
	new executable with the same filename, the following error message appears:
	
	  Permission Denied "Project.exe"
	
	CAUSE
	=====
	
	This error is caused by the fact that a copy of the project's executable file is
	already running on the system. Microsoft Windows does not allow a file to be
	written to or deleted when it is running.
	
	WORKAROUND
	==========
	
	To work around this problem, either rename the .Exe file when you create a new
	executable, or exit from the executable that is currently running.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	
