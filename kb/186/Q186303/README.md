---
layout: page
title: "Q186303: NTbackup Reports Drive Verify as Informational or Error Message"
permalink: kb/186/Q186303/
---

## Q186303: NTbackup Reports Drive Verify as Informational or Error Message

	Article: Q186303
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NTBackup generates one the following messages in the Application Event Log when
	Verify After Backup is selected:
	
	  ID : 8009
	  Source : NTBackup
	  Type : Information
	  Category : None
	  Decription : End Verify to 'C.'
	
	-or-
	
	  ID : 8009
	  Source : NTBackup
	  Type : Error
	  Category : None
	  Decription : End Verify to 'C.'
	
	MORE INFORMATION
	================
	
	When NTbackup verifies files after a backup, it logs an event to the Application
	Event Log on completion. If there are no differences noted in the files on the
	tape versus the files on the drive, then the Event Type will be informational.
	If there are differences noted in the files on the tape versus the files on the
	drive, then the Event Type will be error. If the Event Type is error, more
	information can be obtained in the Backup.log file. Enable Full Detail logging
	to generate detailed information about the differences that were detected.
	
	An error does not necessarily mean that the file is corrupt. It can indicate that
	changes were made to the file or that files have been deleted or added since the
	backup was completed. Depending on the environment that is being backed up,
	multiple error messages of type 8009 can be common. However, it is good practice
	to monitor your backups and ensure that they complete successfully.
	
	Additional query words: event red blue
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
