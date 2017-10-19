---
layout: page
title: "Q137824: &quot;Invalid Vxd&quot; Error Message Starting Windows 95"
permalink: /kb/137/Q137824/
---

## Q137824: &quot;Invalid Vxd&quot; Error Message Starting Windows 95

	Article: Q137824
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95, you may receive the following error message:
	
	  Error: Invalid VxD
	
	Your computer may then stop responding (hang) with a cursor in the upper left
	corner of a black screen.
	
	When this occurs, you can start Windows 95 in Safe mode, but there is no mouse
	support.
	
	CAUSE
	=====
	
	This problem can occur if you are using an Acecad Mouse Pad tablet. When you
	install the Acecad Mouse Pad tablet, the installation program makes a change to
	the System.ini file that is not compatible with Windows 95.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Restart your computer in Safe mode. To do so, restart your computer, press
	  the F8 key when you see the "Starting Windows 95" message, and then choose
	  Safe Mode Command Prompt Only from the Startup menu.
	
	2. Type the following line to change to the Windows folder, and then press
	  ENTER
	
	  " cd <windows> " (without the quotation marks)
	
	  where <windows> is the path to the Windows folder.
	
	3. Type the following line and then press ENTER:
	
	  " edit system.ini " (without the quotation marks)
	
	4. Disable the following line in the [386Enh] section of the file by placing a
	  semicolon (;) at the beginning of the line:
	
	  " mouse=vsermd.386 " (without the quotation marks)
	
	5. Save and then close the System.ini file.
	
	6. Restart your computer. Windows 95 will start normally without a mouse.
	
	To resolve this problem, contact Acecad to inquire about obtaining updated
	drivers for Windows 95.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
