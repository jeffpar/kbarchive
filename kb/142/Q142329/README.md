---
layout: page
title: "Q142329: Error Message: Error Loading C:&#92;Windows&#92;System&#92;Setup.exe"
permalink: kb/142/Q142329/
---

## Q142329: Error Message: Error Loading C:&#92;Windows&#92;System&#92;Setup.exe

	Article: Q142329
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install or remove Norton Utilities for Windows 95, Norton AntiVirus
	for Windows 95, or Norton Navigator, you may receive the following error message
	when you restart Windows 95:
	
	  Error loading C:\Windows\System\Setup.exe.
	  You must reinstall Windows.
	
	CAUSE
	=====
	
	This error message can occur when Symantec's installation program cannot change
	the Windows 95 shell to Windows Explorer after installing or removing a program.
	Symantec Technical Support has confirmed that this problem occurs when a
	System.in_ file is present in the Windows folder.
	
	
	RESOLUTION
	==========
	
	Follow these steps to set Windows Explorer as the Windows 95 shell:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only.
	
	2. Use any text editor (such as Edit.com) to open the System.ini file in the
	  Windows folder. To use Edit.com, type the following line:
	
	  " edit c:\windows\system.ini " (without the quotation marks)
	
	3. Change the line that reads
	
	  Shell=C:\Windows\System\Setup.exe
	
	  to:
	
	  Shell=Explorer.exe
	
	4. Save the System.ini file and then close the editor.
	
	5. Restart your computer.
	
	To prevent the problem from reoccurring, delete or rename the System.in_ file in
	the Windows folder.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: nu
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
