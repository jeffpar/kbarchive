---
layout: page
title: "Q85888: How to Display Your Personal Calendar at Windows Startup"
permalink: kb/085/Q85888/
---

## Q85888: How to Display Your Personal Calendar at Windows Startup

	Article: Q85888
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To display a customized Windows Calendar file when you start Windows, you can
	add the Calendar file as an icon in the Windows Startup group. However, you
	cannot set the location or size of the calendar window as it first appears on
	the screen.
	
	MORE INFORMATION
	================
	
	To display your daily Calendar file at Windows startup, do the following:
	
	1. Run Calendar from the Accessories group.
	
	2. Add any information you want to your daily calendar, and choose the desired
	  Calendar settings.
	
	3. From the File menu, choose Save As. In the File Name box, enter a new name
	  for the file (for example, MY.CAL).
	
	4. Open the Startup group.
	
	5. From the Program Manager File menu, choose New. Select the New Program Item
	  button and choose OK.
	
	6. In the Program Item Properties dialog box, choose Browse.
	
	7. Enter *.CAL in the File Name box.
	
	8. Select MY.CAL from the appropriate subdirectory and choose OK. The correct
	  path and filename will appear in the Command Line box.
	
	The next time you start Windows, your Calendar file will appear as the first open
	window on the screen. If there is more than one icon in the Startup group, they
	are opened in order starting from the upper left corner, and going from left to
	right in the Startup group window.
	
	If you decide you want your calendar to open as an icon rather than an open
	window, select the Run Minimized option before saving the Program Item
	Properties settings.
	
	Additional query words: 3.1 3.11 start-up CALENDAR.EXE initialization opening 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
