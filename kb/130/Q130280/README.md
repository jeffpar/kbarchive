---
layout: page
title: "Q130280: Changing Domain Password Causes Error 7210"
permalink: kb/130/Q130280/
---

## Q130280: Changing Domain Password Causes Error 7210

	Article: Q130280
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change your Domain password in the Control Panel Network tool, you may
	receive the following error message:
	
	  Network Driver Error 7210
	
	Although you receive no confirmation, your Domain password is changed
	successfully.
	
	CAUSE
	=====
	
	This error can occur if no password list (<username>.PWL) file exists and
	there is not an entry in the [Password Lists] section in the SYSTEM.INI file for
	the user who is logged in. Windows for Workgroups changes the Domain password,
	but generates the error message stated above when it tries to update the .PWL
	file.
	
	RESOLUTION
	==========
	
	To create a .PWL file, quit Windows for Workgroups and then restart it. When you
	are notified that there is no .PWL file, choose Yes to create a new one.
	
	MORE INFORMATION
	================
	
	
	If you do have a .PWL file but it is missing or damaged, you receive the
	following error message:
	
	  The specified file could not be updated
	
	Try increasing the values specified in the FILES= entry in the CONFIG.SYS file
	and then restart your computer. When you log on to Windows for Workgroups, a new
	password list will be created.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
