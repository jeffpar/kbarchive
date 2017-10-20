---
layout: page
title: "Q87274: Function of the &#91;RenFiles&#93; Section of SETUP.INF File"
permalink: /kb/087/Q87274/
---

## Q87274: Function of the &#91;RenFiles&#93; Section of SETUP.INF File

{% raw %}

	Article: Q87274
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The [RenFiles] section of the SETUP.INF file is used to rename files located in
	the Windows SYSTEM subdirectory during the upgrade from Windows 3.0 to Windows
	3.1. Renaming these files will prevent them from being overwritten during the
	Windows 3.1 setup.
	
	MORE INFORMATION
	================
	
	The default [RenFiles] section of the SETUP.INF file on upgrade disk no. 1 is as
	follows:
	
	     [RenFiles]
	        MIDIMAP.CFG,MIDIMAP.OLD
	        ADLIB.DRV,MSADLIB.DRV
	
	The first file in a line (for example, MIDIMAP.CFG) is the file that already
	exists in the Windows SYSTEM subdirectory; the second file (for example,
	MIDIMAP.OLD) is the name that the first file will be renamed to.
	
	NOTE: Files not in the Windows SYSTEM subdirectory will not be renamed unless the
	full path to that file is given.
	
	To rename files in a directory other than the Windows SYSTEM subdirectory, you
	must first change directories. The change is made by using two periods (..) to
	move down one directory or one period to move up a directory. Also, the change
	must be in relation to the directory that you are currently logged to. For
	example, if you want to rename the following files
	
	     [drive:]\WINDOWS\SYSTEM\BLUE.TXT
	     [drive:]\WINDOWS\WHITE.TXT
	     [drive:]\WINDOWS\YELLOW.TXT
	     [drive:]\WINDOWS\SYSTEM\GREEN.TXT
	     [drive:]\WINDOWS\SYSTEM\BLACK.TXT
	
	     ([drive:] refers to the drive where the Windows files are located)
	
	add the following lines to the [RenFiles] section of the SETUP.INF,
	respectively:
	
	     [RenFiles]
	     BLUE.TXT,RED.TXT
	     ..\WHITE.TXT,PURPLE.TXT
	     YELLOW.TXT,CYAN.TXT
	     .\SYSTEM\GREEN.TXT,TAN.TXT
	     BLACK.TXT,ORANGE.TXT
	
	REFERENCES
	==========
	
	"Microsoft Windows Resource Kit," version 3.1, page 107
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
