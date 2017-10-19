---
layout: page
title: "Q137245: Cannot Open or Compose Message in Windows Messaging"
permalink: /kb/137/Q137245/
---

## Q137245: Cannot Open or Compose Message in Windows Messaging

	Article: Q137245
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95kbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	NOTE: In this article, the term "Windows Messaging" refers to both
	Microsoft Exchange and Windows Messaging.
	
	SYMPTOMS
	========
	
	When you attempt to start Windows Messaging or Microsoft Outlook 97, or compose
	or open a message in Windows Messaging or Outlook 97, you may receive one of the
	following error messages:
	
	- EXCHNG32 caused an exception 05h in WMSFR32.DLL
	
	- EXCHNG32 caused an invalid page fault in module WMSFR32.DLL
	
	- EXCHNG32 caused an invalid page fault in module WMSUI32.DLL
	
	- Some information could not be read. Microsoft Exchange Client - 9992 -
	  [81002708]
	
	- The item could not be displayed. The object could not be found. Microsoft
	  Windows Messaging System Forms Registry - 13085 - [8004010F]
	
	- The item could not be displayed [80004005]
	
	- The item could not be displayed [81003355]
	
	- The command you specified could not be carried out. The object could not be
	  found. Microsoft Windows Messaging System Forms Registry - 13085 - [8004010F]
	
	- The command you specified could not be carried out. The form cache file
	  <frmcache> is not valid. Contact your administrator. Error code
	  0x81003364. Microsoft Windows Messaging System Forms Registry - 13156 -
	  [80040119]
	
	- The Mapi spooler has shut down unexpectedly.
	
	In addition, you may find that the long folder name associated with the Program
	Files\Microsoft Exchange folder is damaged or that the Program Files folder has
	been renamed to $!$!$!$!.$!$.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions exists:
	
	- The Wmsfr32.dll, Wmsui32.dll, or Frmcache.dat file is missing or damaged.
	
	- The long folder name associated with the Program Files\Microsoft Exchange
	  folder is damaged or the Program Files folder has been renamed to
	  $!$!$!$!.$!$.
	
	- The Exchange or MlSet values under the Hkey_Local_Machine\Software\ Microsoft
	  registry key are missing or damaged.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To resolve this issue, perform the following steps. After performing each step,
	check to see if the problem has been resolved.
	
	1. Verify that the Frmcache.dat file is not missing or damaged. To do so,
	  perform the following steps. Before performing each step, rename the
	  Frmcache.dat file in the Windows\Forms folder, if it exists. After performing
	  each step, check to see if the problem has been resolved.
	
	  a. Double-click the Mlset32.exe file in the Program Files\Microsoft Exchange
	     folder.
	
	  b. Copy the Frmcache.bak file in the Windows\Forms folder to Frmcache.dat.
	
	  c. Obtain a copy of the Frmcache.dat file from a computer on which Windows
	     Messaging is functioning properly and then copy the file to the
	     Windows\Forms folder on your computer.
	
	2. Verify that the Program Files\Microsoft Exchange folder exists. To do so,
	  attempt to locate the folder using Windows Explorer. If the folder name that
	  appears in Windows Explorer is Program Files\Micros~1 or Progra~1\Microsoft
	  Exchange, or if the Program Files folder has been renamed to $!$!$!$!.$!$,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q143395 Microsoft Exchange Folder Truncated to "Micros~1"
	
	3. Rename all copies of the Wmsfr32.dll and Wmsui32.dll files on your hard disk,
	  and then extract new copies of the Wmsfr32.dll and Wmsui32.dll files from
	  your original Windows 95 disks or CD-ROM to the Windows\ System folder. The
	  Wmsfr32.dll and Wmsui32.dll files are located in the Win95_06.cab cabinet
	  file on the Windows 95 CD-ROM or the Win95_07.cab cabinet file on disk 7 of
	  your original Windows 95 disks.
	
	  For information about using the Extract tool, type "extract" (without
	  quotation marks) at a command prompt, or see the following article in the
	  Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	  NOTE: If you have installed the Microsoft Exchange Update for Windows 95, you
	  should not extract new copies of the Wmsfr32.dll and Wmsui32.dll files from
	  your original Windows 95 disks or CD-ROM. After you rename all copies of the
	  files on your hard disk, you should reinstall the Microsoft Exchange Update
	  from the online source from which you originally installed it.
	
	4. Verify that the Exchange and MlSet values under the following registry key
	  are not missing or damaged:
	
	  Hkey_Local_Machine\Software\Microsoft
	
	  The Exchange value should have the following value:
	
	  C:\Progra~1\Micros~1\exchng32.exe
	
	  The MlSet value should have the following value:
	
	  C:\Progra~1\Micros~1\mlset32.exe
	
	  If either of these values is missing or incorrect, create or modify the value
	  manually.
	
	5. Remove and reinstall Microsoft Exchange. To do so, follow these steps:
	
	  a. In Control Panel, double-click Add/Remove Programs.
	
	  b. Click the Windows Setup tab and then click the Microsoft Exchange check
	     box to clear it. If you are prompted to remove Microsoft Fax also, do so.
	
	  c. Click OK.
	
	  d. After Microsoft Exchange is removed, remove all files in the Windows\Forms
	     folder and then restart Windows 95.
	
	  e. In Control Panel, double-click Add/Remove Programs.
	
	  f. Click the Windows Setup tab and then click the Microsoft Exchange check
	     box to select it. If you also removed Microsoft Fax, click that check box
	     to select it also.
	
	  g. Click OK.
	
	Microsoft Windows NT Server 4.0, Terminal Server Edition, version 4.0
	---------------------------------------------------------------------
	
	To resolve this problem with Terminal Server, copy the Frmcache.dat file from the
	%SystemRoot%\Forms folder to the %SystemRoot%\Profiles\ %username%\Windows\Forms
	folder.
	
	MORE INFORMATION
	================
	
	The Frmcache.dat file is created during the initial configuration of Windows
	Messaging, either by the Microsoft Exchange Setup Wizard or later when you add
	the first service. The Frmcache.dat file contains standard forms and other
	information that Windows Messaging uses to perform tasks such as displaying and
	sending messages. If the information associated with a particular task is
	missing or damaged, you receive an error message when you attempt to perform
	that task. If all other information in the file is not damaged, Windows
	Messaging appears to function properly when performing all other tasks.
	
	The size of a valid Frmcache.dat file is usually 16K or larger. Many programs add
	information to the Frmcache.dat file when they are installed, causing the file
	to increase in size. The Frmcache.bak file is created when the Frmcache.dat file
	is first created and is typically not modified when a program adds information
	to Frmcache.dat file. Therefore, if you replace the Frmcache.dat file with the
	Frmcache.bak file, any information added to the Frmcache.dat file is lost. This
	information must be replaced manually by reinstalling the program that
	originally added it.
	
	The following situations can cause the Frmcache.dat file to become damaged:
	
	- You backed up and restored the files on your computer, but long file names
	  were not recognized correctly. After the files were restored, the path for
	  the Program Files\Microsoft Exchange folder did not match the associated
	  registry entries.
	
	- Your computer contains a preinstalled copy of Windows 95. When an image of
	  Windows 95 is placed on a hard disk, Windows Messaging may appear to be
	  installed correctly, but the Frmcache.dat file may not have been created
	  correctly.
	
	The Microsoft Exchange Configuration Wizard (Mlset32.exe) is run for the first
	time when Windows Messaging is first installed. It can be used as a
	troubleshooting tool after Windows Messaging has been installed, but it is not
	always successful in rebuilding the Frmcache.dat file.
	
	Additional query words: corrupt form msn msnetwork
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	
	=============================================================================
	
