---
layout: page
title: "Q136061: Err Msg: Windows Has Disabled Direct Disk Access to Protect"
permalink: kb/136/Q136061/
---

## Q136061: Err Msg: Windows Has Disabled Direct Disk Access to Protect

	Article: Q136061
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Windows 95, you may receive the following error
	message when you start your computer:
	
	  Windows has disabled direct disk access to protect your long file-names. To
	  override this protection, see the LOCK /? command for more information.
	
	  The system has been halted. Press CTRL+ALT+DELETE to restart your computer.
	
	Windows 95 stops loading after you receive this error message. However, you can
	start Windows 95 in Safe mode.
	
	CAUSE
	=====
	
	This problem can occur for any of the following reasons:
	
	- Your computer has too many temporary (.tmp) files.
	
	- You are running the shareware program Winload.exe. This program is not
	  compatible with Windows 95.
	
	- Pointer.exe is being loaded in the Win.ini file.
	
	- You are running the Df.exe program from Norton Utilities 7.0.
	
	- You are loading older MS-DOS or PC-DOS drivers in the Config.sys file.
	
	- You are running Norton Disk Doctor (NDD) or Norton Image from Norton
	  Utilities 8.0.
	
	- There is not enough disk space on the hard disk drive, as files in the
	  Recycle Bin have never been emptied.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, use the appropriate method:
	
	Your Computer Has too many Temporary Files
	------------------------------------------
	
	Start your computer to a command prompt, and delete any files with a .tmp
	extension from all folders on your hard disk.
	
	You Are Running Winload.exe
	---------------------------
	
	Remove Winload.exe from the Autoexec.bat file:
	
	1. Restart your computer. When you see the Starting Windows 95 message, press
	  F8, and then click Safe Mode Command Prompt Only from the Startup menu.
	
	2. At the MS-DOS prompt, use any text editor (such as Edit.com) to edit the
	  Autoexec.bat file.
	
	3. Remove the line containing Winload.exe from the file.
	
	4. Save and then close the file.
	
	5. Restart Windows 95 normally.
	
	Pointer.exe Is Being Loaded in the Win.ini File
	-----------------------------------------------
	
	Remove Pointer.exe from the "load=" line in the Win.ini file:
	
	1. Restart your computer. When you see the Starting Windows 95 message, press
	  F8, and then click Safe Mode Command Prompt Only from the Startup menu.
	
	2. At the MS-DOS prompt, use any text editor (such as Edit.com) to edit the
	  Win.ini file in the Windows folder.
	
	3. Remove the following entry from the load= line:
	
	  c:\mouse\pointer.exe
	
	  or
	
	  c:\msinput\pointer.exe
	
	  NOTE
	   - Do not remove any other entry from the load= line.
	
	4. Save the Ps1pfile.exe or Ps1tools.exe file and close the editor.
	
	5. Restart Windows 95 normally.
	
	You Are Running Df.exe
	----------------------
	
	Remove Df.exe from the Autoexec.bat file:
	
	1. Restart your computer. When you see the Starting Windows 95 message, press
	  F8, and then click Safe Mode Command Prompt Only from the Startup menu.
	
	2. At the MS-DOS prompt, use any text editor (such as Edit.com) to edit the
	  Autoexec.bat file.
	
	3. Remove the line containing Df.exe from the file.
	
	4. Save and then close the file.
	
	5. Restart Windows 95 normally.
	
	You Are Loading Older MS-DOS or PC-DOS Drivers in the Config.sys File
	---------------------------------------------------------------------
	
	Check the Config.sys file for lines loading device drivers (such as Himem.sys and
	Emm386.exe) from the DOS folder. If you find such a line, change it to load the
	Windows 95 version of the driver, and then restart your computer. For example,
	you would change a line that reads:
	
	c:\dos\himem.sys
	
	to read
	
	c:\<windows>\himem.sys
	
	where <windows> is the Windows 95 folder.
	
	You Are Running Norton Disk Doctor (NDD) or Norton Image
	--------------------------------------------------------
	
	If you are running Norton Disk Doctor or Norton Image from Norton Utilities
	version 8.0, remove NDD or Image from the Autoexec.bat file:
	
	1. Restart your computer. When you see the Starting Windows 95 message, press
	  F8, and then click Safe Mode Command Prompt Only from the Startup menu.
	
	2. Use any text editor (such as Edit.com) to open the Autoexec.bat file.
	
	3. Remove the line containing Ndd.exe or Image.exe.
	
	4. Save and then close the Autoexec.bat file.
	
	5. Restart Windows 95 normally.
	
	There Is Not Enough Disk Space on the Hard Disk Drive
	-----------------------------------------------------
	
	1. Start the computer in Safe mode.
	
	2. Empty the Recycle Bin.
	
	3. Restart the computer normally.
	
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95.
	
	MORE INFORMATION
	================
	
	Winload.exe is a shareware program designed to let you start either MS-DOS or
	Windows.
	
	For additional information about issues that can cause the error message stated
	above, please see the following articles in the Microsoft Knowledge Base: Setup
	Err Msg: Windows 95 Has Disabled Direct Disk Access...Built-In Anti-Virus
	Support in Windows 95Cannot Start Computer After Running DriveSpace on IBM
	Aptiva
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: ibm winload exe ps1pfile ps1tools win ini df.exe
	
	======================================================================
	Keywords          : kbsetup win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
