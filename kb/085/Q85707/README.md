---
layout: page
title: "Q85707: Changing the Default COM Port and Baud Rate in Terminal"
permalink: /kb/085/Q85707/
---

## Q85707: Changing the Default COM Port and Baud Rate in Terminal

{% raw %}

	Article: Q85707
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The first time Microsoft Windows Terminal (TERMINAL.EXE) is started it prompts
	you for the default port by displaying a Define Serial Port dialog box. The port
	you select in the Define Serial Port dialog box will become the default port for
	all subsequent Terminal sessions. However, the default communication settings of
	Terminal (baud rate, parity, data bits, stop bits) are preset during setup. To
	change these default settings, modify the WIN.INI file.
	
	MORE INFORMATION
	================
	
	There are two methods to change the default COM port in subsequent Terminal
	sessions.
	
	1. Open the WIN.INI file in a text editor, such as Notepad, and search for the
	  [Terminal] heading. There will be an entry such as Port=COM1. Change the
	  existing entry to one of the following:
	
	  a. Port=None
	
	     -or-
	
	  b. Port=COM1
	
	     -or-
	
	  c. Port=COM2
	
	     -or-
	
	  d. Port=COM3
	
	     -or-
	
	  e. Port=COM4
	
	2. Optionally, after loading the WIN.INI file in Notepad, the [Terminal] heading
	  and the entry below it can be deleted. The next time Terminal is started, it
	  will prompt for a default port to use as if it were the first session of
	  Terminal.
	
	To change the default bit rate in the Terminal program packaged with Windows 3.0
	and 3.1, add the desired settings description (baud, parity, data, stop bits) to
	the port= line in the [Terminal] section of the WIN.INI file.
	
	For example, to default to 2400 bits per second (BPS) on COM2, the following
	changes/additions need to be made to WIN.INI:
	
	     [Terminal]
	
	     port=COM2:2400,N,8,1
	
	Settings in individual *.TRM files will still override the default communication
	settings.
	
	In either of the above situations, Windows must be restarted for the WIN.INI file
	changes to take effect.
	
	KBCategory: kbsetup kbtool
	KBSubcategory: win30 win31 wincomm
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
