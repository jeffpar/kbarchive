---
layout: page
title: "Q63219: &quot;386 Display Type Mismatch&quot; Error Starting MS-DOS Apps"
permalink: /kb/063/Q63219/
---

## Q63219: &quot;386 Display Type Mismatch&quot; Error Starting MS-DOS Apps

	Article: Q63219
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may have difficulty running non-Windows-based applications if you install
	Microsoft Windows for a CGA display on a system that has a VGA card. If you are
	running in 386 enhanced mode, you may receive the following error message:
	
	  386 Display Type Mismatch
	
	Non-Windows-based applications run correctly in standard and real modes until you
	switch away from the application and then return to the application.
	
	MORE INFORMATION
	================
	
	If you have an unsupported VGA graphics card and you installed Windows 3.0 or
	3.1 for CGA, the following steps may allow you to run non-Windows-based
	applications in enhanced mode:
	
	1. Install Windows 3.0 or 3.1 for VGA. (This provides the Windows executable
	  files with a VGA virtual device driver. This device driver is internal and
	  cannot be added later). Starting Windows at this point causes it to stop
	  responding (hang).
	
	2. Run Setup from the hard disk, and change the graphics resolution to CGA. Do
	  this by going to the directory where Windows is installed and typing "setup"
	  (without the quotation marks).
	
	3. Start Windows and run SYSEDIT (or another text editor).
	
	4. Open the SYSTEM.INI file for editing.
	
	5. In the [boot] section, change the line
	
	       386grabber=cga.gr3
	
	  to
	
	       386grabber=vga.gr3
	
	6. In the [386Enh] section, change the line
	
	       display=vddcga.386
	
	  to
	
	       display=*vddvga
	
	7. Save the changes to SYSTEM.INI and restart Windows.
	
	This procedure also works for an unsupported EGA video display. Use the same
	steps and substitute EGA wherever it references VGA. The line in the [boot]
	section becomes 386grabber=ega; for Windows 3.0, the setting in the [386Enh]
	section should be:
	
	       display=*vddega
	
	for Windows 3.1, setting should be:
	
	       display=vddega.386
	
	Additional query words: 3.00 3.10 3.00a 3.11 KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
