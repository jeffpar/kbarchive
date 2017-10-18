---
layout: page
title: "Q133725: Missing Menu Commands in the Fonts Folder"
permalink: kb/133/Q133725/
---

## Q133725: Missing Menu Commands in the Fonts Folder

	Article: Q133725
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbui win95 win98kbfaq
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows Millennium Edition 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the Fonts folder in Windows Explorer, the following commands may
	be missing from the Fonts folder menus. On the File menu:
	
	- Open
	
	- Print
	
	- Install New Font
	
	On the View menu:
	
	- List Fonts By Similarity
	
	- Hide Variations (Bold, Italics, Etc.)
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- The System and Read Only attributes are no longer set for the Fonts folder.
	  The Fonts folder must have its System and Read Only attributes set to work
	  correctly.
	
	- The Fontext.dll file may be missing or damaged, causing the menus to contain
	  only the commands for a generic folder.
	
	
	- The Desktop.ini file may be missing or damaged. Note that you do not see the
	  Desktop.ini file when you view the Fonts folder. To see the file, open an
	  MS-DOS session and view the Windows\Fonts folder.
	
	RESOLUTION
	==========
	
	To restore the correct commands for the Fonts folder, follow these steps:
	
	1. At a command prompt, switch to the Windows folder by typing the following
	  command:
	
	  cd\windows
	
	  NOTE: If Windows is installed in a folder other than the Windows folder,
	  adjust these instructions accordingly.
	
	2. Type the following command:
	
	  attrib +s +r fonts
	
	3. Shut down and restart Windows.
	
	NOTE: You cannot set the System attribute for the Fonts folder within the
	graphical user interface.
	
	If the commands for the Fonts folder are not restored, the Fontext.dll file may
	be missing or damaged. To replace the Fontext.dll file, use the steps in the
	appropriate section below.
	
	Windows 95/98
	-------------
	
	1. Restart Windows in MS-DOS mode.
	
	2. Change to the Windows\System folder.
	
	3. If the Fontext.dll file exists, rename it Fontext.old.
	
	4. Extract a new copy of the Fontext.dll file from the original Windows disks or
	  CD-ROM to the Windows\System folder.
	
	  For information about using the Extract tool, please see the following article
	  in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	5. Restart Windows normally.
	
	If the issue persists, the Desktop.ini file may be missing or damaged. To replace
	the Desktop.ini file, follow these steps:
	
	1. Restart Windows in MS-DOS mode.
	
	2. Change to the Windows\Fonts folder.
	
	3. If the Desktop.ini file exists, rename it Desktop.old.
	
	4. Extract a new copy of the Desktop.ini file from the original Windows disks or
	  CD-ROM to the Windows\Fonts folder.
	
	  For information about using the Extract tool, please see the following article
	  in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	5. Restart Windows normally.
	
	Windows NT 4.0
	--------------
	
	1. At a command prompt, delete the Desktop.ini file in the Winnt\Fonts folder.
	
	2. Delete the Fontext.dll file in the Winnt\System32 folder.
	
	3. Expand a new Desktop.ini file from the I386 folder on your original Windows
	  NT 4.0 CD-ROM to the Fonts folder on your hard disk.
	
	4. Expand a new Fontext.dll file from the I386 folder on your original Windows
	  NT 4.0 CD-ROM to the Winnt\System32 folder on your hard disk.
	
	  For example, use the following command:
	
	  " expand d:\i386\fontext.dl_ c:\winnt\system32\fontext.dll " (without the
	  quotation marks)
	
	5. Restart the computer.
	
	Windows 2000
	------------
	
	1. Boot into Safe Mode
	
	2. Rename the fontext.dll in the %SystemRoot%\System32 to fontext.old
	
	3. Rename the fontext.dll in the %SystemRoot%\System32\Dllcache to fontext.old
	
	4. Copy an extracted copy of the fontext.dll file to both folders.
	
	5. Reboot to Normal Mode.
	
	MORE INFORMATION
	================
	
	The resolution listed in this article may also resolve the following symptoms:
	
	- The TrueType tab is missing when on the View menu you click Options, and then
	  open the Fonts folder.
	
	- Fonts that are listed in the Fonts folder are not available to be selected
	  within programs.
	
	Additional query words: 4.0 win95 win98 win98se winnt winme winmil
	
	======================================================================
	Keywords          : kbui win95 win98 kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinMEsearch kbWin95search kbWin98search kbWin98SEsearch kbWinAdvServSearch kbZNotKeyword3 kbWin98 kbWinME kbWin98SE
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
