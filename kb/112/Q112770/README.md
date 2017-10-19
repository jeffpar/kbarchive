---
layout: page
title: "Q112770: VB3 PRB: Making .EXE Error: Wrong Version of Runtime DLL"
permalink: /kb/112/Q112770/
---

## Q112770: VB3 PRB: Making .EXE Error: Wrong Version of Runtime DLL

	Article: Q112770
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a copy of an executable is running on your computer, and you try to create a
	new executable with the same name, you'll receive this error:
	
	  Wrong version of runtime DLL.
	
	followed by another error:
	
	  Unexpected error quitting.
	
	CAUSE
	=====
	
	This error is caused by the fact that Windows doesn't load a new copy of a
	module if it thinks the module is already in memory. Because one instance of
	your .EXE file is running already, attempting to run the re-compiled version
	really just increments the usage count of the .EXE that is already running.
	
	The Visual Basic error occurs because VBRUN300.DLL tries to open the .EXE file
	and read resources out of it. But the .EXE file you're reading from is different
	from the .EXE file that is actually running (because you did a 'Make EXE' over
	the old one), so VBRUN300 has problems. It signals with the "Wrong version of
	run-time DLL" error. It reports this error because it is under the assumption
	that because it could not read the .EXE file, it doesn't have the correct
	version of VBRUN needed to execute that .EXE file.
	
	RESOLUTION
	==========
	
	To work around the problem, either rename the .EXE when you create a new
	executable, or exit from the executable that is currently running.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : 3.00
	Issue type        : kbprb
	
	=============================================================================
	
