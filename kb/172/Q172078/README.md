---
layout: page
title: "Q172078: HOWTO: Enable Autorun for Applications Distributed on CD-ROM"
permalink: /kb/172/Q172078/
---

## Q172078: HOWTO: Enable Autorun for Applications Distributed on CD-ROM

{% raw %}

	Article: Q172078
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbvfp500 kbvfp600
	Last Modified: 28-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 and Windows NT 4.0 both support the Autorun feature for CD-ROMS. The
	Autorun feature detects when a CD is inserted into the CD-ROM drive and runs an
	application based on the contents of the Autorun.inf file located on the CD.
	
	A common use of this Autorun feature is to launch an application's setup when the
	CD is inserted. This article outlines the process of enabling this feature for a
	Visual FoxPro application.
	
	MORE INFORMATION
	================
	
	When a CD is inserted into the CD-ROM drive, the operating system checks for a
	file named Autorun.inf in the root directory of the CD. This file contains a
	pointer to an executable file named Autorun.exe.
	
	The following Autorun.inf file was taken from the Windows 95 CD:
	
	  [autorun]
	  OPEN=AUTORUN\AUTORUN.EXE
	  ICON=AUTORUN\WIN95CD.ICO
	
	The OPEN= entry indicates the location of the Autorun.exe file, and the ICON=
	entry indicates the icon used to represent the CD-ROM drive in the Windows
	Explorer.
	
	To create an Autorun.inf file that launches a Visual FoxPro setup routine, you
	must first create the distribution set using the Setup Wizard.
	
	Once the distribution set has been created, rename Setup.exe to Autorun.exe, and
	rename Setup.lst to Autorun.lst.
	
	Create a new text file named Autorun.inf with the following contents:
	
	     [autorun]
	     OPEN=AUTORUN.EXE
	
	Place this file and all the files from the distribution set in the root directory
	of the CD.
	
	When the CD is inserted into the CD-ROM drive, the application's setup should be
	launched.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q152395 HOWTO: Using Setup Wizard to Distribute VFP App on CD-ROM
	
	  Q136214 HOWTO: Test Autorun.inf Files
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
