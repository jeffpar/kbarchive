---
layout: page
title: "Q84856: Write Err Msg: GP Fault in Module KRNL386.EXE at 0001:4629"
permalink: /kb/084/Q84856/
---

## Q84856: Write Err Msg: GP Fault in Module KRNL386.EXE at 0001:4629

	Article: Q84856
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbtool kberrmsg kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Running the Write accessory application (WRITE.EXE) in Windows version 3.1 after
	the printer-description string has been changed in the WIN.INI file will result
	in the following message:
	
	  Application Error
	
	  WRITE caused a General Protection Fault in module KRNL386.EXE at 0001:4629
	
	To correct this problem, change the printer-description string back to the
	original description.
	
	This message may also occur if you are running an older version of MoreFonts.
	Setting a different printer as the default printer (NOT a MoreFontsDriver) is a
	temporary workaround; however, fonts from MoreFonts will not be accessible.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: gpf 3.10 3.11 3rdparty more fonts
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
