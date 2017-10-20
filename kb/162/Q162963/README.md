---
layout: page
title: "Q162963: ADT/ODE: Custom Run-Time Setup Does Not Install Msaexp30.dll"
permalink: /kb/162/Q162963/
---

## Q162963: ADT/ODE: Custom Run-Time Setup Does Not Install Msaexp30.dll

{% raw %}

	Article: Q162963
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you create a setup image for a custom run-time application, the Setup
	Wizard automatically includes the file Msaexp30.dll; however, when you run your
	custom Setup program, that file is not copied to the hard drive.
	
	CAUSE
	=====
	
	The Msaexp30.dll file is not used by the run-time version of Microsoft Access
	7.0 or 97.
	
	RESOLUTION
	==========
	
	Because the file is not used by the run-time version of Microsoft Access, and
	the file is not copied to your hard drive during Setup, no action is necessary.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office 97 Developer
	Edition Tools and Microsoft Access Developer's Toolkit, version 7.0.
	
	MORE INFORMATION
	================
	
	Msaexp30.dll is the Microsoft Access Expression Builder DLL. Note that in
	Microsoft Office 97 Developer Edition Tools, this file is not included in the
	list of files you are licensed to redistribute.
	
	REFERENCES
	==========
	
	For a list of files you can redistribute with your run-time application, search
	the Help Index for "files, distributing with run-time applications."
	
	Additional query words: ODE ADT Msaexp30 dll
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
