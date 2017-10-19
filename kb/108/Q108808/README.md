---
layout: page
title: "Q108808: Remote Access Service - Error 714: Configuration Error"
permalink: /kb/108/Q108808/
---

## Q108808: Remote Access Service - Error 714: Configuration Error

	Article: Q108808
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start the Remote Access Services (RAS) client program for Windows for
	Workgroups version 3.11, the following error message is displayed:
	
	  Error 714: Configuration error.
	  Make sure you logged on from Windows and not from MS-DOS.
	
	  -or-
	
	  RAS.EXE caused a General Protection Fault in module RASFILE.DLL at 0001:XXXX.
	
	If you try to start RAS a second time after you receive the general protection
	(GP) fault, the following error message is displayed:
	
	  Cannot start RASPHONE. Make sure the RASPHONE.EXE file is in the \WINDOWS
	  directory, and restart Remote Access.
	
	NOTE: This error can also occur when "net start" is not in the AUTOEXEC.BAT file
	or NET.EXE is corrupted. You can also receive this error message if IFSHLP.SYS
	is not loaded or you start Windows for Workgroups 3.11 with the /N switch.
	
	CAUSE
	=====
	
	These errors are caused either by a missing or corrupted SERIAL.INI file, or by
	blank lines at the beginning of the SERIAL.INI file. This file is in the Windows
	directory. Error 714 generally occurs when the SERIAL.INI file is missing; the
	GP fault occurs if the SERIAL.INI file is corrupted.
	
	The SERIAL.INI file is used to store the configuration information for the RAS
	client program.
	
	RESOLUTION
	==========
	
	To correct this problem, re-create the SERIAL.INI file as follows:
	
	1. In the Network group, start Network Setup.
	
	2. Choose the Drivers button.
	
	3. Select Remote Access Service [NDIS3] and then choose the Setup button.
	
	4. Select the appropriate device for the COM port you will be using.
	
	5. Choose the OK button, then exit Network Setup.
	
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
