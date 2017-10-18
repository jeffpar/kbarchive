---
layout: page
title: "Q89355: Add/Remove Components Does Not Delete .INI Files"
permalink: kb/089/Q89355/
---

## Q89355: Add/Remove Components Does Not Delete .INI Files

	Article: Q89355
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Windows version 3.1 Setup program to add or remove selected
	Windows components that are being run within Windows. However, if you remove
	components that created .INI files (such as Mail version 3.0 and Schedule+
	version 1.0), the associated .INI files are not deleted.
	
	MORE INFORMATION
	================
	
	After you remove a Windows component, you should back up, then delete the
	associated .INI file. This ensures that when the component is added back into
	Windows, it installs with defaults.
	
	You do not need to delete the .INI file when you replace corrupt .EXE or .HLP
	files for a component.
	
	Additional query words: WFWG MAIL Schedule
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
