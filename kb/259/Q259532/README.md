---
layout: page
title: "Q259532: The X500.db File Is Not Found on Tape Backup"
permalink: kb/259/Q259532/
---

## Q259532: The X500.db File Is Not Found on Tape Backup

	Article: Q259532
	Product(s): Microsoft Windows NT
	Version(s): 2.1; winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool metadirectory MMS
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The X500.db database file may not be backed up to tape using Windows NT Backup
	under the following conditions:
	
	- If you use Windows NT Backup as the only form of backup for the Zoomserv
	  directory.
	
	- If you do not stop the Microsoft Metadirectory Services (MMS) server before
	  you back up the Zoomserv directory.
	
	CAUSE
	=====
	
	This behavior occurs if the X500.db database file is open during the backup
	process. If Windows NT Backup is used exclusively on the Zoomserv directory
	while the MMS server is running, the x500.db file is in an open state and is not
	backed up to tape.
	
	NOTE: The Windows NT Backup tool does not back up open files by design.
	
	RESOLUTION
	==========
	
	To work around this behavior, use the appropriate method:
	
	- Use the Viabackup tool to back up your MMS server.
	
	- Stop the Zoomit service before running your backups. You can do this
	  programmatically.
	
	NOTE: If these methods do not work, you can use the Viabackup tool to back up the
	Zoomserv directory to a backup directory. After the Viabackup tool backs up the
	Zoomserv directory to another location, you can use the Zoomserv directory to
	back up the copy of the Zoomserv directory.
	
	MORE INFORMATION
	================
	
	For additional information about the Windows NT Backup tool, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q104169 Files Skipped with Windows NT Backup
	
	For additional information about the Viabackup tool, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q250392 Using the Viabackup Tool in Microsoft Metadirectory Services
	
	Additional query words: via
	
	======================================================================
	Keywords          : kbtool metadirectory MMS 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbMMSSearch kbMMS210
	Version           : :2.1; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
