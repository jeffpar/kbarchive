---
layout: page
title: "Q172888: PRB: ComCtl32.ocx - The Dependency File is Out of Date"
permalink: /kb/172/Q172888/
---

## Q172888: PRB: ComCtl32.ocx - The Dependency File is Out of Date

{% raw %}

	Article: Q172888
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Visual Basic 5.0 Application Setup Wizard on a project that
	uses COMCTL32.OCX, the Out of Date Dependencies dialog box displays the
	following message:
	
	  The dependency file for the following component(s) is out of date.
	
	CAUSE
	=====
	
	A version of COMCTL32.OCX later than 5.00.3714 was installed and registered on
	the system, but the dependency file COMCTL32.DEP was not updated.
	
	This can occur if a newer COMCTL32.OCX was installed when you visited a Web site.
	When a user navigates to a Web site that uses an ActiveX control, such as
	COMCTL32.OCX, Internet Explorer checks to see if the current version installed
	on the system is newer, older, or the same version as the one being used by the
	Web site. If the version currently installed on the system is older, Internet
	Explorer replaces the control with the newer version. When this occurs, the
	dependency files for that control are not updated and the message described
	above will occur when you run the Application Setup Wizard.
	
	RESOLUTION
	==========
	
	Obtain the latest versions of COMCTL32.OCX and COMCTL32.DEP from the Microsoft
	Web site.
	
	For additional information on how to obtain the latest version of COMCTL32.OCX,
	see the following article in the Microsoft Knowledge Base:
	
	  Q167121 : FILE: Updated Comctl32.ocx Version 5.00.3828 Available
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual Basic 5.0 ships with COMCTL32.OCX version 5.00.3714, as well as its
	dependency file COMCTL32.DEP. After the initial release of Visual Basic 5.0,
	version 5.00.3828 of COMCTL32.OCX became available via the Visual Basic Control
	Creation Edition and the Microsoft Web site.
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
