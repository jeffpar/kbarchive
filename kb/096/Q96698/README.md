---
layout: page
title: "Q96698: How to Create a New WIN.INI Without Third-Party Information"
permalink: /kb/096/Q96698/
---

## Q96698: How to Create a New WIN.INI Without Third-Party Information

	Article: Q96698
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use your original Microsoft Windows or Windows for Workgroups disks to
	create a new WIN.INI file. This may be useful for troubleshooting or for
	replacing a damaged or deleted WIN.INI file.
	
	NOTE: Before creating a new WIN.INI file, you can rename your current WIN.INI
	file and run Windows; this is often an effective first troubleshooting step.
	
	MORE INFORMATION
	================
	
	To create a new WIN.INI file that does not contain any references to third-party
	information but is configured for your specific system, do the following:
	
	1. Rename the WIN.INI file to WIN.BKP.
	
	2. Expand the file WIN.SR_ from the original Windows 3.1 disks to your Windows
	  directory with the following command
	
	  c:\<windows>\expand a:\win.sr_ c:\windows\win.ini
	
	  where <windows> is your Windows directory.
	
	  NOTE: The WIN.SR_ file is found on Disk 1 of the Windows 3.1 and 3.11 disks
	  (both disk sizes), on Disk 3 of the Windows for Workgroups 3.1 disks (both
	  sizes), and on Disk 2 of the Windows for Workgroups 3.11 disks (both sizes).
	
	3. Using an ASCII text editor, such as MS-DOS Editor or Edlin, edit the WIN.INI
	  file. Make the following changes:
	
	  a. Add the COOLSWITCH=1 line to the [windows] section.
	
	  b. Add TXT to the DOCUMENTS= line. For example:
	
	  Documents=txt
	
	  c. Delete the SetupWin=1 line from the [windows] section.
	
	4. Save the changes to your WIN.INI file and quit the text editor.
	
	5. Start Windows and run Control Panel. NOTE: The fonts displayed in Windows may
	  be quite large and bulky. This is due to the absence of the [fonts] section
	  in the WIN.INI file. The following steps should correct this problem.
	
	6. Reinstall your printer driver with the following steps:
	
	  a. Choose the Printers icon.
	
	  b. Choose your printer from the list of installed printers.
	
	  c. Choose the Install button.
	
	  d. Choose the Close button.
	
	7. Reinstall the TrueType fonts.
	
	  a. In Control Panel, choose the Fonts icon.
	
	  b. Choose the OK button.
	
	  c. In the directories list, select the Windows \SYSTEM subdirectory.
	
	  d. Choose the Select All button and then choose the OK button.
	
	  e. Choose the Close button.
	
	8. Quit and then restart Windows.
	
	9. If the new WIN.INI file seems to correct the problem you are troubleshooting
	  and your original WIN.INI file is available, you can cut and paste
	  application-specific sections from the old WIN.INI file. If your original
	  WIN.INI file is not available, reinstall the applications.
	
	Additional query words: 3.10 recreate re-create win.src win.sr_ rebuild t_shoot tshoot trouble shoot expanding 3.11 windrvr 3.5-inch 5.25-inch 1.2 megabyte 1.44
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
