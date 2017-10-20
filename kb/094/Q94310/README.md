---
layout: page
title: "Q94310: WFWG File Manager Shows Multiple WIN.INI Files"
permalink: /kb/094/Q94310/
---

## Q94310: WFWG File Manager Shows Multiple WIN.INI Files

{% raw %}

	Article: Q94310
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows for Workgroups File Manager may show multiple WIN.INI files if the
	WIN.INI file is renamed, moved, or deleted with File Manager. All the files and
	directories previously listed correctly will be listed as WIN.INI even if the
	screen is refreshed.
	
	NOTE: This situation occurs only when the network drivers are loaded in memory.
	If the network drivers are not loaded you can successfully rename your WIN.INI
	file. However, if you rename it back to WIN.INI you receive a general protection
	(GP) fault in WINFILE.EXE.
	
	WARNING: Microsoft does not recommend or support modifying the WIN.INI file in
	the above manner from any version of Windows File Manager.
	
	Quit Windows completely before renaming, moving, or deleting the WIN.INI file.
	
	WORKAROUND
	==========
	
	To restore the listings, exit and restart File Manager.
	
	STATUS
	======
	
	Microsoft does not recommend renaming, moving, or deleting core Windows files
	(including WIN.INI and SYSTEM.INI) while Windows is running.
	
	
	MORE INFORMATION
	================
	
	The only file that causes this behavior is the WIN.INI file. Renaming, moving,
	or deleting other files does not affect File Manager's listing of files and
	directories.
	
	Steps To Reproduce Behavior
	---------------------------
	
	1. Load File Manager.
	
	2. Open the Windows directory and select the WIN.INI file.
	
	3. From the File menu, choose Rename.
	
	4. Enter a different name for WIN.INI, such as WIN.BAK.
	
	5. Choose the OK button.
	
	All files and directories are now listed as WIN.INI.
	
	Additional query words: 3.10 duplicate wow winfile gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
