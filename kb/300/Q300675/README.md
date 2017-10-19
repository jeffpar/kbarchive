---
layout: page
title: "Q300675: HOW TO: Create a Metabase Backup by Using IIS in Windows NT"
permalink: /kb/300/Q300675/
---

## Q300675: HOW TO: Create a Metabase Backup by Using IIS in Windows NT

	Article: Q300675
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 09-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - IIS 4.0 Administrative Metabase Backup
	
	SUMMARY
	=======
	
	This step-by-step instruction guide describes how to create a metabase backup by
	using Internet Information Server (IIS) 4.0, to recover administrative
	settings.
	
	IIS 4.0 Administrative Metabase Backup
	--------------------------------------
	
	The metabase is a structure that stores IIS configuration settings. It performs
	some of the same functions as the Windows registry, but is specific to IIS. The
	IIS metabase is a large and complicated structure that contains vital
	information about your Internet sites. Backing up the metabase is a relatively
	easy task, so that you can easily protect that important data. To create an
	administrative backup of the IIS 4.0 metabase:
	
	1. Click Start, point to Programs, and then click Windows NT 4.0 Option Pack.
	  Click Microsoft Internet Information Services, and then click Internet
	  Services Manager.
	
	  IMPORTANT: Do not click HTML.
	
	2. Right-click the name of your computer.
	
	3. On the shortcut menu, click Backup/Restore Configuration to display a dialog
	  box that you can use to make a backup of the IIS 4.0 metabase for that
	  computer.
	
	4. Click Create Backup, and then type a name for this backup.
	
	  NOTE: The backup name cannot contain any symbols, only letters or numbers.
	
	5. Click OK to quickly back up the administrative settings in the metabase. The
	  backup name, date, and time are listed in the Previous Backups dialog box.
	
	6. Click Close to close IIS. Your metabase administrative backup is now
	  complete.
	
	7. Read the following "Pitfalls" section for a description of what you can use
	  this backup for.
	
	NOTE: The default location of the backup is the
	C:\Winnt\System32\Inetsrv\MetaBack folder. If you want to save your backup to
	another location, copy the file from the default location to the location that
	you want to use. Make sure that you keep a copy in the default location so that
	you can restore the backup more easily. (This location path assumes that drive C
	is your system root; if drive C is not your system root, replace C with the
	appropriate drive letter.)
	
	 Pitfalls
	--------
	
	There are some important limitations to this process that you need to familiarize
	yourself with, in case a problem occurs and you need to rely on your backup:
	
	- You cannot restore the metabase backup to another installation of Windows NT.
	  As useful as this might be, you cannot use this feature to clone one IIS
	  configuration to another server in your Web farm.
	
	- More importantly, if you lose your entire server and need to re-install the
	  operating system, you cannot recover your IIS configuration from this backup.
	
	In other words, this backup is not appropriate for disaster recovery. The
	metabase backup and restoration functionality is best suited for versioning
	purposes and recovering from the administrative mistakes that continue to plague
	Web masters, whether those mistakes occur as the result of attempted
	optimizations (that have the opposite effect) or simple point-and-click errors.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
