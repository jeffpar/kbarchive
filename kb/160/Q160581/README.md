---
layout: page
title: "Q160581: Encarta 97 Err Msg: Could Not Start Another Application..."
permalink: kb/160/Q160581/
---

## Q160581: Encarta 97 Err Msg: Could Not Start Another Application...

	Article: Q160581
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): kberrmsg kbmm kbsetupkbfaq
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Encarta 97 on Windows 3.x, Setup terminates and you receive the
	following error message:
	
	  Could not Start Another Application During Setup. Run Setup Again.
	
	CAUSE
	=====
	
	The most common reason for this error message is a corrupted or missing
	Regedit.exe file.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the following troubleshooting procedures:
	
	- Make Sure Regedit.exe Starts
	- Rename the Reg.dat File
	- General Troubleshooting
	- Manual Installation
	
	After each procedure, retry Encarta. If the error message continues, try the next
	procedure.
	
	Make Sure Regedit.exe Starts
	----------------------------
	
	To make sure Regedit.exe starts, do the following:
	
	1. On the File menu in Program Manager or File Manager, click Run.
	
	2. On the Run command line, type the following:
	
	  regedit.exe
	
	If Regedit.exe is not available, expand the Regedit.exe file from the original
	Windows 3.x disks (Disk 4 of the 1.44-MB 3.5-inch disk set, or Disk 3 of the
	1.2- MB 5.25-inch disk set) to the Windows\System directory.
	
	To do this, type the following at the MS-DOS command prompt:
	
	  expand a:\regedit.ex_ c:\windows\system\regedit.exe
	
	where a is the letter of the floppy drive containing the Windows disk, and c is
	the letter of the drive where you installed Windows.
	
	Rename the Reg.dat File
	-----------------------
	
	To rename the Reg.dat file, do the following:
	
	1. In the Windows folder, locate the file named Reg.dat.
	
	2. Rename Reg.dat to Regdat.old.
	
	  For more information about how to perform this task in Windows, see your
	  Windows printed documentation or online Help.
	
	3. Restart Windows.
	
	4. Try to run Encarta Setup.
	
	  If the program runs correctly, then the original Reg.dat file was corrupted. A
	  corrupted Reg.dat file can adversely affect the performance of all Windows
	  applications.
	
	  To make sure all of your other Windows programs run correctly, you should
	  rebuild the Reg.dat or reinstall all your programs. This registers the
	  programs in the newly created Reg.dat file.
	
	  For more information about rebuilding the Reg.dat file, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q80393 How to Rebuild the Default Windows REG.DAT File
	
	General Troubleshooting
	-----------------------
	
	Clean boot the system and leave out everything that is not needed to launch
	Windows and try Encarta Setup again.
	
	For more information about a clean boot in Windows 3.x, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q87290 What Is a Clean Boot for Windows 3.1?
	
	  Q90511 What Is a Clean Boot for Windows for Workgroups?
	
	Manual Installation
	-------------------
	
	A final troubleshooting step is to attempt a manual installation of Encarta
	Encyclopedia.
	
	For more information about the manual installation of Encarta, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  Q159007 Encarta 1997: Manual Install Instructions for Windows 3.x
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm cannot can not couldnt
	
	======================================================================
	Keywords          : kberrmsg kbmm kbsetup kbfaq
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbOSWin310 kbOSWin311
	Version           : WINDOWS:3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	
