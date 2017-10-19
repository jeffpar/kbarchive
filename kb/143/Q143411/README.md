---
layout: page
title: "Q143411: Error Message: Cannot Display the Help Information"
permalink: /kb/143/Q143411/
---

## Q143411: Error Message: Cannot Display the Help Information

	Article: Q143411
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Start button and then click Help, you may receive the
	following error message:
	
	  Cannot display the help information. The file Winhelp.exe may be missing or
	  damaged.
	
	CAUSE
	=====
	
	This error can occur if the Winhlp32.exe file in the Windows folder is missing
	or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Use Windows Explorer or My Computer to rename the Winhlp32.exe file, if it
	  exists, in the Windows folder to Winhlp32.xxx.
	
	2. Extract a new copy of the Winhlp32.exe file from your original Windows 95
	  disks or CD-ROM to the Windows folder. For information about using the
	  Extract tool, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	3. Try to use Help again.
	
	MORE INFORMATION
	================
	
	The Winhelp.exe file referred to in the error message is a 3K file in the
	Windows folder. This file is used for compatibility with 16-bit Windows- based
	programs. The Winhelp.exe file calls the Winhlp32.exe file to handle Help files.
	The Winhelp.exe file is not actually required to run Help files, and it is
	incorrectly referenced by the error message.
	
	Additional query words: corrupt
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
