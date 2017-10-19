---
layout: page
title: "Q110923: Specifying Command-Line Parameters for NDIS 2 Drivers"
permalink: /kb/110/Q110923/
---

## Q110923: Specifying Command-Line Parameters for NDIS 2 Drivers

	Article: Q110923
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Windows for Workgroups 3.11 with certain NDIS 2 network adapter
	drivers, you must specify command-line parameters to make these drivers load
	correctly. These parameters can be added by editing the SYSTEM.INI file with a
	text editor such as Microsoft Windows Notepad.
	
	Below is an example in which the real-mode drivers for a Xircom credit card
	adapter are loaded in the AUTOEXEC.BAT file:
	
	     CECFG DRIVER=NDIS
	     CENDIS
	
	When these NDIS 2 drivers are loaded with Windows for Workgroups 3.11, they are
	loaded on the transport= line of the SYSTEM.INI file. To pass the DRIVER=NDIS
	parameter to CECFG.EXE, add the following line to the [network drivers] section
	of the SYSTEM.INI file:
	
	     [network drivers]
	     CECFG.EXE="Driver=NDIS"
	
	Additional query words: 3.11 ndis2 cmd line
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
