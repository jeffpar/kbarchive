---
layout: page
title: "Q133218: LAN WorkPlace Replaces Shell.dll File"
permalink: /kb/133/Q133218/
---

## Q133218: LAN WorkPlace Replaces Shell.dll File

{% raw %}

	Article: Q133218
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Novell LAN WorkPlace and restart your computer, Windows 95
	notifies you that the Commdlg.dll, Shell.dll, Toolhelp.dll, and Winhelp.exe file
	have been replaced and prompts you to replace them. If you click Restore and
	then log on to the network, you receive a blue error screen and no programs
	appear in the Close Programs dialog box.
	
	CAUSE
	=====
	
	LAN WorkPlace replaces the Shell.dll file without checking its version. Windows
	95 requires the correct version of the Shell.dll file and cannot function
	without it. You can press CTRL+ALT+DEL to open the Close Programs dialog box and
	shut down Windows 95, but you can do nothing else. Before you extract the files
	mentioned below rename the existing copies in your Windows directory. This will
	prevent the files from being overwritten when you extract copies from the CD or
	floppies.
	
	RESOLUTION
	==========
	
	Follow these steps to restore Windows 95 to functionality:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, then choose Safe Mode Command Prompt Only from the Startup menu.
	
	2. Change to the drive containing your Windows 95 CD-ROM or original disks and
	  type the following commands. If you are using Windows 95 disks, make sure to
	  insert the appropriate disk in the floppy disk drive for each command
	
	  extract precopy1.cab /l <path>\system commdlg.dll
	  extract precopy1.cab /l <path>\system shell.dll
	  extract win95_03.cab /l <path>\system toolhelp.dll
	  extract win95_05.cab /l <path> winhelp.exe
	
	  where <path> is the full path for the Windows folder.
	
	If you receive the error message, "shell32.dll could not be loaded" you will also
	need to extract shell32.dll from win95_10.cab
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
