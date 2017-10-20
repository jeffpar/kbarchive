---
layout: page
title: "Q138127: How to Uninstall Windows 95"
permalink: /kb/138/Q138127/
---

## Q138127: How to Uninstall Windows 95

{% raw %}

	Article: Q138127
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kbsetup win95kbfaq
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to uninstall, or remove, Windows 95.
	
	MORE INFORMATION
	================
	
	Windows 95 has an Uninstall feature you can use to restore the previous version
	of Windows and MS-DOS on your computer. You can use this feature only if you
	upgraded an earlier version of Windows to Windows 95, and you chose to back up
	the system files during the upgrade.
	
	When you choose to back up the system files, the original Windows folder and all
	its files and folders are saved in a hidden, compressed file. The location of
	this file is specified in the "UnInstallDir=" line in the Msdos.sys file.
	
	To uninstall Windows 95, follow these steps:
	
	1. In Control Panel, double-click the Add/Remove Programs icon.
	
	2. On the Install/Uninstall tab, click Windows 95 in the list of programs, and
	  then click Add/Remove.
	
	3. In the dialog box that appears, click Yes.
	
	4. Click Yes to remove long filename support and check the hard disk.
	
	5. Click OK to shut down Windows 95 and continue.
	
	6. Remove any floppy disks from the floppy disk drives, and then press ENTER to
	  continue.
	
	Uninstall uses the following files:
	
	  Filename      Purpose
	  ----------------------------------------------------------------------
	  W95undo.dat   Contains a compressed backup of the Windows 3.x folder.
	  W95undo.ini   Contains a listing of files backed up in the W95undo.dat
	                file.
	  Msdos.sys     Contains an entry pointing to the location of the
	                W95undo.dat and W95undo.ini files.
	  Suhdlog.dat   Contains a copy of all Master Boot Records and Partition
	                Boot Records on the system both before and after the
	                upgrade to Windows 95. Used to restore the original
	                boot sectors.
	
	The backup system files Msdos.dos, Io.dos, Command.dos, Config.dos, and
	Autoexec.dos are also used to restore the original operating system.
	
	Note that there are three other methods you can use to uninstall Windows 95.
	These methods are:
	
	- Start you computer with a Windows 95 Startup disk and then run Uninstal.exe.
	
	- Start your computer to a command prompt, or to the previous operating system,
	  and then run Uninstal.exe.
	
	- Click the Start button, click Run, and then type "uninstal.exe" in the Open
	  box.
	
	REFERENCES
	==========
	
	For information about manually removing Windows 95, please see the "Microsoft
	Windows 95 Resource Kit."
	
	Additional query words: w95setfaq
	
	======================================================================
	Keywords          : kbsetup win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
