---
layout: page
title: "Q219419: XADM: Information Store Stops Unexpectedly, Cannot Be Repaired"
permalink: kb/219/Q219419/
---

## Q219419: XADM: Information Store Stops Unexpectedly, Cannot Be Repaired

	Article: Q219419
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The information store stops unexpectedly and you are not able to restart it. An
	error message similar to the following may be displayed when you attempt to
	restart the information store:
	
	  Server specific error 4294966278 (JET_errReadVerifyFailure).
	
	If you do not have a backup of the information store and circular logging is
	enabled for the information store database files, it may appear that you cannot
	repair the information store so that you can restart it.
	
	RESOLUTION
	==========
	
	Before you perform the following steps, perform an offline backup of the
	Exchange Server databases and log files. In addition, you may want to set up an
	Exchange Server computer to recover information from the directory service
	contained in the Dir.edb file. For additional information about setting up a
	disaster recovery Exchange Server computer, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q177635 XADM: How to Set Up a Disaster Recovery Server for Dir.edb
	
	To repair the information store when you do not have a backup and circular
	logging is enabled:
	
	1. Use the Chkdsk.exe program with the /f switch to fix any errors on your hard
	  disks. To do so, at a command prompt, type "chkdsk /f <drive>" (without
	  the quotation marks), where <drive> is the hard disk you want to check,
	  and then press ENTER. For example, to fix any errors on drive C, at a command
	  prompt, type "chkdsk /f c:" (without the quotation marks), and then press
	  ENTER.
	
	2. Remove the log files for the information store by moving them to a different
	  folder, and then start the information store. The log files are Edb.log and
	  Edb<xxxxx>.log, where <xxxxx> is a series of hexadecimal digits
	  (for example, Edb00001.log). The log files for the information store are
	  typically located in the Exchsrvr\Mdbdata folder on the drive that Exchange
	  Server is installed on.
	
	  If the Information Store does not start, and an error message similar to the
	  following is displayed when you attempt to start the information store, you
	  must copy the log files back to the folder where they were originally
	  located, and then proceed to step 3:
	
	  Server specific error 4294966746 (or error -550,
	  ?JET_errDatabaseInconsistent?).
	
	3. Use the Eseutil.exe utility with the /r switch to recover the Exchange Server
	  databases. If a -1018 error (JET_errReadVerifyFailure) is returned, proceed
	  to step 4.
	
	4. Use the Eseutil.exe utility with the /mh switch to check the consistency of
	  the public and private information stores. To do so, type the following
	  commands at a command prompt, pressing ENTER after each command:
	
	  "eseutil /mh <path>\pub.edb" (without the quotation marks)
	  "eseutil /mh <path>\priv.edb" (without the quotation marks)
	
	  where <path> is the location of the information store database files.
	  For example, if the database files are located in the Exchsrvr\Mdbdata folder
	  on drive C, type the following commands:
	
	  "eseutil /mh c:\exchsrvr\mdbdata\pub.edb" (without the quotation marks)
	  "eseutil /mh c:\exchsrvr\mdbdata\priv.edb" (without the quotation marks)
	
	  If the Eseutil.exe utility indicates that either database is not consistent,
	  proceed to step five and run the repair operations against only the databases
	  that are inconsistent.
	
	  CAUTION: Repairs to the database using the eseutil /p switch, deletes pages
	  (increments the repair count) and the database is not stable and reliable
	  after that.
	
	  The following are symptoms that can occur if you use the repaired database in
	  production:
	
	   - The information store either does not stop or stops responding.
	
	   - The information store stops accepting mail from the message transfer agent
	     (MTA).
	
	   - E-mail remains in the Outboxes of the users.
	
	   - The Store.exe program runs with very high CPU use with no load on the
	     server.
	
	   - The Store.exe program generates an access violation if there is a heavy
	     load.
	
	   - Users cannot open e-mail attachments or e-mail messages.
	
	  If you have to run a hard repair (eseutil /p) on your production database,
	  Microsoft recommends that you move the data out of the repaired database to a
	  new database.
	
	For additional information about using the eseutil /p switch, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q259851 XADM: Ramifications of Running the ESEUTIL /P or EDBUTIL /D /R
	  Command
	
	5. Use the Eseutil.exe utility and the Microsoft Exchange Information Store
	  Integrity Checker (Isinteg.exe) to repair, defragment, and check the
	  integrity of the public and private information stores:
	
	  NOTE: If from the previous step (step four), either of the databases are
	  inconsistent, then the repair operation, eseutil /p, should only be run
	  against the database that is inconsistent.
	
	  a. At a command prompt, type "eseutil /p /ispriv" (without the quotation
	     marks), and then press ENTER.
	
	  b. If log files for the information store exist, remove the files by moving
	     them to a different folder. For more information about the log files, see
	     step 2.
	
	  c. At a command prompt, type "eseutil /d /ispriv" (without the quotation
	     marks), and then press ENTER.
	
	  d. At a command prompt, type "isinteg -pri -fix -test alltests" (without the
	     quotation marks), press ENTER, type "y" (without the quotation marks) when
	     you are prompted to do so, and then press ENTER again. Repeat this step
	     until no warnings, errors, or fixes are reported.
	
	  e. At a command prompt, type "eseutil /p /ispub" (without the quotation
	     marks), and then press ENTER.
	
	  f. If log files for the information store exist, remove them by moving them
	     to a different folder. For more information about the log files, see step
	     2.
	
	  g. At a command prompt, type "eseutil /d /ispub" (without the quotation
	     marks), and then press ENTER.
	
	  h. At a command prompt, type "isinteg -pub -fix -test alltests" (without the
	     quotation marks), press ENTER, type "y" (without the quotation marks) when
	     you are prompted to do so, and then press ENTER again. Repeat this step
	     until no warnings, errors, or fixes are reported.
	
	6. Start the information store. If it starts successfully, perform the following
	  additional steps:
	
	  a. Disable circular logging for the information store database files.
	
	  b. Run Performance Optimizer.
	
	  c. Verify that e-mail clients can connect to the Exchange Server computer.
	
	  d. Perform an online backup of the server.
	
	MORE INFORMATION
	================
	
	When circular logging is enabled, the server automatically overwrites the oldest
	transaction log files after the information they contain has been committed to
	the database. This reduces the amount of disk space required to store the log
	files, but it prevents you from performing differential and incremental backups,
	and it may also prevent you from using the log files to repair a damaged
	database. Circular logging is enabled by default.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
