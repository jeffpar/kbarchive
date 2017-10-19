---
layout: page
title: "Q87139: PAGING=OFF May Cause Error: &quot;Insufficient Memory to Run...&quot;"
permalink: /kb/087/Q87139/
---

## Q87139: PAGING=OFF May Cause Error: &quot;Insufficient Memory to Run...&quot;

	Article: Q87139
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following error messages may occur when you select a non-Windows
	application in 386 enhanced mode:
	
	  Insufficient memory to run application. Quit one or more applications, or
	  free up disk space, to increase available memory. Then try again.
	
	  -or-
	
	  Insufficient memory for application's required space. Decrease PIF KB
	  required, or quit one or more applications, or free up disk space, to
	  increase available memory. Then try again.
	
	RESOLUTION
	==========
	
	If PAGING=OFF is in the [386enh] section of the SYSTEM.INI file, removing this
	line may allow non-Windows applications to run without these error messages.
	
	MORE INFORMATION
	================
	
	PAGING=(Boolean) enables (on) or disables (off) demand paging (virtual memory),
	and permanent and temporary swap files. This setting is enabled by default. It
	may be disabled if disk space is needed.
	
	In some instances, PAGING is disabled for troubleshooting the inability to run
	Windows in 386 enhanced mode. If reversing this setting prevents you from
	running in 386 enhanced mode, PAGING must be disabled again.
	
	Windows 3.1
	-----------
	
	In Windows 3.1, this setting can be modified by doing the following:
	
	1. Run Control Panel and choose the 386 Enhanced icon.
	
	2. Choose the Virtual Memory button.
	
	3. Choose the Change button.
	
	4. From the New Setting group box, select None from the Type list box. PAGING
	  will be disabled.
	
	In Windows 3.0, this setting can only be modified by manually adding the line
	PAGING= to the [386enh] section of the SYSTEM.INI file.
	
	Additional query words: 3.00 3.00a 3.10 3.11 PIF err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
