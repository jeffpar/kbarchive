---
layout: page
title: "Q139167: System Agent Icon Does Not Appear on Taskbar"
permalink: /kb/139/Q139167/
---

## Q139167: System Agent Icon Does Not Appear on Taskbar

{% raw %}

	Article: Q139167
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the System Agent component of Microsoft Plus! for Windows 95,
	the System Agent icon may not appear on the taskbar when you restart your
	computer. When this occurs, you cannot start System Agent from the Start menu.
	
	CAUSE
	=====
	
	This problem can occur if the Sage.dll file is missing or damaged. The Sage.dll
	file should be located in the Windows\System folder, with a size of 71,680
	bytes. If you are using Windows 95 Service Pack 1, the Sage.dll file has a size
	of 69,120 bytes.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Remove or rename the Sage.dll file in the Windows\System folder.
	
	2. Extract a new copy of the Sage.dll file from the original Microsoft Plus!
	  disks or CD-ROM. To do so, insert disk 2 or the CD-ROM in the appropriate
	  drive, and then type the following line at an MS-DOS command prompt
	
	  " extract /l <hdisk>:\windows\system <fdisk>:\sage.dll " (without
	  the quotation marks)
	
	  where <hdisk> is the drive letter of the hard disk containing the
	  Windows folder, and <fdisk> is the drive containing either disk 2 or
	  the CD-ROM.
	
	3. Shut down and then restart your computer.
	
	MORE INFORMATION
	================
	
	For additional information about using the EXTRACT command, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
