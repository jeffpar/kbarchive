---
layout: page
title: "Q129149: Cannot Find SYSTEM.INI After Omar Sharif Bridge Installation"
permalink: /kb/129/Q129149/
---

## Q129149: Cannot Find SYSTEM.INI After Omar Sharif Bridge Installation

	Article: Q129149
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
	
	During the installation of Omar Sharif Bridge, the Setup program restarts your
	computer. When Windows 95 is restarting, it reports the following error:
	
	  Cannot find SYSTEM.INI.
	  You need to run Windows Setup again to install the file.
	  Press any key to continue.
	
	CAUSE
	=====
	
	The Setup program for Omar Sharif Bridge cannot handle a System.ini file that
	contains lines with more than 78 characters properly. The Setup program tries to
	modify the System.ini file after creating a backup file, but fails to create a
	new System.ini file.
	
	RESOLUTION
	==========
	
	You can restore the backup copy of the System.ini file that the Omar Sharif
	Bridge Setup program created. To do so, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key.
	
	2. Choose Safe Mode Command Prompt Only, and then press ENTER.
	
	3. Type the following command
	
	  " copy <drive>:\<windows>\system.old
	  <drive>:\<windows>\system.ini " (without the quotation marks)
	
	  where <drive> is the drive containing Windows 95 and <windows> is
	  the Windows 95 folder. For example, if Windows 95 is installed in the Windows
	  folder on drive C, type the following line:
	
	  " copy c:\windows\system.old c:\windows\system.ini " (without the quotation
	  marks)
	
	4. Use any text editor (such as Edit.com) to add the following line to the
	  [386Enh] section of the System.ini file if it does not already exist:
	
	  " device=c:\omar_win\vrsd.386 " (without the quotation marks)
	
	5. Save the System.ini file and then exit the text editor.
	
	6. Restart your computer.
	
	MORE INFORMATION
	================
	
	The error message stated above occurs if both the System.ini and the System.cb
	files are missing from the Windows folder.
	
	Omar Sharif Bridge is manufactured by Interplay Productions, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
