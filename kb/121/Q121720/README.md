---
layout: page
title: "Q121720: Error 6103: The String Specified by the COMPUTERNAME..."
permalink: /kb/121/Q121720/
---

## Q121720: Error 6103: The String Specified by the COMPUTERNAME...

	Article: Q121720
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows for Workgroups 3.11, the following error message is
	displayed:
	
	  The following error occurred while loading the device VNETSUP:
	
	  Error 6103: The string specified by the COMPUTERNAME keyword in the network
	  section in the SYSTEM.INI file is too long.
	
	CAUSE
	=====
	
	This error occurs when the ComputerName= entry specified in the [Network]
	section of the SYSTEM.INI file contains more than 15 characters.
	
	RESOLUTION
	==========
	
	To correct this problem, change the ComputerName= entry to contain 15 or fewer
	characters in the [Network] section of the SYSTEM.INI file or in the Networks
	area of Control Panel.
	
	NOTE: The above error occurs if you manually editing the SYSTEM.INI file and
	include a ComputerName= entry longer than 15 characters. It is not possible to
	include a ComputerName= entry longer than 15 characters in the Networks area of
	Control Panel.
	
	Additional query words: 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
