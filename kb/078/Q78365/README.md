---
layout: page
title: "Q78365: Blank Screen Appears Without Error Message in Program Manager"
permalink: kb/078/Q78365/
---

## Q78365: Blank Screen Appears Without Error Message in Program Manager

	Article: Q78365
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Microsoft Windows starts without any error messages and the screen is blank
	(without Program Manager full screen or as an icon), you may have an invalid
	entry in the [Settings] section of the PROGMAN.INI file.
	
	MORE INFORMATION
	================
	
	The [Settings] section of the PROGMAN.INI file has a "Window=" line with five
	sets of numbers. These numbers control the Program Manager's size when Windows
	starts. The following is an example of this line:
	
	  Window=3 3 800 540 1
	
	NOTE: If the fifth number has two digits, or is 0, the screen will be blank when
	you start Windows.
	
	The fifth number controls the Program Managers screen as follows:
	
	  1= Program Manager is regular size
	  2= Program Manager is minimized
	  3= Program Manager is maximized
	
	  4 through 9 have the same effect as 1
	
	Any two-digit number results in no Program Manager. Only those items on the
	"Load=" line of the WIN.INI file will be present as icons on the bottom of the
	screen.
	
	Workaround 1
	------------
	
	Use a backup copy of the PROGMAN.INI file if one is available, or use a text
	editor to change the fifth number, then restart Windows.
	
	Workaround 2
	------------
	
	1. Rename the PROGMAN.INI file.
	
	2. Start Windows. Program Manager will load without groups.
	
	3. From the File menu, choose Run and type the following in the Command Line
	  text box:
	
	  notepad.exe
	
	4. From the File menu, choose Open and type the new filename of the PROGMAN.INI
	  file.
	
	5. Edit the file as necessary, as listed above.
	
	6. From the File menu, choose Save As and enter:
	
	  progman.ini
	
	7. Exit Windows and do NOT save changes. Windows will overwrite PROGMAN.INI.
	
	8. Restart Windows.
	
	Additional query words: 3.0 3.0a win30 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
