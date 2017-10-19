---
layout: page
title: "Q152313: XADM: Using the AT Backup Command with Microsoft Exchange"
permalink: /kb/152/Q152313/
---

## Q152313: XADM: Using the AT Backup Command with Microsoft Exchange

	Article: Q152313
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the AT command to automate your Online backup procedures. The AT
	command requires that the Schedule service is running on the NT Server.
	
	The AT command to run an online backup of the Microsoft Exchange Directory Store
	and Information Store is:
	
	  AT NTBACKUP BACKUP DS \\servername IS \\servername /B /T NORMAL
	
	-or-
	
	  AT <time> Batchfile
	
	MORE INFORMATION
	================
	
	The AT command ships with Windows NT and is located by default in the
	Winnt\system32 directory. The account that the schedule process is started by
	should have the proper access rights to the resources that you are trying to
	backup up (see NT System guide, Chapter 15, page 479 for more information). The
	AT scheduler requires the administrator logon. The default startup is System
	account which will restrict permissions to access network resources such as
	printers and shares.
	
	To fully utilize the AT command, modify the Schedule Startup in Control panel,
	Services to use "This Account" and use an Administrator equivalent account and
	password.
	
	Sample Batch File For On-line Backup:
	
	  rem ** 3/7/96  Backup Written by Joseph Pagano
	  rem ** This will backup the IS and DS on both WNTEXS1 and WNTEXD1.
	  ntbackup backup DS \\WNTEXS1 IS \\WNTEXS1 /v /d "WNTEXS1 IS-DS" /b /t
	  Normal /l c:\winnt35\backup.log /e
	  ntbackup backup DS \\WNTEXD1 IS \\WNTEXD1 /a /v /d "WNTEXS1 IS-DS" /b /t
	  Normal /l c:\winnt35\backup.log /e
	  exit
	
	Information on command line parameters is in the Microsoft Exchange
	Administration Guide, Chapter 15, page 462 and in the Books Online.
	
	Ntbackup.exe Switch Notes
	
	Note: In a batch file, limit the command line to 256 characters. Exceeding this
	limit might result in files not being backed up and might stop the process
	without any warning.
	
	The syntax for this command is as follows:
	
	  ntbackup operation path [/a][/v][/r][/d"text"][/b][/hc:{on | off}]
	  [/t{option}][/l"filename"][/e][/tape:{n}]
	
	Parameters:
	
	operation     - Specifies the operation, backup.
	Path          - If you are backing up a drive, specifies one or more paths
	               of the directories to be backed up. If you are backing up
	               Microsoft Exchange Server components, specifies the
	               component and the server using the following format:
	
	                   {DS server /IS server}
	
	               where Server is the name of the server you are backing up
	               preceded by two backslashes (for example, \\berkeley). DS
	               indicates that you are backing up the directory, and IS
	               indicates that you are backing up the information store.
	/a            - Causes backup sets to be added after the last backup set on
	               the tape. When /a is not specified, the program reuses the
	               tape and replaces previous data. When more than one drive
	               is specified but /a is not, the  program overwrites the
	               contents of the tape with the information from the first
	               drive selected and then appends the backup sets for the
	               remaining drives.
	/v            - Verifies the operation.
	/r            - Restricts access.
	/d "text"     - Specifies a description of the backup contents.
	/b            - Specifies that the local registry be backed up.
	/hc:on or     - Specifies that hardware compression is on or off.
	/hc:off
	/t {option}   - Specifies the backup type. Option can be one of the
	               following:
	
	                  Normal       - All selected files or Microsoft Exchange
	                                 Server components are backed up and
	                                 marked as such on the disk.
	                  Copy         - All selected files or Microsoft Exchange
	                                 Server components are backed up, but they
	                                 are not marked as such on the disk.
	                  Incremental  - Among the selected files or Microsoft
	                                 Exchange Server components, only those
	                                 that have been modified are backed up and
	                                 marked as such on the disk.
	                  Differential - The selected files or Microsoft Exchange
	                                 Server components that have been modified
	                                 are backed up, but they are not marked as
	                                 such on the disk.
	                  Daily        - Among the selected files, only those that
	                                 have been modified that same day are
	                                 backed up, but they are not marked as
	                                 such on the disk. This can be useful if
	                                 you want to take work home and need a
	                                 quick way to select the files that you
	                                 worked on that day. This option is not
	                                 available when backing up Microsoft
	                                 Exchange Server components.
	/l "filename" - Specifies the filename for the backup log.
	/e            - Specifies that the backup log include exceptions only.
	/tape:{n}     - Specifies the tape drive to which the files should be
	               backed up. N is a number from 0 to 9 that corresponds to
	               the tape drive number listed in the registry.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
