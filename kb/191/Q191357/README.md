---
layout: page
title: "Q191357: XADM: Restoring a Single Database from Full Online Backups"
permalink: /kb/191/Q191357/
---

## Q191357: XADM: Restoring a Single Database from Full Online Backups

{% raw %}

	Article: Q191357
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the recommended approach to restoring a single database
	from full online backups for Microsoft Exchange Server 5.5. This article further
	assumes that you do not want to play forward beyond the date of the backup.
	
	MORE INFORMATION
	================
	
	Assume that full backups are being taken of the information store databases
	(Priv.edb and Pub.edb), and the following backups have been made:
	
	- Monday - Full backup of information store (Backup #1, Log #1)
	
	- Tuesday - Full backup of information store (Backup #2, Log #2)
	
	- Wednesday - Full backup of information store(Backup #3, Log #3)
	
	- Thursday - Full backup of information store(Backup #4, Log #4)
	
	During a full online backup, log files that have been committed to the databases
	are removed from disk. Following Thursday's backup, assume that only Log #4
	exists on disk.
	
	Assume that on Tuesday, a user deleted an important public folder and that to
	restore it, you need to recover the Pub.edb database back to Monday's backup and
	do not want to play forward any other transactions (you do not want the delete
	of the folder to be replayed). Also, you do not want to lose any data in the
	Priv.edb database.
	
	Since the goal is to restore an old backup of a database, and not play forward,
	it will be necessary to remove log files that exist after the point in time you
	want the database to be restored to. In our scenario, anything after Log #1
	should be removed. It is only safe to remove log files if the databases are
	consistent (which happens as a normal part of shutting down the information
	store). To remove the log files:
	
	1. Stop the information store.
	
	2. Ensure the Priv.edb database is consistent. To do so, at the command prompt,
	  run:
	
	  eseutil /mh priv.edb
	
	3. Do a full offline backup of the Priv.edb database and log files (this is a
	  safety measure -- the backup isn't needed as part of the solution steps).
	
	4. After the offline backup completes, remove any log files that are present as
	  well as the checkpoint file (*.log, Edb.chk).
	
	5. Restore the Pub.edb database from Backup #1. From within the Ntbackup
	  program, select the Public check box, and clear the Private check box.
	
	6. Start the information store (if it didn't start automatically based on your
	  restore selection).
	
	Because the Pub.edb database is restored from tape in an inconsistent state
	(which is normal) with the log files at the time of backup, when the information
	store starts, recovery will begin, and will replay the newly restored
	transaction log files. The Priv.edb database will not be affected by this
	operation.
	
	Log files contain the database signature of databases they are associated with.
	If the database signature has changed for a database, the Exchange database
	engine may produce an event log error about the inconsistency. In our example,
	if the Priv.edb database has been defragmented offline (which changes the
	database signature) after the date of the backup that we restored, the
	transaction log files restored from tape will be expecting a Priv.edb with a
	different database to be present. After restarting the information store and all
	the transaction logs have replayed, the Exchange database engine may log the
	following error:
	
	  EventID:   134
	  Source:    ESE97
	  Type:      Error
	  Category:  Logging/Recovery
	  Description:
	  ((263) ) The database C:\ExchSrvr\mdbdata\priv.edb created at
	  3/19/1998
	  14:43:38 was not recovered.
	
	This error is logged because during the the Exchange database engine
	initialization process, an attempt is made to associate the log files on the
	disk to the database. Because the database was defragmented, it carries a new
	database signature which prevents Jet from associating the log files to the
	database. This is not a fatal error, nor does it imply that the Priv.edb
	database is somehow damaged. Since the restore was for Pub.edb, and Priv.edb was
	in a consistent state, no transactions would have played into the Priv.edb
	database even if the database signature was still the same.
	
	After recovery, the information store will run in a normal state with the current
	Priv.edb and the old Pub.edb.
	
	You will see the following Warning by the information store:
	
	  EventID:   1091
	  Source:    MSExchangeIS
	  Type:      Warning
	  Category:  Recovery
	  Description:
	  You have restored a public information store only.  This
	  server contains
	  a private information store and a public information store.
	  Only the
	  data in the public information store has been modified.
	
	NOTE: Because the original transaction log files were removed in step 4 above
	(anything above Edb0001.log in our scenario), the Exchange database engine
	generation number will be started at the next log file number. This implies that
	the next log file in our example would be Edb0002.log. Because there was already
	an Edb0002.log file backed up in Backup#2, care must be taken to not confuse the
	log file numbers. A full online backup should immediately be taken, and all
	previous backups discarded (to avoid conflicts with transaction log files in the
	future).
	
	Additional query words: restoring recovering
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
