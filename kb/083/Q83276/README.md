---
layout: page
title: "Q83276: &quot;Insufficient Conventional Memory&quot; when Starting Windows"
permalink: /kb/083/Q83276/
---

## Q83276: &quot;Insufficient Conventional Memory&quot; when Starting Windows

	Article: Q83276
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may receive the following error message when starting Windows:
	
	  Insufficient conventional memory to run Windows; reconfigure your system to
	  increase available memory and try again.
	
	This error message may be caused by attempting to load Windows into the Upper
	Memory Area (UMA) by typing one of the following commands
	
	  loadhigh win
	
	-or-
	
	  lh win
	
	at the MS-DOS command prompt or in the AUTOEXEC.BAT file. To prevent this error
	message, leave off the LOADHIGH command and load Windows into conventional
	memory by typing the following command:
	
	  win
	
	Additional query words: 3.00 3.0 3.0a 3.00a execution
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
