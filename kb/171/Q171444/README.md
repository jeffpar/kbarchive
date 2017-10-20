---
layout: page
title: "Q171444: Removing Windows NT from a Windows 95/98 Dual-Boot Installation"
permalink: /kb/171/Q171444/
---

## Q171444: Removing Windows NT from a Windows 95/98 Dual-Boot Installation

{% raw %}

	Article: Q171444
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2000,95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 09-AUG-2001
	
	*********************************************************************
	           NOTE: Use this information at your own risk.
	
	  This article contains information about configuring or using 
	  Windows 95 in a manner that has not been tested and is not 
	  supported by Microsoft Technical Support.
	
	  We suggest you back up your data before performing these steps. 
	  If the steps described in this article do not function properly, 
	  you may need to reinstall Windows 95 in order to restore your 
	  system to its previous state.
	
	*********************************************************************
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to remove the Windows NT Boot Loader to remove
	Windows NT from a dual-boot installation with Windows 95/98 and leave Windows
	95/98 as the bootable operating system.
	
	MORE INFORMATION
	================
	
	WARNING: Following these steps may lead to data loss if your computer currently
	has a virus or you have disk-management software installed on your hard disk
	(such as OnTrack Disk Manager or Micro House EZDrive) to allow you to access a
	larger hard disk than your computer's BIOS supports.
	
	NOTE: The following steps apply only to computers in which the boot drive (drive
	C) uses the FAT file system and Windows 95/98 is installed on the boot drive.
	
	1. Back up the critical data on your hard disk, and verify that the computer is
	  not infected with a virus.
	
	2. Boot the computer with your Windows 95 Startup disk. If you do not have a
	  Startup disk, you can create one. In Windows 95, double-click Add/Remove
	  Programs in Control Panel, click the Startup Disk tab, and then click Create.
	
	3. At the "A:" prompt, type "sys c:" (without the quotation marks), and then
	  press ENTER. You should see a "System transferred" message.
	
	4. Remove the Startup disk from the floppy disk drive, and then restart the
	  computer. Windows 95 should start.
	
	5. If you have completed the above steps successfully, you can remove the folder
	  containing Windows NT (typically C:\Winnt).
	
	6. You can delete the following files from the root folder:
	
	     Ntldr
	     Ntdetect.com
	     Boot.ini
	     Pagefile.sys (if present)
	     Bootsect.dos
	
	  All of these files except Ntldr are hidden. To view them, start My Computer,
	  click Options on the View menu, and then click Show All Files. To view file
	  name extensions, click the "Hide MS-DOS extensions for file types that are
	  registered" check box to clear it. Click OK.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWin98SEsearch kbOPKSearch kbZNotKeyword3 kbWin98 kbWin98SE kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:2000,95; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
