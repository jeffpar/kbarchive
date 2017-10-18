---
layout: page
title: "Q174549: Reinstalling Windows 95 with Internet Explorer 4.0"
permalink: kb/174/Q174549/
---

## Q174549: Reinstalling Windows 95 with Internet Explorer 4.0

	Article: Q174549
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:4.0,95
	Operating System(s): 
	Keyword(s): kbenv kbsetup osr1 osr2 win95 msiew95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	- Microsoft Internet Explorer version 4.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Before you reinstall any version of Windows 95, you should uninstall Internet
	Explorer 4.0. If you do not uninstall Internet Explorer before reinstalling
	Windows 95, you receive error messages warning you to remove Internet Explorer
	first. If you do not, you may be unable to start Windows or run Internet
	Explorer or related components. To avoid these problems, uninstall Internet
	Explorer first, reinstall Windows 95, and then reinstall Internet Explorer.
	
	For information about uninstalling Internet Explorer, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q174265 How to Uninstall Internet Explorer 4.0
	
	MORE INFORMATION
	================
	
	If you have already reinstalled Windows 95 without uninstalling Internet
	Explorer first, use the appropriate method below to help recover from any
	problems that may occur.
	
	NOTE: The methods outlined below are specific to the version of Windows 95 you
	are running and whether you selected Yes or No in all Version Conflict dialog
	boxes that occurred while you reinstalled Windows 95.
	
	To determine which version of Windows 95 you are running, please see the
	following article in the Knowledge Base:
	
	  Q158238 How to Determine the Version of Windows 95/98/Me in Use
	
	Method to Use
	-------------
	
	  Version of          Response to          Use this
	  Windows 95          version conflicts    method
	  -------------------------------------------------
	  Windows 95 or A     Yes                  1
	  Windows 95 or A     No                   2
	  Windows 95B         Yes                  3
	  Windows 95B         No                   4
	
	Method 1
	--------
	
	You do not need to make any changes to your current configuration. Reinstalling
	Windows 95 with Internet Explorer installed and answering Yes to all file
	version conflicts does not cause any problems.
	
	Method 2
	--------
	
	Windows 95 works properly, but you may need to reinstall Internet Explorer to
	resolve any problems with the browser. Reinstalling Internet Explorer should
	resolve any file version conflicts resulting from reinstalling Windows 95.
	
	Method 3
	--------
	
	Windows 95 works properly, but you may experience problems running Internet
	Explorer because Windows 95 reinstalls Internet Explorer 3.0. To work around
	this problem, reinstall Internet Explorer 4.0.
	
	Method 4
	--------
	
	If you are using the Windows Desktop Update component, the following error
	messages may occur when you start your computer:
	
	  Error loading Explorer.Exe
	  You must reinstall Windows
	
	When you click OK, the following error message occurs:
	
	  Error Starting program
	
	  The Explorer.Exe File is Linked to Missing Export
	  SHLWAPI.DLL:ShopenRegstreamA
	
	Your computer either stops responding (hangs) or shuts down.
	
	If you did not have the Windows Desktop Update installed, you may be able to
	start Windows 95, but you cannot run Internet Explorer and your desktop icons
	cannot be moved.
	
	To resolve these issues, use the appropriate method:
	
	Using the Uninstall folder on your hard disk:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	2. Type the following line to change to the Uninstall folder
	
	  " cd <uninstall folder> " (without the quotation marks)
	
	  where <uninstall folder> is the location of the uninstall folder for
	  Internet Explorer 4.0. For example, type:
	
	  " cd c:\progra~1\intern~1\uninst~1 " (without the quotation marks)
	
	  NOTE: To locate the uninstall folder, locate the Iexplore.exe file, which is
	  located in the uninstall folder. To find the Iexplore.exe file, at the
	  command prompt, type "dir /s iexplore.exe" (without the quotation marks), and
	  then press ENTER.
	
	3. Type the following line to make the necessary files viewable:
	
	  " attrib -s -h -r *.* " (without the quotation marks)
	
	4. Type the following lines to restore the files necessary to start Windows 95:
	
	  " iextract integr~1.dat " (without the quotation marks)
	
	5. Type the following lines to place the files in their proper folders:
	
	  " copy explorer.exe c:\windows
	  copy shell32.dll c:\windows\system " (without the quotation marks)
	
	6. Restart the computer normally.
	
	7. Uninstall Internet Explorer. For information about uninstalling Internet
	  Explorer, see the following article in the Microsoft Knowledge Base:
	
	  Q174265 How to Uninstall Internet Explorer 4.0
	
	8. After you uninstall Internet Explorer successfully, reinstall it.
	
	Using the Windows 95 CD-ROM or floppy disks:
	
	1. Rename the Explorer.exe file (if it exists) in the Windows folder, and then
	  rename the Shell32.dll file (if it exists) in the Windows\System folder.
	
	  For information about how to rename a file, click Start, click Help, click the
	  Index tab, type "renaming" (without the quotation marks), and then
	  double-click the "Renaming files" topic.
	
	2. Extract a new copy of the Explorer.exe file and the Shell32.dll file from
	  your original Windows 95 disks or CD-ROM. The Explorer.exe file and the
	  Shell32.dll file are located in the following locations:
	
	   - The Win95_10.cab cabinet file on the Windows 95 CD-ROM.
	
	   - The Win95_17.cab cabinet file on the Windows 95 OEM Service Release 2
	     (OSR2) CD-ROM.
	
	   - The Win95_11.cab cabinet file on disk 11 of the original Windows 95 DMF
	     floppy disks.
	
	   - The Win95_17.cab cabinet file on disk 17 of the original Windows 95
	     non-DMF floppy disks.
	
	  For information about using the Extract tool, type "extract" (without the
	  quotation marks) at a command prompt, or see the following article in the
	  Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	3. Restart your computer.
	
	Additional query words: 4.00 ierelease
	
	======================================================================
	Keywords          : kbenv kbsetup osr1 osr2 win95 msiew95 
	Technology        : kbIEsearch kbWin95search kbIE95Search kbOPKSearch kbZNotKeyword3 kbWin95 kbIE400Win95
	Version           : WINDOWS:4.0,95
	Issue type        : kbinfo
	
	=============================================================================
	
