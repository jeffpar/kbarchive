---
layout: page
title: "Q159838: XADM: Procedure Used During Backup"
permalink: kb/159/Q159838/
---

## Q159838: XADM: Procedure Used During Backup

	Article: Q159838
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines a typical procedure to automatically back up two databases
	of Microsoft Exchange Server.
	
	MORE INFORMATION
	================
	
	To back up data:
	
	1. Call HrBackupPrepare to get a client-side context handle and to specify the
	  backup method. In this call, specify the type of backup that will be
	  performed: Full or Logs Only (Logs Only is for differential or incremental
	  backups). Under certain situations, a differential or incremental backup may
	  not be possible. These situations include times when a full has not been
	  performed since a defragmentation or migration has been performed on the
	  database, transaction log files are out of sequence on the disk, or Circular
	  Logging is enabled on the database. If HrBackupPrepare fails for the type of
	  backup you wish to perform, a full backup should be performed before retrying
	  a differential or incremental backup.
	
	2. Perform this step for full backups only. Call HrBackupGetDatabaseNames to get
	  a list of the files to backup. These files cannot be backed up using normal
	  file copy routines and must be backed up using HrBackupOpenFile and
	  HrBackupRead. Each file returned will be preceded by a one-byte token
	  (defined in EDBBCLI.H) that indicates the type of file. Save this token along
	  with the data backup so it can be matched with the proper directory returned
	  by HrRestoreGetDatabaseLocations at restore time.
	
	3. Perform this step for full backups only. Call HrBackupOpenFile to open the
	  file for each file in the list returned by HrBackupGetDatabaseNames. When the
	  file has been successfully opened, call HrBackupRead to read the data in that
	  file. When the file has been read and stored to the desired location, call
	  HrBackupClose.
	
	4. This step should be performed for full backups only. Release the memory
	  returned by HrBackupGetDatabaseNames by calling BackupFree on it.
	
	5. Call HrBackupGetBackupLogs to get a list of transaction log files to backup.
	  These files are all located in the current log file path (configurable in
	  Microsoft Exchange Administrator). If you are performing a full backup, one
	  of the files returned in this list will be a patch file. This patch file
	  contains the changes that occurred to the database while the backup was
	  running. As with the files returned by HrBackupGetDatabaseNames (step 2),
	  each file returned by HrBackupGetBackupLogs will be preceded by a token
	  indicating the file type which should be saved and matched with tokens
	  returned by HrRestoreGetDatabaseLocations at restore time.
	
	6. Call HrBackupOpenFile, HrBackupRead, and HrBackupClose for this list of files
	  in the same manner as step 3.
	
	7. Release the memory returned by HrBackupGetBackupLogs by calling BackupFree on
	  it.
	
	8. This step should be performed for full and incremental backups only (not
	  differential). Call HrBackupTruncateLogs to delete the log files.
	
	  NOTE: Do not call HrBackupTruncateLogs if the backup is unsuccessful. If you
	  call HrBackupTruncateLogs and you don't have a successful backup, your
	  database will not be recoverable if it is interrupted before a clean
	  shutdown.
	
	9. Call HrBackupEnd to release the backup context.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
