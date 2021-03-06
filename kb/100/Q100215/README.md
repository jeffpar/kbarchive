---
layout: page
title: "Q100215: Err Msg: Not Enough Memory to Run Word"
permalink: /kb/100/Q100215/
---

## Q100215: Err Msg: Not Enough Memory to Run Word

{% raw %}

	Article: Q100215
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start 16-bit Word for Windows (version 2.0c or version 6.0) from
	Windows NT, you may receive the following error message:
	
	  There is not enough memory to run Word
	
	This message appears even though there is plenty of available memory.
	
	CAUSE
	=====
	
	There are four known possible situations that can cause this error:
	
	Default Printer Unavailable
	---------------------------
	
	The printer pointed to by the default printer driver may be unavailable. Open
	Print Manager and delete all printers and printer connections. Restart Word.
	Alternatively, test the printer connections by printing to each installed
	printer from Notepad.
	
	
	Insufficient Disk Space in Word Directory
	-----------------------------------------
	
	Word uses the default program directory for some of its internal temporary files.
	There should be at least 4 MB of free disk space in this directory.
	
	Insufficient Disk Space in \TEMP or Startup Directory
	-----------------------------------------------------
	
	The TEMP environment variable set in the Autoexec.bat file may be missing or
	pointing to a location where there is insufficient disk space to create Word's
	temporary files. From the System portion of Control Panel, check that the User
	Environment includes a valid TEMP variable. If the Word startup directory is
	different from the default, especially if it is in the same logical drive as the
	Windows NT paging file, there may be insufficient disk space to open Word.
	
	No Print Permission for Default Printer
	---------------------------------------
	
	To run Word under Windows NT, you must have Print permission with the default
	printer. When you start Word, the program queries the printer for information
	about its supported fonts, paper sizes, and so forth. If you do not have
	permission to print, Word cannot obtain this information, so it fails to start.
	
	For permission to print, ask your network administrator to perform the following
	steps (NOTE: You cannot change your own permissions unless you are a Windows NT
	Administrator or Power User):
	
	1. Start the Windows NT Print Manager.
	
	2. Select the window representing the printer so that its window appears on top
	  of all other printer windows.
	
	3. On the Security menu, choose Permissions.
	
	4. In the Permissions window, check for any entries that specifically state "No
	  Access" for the user or for a group that the user belongs to. Remove any
	  entries that deny the user access. If an entry denies a group the user
	  belongs to, either remove the entry or remove the user from that group.
	
	5. Check to make sure that there is at least one entry that grants the user or a
	  group the user belongs to the permission of Print or Full Control. If there
	  is no such entry, you must add one.
	
	6. Choose OK.
	
	Additional query words: prodnt virtual word6 winword
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.51
	
	=============================================================================
	

{% endraw %}
