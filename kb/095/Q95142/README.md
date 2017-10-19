---
layout: page
title: "Q95142: Setting System Attribute on SYSTEM.INI Causes GP Fault"
permalink: /kb/095/Q95142/
---

## Q95142: Setting System Attribute on SYSTEM.INI Causes GP Fault

	Article: Q95142
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the SYSTEM.INI file is assigned the System attribute, you receive the
	following error message:
	
	  Application Error
	  WINFILE Caused a General Protection Fault
	  in module WINFILE.EXE at XXXX:XXXX
	
	RESOLUTION
	==========
	
	To correct this error, remove the system attribute from the SYSTEM.INI file by
	typing the following command at an MS-DOS prompt in the WINDOWS directory:
	
	  ATTRIB -S SYSTEM.INI
	
	MORE INFORMATION
	================
	
	When the SYSTEM.INI file has been altered in the above manner, the File Manager
	may work intermittently. At times, the directory tree displays just the root
	directory with no subdirectories. At other times, no file names will appear or
	file details will appear, preceded by the system/hidden file icon (a red
	exclamation point on the file icon).
	
	To display the current attributes of the SYSTEM.INI file:
	
	1. Switch to the WINDOWS directory.
	
	2. Type the following command at the MS-DOS prompt:
	
	  ATTRIB <SPACE> SYSTEM.INI
	
	  press ENTER
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows and Windows
	for Workgroups. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: gpf 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
