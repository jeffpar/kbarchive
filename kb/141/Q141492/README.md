---
layout: page
title: "Q141492: ADT2: ADT Setup Wizard Could Not Find MS Access Error Message"
permalink: /kb/141/Q141492/
---

## Q141492: ADT2: ADT Setup Wizard Could Not Find MS Access Error Message

	Article: Q141492
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	Although you have a local installation of Microsoft Access, when you attempt to
	use the Microsoft Access Developer's Toolkit Setup Wizard to create disk images,
	you may receive the following error message:
	
	  Setup could not find Microsoft Access 2.0 installed locally on your system.
	  Please install Microsoft Access 2.0 before installing this application.
	
	RESOLUTION
	==========
	
	Make sure you are using the UTILITY.MDA included with Microsoft Access 2.0. If
	you are using a file from any other source, the Setup Wizard may fail.
	
	Also, check the [Options] section of the MSACC20.INI file to be sure that the
	path to the UTILITY.MDA is valid. To do so, open any text editor, such as
	Notepad. Open the MSACC20.INI file. (This file is located in your Windows
	directory). The [Options] section is the first section in the file. An example
	of a valid path to the UTILITY.MDA is as follows:
	
	  [Options]
	  SystemDB=C:\MSOFFICE\ACCESS\system.mda
	  UtilityDB=C:\MSOFFICE\ACCESS\utility.mda
	  AllowCustomControls=1
	  AllowOLE1LinkFormat=0
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
