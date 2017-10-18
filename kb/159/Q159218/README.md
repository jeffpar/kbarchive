---
layout: page
title: "Q159218: Proper Backup of Open Files Using Ntbackup"
permalink: kb/159/Q159218/
---

## Q159218: Proper Backup of Open Files Using Ntbackup

	Article: Q159218
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0,4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Files may not be properly restored with a backup program (such as Windows NT
	Backup).
	
	CAUSE
	=====
	
	This problem can be caused by either of the following:
	
	- Corrupt file
	
	  Some third-party backup programs set the following value to 1 during setup
	  while Windows NT Backup sets this value to 0:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Ntbackup\Backup Engine\Backup files
	  inuse
	
	  Open files are generally in an inconsistent state and any attempt to back up
	  these files may cause corruption (for example, WINS and DHCP databases).
	
	- Missing file
	
	  If the value above is set to 0, the backup program skips open files;
	  therefore, some files may be missing when you restore from backup.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Perform one of the following to resolve this problem:
	
	- Set the following value to 0:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Ntbackup\Backup Engine\Backup files
	  inuse
	
	- Make sure a consistent file is available for backup before you start the
	  backup. To do this, perform one of the following:
	
	   - Application method
	     Use a utility for that application file that creates a good backup while
	     that file is open. For example, "rdisk -s" (without the quotation marks)
	     backs up the registry in the %SystemRoot%\Repair folder.
	
	     NOTE: When performing a remote backup of any server's registry, you must
	     run "rdisk -s" (without the quotation marks) or "rdisk /s-" (without the
	     quotation marks) on that server first because remote registries are not
	     available to be backed up over the network.
	
	   - System method
	     Close the files before backup (for example, stop logons, close current
	     sessions with existing clients, and stop all non-essential services). You
	     may be able to accomplish this by using the AT command or the Command
	     Scheduler (Winat.exe).
	
	   - Application and System method
	     The best approach may be to use both methods to make sure all data is
	     accessible from a backup and to test your plan fully before implementing
	     it.
	
	MORE INFORMATION
	================
	
	If the following value is 1, backup programs attempt to back up open files:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Ntbackup\Backup Engine\Backup files
	  inuse
	
	Additional query words: scheduler sbs backup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ450
	Version           : winnt:3.51,4.0,4.5
	Issue type        : kbhowto
	
	=============================================================================
	
