---
layout: page
title: "Q189470: PRB: Read-only Msvbvm50.dll Causes Errors During VB5 App Install"
permalink: /kb/189/Q189470/
---

## Q189470: PRB: Read-only Msvbvm50.dll Causes Errors During VB5 App Install

{% raw %}

	Article: Q189470
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbsetup kbVBp kbVBp500 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to setup a Visual Basic 5.0 application onto a server that has the
	Windows NT 4.0 Option Pack installed, the application setup may fail with
	following error:
	
	  Failure to register dll. 0x8000ffff
	
	CAUSE
	=====
	
	The Windows NT 4.0 Option Pack set the Read-only attribute of the MSVBVM50.dll
	file to True.
	
	RESOLUTION
	==========
	
	To solve this problem, remove the Read-only attribute from MSVBVM50.dll on the
	server.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Some users have been unable to install their Visual Basic 5.0 applications
	because there was already a copy of Msvbvm50.dll on the system, and its file
	attributes were set to Read-only. This problem is caused during Windows NT 4.0
	Option Pack Installation.
	
	The following information from the Microsoft Windows NT 4.0 Option Pack RELEASE
	NOTES UPDATE Web page describes the problem:
	
	  VISUAL BASIC 5.0 RUN-TIME DLL CARRIES READ ONLY ATTRIBUTE Under some
	  conditions during Windows NT 4.0 Option Pack installation, the Microsoft
	  Visual Basic development system 5.0 run-time dynamic-link library (DLL)
	  (MSVBVM50.dll) is marked with the Read-only file attribute. This causes
	  errors when running any setup program created by the Visual Basic Setup
	  Wizard, or in some cases causes an error with Visual Basic-created components
	  that are downloaded into a browser.
	
	This information may be found at the following Web site:
	
	  http://www.microsoft.com/windows/downloads/contents/products/nt4optpk/ntrelnotesupdate.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp kbVBp500 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
