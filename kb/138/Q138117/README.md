---
layout: page
title: "Q138117: Err Msg: The Backup Set is Not Completely Cataloged"
permalink: /kb/138/Q138117/
---

## Q138117: Err Msg: The Backup Set is Not Completely Cataloged

{% raw %}

	Article: Q138117
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you catalog a tape in Windows NT Backup (NTBACKUP.EXE), the following error
	message appears:
	
	  The backup set is not completely cataloged
	
	CAUSE
	=====
	
	This problem occurs if the catalog file on the hard disk contains incomplete
	backup information.
	
	When you catalog a tape in Windows NT Backup, a file is created that contains the
	catalog information. The file name is the checksum of the backup set and the
	extension is *.Uxx (where xx is the number of the backup tape used during a
	backup session). As the system is cataloging the tape, Windows NT Backup creates
	three TEMP files called QTC_TEMP.000, QTC_TEMP.001, and QTC_TEMP.002. Arcada
	BackupExec for NT 6.0 functions the same way.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Close and restart Windows NT Backup.
	
	  -or-
	
	- Locate a file with the .Uxx extension (where xx is the number of the backup
	  tape used during a backup session) in the %SystemRoot%\SYSTEM32 directory.
	  Rename or delete the file and re-catalog the tape.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
