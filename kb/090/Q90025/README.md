---
layout: page
title: "Q90025: How to Uninstall Windows Sound System"
permalink: /kb/090/Q90025/
---

## Q90025: How to Uninstall Windows Sound System

{% raw %}

	Article: Q90025
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Once the Windows Sound System is installed, the only way to uninstall it is to
	follow the instructions in the DEINSTAL.TXT file.
	
	MORE INFORMATION
	================
	
	Windows Sound System installs the bulk of its files into C:\SNDSYS by default.
	In addition, files are copied to the \WINDOWS directory, the WINDOWS\SYSTEM
	directory, the EXCEL\LIBRARY directory, and the Lotus 1-2-3 for Windows
	directory (depending on the options that you select during Setup). Some existing
	.INI files such as WIN.INI, SYSTEM.INI, and CONTROL.INI are also modified in the
	Windows 3.1 directory.
	
	Windows Sound System installs a text file called DEINSTAL.TXT, located in the
	\SNDSYS directory. This file contains step-by-step instructions to remove all
	traces of Windows Sound System from your computer, including restoring your
	pre-Windows Sound System .INI files.
	
	Windows Sound System Setup creates a backup copy of all .INI files that it
	modifies in the Windows 3.1 directory with .WSS extensions. You can restore the
	pre-Windows Sound System configuration by restoring these .INI files. This
	restoration works if you have not made any changes to your system after
	installing Windows Sound System. If you have made other changes or installed new
	software, restoring the .INI files causes the changes to be lost.
	
	If you have run Windows Sound System Setup more than once, then restoring the
	.INI files will not work correctly. The DEINSTAL.TXT file describes the exact
	changes made to each of the .INI files so you manually remove those changes.
	
	Reference(s):
	
	DEINSTAL.TXT provided with Windows Sound System
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	

{% endraw %}
