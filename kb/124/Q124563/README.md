---
layout: page
title: "Q124563: Canceling Tape Change Request Prevents Restore Operation"
permalink: /kb/124/Q124563/
---

## Q124563: Canceling Tape Change Request Prevents Restore Operation

	Article: Q124563
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a backup set transaction exceeds the first backup tape's capacity, Windows
	NT Backup (NTBACKUP.EXE) asks you to insert a second backup tape. If you cancel
	this request, any future attempts to restore files from the tape will fail when
	the restore operation requests the second tape (which was never created).
	
	CAUSE
	=====
	
	Since Windows NT Backup does not know how many volumes, directories and files
	will be backed up in a set when the backup begins, a special indicator at the
	end of the backup set shows that there is no more backup data associated with
	the set. The indicator also contains information that is not available until the
	backup is completed, such as the number of corrupt files backed up and
	information about the on tape catalog (OTC). OTCs are designed to store
	information about a tape family's data sets, and the objects in a given data
	set, in a readily accessible location. If the OTC is missing the standard
	restore action fails because it relies on the OTC to restore data.
	
	WORKAROUND
	==========
	
	To work around this problem run NTBACKUP with the /MISSINGTAPE parameter.
	
	The /MISSINGTAPE parameter causes Windows NT Backup to scan the entire family of
	tapes in order to get data set information. For more information on this
	parameter, see the Windows NT Backup help file.
	
	MORE INFORMATION
	================
	
	The OTC system is slower than a disk based catalog system because the tape has
	to be scanned for the OTC, and the contents have to be read. However, the OTC
	system is more convenient because it always accompanies the data it refers to
	and does not occupy the fixed disk space required by disk based catalogs.
	
	Additional query words: 3.50 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
