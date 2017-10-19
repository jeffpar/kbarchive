---
layout: page
title: "Q131431: How to Troubleshoot Registry Errors in Windows 95"
permalink: /kb/131/Q131431/
---

## Q131431: How to Troubleshoot Registry Errors in Windows 95

	Article: Q131431
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtshoot win95kbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you start Windows 95, you may receive one of the following error messages:
	
	  There is not enough memory to load the registry.
	
	  -or-
	
	  Windows has encountered an error accessing the system registry. You should
	  restore the registry now and restart the computer.
	
	  If you ignore this error and shut down your system, you may lose data.
	
	  Restoring the registry replaces the faulty registry with a known good backup
	  copy. However, this backup copy may not contain all the information recently
	  added to your system.
	
	If you click the "Restore From Backup And Restart" button, you receive the error
	message again when Windows 95 restarts.
	
	CAUSE
	=====
	
	These error messages may occur if the registry is damaged.
	
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Perform the steps outlined in each method below (as appropriate) to restore a
	damaged registry.
	
	Using Real-Mode Registry Editor
	-------------------------------
	
	Use Registry Editor in real mode to export, then import, the registry file. To do
	so, follow these steps:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select "Safe mode command prompt only" from the Startup
	  menu.
	
	2. Type the following line to export the registry
	
	  "regedit /l:<path1> /e <path2>system.txt" (without the quotation
	  marks)
	
	  where <path1> is the path to the System.dat file and <path2> is
	  the path to the destination file. For example, if Windows 95 is installed in
	  the Windows folder on drive C, type the following line:
	
	  "regedit /l:c:\windows\system.dat /e c:\system.txt" (without the quotation
	  marks)
	
	3. Type the following lines, and press ENTER after each line:
	
	  "cd\windows" (without the quotation marks)
	  "attrib -s -h -r system.dat" (without the quotation marks)
	
	4. Type the following line to rename the current registry file:
	
	  "ren system.dat system.old" (without the quotation marks)
	
	5. Type the following line to import the System.dat portion of the registry:
	
	  "regedit /l:<path1> /c <path2>system.txt" (without the quotation
	  marks)
	
	  where <path1> is the path to the System.dat file and <path2> is
	  the path that contains the file to import. For example, if Windows 95 is
	  installed in the Windows folder on drive C and you want to import the
	  System.txt file from the root folder of drive C, type:
	
	  "regedit /l:c:\windows\system.dat /c c:\system.txt" (without the quotation
	  marks)
	
	  NOTE: If you receive an "Unable to open registry" or "Error accessing the
	  registry" error message when you attempt to import the System.dat portion of
	  the registry, please see the following article in the Microsoft Knowledge
	  Base for more information about the error message:
	
	  Q132064 Regedit May Not Be Able to Import Registry with Large Keys
	
	6. Restart Windows 95.
	
	If the error continues to occur, follow these steps:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select "Safe mode command prompt only" from the Startup
	  menu.
	
	2. Type the following line to export the User.dat portion of the registry
	
	  "regedit /r:<path1> /e <path2>user.txt" (without the quotation
	  marks)
	
	  where <path1> is the path to the User.dat file and <path1> is the
	  path to the destination file. For example, if Windows 95 is installed in the
	  Windows folder on drive C, type the following line:
	
	  "regedit /r:c:\windows\user.dat /e c:\user.txt" (without the quotation marks)
	
	3. Type the following lines, and then press ENTER after each line:
	
	  "cd\windows" (without the quotation marks)
	  "attrib -s -h -r user.dat" (without the quotation marks)
	
	4. Type the following line to rename the User.dat file:
	
	  "ren user.dat user.old" (without the quotation marks)
	
	5. Type the following line to import the User.dat portion of the registry:
	
	  "regedit /r:<path1> /c <path2>user.txt" (without the quotation
	  marks)
	
	  where <path1> is the path to the User.dat file and <path1> is the
	  path containing the file to import. For example, if Windows 95 is installed
	  in the Windows folder on drive C and you want to import the User.txt file
	  from the root folder of drive C, type:
	
	  "regedit /r:c:\windows\user.dat /c c:\user.txt" (without the quotation marks)
	
	  NOTE: If you receive an "Unable to open registry" or "Error accessing the
	  registry" error message when you attempt to import the System.dat portion of
	  the registry, please see the following article in the Microsoft Knowledge
	  Base for more information about the error message:
	
	  Q132064 Regedit May Not Be Able to Import Registry with Large Keys
	
	6. Restart Windows 95.
	
	For additional information about using Registry Editor in real mode, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q131352 Using Registry Editor in Real Mode
	
	If the error continues to occur after you follow the steps in this section,
	please see the next section.
	
	Using System.da0
	----------------
	
	Restore the registry to its state when you last successfully started Windows 95.
	To do so, follow these steps:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select "Safe mode command prompt only" from the Startup
	  menu.
	
	2. Type the following command to move to the Windows folder
	
	  "cd \<windows>" (without the quotation marks)
	
	  where <windows> is the Windows 95 folder. For example, if Windows 95 is
	  installed in the Windows folder, type the following line:
	
	  "cd \windows" (without the quotation marks)
	
	3. Type the following line:
	
	  "attrib -s -h -r system.dat" (without the quotation marks)
	
	4. Type the following line:
	
	  "ren system.dat system.bad" (without the quotation marks)
	
	5. Restart your computer. Windows 95 uses the System.da0 file when it cannot
	  find the System.dat file. If this file works, Windows 95 renames it to
	  System.dat.
	
	If the error continues to occur after you follow the steps in this section,
	please see the next section.
	
	Using System.1st
	----------------
	
	Restore the registry to its state when you first started Windows 95 successfully.
	To do so, follow these steps:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select "Safe mode command prompt only" from the Startup
	  menu.
	
	2. Type the following command to move to the Windows folder
	
	  "cd \<windows>" (without the quotation marks)
	
	  where <windows> is the Windows 95 folder. For example, if Windows 95 is
	  installed in the Windows folder, type the following line:
	
	  "cd \windows" (without the quotation marks)
	
	3. Type the following line:
	
	  "attrib -s -h -r system.dat" (without the quotation marks)
	
	4. Type the following line:
	
	  "ren system.dat system.xxx" (without the quotation marks)
	
	5. Type the following line:
	
	  "cd \ " (without the quotation marks)
	
	6. Type the following line:
	
	  "attrib -s -h -r system.1st" (without the quotation marks)
	
	7. Type the following line
	
	  "copy system.1st c:\<windows>\system.dat" (without the quotation marks)
	
	  where <windows> is your Windows 95 folder.
	
	8. Type the following line:
	
	  "attrib +s +h +r system.1st" (without the quotation marks)
	
	9. Restart your computer.
	
	If the error continues to occur after you follow the steps in this section,
	please see the next section.
	
	NOTE: You may find that your TrueType fonts are missing from the Fonts folder or
	in programs after you follow the above steps. For additional information about
	how to resolve this behavior, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q133732 Missing TrueType Fonts in Fonts Folder or Programs
	
	Reinstalling Windows 95
	-----------------------
	
	Re-create the registry files by reinstalling Windows 95.
	
	To do this, perform the following steps.
	
	NOTE: If you cannot access the CD-ROM drive from the command prompt, consult the
	CD-ROM drive's documentation or manufacturer for assistance with loading the
	real-mode drivers for the CD-ROM drive.
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Command Prompt Only from the Startup menu.
	
	2. Type the following line and then press ENTER to remove all user profiles:
	
	  "ren c:\windows\profiles c:\windows\oldprofiles" (without the quotation
	  marks)
	
	3. Rename the existing registry files by typing the following lines. Press ENTER
	  after each line:
	
	  "cd \windows" (without the quotation marks)
	  "attrib -s -h -r system.dat" (without the quotation marks)
	  "ren system.dat system.xxx" (without the quotation marks)
	  "attrib -s -h -r user.dat" (without the quotation marks)
	  "ren user.dat user.xxx" (without the quotation marks)
	  "attrib -s -h -r system.da0" (without the quotation marks)
	  "ren system.da0 system.yyy" (without the quotation marks)
	  "attrib -s -h -r user.da0" (without the quotation marks)
	  "ren user.da0 user.yyy" (without the quotation marks)
	  "cd \" (without the quotation marks)
	  "attrib -s -h -r system.1st" (without the quotation marks)
	  "ren system.1st system.zzz" (without the quotation marks)
	
	4. Run Windows 95 Setup.
	
	NOTE: You may have to reinstall programs, especially those that write to the
	registry, after you restore the backup or use System.1st to replace the
	registry.
	
	Additional query words: corrupt tshoot repair troubleshooting
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtshoot win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
