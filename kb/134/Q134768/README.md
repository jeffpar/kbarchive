---
layout: page
title: "Q134768: Problems Using the XCOPY Command and Long Filenames"
permalink: /kb/134/Q134768/
---

## Q134768: Problems Using the XCOPY Command and Long Filenames

	Article: Q134768
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the XCOPY command, files with long filenames may not be copied.
	
	CAUSE
	=====
	
	If the "Prevent MS-DOS-based programs from detecting Windows" option is enabled
	for the MS-DOS prompt, the XCOPY command does not copy files with long
	filenames.
	
	Also, long filename support is not enabled in MS-DOS mode, Safe mode, or Command
	Prompt Only mode. Note that no MS-DOS command will move a file with a long
	filename in MS-DOS mode.
	
	RESOLUTION
	==========
	
	If the "Prevent MS-DOS-based programs from detecting Windows" option is enabled
	for the MS-DOS prompt, follow these steps to disable it:
	
	1. Use the right mouse button to click the MS-DOS Prompt icon, and then click
	  Properties on the menu that appears.
	
	2. On the Program tab, click the Advanced button.
	
	3. Click the "Prevent MS-DOS-based programs from detecting Windows" check box to
	  clear it.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	Do not manipulate long filenames outside of Windows 95. When you boot to a
	command prompt, support for long filenames is not enabled.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
