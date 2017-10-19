---
layout: page
title: "Q82740: Using Word for MS-DOS Under Windows 3.1"
permalink: /kb/082/Q82740/
---

## Q82740: Using Word for MS-DOS Under Windows 3.1

	Article: Q82740
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses some problems that may occur when running Microsoft Word
	for MS-DOS under Microsoft Windows version 3.1.
	
	MORE INFORMATION
	================
	
	When running Word for MS-DOS in graphics mode under Windows 3.1, the Word screen
	can't be captured to the Clipboard by pressing PRINT SCREEN. To capture the
	screen, Word must be running in text mode. This is a limitation of Windows 3.1,
	not a problem with Word for MS-DOS.
	
	The mouse pointer and cursor will be incorrectly drawn after switching from full
	screen to windowed mode. To correct this, use the /Y parameter when loading the
	MS-DOS level mouse driver.
	
	On some machines, if you run Word for MS-DOS version 4.0 under Windows 3.1 in
	standard mode, a key stroke may repeat infinitely after task switching. This
	affects a limited number of machines, and can be fixed by upgrading to the
	current version of Word.
	
	After switching, Windows 3.1 loses track of the EGA line mode in applications
	like Word for MS-DOS and Works for MS-DOS if they are run in other then 43 line
	mode. To solve this problem, load the MS-DOS level EGA driver (EGA.SYS) supplied
	with Windows 3.1.
	
	When Word for MS-DOS version 4.0 is run in text mode and is windowed, the old
	mouse (MS-DOS level) cursor will remain as a blot on the screen. This is only a
	cosmetic problem, and will not affect performance. Currently there is no
	workaround to this problem.
	
	Additional query words: 3.10 4.00 5.00 5.0 5.50 5.5
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
