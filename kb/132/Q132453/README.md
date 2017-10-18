---
layout: page
title: "Q132453: SET Statements in Dosstart.bat File Ignored"
permalink: kb/132/Q132453/
---

## Q132453: SET Statements in Dosstart.bat File Ignored

	Article: Q132453
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you restart Windows 95 in MS-DOS mode, or when MS-DOS mode is set to use
	the Use Current Configuration option, SET statements in the Dosstart.bat file
	are ignored.
	
	MORE INFORMATION
	================
	
	When MS-DOS mode is set to use the Use Current Configuration option, Windows 95
	uses a file called Dosstart.bat to load real-mode device drivers. This file is
	also used when you restart Windows 95 in MS-DOS mode.
	
	You can edit the Dosstart.bat file to add device drivers or programs. However,
	you cannot run SET statements in the Dosstart.bat file because of the way in
	which the Command.com file is run.
	
	You can run SET statements in the Autoexec.bat file. These SET statements apply
	in all MS-DOS mode sessions that use the Use Current Configuration option, or if
	you restart Windows 95 in MS-DOS mode.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
