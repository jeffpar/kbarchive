---
layout: page
title: "Q83419: Windows Err Msg: Setup Did Not Add the Windows Directory..."
permalink: kb/083/Q83419/
---

## Q83419: Windows Err Msg: Setup Did Not Add the Windows Directory...

	Article: Q83419
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the PATH statement in the AUTOEXEC.BAT file is longer than 127 characters,
	the Windows 3.1 Custom setup will report the following message:
	
	  Setup did not add the Windows directory to the PATH line in your AUTOEXEC.BAT
	  file because the PATH line would be longer than 127 characters.
	
	  After setup, please delete unnecessary PATH information and then add the
	  Windows directory
	
	When OK is chosen, Setup displays a dialog box notifying you that your
	AUTOEXEC.BAT and CONFIG.SYS files need to be modified.
	
	MORE INFORMATION
	================
	
	This occurs because Setup checks the AUTOEXEC.BAT and CONFIG.SYS files before
	they are displayed, along with the proposed changes. If Setup cannot modify the
	PATH because it is too long, the preceding error is returned. This allows for
	modification of the PATH statement so the windows drivers can be loaded.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
