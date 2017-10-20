---
layout: page
title: "Q161831: FIX: &quot;Error loading SETUPAPI.DLL&quot; Installing VB5CCE on NT 3.51"
permalink: /kb/161/Q161831/
---

## Q161831: FIX: &quot;Error loading SETUPAPI.DLL&quot; Installing VB5CCE on NT 3.51

{% raw %}

	Article: Q161831
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbsetup kbVBp kbVBp500 kbOSWin98fix kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install the Control Creation Edition of Microsoft Visual Basic 5.0
	onto a workstation based on Windows NT 3.51, the following error message
	appears:
	
	  Error loading SETUPAPI.DLL
	
	CAUSE
	=====
	
	The original release of Microsoft Windows NT 3.51 and its service packs do not
	distribute this DLL. Setupapi.dll is in the Microsoft Windows NT 4.0 or Windows
	2000 distribution set.
	
	STATUS
	======
	
	This problem has been fixed in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	The system requirements for the Control Creation Edition of Visual Basic 5.0
	are:
	
	- Personal computer with a 486 or higher processor running Microsoft Windows 95
	  or Windows NT Workstation version 4.0 or later
	
	- 12 MB of memory (16 MB recommended) if running Windows 95
	
	- 12 MB (16 MB recommended) if running Windows NT Workstation
	
	- VGA or higher-resolution monitor (Super VGA recommended)
	
	- Microsoft Mouse or compatible pointing device
	
	Setupapi.dll is required for the installation of the Control Creation Edition of
	Visual Basic 5.0 onto a Windows NT based system. Note that it is not necessary
	for Windows 95.
	
	REFERENCES
	==========
	
	For more information on the Control Creation Edition of Microsoft Visual Basic
	5.0 and other versions of Microsoft Visual Basic, go to our Web site at
	http://www.microsoft.com/vbasic.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp kbVBp500 kbOSWin98fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
