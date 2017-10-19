---
layout: page
title: "Q131352: Using Registry Editor in Real Mode"
permalink: /kb/131/Q131352/
---

## Q131352: Using Registry Editor in Real Mode

	Article: Q131352
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SUMMARY
	=======
	
	The registry is a system-wide database used for storing Windows 95 soft- ware
	and hardware configuration settings. The registry consists of the System.dat and
	User.dat files, which are located in the Windows folder. These files are backed
	up as System.da0 and User.da0 after every successful boot of Windows 95.
	
	Windows 95 includes a Registry Editor program (Regedit.exe) that runs in both the
	real-mode MS-DOS environment and in the protected-mode Windows environment. When
	you need to modify the registry without starting Windows 95, use Registry Editor
	in real mode. Note that the switches listed in this article only work in
	real-mode.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	To export, modify, and then import registry data using Registry Editor in real
	mode, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key and then choose Safe Mode Command Prompt Only from the Startup
	  menu.
	
	2. Change to the folder in which Windows 95 is installed by typing the following
	  command at the command prompt, and then press ENTER
	
	  " cd\<windows> " (without the quotation marks)
	
	  where <windows> is the folder in which Windows 95 is installed.
	
	3. Make a backup of the registry. To do so, type the following commands at the
	  command prompt, pressing ENTER after each command:
	
	  " attrib -s -h -r *.dat
	  copy user.dat user.sav
	  copy system.dat system.sav " (without the quotation marks)
	
	  For more information about backing up the registry, see the following article
	  in the Microsoft Knowledge Base:
	
	  Q132332 How to Back Up the Registry
	
	4. To export the registry to a text file, type the following command at the
	  command prompt, and then press ENTER:
	
	  " regedit /e registry.txt " (without the quotation marks)
	
	  This command exports both the System.dat and User.dat files. By default, the
	  Registry.txt file is saved in the folder from which you run Registry Editor.
	
	  To export a specific registry key to a text file, type the following command
	  at the command prompt, and then press ENTER
	
	  " regedit /e regkey.txt <registry key> " (without the quotation marks)
	
	  where <registry key> is the key you want to export. For example, type
	  the following command:
	
	  " regedit /e regkey.txt "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ Microsoft
	  Office\95\Microsoft Network" " (without the quotation marks)
	
	  NOTE: This line is wrapped for readability. This should be typed as one line.
	
	5. Using a text editor (such as Edit.com), modify the Registry.txt file you
	  created in step 4, and then save and close the file.
	
	6. To merge or import the text file back into the registry, type the following
	  command at the command prompt, and then press ENTER:
	
	  " regedit registry.txt [without /c] " (without the quotation marks)
	
	  If you want to create a new registry from the exported text file and replace
	  the existing registry files, type the following command at the command
	  prompt, and then press ENTER:
	
	  " regedit /c registry.txt " (without the quotation marks)
	
	Creating a new registry file from exported text can be used as a troubleshooting
	technique to repair a damaged registry. For more information about
	troubleshooting registry problems in real mode, see the "Using Real-Mode
	Registry Editor" section of the following article in the Microsoft Knowledge
	Base:
	
	  Q131431 How to Troubleshoot Registry Errors in Windows 95
	
	The changes take effect the next time you start Windows 95. If the changes you
	make cause problems in Windows 95 or you want to revert to the registry before
	you made the changes, restart your computer, press the F8 key when you see the
	"Starting Windows 95" message, and then choose Safe Mode Command Prompt Only
	from the Startup menu. At the command prompt, type the following commands,
	pressing ENTER after each command:
	
	  " cd\<windows>
	  attrib -s -h -r *.dat
	  ren user.dat user.bad
	  ren system.dat system.bad
	  copy user.sav user.dat
	  copy system.sav system.dat " (without the quotation marks)
	
	NOTE: If user profiles are enabled in Windows 95, the above procedure only
	changes the User.dat file in the Windows folder. It does not make any changes to
	the User.dat file in the <windows>\profiles\<username> folder,
	(where <username> is the name you use to log on to Windows 95.
	
	If you want to modify only the System.dat or User.dat file, or if there is a
	problem working with both the User.dat and System.dat file in one registry file,
	there are switches you can use that enable you to work with specific files. For
	information about problems with importing a registry with large keys, see the
	following article in the Microsoft Knowledge Base:
	
	  Q132064 REGEDIT May Not Be Able to Import Registry with Large Keys
	
	The following procedure gives the commands for changing step 4 above, which
	exports the entire registry, and step 6 above, which imports the text file (in
	this instance, the User.dat file):
	
	Step 4:
	
	To export the User.dat file to a text file located in the root folder, type the
	following command at a command prompt, and then press ENTER:
	
	  " regedit /l:c:\windows\user.dat /e c:\user.txt " (without the quotation
	  marks)
	
	Step 6:
	
	To merge or import the User.txt file back into the registry, type the following
	command:
	
	  " regedit /l:c:\windows\user.dat c:\user.txt [without /c] " (without the
	  quotation marks)
	
	If you want to create a new User.dat file from the exported text file, thereby
	replacing the existing User.dat file, type the following command at a command
	prompt, and then press ENTER:
	
	  " regedit /c registry.txt " (without the quotation marks)
	
	Syntax
	------
	
	The syntax and command-line switches for using Regedit to import to, create, or
	export from the registry in real mode are as follows:
	
	To merge or import a text file into the registry, use the following command:
	
	  " regedit [/L:system] [/R:user] filename1 " (without the quotation marks)
	
	To create and replace an existing registry from a text file, use the /c switch as
	follows:
	
	  " regedit [/L:system] [/R:user] /C filename2 " (without the quotation marks)
	
	To export text from the registry, use the /e switch as follows:
	
	  " regedit [/L:system] [/R:user] /E filename3 [regpath] " (without the
	  quotation marks)
	
	
	To see this list, type "regedit /?" (without the quotation marks) at the command
	prompt.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
