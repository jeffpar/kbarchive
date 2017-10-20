---
layout: page
title: "Q103749: WFWG File Manager GP Faults When You Use a Multi-Config Menu"
permalink: /kb/103/Q103749/
---

## Q103749: WFWG File Manager GP Faults When You Use a Multi-Config Menu

{% raw %}

	Article: Q103749
	Product(s): Microsoft Disk Operating System
	Version(s): 3.11,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups version 3.11 File Manager may cause a general protection
	(GP) fault in KRNL386.EXE when you start your system with an MS-DOS
	multiple-configuration (multi-config) menu.
	
	CAUSE
	=====
	
	This problem occurs when you start your system with a multi-config menu without
	loading IFSHLP.SYS.
	
	RESOLUTION
	==========
	
	Ensure the configuration menu for Windows for Workgroups loads IFSHLP.SYS from
	the CONFIG.SYS file.
	
	CUSTOM INSTALL:
	
	To add or remove programs from the Works Suite follow these steps:
	
	1. Insert disk one of the Works Suite 2001 disks.
	
	2. Click Start, click Run and then type "CD-Drive:\setup.exe" (for example,
	  D:\setup).
	
	3. Click Custom.
	
	4. Click the button corresponding to the program that you want to install.
	
	Additional query words: 6.22 6.20 multiple configuration menu
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : :3.11,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
