---
layout: page
title: "Q250392: Using the Viabackup Tool in Microsoft Metadirectory Services"
permalink: /kb/250/Q250392/
---

## Q250392: Using the Viabackup Tool in Microsoft Metadirectory Services

{% raw %}

	Article: Q250392
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Viabackup tool (Viabackup.exe) to back up the X500db database
	when your Microsoft Metadirectory Services (MMS) server is running and the
	database file is open. Viabackup blocks write operations to the Zoomserv folder
	while it is making backup copies. You can run Viabackup from a command prompt or
	as a scheduled event.
	
	You can view the current command-line option by running Viabackup.exe with a /?
	or -? command-line switch.
	
	- The -path command-line switch.
	  Specifies the path to which the copied files should be placed or restored. If
	  no path is specified, the files are copied to a Viabackup subfolder of the
	  Windows Temporary folder. For example:
	
	  viabackup.exe -path d:\mms\backups
	
	- The -restore command-line switch.
	  Restores the database from a set of backup files. If no path option is
	  specified, the files are copied to a Viabackup subfolder of the Windows
	  Temporary folder. For example:
	
	  viabackup.exe -restore -path d:\mms\backups
	
	- The -force command-line switch.
	  Backs up or restores all files, regardless of the time stamp. Typically,
	  Viabackup.exe performs an incremental backup (or restore) replacing only
	  those files that are different from those in the source (either in the Backup
	  folder or the Zoomserv folder). For example:
	
	  viabackup.exe -path d:\mms\backups -force
	
	MORE INFORMATION
	================
	
	Creating an Online Backup of MMS Server Data
	--------------------------------------------
	
	1. At a command prompt, change to the Zoomserv\Bin folder.
	
	2. Type the following command:
	
	  viabackup -path d:\backupfolder
	
	  NOTE: The path you specify is the drive letter and a folder where you want to
	  store the backup (make sure you have enough storage space).
	
	After you back up the files, the next backup you perform is an incremental
	backup. If you want to do another full backup, use the -force command-line
	switch.
	
	Restoring from Backup
	---------------------
	
	NOTE: You must stop MMS before restoring from backup.
	
	1. Stop MMS by typing the following command at a command prompt:
	
	  net stop "zoomit server"
	
	2. Change to the Zoomserv\Bin folder, and then type the following command:
	
	  viabackup -path d:\backupfolder -restore
	
	3. After the files are restored, start MMS by typing the following command:
	
	  net start "zoomit server"
	
	Note that the "viabackup -restore" command restores to the currently configured
	zoomserv folder. If you are restoring to a clean drive, you first need to run
	the "setupsvc -path f:\zoomserv" command.
	
	Additional query words: via zoomit timestamp
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
