---
layout: page
title: "Q83889: MicroField Display Driver Information"
permalink: /kb/083/Q83889/
---

## Q83889: MicroField Display Driver Information

	Article: Q83889
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses some known problems with, current versions of, and
	installation of the MicroField Graphics display driver, T8.DRV.
	
	MORE INFORMATION
	================
	
	GP Faults
	---------
	
	Some versions of the MicroField Graphics display driver, T8.DRV, cause general
	protection (GP) faults in Windows Resource Kit (WRK) for Windows 3.1
	applications such as SMARTDrive Monitor (SMARTMON.EXE).
	
	Version Information
	-------------------
	
	MicroField has released five major versions of its display driver:
	
	  Version  Date
	  -------  ----
	  3.14     10/13/90
	  3.21     03/04/91
	  3.26     12/26/92
	  3.30     02-24-92
	  3.32     05-07-92
	
	Other minor releases were made between these major releases.
	
	The MicroField installation program installs CHKVER.EXE in the Windows directory.
	This program reports the version of the MicroField Graphics display driver that
	is currently running.
	
	MicroField Graphics recommends that all users upgrade to version 3.32 of its
	driver. A minimum of version 3.30 is required for Windows 3.1, but version 3.30
	has problems with TrueType and PowerPoint.
	
	Display Driver Installation
	---------------------------
	
	The MicroField Graphics documentation instructs you to install a VGA or EGA
	display driver when installing Windows. After you have a functioning
	installation of Windows, you can use the MicroField Graphics installation
	program to install its drivers. The MicroField Graphics installation program
	does not use the Windows Setup program, so if you are having installation
	problems, you should contact MicroField Graphics for assistance.
	
	Obtaining Updated Display Drivers
	---------------------------------
	
	MicroField Graphics customers can obtain the current drivers from MicroField
	Graphics Sales.
	
	For additional information, please contact MicroField.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: gpf 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
