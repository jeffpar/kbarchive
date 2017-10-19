---
layout: page
title: "Q162608: Cannot Start OSR2 After Installing Retail Windows 95"
permalink: /kb/162/Q162608/
---

## Q162608: Cannot Start OSR2 After Installing Retail Windows 95

	Article: Q162608
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install the retail version of Windows 95 (version 950) on a computer that
	already has Windows 95 OEM Service Release 2 (OSR2) installed, Windows 95 may
	not start.
	
	CAUSE
	=====
	
	The core components of the retail version of Windows 95 and OSR2 are not
	compatible.
	
	RESOLUTION
	==========
	
	Reinstall OSR2 from a command prompt into the current Windows folder or into an
	empty folder. Note that if you reinstall OSR2 into an empty folder, you will
	have to reinstall all your programs.
	
	MORE INFORMATION
	================
	
	When you reinstall OSR2, use the OSR2 CD-ROM provided by your original equipment
	manufacturer (OEM). If you do not have an OSR2 CD-ROM, your OEM may have
	provided a flat folder on your hard disk with files to install OSR2. To locate
	this folder, type the following command at a command prompt:
	
	  "dir *.cab /s" (without the quotation marks)
	
	To reinstall OSR2, run Setup.exe from the folder containing the cabinet (.cab)
	files.
	
	Contact your OEM for assistance if:
	
	- You do not have an OSR2 CD-ROM and you cannot locate a folder with the
	  cabinet files.
	
	- You cannot locate the Setup.exe file in the folder that contains the cabinet
	  files.
	
	If you try to install the retail version of Windows 95 from the Windows 95 CD-ROM
	on a computer with OSR2 installed and the Auto Insert Notification option
	enabled, the Add/Remove Software option on the Autorun menu is disabled, and you
	receive the following warning:
	
	  This CD-ROM is from an older version of Windows than the one you are
	  presently using. Setup functionality from this disk will be disabled.
	
	A warning does not appear if:
	
	- The Auto Insert Notification option is disabled, and you are installing from
	  a CD-ROM.
	
	- You choose to browse the CD-ROM.
	
	Additional query words:
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
