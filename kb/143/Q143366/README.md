---
layout: page
title: "Q143366: MSB Solar: ErrMsg: Solar System Needs More Memory to Run"
permalink: /kb/143/Q143366/
---

## Q143366: MSB Solar: ErrMsg: Solar System Needs More Memory to Run

	Article: Q143366
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,3.x
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	1.00
	WINDOWS
	kbother kberrmsg kbprb kbmm
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	- Microsoft Dogs for Windows, version 1.0 
	- the operating system: Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Magic School Bus Explores the Solar System on a computer using
	Windows 3.x, you may receive the following error message:
	
	  Solar System needs more memory to run.
	
	When you try to install Dogs you may receive the following error message:
	
	  Not enough memory to initialize (mem 504). Try closing all other applications
	  or increasing the size of your swapfile.
	
	CAUSE
	=====
	
	You may receive this error message if Adobe Type Manager (ATM) or MoreFonts is
	installed on your system. These two font packages modify the System.ini file by
	changing the System.drv line and adding a new line.
	
	For example:
	
	Adobe Type Manager makes the following modifications to the System.ini file:
	
	  [Boot]
	     SYSTEM.DRV=ATMSYS.DRV
	     ATMSYS.DRV=SYSTEM.DRV
	
	MoreFonts by Micrologic Software makes the following modifications to the
	System.ini file:
	
	  [Boot]
	     SYSTEM.DRV=MFSYS.DRV
	     MF.SYSTEM.DRV=SYSTEM.DRV
	
	RESOLUTION
	==========
	
	To disable ATM or MoreFonts, make the following changes to the System.ini file:
	
	1. In Program Manager, click Run on the File menu.
	
	2. In the Command Line box, type "sysedit" (without the quotation marks) and
	  press ENTER.
	
	3. Click the System.ini file to bring it to the front.
	
	4. In the [Boot] section, locate the following lines:
	
	  SYSTEM.DRV=ATMSYS.DRV
	  ATMSYS.DRV=SYSTEM.DRV
	
	  -or-
	
	  SYSTEM.DRV=MFSYS.DRV
	  MF.SYSTEM.DRV=SYSTEM.DRV
	
	5. Remark out these lines out by placing two semicolons as follows:
	
	  ;;SYSTEM.DRV=ATMSYS.DRV
	  ;;ATMSYS.DRV=SYSTEM.DRV
	
	  -or-
	
	  ;;SYSTEM.DRV=MFSYS.DRV
	  ;;MF.SYSTEM.DRV=SYSTEM.DRV
	
	6. Add the following line to the [Boot] section of the System.ini file:
	
	  SYSTEM.DRV=SYSTEM.DRV
	
	7. On the File menu, click Exit, and then click Yes to save the changes.
	
	8. Restart Windows.
	
	After following these steps, you should be able to run MSB Solar System
	successfully.
	
	Additional query words: 1.00 memory msb msbss frizz kbmm multimedia multi-media run errmsg hangs freezes winmsbsolar msbsolar err msg
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbOSWinSearch kbHomeProdSearch kbZNotKeyword6 kbZNotKeyword kbKidsSearch kbDogs100 kbScholasticSolar kbOSWin310 kbOSWin311 kbOSWin300 kbOSWin300a kbMSBSearch
	Version           : WINDOWS:1.0,3.x
	Issue type        : kbprb
	
	=============================================================================
	
