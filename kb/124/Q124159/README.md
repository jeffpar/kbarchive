---
layout: page
title: "Q124159: Subsequent Backups Run Slower Than the First"
permalink: kb/124/Q124159/
---

## Q124159: Subsequent Backups Run Slower Than the First

	Article: Q124159
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
	
	If you Windows NT Backup (NTBACKUP) or a third-party backup program, and your
	Exabyte 8505 drive is set for No Compression, the second time you back up files
	it takes longer than it did the first time. This problem occurs regardless of
	which backup software you use.
	
	CAUSE
	=====
	
	The Exabyte 8505 drive is initialized for compression on the first backup even
	though No Compression is selected. Subsequent backups are not be performed with
	compression. This problem occurs with high performance EISA or local bus SCSI
	controller cards which support high data transfer throughput.
	
	WORKAROUND
	==========
	
	To work around this problem, turn on hardware compression for all backups. If
	you are running NTBACKUP, select Hardware Compression in the Backup dialog box.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt ntbackup.exe backupexec
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
