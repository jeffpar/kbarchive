---
layout: page
title: "Q136416: Windows Does Not Start Normally With Bootgui=1 in the Msdos.sys"
permalink: /kb/136/Q136416/
---

## Q136416: Windows Does Not Start Normally With Bootgui=1 in the Msdos.sys

	Article: Q136416
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv win95 win98
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may encounter one of the following symptoms with Windows:
	
	- After you make a change to your Windows environment your computer boots to a
	  command prompt rather than into Windows.
	
	- Changes you make to entries in the Msdos.sys file may not seem to take
	  effect.
	
	- When you perform a step-by-step boot and press either Y or N when you are
	  prompted "Process your startup command file (AUTOEXEC.BAT)," you receive a
	  message stating "Too many parameters" followed by the prompt "AUTOEXEC
	  [Enter=Y,Esc=N]." No matter how you answer these prompts, Windows boots to a
	  command prompt and does not prompt you to load the graphical user interface
	  (GUI).
	
	- When you start your computer, it boots to the Windows boot menu instead of
	  booting into Windows, even though the Msdos.sys file contains "bootmenu=0" or
	  the Enable Startup Menu box is not checked on the General tab of the Advanced
	  options for the System Configuration Utility (MSConfig).
	
	CAUSE
	=====
	
	There is a Winboot.ini file in the root folder of the boot drive that contains
	"BootGUI=0" in the [Options] section.
	
	If the Winboot.ini file exists, it is processed instead of the Msdos.sys file.
	The Winboot.ini file is created by Windows Setup to ensure restartability or to
	display a warning when there is an operation that needs to be manually
	restarted. When the operation is complete, the Winboot.ini file is normally
	deleted, and the Io.sys configuration settings are read from Msdos.sys.
	
	NOTE: The Winboot.ini file is a hidden file.
	
	
	RESOLUTION
	==========
	
	If your computer boots to a command prompt only and no error messages are
	displayed, you can safely delete the Winboot.ini file and restart your
	computer.
	
	To delete the Winboot.ini file, follow these steps:
	
	1. At an MS-DOS prompt, type the following command in the root directory
	
	  "deltree <drive>:\winboot.ini" (without the quotation marks)
	
	  where <drive> is the drive where the Winboot.ini file is located.
	
	2. Answer yes by typing "y" (without the quotation marks) when you receive a
	  prompt "Delete file 'winboot.ini'?"
	
	3. Restart your computer.
	
	
	Additional query words: bootgui=1
	
	======================================================================
	Keywords          : kbenv win95 win98 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
