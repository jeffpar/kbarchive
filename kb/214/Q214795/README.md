---
layout: page
title: "Q214795: How to Back Up and Restore a Print Server Configuration"
permalink: kb/214/Q214795/
---

## Q214795: How to Back Up and Restore a Print Server Configuration

	Article: Q214795
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Printer Migrator (Printmig.exe) utility, included in Windows NT
	4.0 Resource Kit Supplement 3, allows you to back up or restore a print server
	configuration. Configuration data is written to the Pm.cab file using the
	Microsoft Cabinet (CAB) file format. The Printmig.exe tool also saves current
	server status information to the Pm.log file. Both files are contained in the
	default folder, <%Systemroot%>\System32\Spool\Pm. The following data is
	written to the Pm.cab file:
	
	- Printers: all defined queues.
	
	- Print monitor ports.
	
	- Printer Migrator recognizes and backs up the following ports:
	
	   - Hewlett-Packard Network Port
	
	   - LexMark MarkVision Port Monitor (IP/DLC)
	
	   - Jet Admin
	
	   - LPR Port
	
	   - Local Ports
	
	   - Digital Network Port
	
	   - AppleTalk Port Monitor
	
	- Print Drivers: x86, Alpha, Mips, PPC.
	
	- Share Point information: All Share point information, including file and
	  printer shares.
	
	NOTE: Printer Migrator does not back up the actual printer monitor, only the
	defined ports. After you complete a restore operation, reinstall the original
	set of port monitors to ensure complete functionality.
	
	
	MORE INFORMATION
	================
	
	Performing a Print Server Backup
	--------------------------------
	
	To perform a print server backup, follow these steps:
	
	1. On the Actions menu, click Backup.
	
	2. In the Target Server box, type the NetBIOS name of the computer to back up.
	  If you leave this box blank, Printer Migrator backs up the local computer.
	
	3. In the CAB storage folder box, you can type the folder where the backup files
	  will be stored. The default folder is <%Systemroot%>\System32\Spool\Pm.
	
	4. Click OK.
	
	Printer Migrator then writes the printer configuration data to the Pm.cab file.
	This file may contain driver files, registry information, and any other files
	contained in the Printer Migrator folder, with the exception of old Pm.cab or
	Pm.log files.
	
	Restoring a Print Server
	------------------------
	
	To restore a print server, follow these steps:
	
	1. On the Actions menu, click Restore.
	
	2. Type the file name of the Pm.cab file to be used for the restore in the File
	  name box.
	
	3. Type the NetBIOS name of the destination computer in the Target Server box.
	  If you leave this box blank, Printer Migrator restores to the local computer.
	
	NOTE: Printer Migrator temporarily stops both the Windows NT Spooler service and
	the Print Service for Macintosh service (if installed) on the target computer to
	restore the print queue information. Before running the Restore command on a
	print server, make sure that:
	
	- The backup computer and the target computer are both running the same
	  operating system and belong to the same CPU family (x86, Alpha, and so on).
	
	- Print monitor information is consistent between the backup and target
	  computer. If a monitor has not been installed on the target computer, Printer
	  Migrator displays a warning to remind you to install the monitor or service
	  and then run the restore command again.
	
	- You have administrative rights on the target computer.
	
	During the restore process, the Printer Migrator utility display a progress
	report. The contents of this report are saved in the Pm.log file.
	
	Enumerating Remote Target Command
	---------------------------------
	
	To enumerate (list) a remote computer's queue information in the utility's
	display window, follow these steps:
	
	1. On the View menu, click Target.
	
	2. In the Target Server box, type the NetBIOS name of the target server, and
	  then click OK.
	
	3. On the View menu, click Restore Local.
	
	The utility's title bar identifies the computer for the corresponding tree view.
	This computer is the target of all subsequent operations until you change the
	entry in the Target Server box. All the information that is displayed is saved
	during the backup procedure and includes the following:
	
	- Printer queue data
	
	- Print driver data
	
	- Print monitor data
	
	- Print port data
	
	- Print processor data
	
	Disabling the Progress Report
	-----------------------------
	
	The lower pane of the Printer Migrator window displays a continuous progress
	report of backup and restore activities including .cab compression, .cab folder
	placement, status of related services, and warning messages given. By default,
	this report is stored in the Pm.log text file in the Printer Migrator folder. To
	disable saving progress information to a log file, do the following:
	
	- On the Options menu, click Log To Text.
	
	NOTE: You can use a standard text editor, such as Microsoft Notepad, to view the
	contents of the Pm.log file.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q255187 Migrating a Print Server Between Windows NT 4.0 Server Computers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Hardware          : ALPHA MAC MIPS x86
	Issue type        : kbhowto
	
	=============================================================================
	
