---
layout: page
title: "Q159841: Computer May Hang When PC Tools Pro 9.0 Is Used with FAT32"
permalink: kb/159/Q159841/
---

## Q159841: Computer May Hang When PC Tools Pro 9.0 Is Used with FAT32

	Article: Q159841
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kb3rdparty osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install PC Tools Pro 9.0 with the Desktop Utility option, the computer
	may stop responding (hang) after you see the following message when you start
	the computer:
	
	  Analyzing drive C:
	  Reading system areas
	
	CAUSE
	=====
	
	PC Tools Pro 9.0 is not compatible with the FAT32 file system in Windows 95 OEM
	Service Release 2 (OSR2).
	
	RESOLUTION
	==========
	
	To resolve this problem, use either of the following methods:
	
	- Use a text editor (such as Notepad) to edit the Autoexec.bat file and disable
	  the "Call PCTOOLS.BAT" line. To disable the line, type "rem" (without the
	  quotation marks) at the beginning of the line.
	
	- Contact the program's manufacturer for an updated version.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kb3rdparty osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
