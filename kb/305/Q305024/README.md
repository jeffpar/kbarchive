---
layout: page
title: "Q305024: PRB: Source Code Control Not Available as Visual Basic Add-In"
permalink: /kb/305/Q305024/
---

## Q305024: PRB: Source Code Control Not Available as Visual Basic Add-In

	Article: Q305024
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbDSupport kbGrpDSSSafe
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to enable the Source Code Control add-in for Visual Basic, it is
	either not present or returns the error message:
	
	  Source Code Control could not be loaded. Remove it from the list of available
	  add-ins?
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem.
	
	1. Close Visual Basic.
	
	2. Use REGSVR32.exe to register the following DLL files:
	
	  VBSCC.dll (located in \Microsoft Visual Studio\VB98 )
	  SSSCC.dll (located in \Microsoft Visual Studio\Common\VSS\Win32 )
	  SSAPI.dll (located in \Microsoft Visual Studio\Common\VSS\Win32 )
	
	  For example, for the first DLL, you would enter the following command at the
	  command prompt:
	
	  REGSVR32.EXE "C:\Microsft Visual Studio\VB98\VBSCC.DLL"
	
	3. Edit the VBADDIN.ini file (located in your Windows folder) and change the
	  line
	
	  VBSCC=0
	
	  to:
	
	  VBSCC=3
	
	  (VBSCC=1 = load at start up, VBSCC=2 = loaded/unloaded, VBSCC=3 = load at
	  startup and loaded/unloaded)
	
	  NOTE: If this line is not present in the VBADDIN.in file, add it.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q305024 PRB: Source Code Control Not Available as Visual Basic Add-In
	
	Additional query words: Integrate integration VB6 SSAPI.DLL add-in addin "Source Code Control" ssscc.dll
	
	======================================================================
	Keywords          : kbVBp kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500 kbSSafe32bitSearch
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
