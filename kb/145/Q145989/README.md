---
layout: page
title: "Q145989: Windows 95 CD-ROM Contains Two Setup.exe Files"
permalink: /kb/145/Q145989/
---

## Q145989: Windows 95 CD-ROM Contains Two Setup.exe Files

	Article: Q145989
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two Setup.exe files on the Windows 95 CD-ROM. One is located in the
	root folder of the CD-ROM and is 3664 bytes in size, while the other is in the
	Win95 folder and is 5184 bytes in size.
	
	Note that the version of the Setup.exe file in the root folder of the CD-ROM is
	not a beta copy or a damaged version of the Setup.exe file.
	
	MORE INFORMATION
	================
	
	You can use the Setup.exe file located in the root folder of the CD-ROM to start
	Setup without manually changing to the Win95 folder first. This version of
	Setup.exe calls a file in the Win95 folder called Suhelper.bin, which unloads
	the original Setup.exe and then loads the version of Setup.exe in the Win95
	folder. Suhelper.bin also passes any command-line parameters to the version of
	Setup.exe in the Win95 folder. Setup then continues normally.
	
	Suhelper.bin is necessary because there can be only one instance of Setup.exe
	loaded in memory at a time.
	
	
	Additional query words: corrupted
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
