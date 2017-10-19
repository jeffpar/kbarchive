---
layout: page
title: "Q90212: PROTOCOL.INI File Open Failure with Stacker"
permalink: /kb/090/Q90212/
---

## Q90212: PROTOCOL.INI File Open Failure with Stacker

	Article: Q90212
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Stacker Electronics Stacker version 2.0 after Windows for
	Workgroups or Workgroup Connections, you receive the following error message
	when you restart (reboot) your computer:
	
	  PRO0003E: PROTOCOL.INI file open failure. Unable to open PROTOCOL.INI.
	
	CAUSE
	=====
	
	Stacker correctly copies PROTMAN.DOS, WORKGRP.SYS, and other system files to the
	unstacked drive. The problem occurs because the PROTOCOL.INI file needs to be
	copied to the original directory on the unstacked drive.
	
	WORKAROUND
	==========
	
	You need to manually copy the PROTOCOL.INI file to the original directory. After
	you do this, the PROTOCOL.INI file will be found when the system starts.
	
	Additional query words: 3.10 wfwg wc 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1; :1.0
	
	=============================================================================
	
