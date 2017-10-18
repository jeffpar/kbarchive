---
layout: page
title: "Q85643: Windows Msg: Your Pop-Up Program Is Ready to Run"
permalink: kb/085/Q85643/
---

## Q85643: Windows Msg: Your Pop-Up Program Is Ready to Run

	Article: Q85643
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an MS-DOS terminate-and-stay-resident (TSR) program from Windows,
	you receive the following message:
	
	  MICROSOFT WINDOWS POP-UP PROGRAM SUPPORT
	
	  Your pop-up program is ready to run. When you have finished using it, press
	  CTRL+C to close this window and return to Windows.
	
	CAUSE
	=====
	
	This message indicates that the program you are currently running is behaving as
	a TSR program (for example, bypassing Windows and attempting to make direct
	system-level calls).
	
	NOTE: This information also applies to the MS-DOS 5.0 Shell Task Switcher.
	
	
	MORE INFORMATION
	================
	
	If you run an MS-DOS TSR program in a window in 386 enhanced mode and then
	unload the TSR and exit the virtual machine, you may continue to receive the
	"Windows TSR Support" message even though the TSR has been unloaded.
	
	No mechanism exists to inform Windows whether a TSR has been loaded or unloaded.
	Once a TSR is loaded, a flag is set to indicate a TSR is present; therefore, you
	receive the message even if you have unloaded the TSR manually.
	
	Windows 95
	----------
	
	To work around this behavior in Windows 95, follow these steps:
	
	1. Create a one-line batch file that reads:
	
	  command.com /c
	
	2. Save the batch file with any name (such as Close.bat). Save the file in the
	  Windows folder.
	
	3. Use the right mouse button to click the shortcut that calls the batch file or
	  PIF that calls the TSR, and then click Properties on the menu that appears.
	
	4. Click the Program tab.
	
	5. On the Batch File line, enter the name of the batch file you created in step
	  2 (such as Close.bat).
	
	6. Click OK.
	
	Additional query words: 3.00 3.00a 3.10 3.11 popup program support win98 tsr
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:95
	
	=============================================================================
	
