---
layout: page
title: "Q183370: PRB: System Error &quot;No Such Interface Supported&quot;"
permalink: kb/183/Q183370/
---

## Q183370: PRB: System Error &quot;No Such Interface Supported&quot;

	Article: Q183370
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbtophit kbRegistry kbVBp500 kbGrpDSVB
	Last Modified: 03-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you show the Components dialog by either right-clicking the Toolbox or
	choosing the Project menu, the following error message appears followed by a
	blank dialog box:
	
	  System Error &H80004002 (-2147467262)
	  No Such Interface Supported
	
	Note that the memory address may vary.
	
	CAUSE
	=====
	
	This error is caused by an incorrect version of comcat.dll.
	
	RESOLUTION
	==========
	
	To resolve the problem, install the correct version of comcat.dll by completing
	the following steps:
	
	1. Use REGSVR32.EXE to unregister COMCAT.DLL. REGSVR32.EXE is installed by
	  Visual Basic or it may be found on the Visual Basic installation CD-ROM.
	
	  To unregister, select Run from the Windows Start menu, type the following
	  command line and click Ok:
	
	  regsvr32 /u comcat.dll
	
	2. Copy comcat.dll, version 4.71 (22k), from the
	  ..\DevStudio\VB\Setupkit\kitfil32\sys32 directory or from your Visual Basic
	  CD to the Windows\System or WinNT\System32 directory.
	
	3. Use REGSVR32.EXE to register COMCAT.DLL. To register, click Run on the
	  Windows 95 Start menu, type the following command line, and the click OK:
	
	  regsvr32 comcat.dll
	
	MORE INFORMATION
	================
	
	This should not be a problem on Windows 2000 because it is a protected system
	file. Windows 2000 will detect any attempt to rename, delete or replace this
	file and will put it back as it was.
	
	REFERENCES
	==========
	
	For additional information, please click the article number below to view the
	article(in the Microsoft Knowledge Base:
	
	  Q175156 PRB: Class Not Registered Error and Empty Components Dialog
	
	Additional query words: 6K
	
	======================================================================
	Keywords          : kbtophit kbRegistry kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
