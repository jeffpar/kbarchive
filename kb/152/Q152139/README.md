---
layout: page
title: "Q152139: BUG: Minimized 16-bit Visual Basic 4.0 App Gives GPF on NT3.51"
permalink: kb/152/Q152139/
---

## Q152139: BUG: Minimized 16-bit Visual Basic 4.0 App Gives GPF on NT3.51

	Article: Q152139
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Place an EXE file created by the 16-bit edition of Visual Basic 4.0 in a Windows
	NT Program Group and deselect the option "Run in separate memory Space." Start
	an instance of the EXE file, then start a second instance and minimize it. Close
	the first instance, and click the icon of the second instance. A General
	Protection Fault (GPF) at 0001:87AE occurs in KRNL386.EXE.
	
	RESOLUTION
	==========
	
	Setting the option "Run in separate memory space" in Program Group resolves the
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
