---
layout: page
title: "Q111467: Error 6101 &amp; 6102: The String Specified by the Workgroup..."
permalink: kb/111/Q111467/
---

## Q111467: Error 6101 &amp; 6102: The String Specified by the Workgroup...

	Article: Q111467
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95kbfaq
	Last Modified: 17-DEC-2000
	
	3.11
	
	WINDOWS
	
	kbnetwork kberrmsg kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start Windows 95 or Windows for Workgroups version 3.11, you receive
	the following error message(s):
	
	Windows 95
	----------
	
	When you start Windows 95, you receive the following error message:
	
	  The following error occurred while loading the device VNETSUP:
	
	  Error 6102: The string specified by the WORKGROUP keyword in the registry is
	  too short.
	
	NOTE: The above error may refer to COMPUTERNAME instead of WORKGROUP.
	
	Windows for Workgroups version 3.11
	-----------------------------------
	
	When you start Microsoft Windows for Workgroups version 3.11, you receive one of
	the following error messages:
	
	  The following error occurred while loading the device VNETSUP:
	
	  Error 6101: The string specified by the WORKGROUP keyword in the [Network]
	  section of the SYSTEM.INI file was not found.
	
	-or-
	
	  The following error occurred while loading the device VNETSUP:
	
	  Error 6102: The string specified by the WORKGROUP keyword in the [Network]
	  section of the SYSTEM.INI file is too short.
	
	CAUSE
	=====
	
	Windows 95
	----------
	
	This error occurs if the workgroup name or computer name is not properly
	specified.
	
	Windows for Workgroups 3.11
	---------------------------
	
	This error occurs if the user name, workgroup name, or computer name specified in
	the [Network] section of the SYSTEM.INI file is missing or invalid.
	
	RESOLUTION
	==========
	
	Windows 95
	----------
	
	To correct this error in Windows 95, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Network icon, then click the Identification tab.
	
	3. Make sure the Computer Name and Workgroup entries are present and valid.
	
	Windows for Workgroups 3.11
	---------------------------
	
	To correct this error in Windows for Workgroups 3.11, make sure that the
	Workgroup=, ComputerName=, and UserName= lines in the [Network] sections of the
	SYSTEM.INI file are present and that the names are valid.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          : win95 kbfaq
	Technology        : kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
