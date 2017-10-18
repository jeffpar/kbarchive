---
layout: page
title: "Q117916: ADT2: ADT Splash Screen Is Not Repainted"
permalink: kb/117/Q117916/
---

## Q117916: ADT2: ADT Splash Screen Is Not Repainted

	Article: Q117916
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	If you specify a splash, or startup, screen in your custom application's .INI
	file and you have security enabled, the application's Logon dialog box will
	overlay the splash screen. If you move the Logon dialog box, the splash screen
	is not repainted.
	
	RESOLUTION
	==========
	
	Do not move the Logon dialog box when you are logging into a Microsoft Access
	Developer's Toolkit-developed run-time application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Access Developer's
	Toolkit (ADT) version 2.0. This problem no longer occurs in Microsoft Access
	Developers Toolkit for Windows 95.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a Microsoft Access application.
	
	2. Use the ADT Setup Wizard to create Setup disks for your application. Make
	  sure to include a secured SYSTEM.MDA file and a .BMP file with your
	  application.
	
	3. Add the following lines to your application's .INI file:
	
	  [Run-Time Options]
	        StartupScreen=<yourapp>.bmp
	
	4. Use the Setup disks to install your application.
	
	5. Double-click the icon that your application's Setup creates. When the Logon
	  dialog box appears, move the dialog box. Note that the bitmap image is not
	  repainted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
