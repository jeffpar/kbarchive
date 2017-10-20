---
layout: page
title: "Q71735: Aldus PageMaker version 4.0 Requires Path Statement"
permalink: /kb/071/Q71735/
---

## Q71735: Aldus PageMaker version 4.0 Requires Path Statement

{% raw %}

	Article: Q71735
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the ALDUS subdirectory does not appear in the path when you install Aldus
	PageMaker version 4.0, PageMaker does not run. If you attempt to run PageMaker
	without the ALDUS subdirectory in the path, the following error messages occur:
	
	- Cannot find file ALDFS.DLL
	
	- Cannot find file ALDVM.DLL
	
	- Cannot find file ALDIM.DLL
	
	- Cannot find file ALDPLS.DLL
	
	MORE INFORMATION
	================
	
	The installation of PageMaker 4.0 creates two subdirectories by default: ALDUS
	and PM4. If the Setup program is not allowed to make changes to the AUTOEXEC.BAT
	file, neither subdirectory appears in the path, causing the error messages. It
	is necessary to allow Setup to make these changes, or to manually add the ALDUS
	directory to the path statement following installation.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3rdparty WIN30 3.00 3.0 3.00a 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
