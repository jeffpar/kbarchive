---
layout: page
title: "Q296787: XADM: Offline Backup and Restore Procedures for Exchange Server"
permalink: /kb/296/Q296787/
---

## Q296787: XADM: Offline Backup and Restore Procedures for Exchange Server

	Article: Q296787
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	These instructions focus on methods for bypassing the online backup APIs and
	manually backing up and restoring Exchange Server information store databases.
	Backing up the directory service database is a similar process. Occasional
	exceptions and differences are pointed out in the instructions as they occur.
	
	For additional information on offline and snapshot backups, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q237767 XADM: Understanding Offline and Snapshot Backups
	
	  Q296788 XADM: Offline Backup and Restoration Procedures for Exchange 2000
	  Server
	
	The instructions in this article assume that you are running Exchange Server 5.5
	Service Pack 1 (SP1) or later. Earlier versions of Eseutil and Edbutil do not
	provide access to the information in Exchange Server transaction log file
	headers. It is possible to back up and restore all versions of Exchange Server
	offline, but without access to log headers, you cannot reliably verify that all
	restored database and log files are matched with each other. With versions of
	Exchange Server earlier than 5.5 SP1, you must keep track of the history of
	backed up files to determine which files belong together, and you cannot
	troubleshoot log file replay problems simply by a cold examination of the
	available file set.
	
	MORE INFORMATION
	================
	
	Before You Begin
	----------------
	
	XADM: Understanding Offline and Snapshot Backups Before you perform an offline
	backup, you first need to know the following:
	
	- Whether or not circular logging is enabled.
	
	  To find this information, open the properties of the <Server_name>
	  object in the Exchange Server Administrator program, and click the Advanced
	  tab. To disable circular logging, click to clear the Circular Logging check
	  box. This causes the database service to stop and restart, interrupting
	  service.
	
	  You do not need to disable circular logging to perform offline backups. You
	  must disable circular logging if you want to replay transaction logs into
	  restored offline backups.
	
	- The full path for the locations of your Exchange Server database, transaction
	  log, and checkpoint files.
	
	  To find this information, open the properties of the <Server_name>
	  object in the Administrator program, and click the Database Paths tab. There
	  are up to seven locations that you need to record:
	
	   - Private Information Store Database (Priv.edb)
	   - Public Information Store Database (Pub.edb)
	   - Information Store Transaction Logs (Edb*.log)
	   - Information Store Working Path (Edb.chk)
	   - Directory Database (Dir.edb)
	   - Directory Transaction Logs (Edb*.log)
	   - Directory Working Path (Edb.chk)
	
	If the Administrator program is unavailable, you can read the paths directly from
	the system registry on the Exchange Server computer under the following registry
	keys.
	
	Information store:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	  Directory service:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeDS\Parameters
	
	To successfully replay transaction logs, you must restore database (*.edb) files
	to the same path locations from which they were backed up. For example, if you
	backed up the database from the E:\Mdbdata folder, you must also restore it to
	the E:\Mdbdata folder, even if you are restoring the database to an entirely
	different server (as you might do in a single mailbox recovery situation).
	
	If you have changed a database path since the last backup, you can only achieve a
	partial replay of transaction logs, and then only if you set the path back to
	the original location before replay begins. Reverting to the old path allows the
	replay of logs up until the point of the path change.
	
	You can restore transaction log files (Edb*.log) to a different path than the
	original backup location because transaction logs record the locations of the
	databases they are attached to, but databases do not record the locations of
	transaction logs. During replay, the logs "find" the databases using path
	information stored in the transaction log headers. (Database path changes are
	compensated for internally by the online backup API, and so this limitation does
	not apply.)
	
	You will neither back up nor restore the checkpoint file (Edb.chk), but you must
	know the current location of the checkpoint file because you may need to examine
	it or delete it during recovery.
	
	How Exchange Server Database Files Relate to Each Other
	-------------------------------------------------------
	
	The *.edb files are the final repository for all database information. As changes
	are made to the database, the changes are first written to the current
	transaction log file (Edb.log), and then to an in-memory cache. As soon as
	changes are present in the cache, they become visible to end users. Pages in the
	cache are flushed to the database file when it is convenient to do so. The
	checkpoint marks the point in the log file sequence up to which all transactions
	have been physically flushed to the database file. It is normal for the
	checkpoint to lag three or more log files behind Edb.log.
	
	Transaction logs are a uniform 5 megabytes (MB) in size. When the current log
	file is full, it is renamed with a hexadecimal sequence number, called the log
	generation number, and a new Edb.log file is generated. Log files are numbered
	as Edb00001.log, Edb00002.log, and so on. Throughout this article, numbered log
	files will be designated generically as Edbxxxxx.log.
	
	If a database is stopped abnormally, the checkpoint file (Edb.chk) records the
	transaction log from which soft recovery must begin replay to restore the
	database to consistency. This process is called "soft recovery." It can be
	contrasted with "hard recovery," which is the process by which log files are
	replayed after restoration of an online backup. The most important difference
	between soft and hard recovery is the interpolation of patch file data into the
	log file replay process during hard recovery.
	
	An inconsistent Exchange Server database file is simply one which has not had all
	outstanding transactions written to it yet. During normal operation, Exchange
	Server database files are inconsistent because there is information in the cache
	that has not yet been physically written to the file. In general, an Exchange
	Server database file set can be considered consistent only after a normal
	shutdown of the database service. Nonetheless, the database taken as a whole
	(considered as the sum of the information in both the transaction logs and
	database files) is always consistent unless needed log files are prematurely
	deleted.
	
	Backing Up an Exchange Server Database Offline
	----------------------------------------------
	
	1. Stop the service for the database that you want to back up (either the
	  information store service or the directory service).
	
	2. Verify that the main database files are consistent. The main database file
	  for the directory service is the Dir.edb file. The main database files for
	  the information store are the Priv.edb and Pub.edb files. (Not all Exchange
	  Server computers have both databases.) At a command prompt, run the following
	  command:
	
	  eseutil /mh <database name> | find /i "consistent"
	
	  The following is a sample result:
	
	  
	
	  E:\mdbdata>eseutil /mh priv.edb | find /i "consistent"
	            State: Consistent
	  Last Consistent: (4815,7337,362)  8/6/1999 20:46:33
	
	  E:\mdbdata>eseutil /mh pub.edb | find /i "consistent"
	            State: Consistent
	  Last Consistent: (4815,7337,400)  8/6/1999 20:46:34
	
	  If the database reports "State: Inconsistent," it was not shut down cleanly.
	  Restart the database, and then shut it down again. If the state is still
	  inconsistent, contact Microsoft Product Support Services (PSS) for further
	  assistance.
	
	3. Copy each *.edb file to a backup location.
	
	4. Restart the database service.
	
	5. (Optional) If circular logging is enabled, skip this step. If circular
	  logging is disabled, and you want to "roll forward" later, then you must back
	  up all numbered transaction log files (the Edbxxxxx.log files). Do not back
	  up the Edb.log, Res1.log, and Res2.log files.
	
	  You may back up numbered log files at any convenient time, even immediately
	  after creation, because after a log file has been renamed from Edb.log to
	  Edbxxxxx.log, Exchange Server never again alters it. But you should
	  permanently delete backed up log files only according to the instructions in
	  step 6.
	
	  You should not think of your log file backups as having a one-to-one
	  correspondence with your database backups. Each log file backup is a link in
	  a chain of log files that may be playable against any of several different
	  database backups. You can roll forward from a particular database backup as
	  long as you have an unbroken stream of logs starting with the log listed in
	  the "Last Consistent" line of the database's header. The Last Consistent log
	  will also be referred to in this article as the "anchor log."
	
	  If you refer to the preceding example, the Last Consistent log designation is
	  (4815,7337,400). The three numbers designate a log file, a page in that log
	  file, and a byte offset into that page. Each log file contains approximately
	  10,000 pages of 512 bytes each. The page offset gives you a good idea of how
	  close to being full the log file is (this one is about three quarters full),
	  but is irrelevant to recovery. Recovery always starts at the beginning of a
	  log file.
	
	  The Last Consistent log number in this example is decimal 4815. While this
	  number is stored as a decimal number inside the database header, log files
	  are numbered hexadecimally. To calculate the actual Last Consistent log, you
	  must convert the log number listed in the header to its hexadecimal
	  equivalent, which is 12FC in this case. Exchange Server transaction log files
	  are named Edbxxxxx.log, where xxxxx is five hexadecimal digits padded with
	  leading zeroes if necessary. In this example, the log file is Edb012fc.log.
	
	  TIP: To convert from decimal to hexadecimal, start the Calc.exe utility. In
	  the Calc utility, click View, and then click Scientific. Type a decimal
	  number, and then click Hex to convert it.
	
	  You may not always see the Last Consistent log on disk as a numbered log,
	  because it may still be named Enn.log. You can see the number that the
	  Edb.log file will eventually be given by examining the log file header while
	  the database is stopped (access is denied to the Edb.log header while the
	  database is running).
	
	  To view the internal log generation number, run the following command:
	
	  eseutil /ml <log file> | find /i "lGeneration"
	
	  The following is a sample result:
	
	  
	
	  E:\mdbdata>eseutil /ml edb.log | find /i "lgeneration"
	     lGeneration (4815)
	
	  Ensuring that your log file backups are good is, in many circumstances, more
	  important than ensuring that each database backup is good because each
	  database backup can provide redundancy for the others, but full recovery from
	  any database backup is dependent on preservation of each and every log file
	  since the backup.
	
	6. (Optional) Skip this step if circular logging is enabled. Examine the header
	  of the checkpoint file to discover the highest log file that can be safely
	  removed. The checkpoint tracks the lowest log file that is needed for
	  automatic recovery if the database is abnormally stopped. To examine the
	  checkpoint, run the following command:
	
	  eseutil /mk edb.chk
	
	  The following is a sample result:
	
	  
	
	  C:\mdbdata>eseutil /mk edb.chk | find /i "checkpoint"
	     Checkpoint file: edb.chk
	     LastFullBackupCheckpoint (0,0,0)
	     Checkpoint (4815,8924,112)
	
	  The third line is the checkpoint line; the LastFullBackupCheckpoint entry is
	  used by online backup, and remains set to all zeroes if an online backup is
	  never performed against the database. The Checkpoint log position format
	  (fourth line) is the same as for the Last Consistent entry in the database
	  header. In this example, the checkpoint is in Edb012fc.log (0x12FC is 4815
	  decimal).
	
	  If circular logging is disabled, log files accumulate until they are either
	  manually deleted or removed automatically by the online backup process. If
	  circular logging is enabled, no special management of old log files is
	  required because the database service automatically deletes them after the
	  checkpoint has passed through them.
	
	  After you back up all numbered log files, you may reclaim disk space by
	  removing all numbered log files up to but not including the checkpoint log.
	  In this example, you could remove all logs up to Edb012fb.log.
	
	- (Optional) Verify the page-level integrity of the copied databases using the
	  Esefile utility.
	
	  The Esefile.exe file is available in the Support folder on the Exchange Server
	  5.5 Service Pack 3 CD, or on the Microsoft Exchange 2000 Server installation
	  disc, or from PSS. The Esefile utility works for Exchange Server 5.0, 5.5, or
	  2000 .edb files.
	
	  The Esefile utility command to verify the page checksums for an Exchange
	  Server 5.0 database is:
	
	  esefile /x <database name>
	
	  The Esefile utility command to verify the page checksums for an Exchange
	  Server 5.5 database is:
	
	  esefile /s <database name>
	
	  The following is a sample result:
	
	  
	
	  E:\mdbdata>esefile /s priv.edb
	
	  Checksumming
	  0    10   20   30   40   50   60   70   80   90  100
	  |----|----|----|----|----|----|----|----|----|----|
	  ...................................................
	
	  23042 pages seen
	  0 bad checksums
	  241 uninitialized pages
	  0 wrong page numbers
	
	  esefile completes successfully after 10 seconds
	
	  Uninitialized pages are acceptable, but in a healthy database, there are 0 bad
	  checksums and 0 wrong pages numbers.
	
	  If a database does not pass the Esefile utility integrity check, your best
	  option is to restore a previous backup that you know to be good, and to roll
	  the database forward. If such a backup is not available, consult PSS for
	  advice on repairing or salvaging the database.
	
	Restoring an Offline Backup of an Exchange Server Database
	----------------------------------------------------------
	
	This section describes two ways to restore an offline backup:
	
	- "Point in time" restoration. No log files are replayed into the database. All
	  data created after the backup is lost.
	
	- "Roll forward" restoration. The log files created after the backup are played
	  into the database. If all log files are available, all data created since the
	  backup can be preserved. If circular logging is enabled, you must perform a
	  "point in time" restoration; you cannot choose a "roll forward" restoration.
	
	In summary, the file set you restore must meet the following minimum criteria:
	
	- For point in time restorations, you must remove all files from the working
	  path, transaction logs path, and database paths for the database before
	  restoring backed up databases.
	
	- For "roll forward" restorations, an unbroken series of log files starting
	  with the anchor log must be present, with the highest log in the series named
	  or renamed Edb.log. The checkpoint file must be deleted.
	
	"Point in Time" Restoration of an Offline Backup:
	
	1. Stop the database service, and then move--do not delete--the checkpoint file
	  and all transaction logs for the database that you intend to restore. The
	  presence of any of these files may prevent the restored database from
	  starting, or may even damage it.
	
	2. Restore the backed up database file (either the Priv.edb and Pub.edb
	  databases, or the Dir.edb database) to the appropriate database folder. Do
	  not restore any Edb*.log files. At this point, the only files present in the
	  database folders are consistent copies of the main database files
	  themselves.
	
	  NOTE: If a copy of the database to be restored already exists on the server,
	  back it up before restoring, even if you cannot start the existing file. It
	  may be repairable, and you may be able to use the Exmerge utility to salvage
	  data from it.
	
	3. Start the database service. If you are restoring an information store
	  database, the database will in most cases fail to start, reporting an event
	  1087 or an error 1011. This is normal, and indicates only that the
	  information store and directory databases need to be synchronized. If this
	  happens, at a command prompt, run the following command:
	
	  \exchsrvr\bin\isinteg.exe -patch
	
	  This command resynchronizes the information store and the directory service.
	  The patch process usually takes only several minutes, even against a very
	  large mailbox database.
	
	  NOTE: For public information store databases with large numbers of folders in
	  the hierarchy, the patch process may take considerably longer. In general,
	  expect patching to take at least a minute for every 1,000 folders in the
	  hierarchy.
	
	  After patching has completed, start the database again.
	
	  NOTE: Do not run the isinteg -patch command in anticipation of a startup
	  problem. Only run it after an event occurs advising you to do so. In rare
	  circumstances, if you run the isinteg -patch command before the service has
	  detected that it should be done, you may damage the database.
	
	  Because you started this database in the absence of any log files, a new
	  series of log files, starting with the Edb00001.log file, is generated. After
	  the database has been successfully started, no previously existing log files
	  can ever be replayed into it.
	
	"Roll Forward" Restoration of an Offline Backup:
	
	To have the best chance of full success in replaying log files into a restored
	database, follow these guidelines:
	
	- Preserve a copy of all transaction logs created since the time of your oldest
	  full backup.
	
	- Do not change a database path without making a new full backup immediately
	  afterward.
	
	- Do not run eseutil /p or /d without making a new full backup immediately
	  afterward (for Exchange Server 4.0 and 5.0, do not run edbutil /d or edbutil
	  /d /r).
	
	- Do not add or remove a database on the server without immediately making a
	  full backup of all databases on the server.
	
	To begin the restoration process:
	
	1. If the database service is started, stop it, and then copy the database files
	  that you intend to restore to the current database paths on the server.
	
	  NOTE: If copies of the database files to be restored still exist, back them up
	  before restoring, even if you cannot start the existing files. They may be
	  repairable, and you may be able to use the Exmerge utility to salvage data
	  from them.
	
	2. Run the following command against each database file, restored or previously
	  existing on the server:
	
	  eseutil /mh <database filename> | find /i "consistent"
	
	  The following is a sample result:
	
	  
	
	  E:\mdbdata>eseutil /mh priv.edb | find /i "consistent"
	
	            State: Consistent
	  Last Consistent: (4815,7337,362)  8/6/1999 20:46:33
	
	  E:\mdbdata>eseutil /mh pub.edb | find /i "consistent"
	            State: Consistent
	  Last Consistent: (4815,7337,400)  8/6/1999 20:46:34
	
	  The purpose of this step is twofold:
	
	   - To verify that the database files are each consistent.
	
	   - To identify the anchor log file, which is the first log file required to
	     begin log file replay. The lower Last Consistent value in either of the
	     databases defines the low anchor log. Last Consistent values will be the
	     same for both databases if you backed both up at the same time.
	
	  You can calculate the anchor log file from the first value in parentheses on
	  the "Last Consistent" line (4815, in this example). Convert this number from
	  decimal to hexadecimal. Decimal 4815 is equivalent to hexadecimal 12CF.
	  Because Exchange Server transaction log files are named Edbxxxxx.log, where
	  xxxxx is five hexadecimal digits padded with leading zeroes, the first log
	  file you need is the Edb012cf.log file.
	
	  TIP: To convert from decimal to hexadecimal, start the Calc.exe utility. In
	  the Calc utility, click View, and then click Scientific. Type a decimal
	  number, and then click Hex to convert it.
	
	3. Verify that the log signature recorded in each database header is the
	  signature of the anchor log. Run the following commands:
	
	  eseutil /mh <database name> | find /i "log signature"
	
	  eseutil /ml <last consistent log> | find /i "signature"
	
	  The following is a sample result:
	
	  
	
	  D:\mdbdata>eseutil /mh priv.edb | find /i "Log Signature"
	   Log Signature: Create time:12/29/2000 21:6:38 Rand:24842 Computer:
	
	  D:\exchsrvr\mdbdata\save>eseutil /ml edb012cf.log | find /i "Signature"
	     Signature: Create time:12/29/2000 21:6:38 Rand:24842 Computer:
	     Signature: Create time:12/29/2000 21:6:40 Rand:67798 Computer:
	     Signature: Create time:12/29/2000 21:6:41 Rand:58314 Computer:
	
	  A log file may report several signatures. The first one is always the log
	  file's own signature; the rest are databases that were running at the time
	  the log file was created. In the preceding example, the log signature
	  recorded in the database file matches the log signature in the Last
	  Consistent log.
	
	  IMPORTANT: If you cannot locate the anchor log file, do not replay any log
	  files. If you skip the anchor log file and force replay to begin at a
	  subsequent log file, you will almost certainly damage the database beyond
	  repair. If the anchor log file is unavailable, follow the "Point in Time"
	  restoration instructions.
	
	4. Verify that the current database path locations are the same as at the time
	  you made the backup.
	
	  Although you can change the transaction log path or working path after you
	  make a backup, you can only perform log file replay if the database file is
	  restored to the same place from which it was backed up. If you are unsure of
	  the original location, at a command prompt, run the following command:
	
	  eseutil /ml <last consistent log> | find /i ".edb"
	
	  For example:
	
	  
	
	  D:\mdbdata>eseutil /ml edb00008.log |find /i ".edb"
	     1 d:\MDBDATA\PRIV.EDB
	     2 f:\MDBDATA\PUB.EDB
	
	  NOTE: If the low anchor log is Edb00001.log, it will not have path information
	  in its header, because the header for the first log in a series is generated
	  before the first database is ever attached to it. In this case, you must look
	  in the next log's header to view database path information. In rare cases,
	  this may also be true for logs past the first one because a database was
	  created or attached to the log stream after the log had been created.
	
	5. Gather logs starting with the anchor log to as far forward as you can go in
	  unbroken numeric sequence, and copy these logs to the current transaction
	  logs path. These log files may come from multiple backup sets. Do not
	  overwrite logs already in place on the server without backing them up first.
	
	  IMPORTANT: If the Edb.log file already exists in the Transaction Logs folder
	  that you are restoring to, go to step 6. If the Edb.log file does not exist
	  in this folder, go to step 7.
	
	6. If the Edb.log file exists, you must verify that the Edb.log file belongs
	  with your sequence of log files--that it is the next file in the lGeneration
	  sequence after the highest numbered log file that you have available.
	
	  Each log file carries an internal number called the lGeneration that
	  identifies its real position in the sequence of log files, regardless of the
	  current file name. If your computer is running Exchange Server 5.5 Service
	  Pack 1 (SP1) or later, you can use Eseutil to verify that the lGeneration
	  number of the Edb.log file is one higher than that of the highest numbered
	  log file. Run the following commands:
	
	  eseutil /ml <highest numbered log file> | find /i "lGeneration"
	
	  eseutil /ml Edb.log | find /i "lGeneration"
	
	  The following is a sample result:
	
	  
	
	  E:\mdbdata>eseutil /ml edb012dc.log | find /i "lGeneration"
	    lGeneration (4828)
	
	  E:\mdbdata>eseutil /ml edb.log | find /i "lGeneration"
	    lGeneration (4829)
	
	  In this example, the lGeneration for the highest numbered log file is one less
	  than that for Edb.log, indicating that Edb.log is next in the log series.
	
	  NOTE: To view a log file header with the Eseutil utility, use the /ml switch,
	  and to view a database file header, use the /mh switch. Confusing the
	  switches gives you incorrect output from the commands.
	
	  If the Edb.log file does not carry the correct lGeneration number, you must
	  remove the Edb.log file.
	
	  IMPORTANT: If you removed the Edb.log file, go on to step 7. Otherwise, go to
	  step 8.
	
	7. To replay transaction log files into an offline backup, there must be a log
	  file named Edb.log. (This is not a requirement with online backups.) If the
	  Edb.log file is unavailable, you must rename the highest available numbered
	  log file Edb.log.
	
	  CRITICAL NOTE: If you rename a log file Edb.log, you must remove all of the
	  log files that have higher lGeneration numbers than the renamed log file
	  before you start the database. If you do not do this, the higher numbered
	  logs become a "ceiling" that eventually blocks the creation of new log files,
	  and causes the database to stop.
	
	8. Verify that all logs share the same log signature and are in unbroken
	  sequence.
	
	  You can use a batch file similar to the following to automate signature
	  verification. You can paste the file into Notepad or another plain text
	  editor, saving the file as Chksig.bat. As formatted in this article, each
	  single line of the file has been separated by a blank line to assist you in
	  correcting any lines that may have improperly wrapped on your screen.
	  Requirements to run the file are:
	
	   - You are running Microsoft Windows NT 4.0 or Microsoft Windows 2000 with
	     the default command line extensions enabled.
	
	   - Eseutil.exe and Find.exe must be available in the system path or in the
	     transaction logs folder.
	
	   - You must run the file from a command prompt in the transaction logs
	     folder.
	
	  The file requires one parameter, the file name of the anchor log. It will
	  extract the signature from this file, and compare it to every other
	  transaction log file in the folder, reporting any signature mismatches.
	
	  Batch file:
	
	  :CHKSIG.BAT
	
	  @ECHO OFF
	
	  IF NOT EXIST %1 GOTO :EOF
	
	  IF EXIST "C:\SIGNATURE CHECK.ERR" DEL "C:\SIGNATURE CHECK.ERR"
	
	  SETLOCAL
	
	  SET COUNTER=0
	
	  ESEUTIL /ML %1 |FIND /I "SIGNATURE" >C:\LOGSIG.TXT
	
	  FOR /F "DELIMS=" %%A IN (C:\LOGSIG.TXT) DO CALL :GETSIG "%%A"
	
	  SET LOGSIG=%LOGSIG:"=%
	
	  FOR %%A IN (EDB*.LOG) DO CALL :CHECKSIG %%A
	
	  IF EXIST "C:\SIGNATURE CHECK.ERR" TYPE "C:\SIGNATURE CHECK.ERR"
	
	  DEL C:\LOGSIG.TXT
	
	  GOTO :EOF
	
	  :CHECKSIG
	
	  ESEUTIL /ML %1 | FIND "%LOGSIG%"
	
	  IF ERRORLEVEL 1 ECHO SIGNATURE MATCHING FAILED FOR %1!
	
	  IF ERRORLEVEL 1 ECHO SIGNATURE MATCHING FAILED FOR %1 >> "C:\SIGNATURE CHECK.ERR"
	
	  GOTO :EOF
	
	  :GETSIG
	
	  SET /A COUNTER+=1
	
	  IF {%COUNTER%}=={1} SET LOGSIG=%1
	
	  GOTO :EOF
	
	  The following is a sample result:
	
	  
	
	  T:\exchsrvr\mdbdata>chksig edb0000a.log
	     Signature: Create time:12/29/2000 21:6:38 Rand:24842 Computer:
	     Signature: Create time:12/29/2000 21:6:38 Rand:24842 Computer:
	     Signature: Create time:12/29/2000 21:6:38 Rand:24842 Computer:
	  SIGNATURE MATCHING FAILED FOR edb0000c.log!
	     Signature: Create time:12/29/2000 21:6:38 Rand:24842 Computer:
	     Signature: Create time:12/29/2000 21:6:38 Rand:24842 Computer:
	  SIGNATURE MATCHING FAILED FOR edb0000e.log!
	     Signature: Create time:12/29/2000 21:6:38 Rand:24842 Computer:
	     Signature: Create time:12/29/2000 21:6:38 Rand:24842 Computer:
	     Signature: Create time:12/29/2000 21:6:38 Rand:24842 Computer:
	  SIGNATURE MATCHING FAILED FOR edb0000c.log!
	  SIGNATURE MATCHING FAILED FOR edb0000e.log!
	
	  All log signatures must match between all log files that are replay
	  candidates. You must remove any logs that do not match the log signature of
	  the anchor log before replay begins.
	
	  At this point, after you remove files that do not pass the verification tests,
	  the only transaction log files in the transaction logs folder are ones that:
	
	   - Are in unbroken lGeneration sequence, starting with the anchor log file.
	
	   - Have matching log signatures.
	
	9. Remove the Edb.chk file from the Working Path folder.
	
	  In the absence of a checkpoint file, Exchange Server begins to replay the logs
	  from the lowest numbered log file available in the Transaction Logs folder.
	  If the Edb.chk file exists, Exchange Server begins replay at the checkpoint
	  recorded in this file. If Edb.chk points past the low anchor log, replay may
	  start in the middle of the log stream. If you replay logs D, E and F, but
	  skip needed logs A, B and C, you will, in almost every case, irreparably
	  damage the database file. Your only option will be to restore the file again
	  from backup.
	
	10. As a final check before you start the database, verify that:
	
	   - All database files are present in their running paths.
	
	   - The only log files in the running transaction logs path are ones starting
	     with the anchor log and continuing as an unbroken series, with the highest
	     log file named Edb.log instead of according to its actual lGeneration
	     value.
	
	   - There is no Edb.chk file in the Working Path folder.
	
	  You should now be able to successfully start the database service and replay
	  transaction logs with this file set. After recovery finishes and the
	  database starts, it is still possible that not all data in all log files
	  will actually be recovered because of database signature and path problems
	  encountered during replay. The next section of this article will provide
	  more detail about these problems.
	
	11. Start the database service. If you are restoring an information store
	  database, the database will, in most cases, fail to start, and report an
	  event 1087 or an error 1011. This is normal, and indicates only that the
	  information store and directory databases need to be synchronized. If this
	  happens, at a command prompt, run the following command:
	
	  \exchsrvr\bin\isinteg.exe -patch
	
	  This command resynchronizes the information store and the directory service.
	  The patch process usually takes only several minutes, even against a very
	  large mailbox database.
	
	  NOTE: For public information store databases with large numbers of folders in
	  the hierarchy, the patch process may take considerably longer. In general,
	  expect patching to take at least a minute for every 1,000 folders in the
	  hierarchy.
	
	  After patching has completed, start the database again.
	
	  NOTE: Do not run the isinteg -patch command in anticipation of a startup
	  problem. Only run it after an event occurs advising you to do so. In rare
	  circumstances, if you run the isinteg -patch command before the service has
	  detected that it needs to be done, you may damage the database.
	
	Check the application event log in the Windows NT Event Viewer for any errors or
	anomalies that may occur when the database starts. There is an event 109
	displayed for each log file that is replayed. Watch carefully for errors and
	warnings during the recovery process.
	
	Dealing with Database Signature and Path Mismatches
	---------------------------------------------------
	
	Databases, like log files, have their own signatures. But while log signatures
	never change from the time Edb000001.log is created, database signatures are
	changed whenever the physical topology of the database is altered without the
	changes being tracked through the log files. Offline defragmentation or repair
	of a database with Edbutil or Eseutil will cause the database signature to be
	changed. After such an event, the database can be attached to the same log
	stream as before, but it will not accept replay of any transactions that were
	performed while the database had its previous signature. A previous copy of the
	database will not accept replay of any transaction performed after the database
	has had its signature changed.
	
	This resetting of database signatures is the reason that you are strongly advised
	to make immediate full database backups after offline defragmentation or repair
	of a database. If you later restore a copy of the database with the old
	signature, replay will succeed up to the point of the signature change, but you
	will lose all changes past that point.
	
	If database paths are changed in the middle of a log stream, the effect is
	similar to changing signatures: replay will be interrupted at the point of the
	change. (The online backup API provides a facility for remapping paths during
	recovery, and therefore can replay logs completely even if there has been a path
	change since the backup was made.)
	
	As database signature or database path problems are encountered during replay,
	they will be reported in the Application log in line with the 109 replay events
	for each log file. Log files past the point of the problem may appear to play
	successfully, but this is only because the same mismatch warning is not
	repeatedly logged. As a general rule, replay into a particular database will be
	truncated from the point where the first database signature or path error
	referencing that database is encountered.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
