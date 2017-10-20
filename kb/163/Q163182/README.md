---
layout: page
title: "Q163182: ODE97: ODE Setup Does Not Check for MS Access 97 or Office 97"
permalink: /kb/163/Q163182/
---

## Q163182: ODE97: ODE Setup Does Not Check for MS Access 97 or Office 97

{% raw %}

	Article: Q163182
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	
	SYMPTOMS
	========
	
	The Microsoft Office Developer Edition Tools Setup program does not display a
	warning message if it cannot find Microsoft Access 97 or Microsoft Office 97
	Professional Edition installed on your computer. However, when you try to run
	certain components that are included in the ODE, you receive error messages.
	
	NOTE: You will also receive an error message if the Help files for Microsoft
	Access are not installed on your local hard disk.
	
	CAUSE
	=====
	
	The Setup program does not check your hard disk for previously installed
	applications before it installs the ODE. However, to have the full functionality
	of the Microsoft Office Developer Edition Tools (ODE), you must have Microsoft
	Access 97 or Microsoft Office 97 Professional Edition installed on your
	computer.
	
	RESOLUTION
	==========
	
	Install Microsoft Access 97 or Microsoft Office 97 Professional Edition, which
	includes Microsoft Access 97, on your computer before you try to run the
	Microsoft Office 97 Developer Edition Tools.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access 97.
	
	MORE INFORMATION
	================
	
	Even though the Setup program does not check for an installed copy of Microsoft
	Access 97 or Microsoft Office 97 Professional Edition when you run Setup, you
	must have a copy of Microsoft Access 97 installed before you can create run-time
	applications.
	
	Some components of the ODE require certain files that are installed with either
	Microsoft Access 97 or Microsoft Office 97 Professional Edition. For example,
	the ODE Setup Wizard opens in Microsoft Access 97. If you try to run the ODE
	Setup Wizard without Microsoft Access 97 being installed on your hard disk, a
	Program Not Found dialog box is displayed.
	
	REFERENCES
	==========
	
	For more information about requirements for running the Microsoft Office 97
	Developer Edition Tools, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q162893 ODE97: System Requirements for Microsoft Office 97 (ODE)
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
