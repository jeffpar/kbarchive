---
layout: page
title: "Q163064: ODE97: Uninstalling Access or Office Pro 97 May Break Run-Time A"
permalink: /kb/163/Q163064/
---

## Q163064: ODE97: Uninstalling Access or Office Pro 97 May Break Run-Time A

	Article: Q163064
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	If you set up Microsoft Access 97 or Microsoft Office 97 Professional Edition
	with the Run From CD-ROM or Run From Network Server option, and then you remove
	(uninstall) Microsoft Office from your computer, you may receive the following
	error message when you try to start a Microsoft Access 97 run-time application:
	
	  Unable to initialize the system registry.
	  Rerun Microsoft Access or Office Setup.
	
	CAUSE
	=====
	
	This error only occurs when the following events occur in the order listed:
	
	- You set up Microsoft Access 97 or Microsoft Office 97 Professional Edition
	  with the Run from CD-ROM or Run from Network Server option.
	
	- You run Setup for a Microsoft Access 97 run-time application.
	
	- You uninstall Microsoft Access 97 or Microsoft Office 97 Professional
	  Edition.
	
	This error occurs because the Setup program for the run-time application detects
	that certain Microsoft Office components (such as Msaccess.exe) are available on
	the CD-ROM or network file server, so it does not install them on your hard
	drive. After you uninstall Microsoft Office, the components on the CD-ROM or the
	server are no longer available for the run- time application to use.
	
	RESOLUTION
	==========
	
	You must remove and reinstall your run-time application so that the required
	files for Microsoft Access 97 run-time components will be copied to your hard
	drive.
	
	REFERENCES
	==========
	
	For more information about installing run-time applications on a computer that
	installed Microsoft Access or Microsoft Office 97 with the Run from CD-ROM or
	Run from Network Server options, start the ODE Tools Setup Wizard, and then
	click the Tips button on the first screen of the Setup Wizard.
	
	Additional query words: runtime removing
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
