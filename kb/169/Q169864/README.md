---
layout: page
title: "Q169864: Windows 95 Creates New Temp Folder"
permalink: kb/169/Q169864/
---

## Q169864: Windows 95 Creates New Temp Folder

	Article: Q169864
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 creates a folder called Temp in the Windows folder if one does not
	already exist. If you delete the Temp folder, Windows 95 re-creates the folder
	the next time you start Windows 95.
	
	MORE INFORMATION
	================
	
	If you have a TEMP environment variable set in your Autoexec.bat file, Windows
	95 preserves the setting for MS-DOS-based programs to use. However, Windows 95
	creates and maintains a Temp folder for its own use and the use of Windows-based
	programs.
	
	Additional query words: tmp
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
