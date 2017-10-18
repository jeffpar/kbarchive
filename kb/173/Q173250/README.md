---
layout: page
title: "Q173250: Cannot Read Help Files Due To Missing Winhlp32.exe"
permalink: kb/173/Q173250/
---

## Q173250: Cannot Read Help Files Due To Missing Winhlp32.exe

	Article: Q173250
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Workstation 4.0 Resource Kit ISBN 1-57231-343-9 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement One ISBN 1-57231-559-8 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Two ISBN 1-57231-626-8 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening RKTools.hlp or one of the other help files included on the Resource
	Kit CD-ROM, you may receive the following error message:
	
	  This file is not a valid Windows help file.
	
	After clicking OK, you will then receive the following error message:
	
	  A newer version of help is required to view this file.
	
	CAUSE
	=====
	
	The Microsoft Windows NT 4.0 help files require Winhlp32.exe to be installed and
	associated with .hlp files. If Winhlp32.exe is missing, or if Winhelp.exe is
	installed in place of Winhlp32.exe, the errors listed above will occur.
	
	RESOLUTION
	==========
	
	Make Sure Winhlp32.Exe Is Installed
	-----------------------------------
	
	1. Click the Start button, click Find, and then click Files or Folders.
	
	2. Type Winhlp32.exe in the Named input box, and then click Find Now.
	
	Install Winhlp32.exe
	--------------------
	
	If Winhlp32.exe is not present, use the following steps to copy Winhlp32.exe to
	your system folder.
	
	1. Insert the Microsoft Windows NT Server or Workstation 4.0 CD-ROM into your
	  CD-ROM drive. - or -
	
	  Map a network drive to the location of your original Microsoft Windows NT
	  Server or Workstation 4.0 files.
	
	2. Change to the folder that matches your platform (\I386 for Intel-based
	  computers).
	
	3. Copy the following files into a temporary folder on your hard disk:
	
	  Winhlp32.cn_
	  Winhlp32.ex_
	  Winhlp32.hl_
	
	4. Click Start, point to Programs, and then click Command Prompt.
	
	5. Change to the temporary folder where you stored the Winhlp32 files.
	
	6. Type the following commands:
	
	  "EXPAND WINHLP32.CN_ WINHLP32.CNT" (without the quotation marks)"EXPAND
	  WINHLP32.EX_ WINHLP32.EXE" (without the quotation marks)"EXPAND WINHLP32.HL_
	  WINHLP32.HLP" (without the quotation marks)
	
	7. Copy Winhlp32.cnt, Winhlp32.exe, and Winhlp32.hlp to your \%SYSTEMROOT%\
	  folder. Typically this folder is C:\WINNT.
	
	8. Delete the contents of your temporary folder.
	
	Check and Update the Association for Help Files
	-----------------------------------------------
	
	Use the following steps to check and update the association for help files:
	
	1. Click the Start button, click Programs, and then click Windows NT Explorer.
	
	2. Click the View menu, and then click Options.
	
	3. Click the File Types tab.
	
	4. Scroll through the list of file types until you locate the Help File
	  registered file type, and then click Edit.
	
	5. Double-click the Open action. The default value for the "Application used to
	  perform this action" field should be:
	
	  C:\WINNT\system32\winhlp32.exe
	
	  This is the default installation folder if you have installed Windows NT to
	  another folder use the path to that folder.
	
	  If this field references Winhelp.exe instead of Winhlp32.exe, update the field
	  and then click OK.
	
	6. Click Close, and then click Close again to update the file association.
	
	Additional query words: mspress ms_press press ntrk ntreskit 1-57231-344-7 1-57231-343-9 1-57231-559-8 1-57231-626-8
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbhowto kbprb
	
	=============================================================================
	
