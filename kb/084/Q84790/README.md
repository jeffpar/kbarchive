---
layout: page
title: "Q84790: Terminal's Kermit Does Not Support 7,n,1 Communication Setting"
permalink: /kb/084/Q84790/
---

## Q84790: Terminal's Kermit Does Not Support 7,n,1 Communication Setting

	Article: Q84790
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows version 3.1's Terminal does not support sending binary files with the
	Kermit protocol at the following communications settings:
	
	- 7 data bits
	
	- no parity (none)
	
	- 1 stop bit
	
	NOTE: Problems have also been reported with the following Kermit settings:
	7,E,1.
	
	This problem did not exist with Windows 3.0's Terminal.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Use Windows 3.0's Terminal so that Kermit can be used at the above settings.
	
	- Change your communications settings or download protocol if the computer you
	  are connecting to can support the new settings. Some computer systems may not
	  accept the new settings.
	
	Additional query words: 3.10 3.11 terminal.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
