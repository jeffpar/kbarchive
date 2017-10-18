---
layout: page
title: "Q142183: Setup Err Msg: Windows 95 Has Disabled Direct Disk Access..."
permalink: kb/142/Q142183/
---

## Q142183: Setup Err Msg: Windows 95 Has Disabled Direct Disk Access...

	Article: Q142183
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
	
	When you install Windows 95 on a computer that has Never Ending Drive installed,
	you receive the following error message the first time Setup restarts the
	computer:
	
	  Windows has disabled direct disk access to protect your long file- names. To
	  override this protection, see the LOCK /? command for more information.
	
	  The system has been halted. Press CTRL+ALT+DELETE to restart your computer.
	
	CAUSE
	=====
	
	Never Ending Drive monitors disk activity and file access, directly accessing
	the hard disk to perform its functions. Direct disk access is not compatible
	with long file names and is not supported in Windows 95.
	
	RESOLUTION
	==========
	
	To disable Never Ending Drive and finish the Windows 95 installation, follow
	these steps:
	
	1. Restart your computer. When the "Starting Windows 95" message appears, press
	  the F8 key, and then choose Command Prompt Only.
	
	2. Type the following line, and then press ENTER:
	
	  " edit autoexec.bat " (without the quotation marks)
	
	3. Type "REM" (without the quotation marks) at the beginning of the line
	  containing the Never Ending Drive program file (Nedprotect.exe).
	
	4. Press ALT+F to open the File menu, and then press S to save the Autoexec.bat
	  file.
	
	5. Press ALT+F to open the File menu, and then press X to close the text editor.
	
	6. Restart the computer. Never Ending Drive should be disabled and Windows 95
	  Setup should continue.
	
	MORE INFORMATION
	================
	
	Never Ending Drive is a tool that monitors file usage and archives files that
	have not been used or accessed for a specified period of time.
	
	For additional information about issues that can cause the error message stated
	above, please see the following articles in the Microsoft Knowledge Base:
	
	  Q136061 Err Msg: Windows Has Disabled Direct Disk Access to Protect...
	
	  Q143281 Built-In Anti-Virus Support in Windows 95
	
	  Q160048 Cannot Start Computer After Running DriveSpace on IBM Aptiva
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
