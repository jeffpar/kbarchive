---
layout: page
title: "Q85689: About Program Manager's Kilobyte Reading Is Wrong"
permalink: kb/085/Q85689/
---

## Q85689: About Program Manager's Kilobyte Reading Is Wrong

	Article: Q85689
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the 1000 separator under Control Panel's International option is disabled,
	then the Memory/KB Free reading under Help's About Program Manager will truncate
	the last three digits. File sizes on the status bar of the File Manager will
	also be truncated at the left-most comma.
	
	For example, if the separator is enabled, then the About Program Manager memory
	reading is 12,567K free. With the separator disabled, About Program Manager
	reports 12K free. In the File Manager, a swapfile of 20,480,000 bytes would be
	reported as 20 bytes on the status bar only. File sizes in the directory windows
	are displayed correctly.
	
	This problem can also be seen in File Manager, Write, Notepad, and any other
	Windows-based application using Windows 3.1's common help box.
	
	Additional query words: 3.1 3.10 3 kb kilobyte kilobite byte
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
