---
layout: page
title: "Q247060: Error Message in Ntbackup.exe When Starting to Read Tapes"
permalink: /kb/247/Q247060/
---

## Q247060: Error Message in Ntbackup.exe When Starting to Read Tapes

	Article: Q247060
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Backup (Ntbackup.exe), it attempts to read the tapes. If the
	format of a tape is not compatible with Ntbackup.exe, an access violation that
	generates a Dr. Watson error message may occur.
	
	CAUSE
	=====
	
	This behavior can occur if a tape contains an incompatible data format. Not all
	formats cause this behavior; some formats may generate an "unrecognized tape"
	error message instead.
	
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, use another tape without any incompatible
	backup sets or formats. Also, do not mix backup sets from different backup
	software.
	
	MORE INFORMATION
	================
	
	All tapes that are used to create a backup with Ntbackup.exe use a standard
	backup format called Microsoft Tape Format (MTF). MTF is also used in the
	Microsoft SQL Server 7.0 backup program. This feature enables SQL Server backups
	to coexist on the same media as backups that are not SQL Server backups (foreign
	backup sets), provided that the backups use MTF. For example, both SQL Server
	7.0 backups and Microsoft Windows NT backups can exist on the same media. This
	is not the case for the SQL Server 6.5 backup program, which uses a different
	format.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
