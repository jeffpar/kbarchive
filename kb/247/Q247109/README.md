---
layout: page
title: "Q247109: XADM: Steps to Restore an Online Backup Using Current Log Files"
permalink: /kb/247/Q247109/
---

## Q247109: XADM: Steps to Restore an Online Backup Using Current Log Files

{% raw %}

	Article: Q247109
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to restore an Exchange Server-aware online backup,
	explains the most common reason that an online restoration may not work, and
	provides steps to include current log files (any files that were created after
	the last online backup) with files from the online restoration process to
	recover the most current data possible.
	
	MORE INFORMATION
	================
	
	For example, if a full online backup is taken on Wednesday night, an incremental
	backup is taken Thursday night, and the Exchange Server computer disk that
	contains the information store and directory databases fails (or "crashes") on
	Friday afternoon, the transaction log folders are intact and include all of the
	transaction log files for Friday after the online incremental backup that was
	taken on Thursday night. Before the full online backup was taken on Wednesday
	night, circular logging must have been turned off.
	
	In Exchange Server-aware backup software, you can usually either select an option
	to "erase existing data" or clear a "no-loss restoration" option. However, even
	when you use these settings, version or signature conflicts may arise between
	log files and databases when you restore an online backup that can prevent the
	restoration from working. This is the single most common reason that the
	restoration of an online backup of Exchange Server may not work. This article
	provides detailed steps that you can take to avoid this problem and other common
	problems, and to successfully restore an online backup of Exchange Server.
	
	Restoring the Online Backup
	---------------------------
	
	Make sure that you back up all of the files in all of the Dsadata and Mdbdata
	folders to flat file copies on a disk and that you include all of the .edb,
	.log, and .chk files. If you do this and there are problems with the tape
	backups, you still have a database on a disk that you can gain access to and
	repair if necessary. Do not delete these flat file copies until after you
	restore the online backup of Exchange Server and Exchange Server runs
	successfully for a few days.
	
	Because the information store service depends on the Exchange Server directory
	service, and the information store is usually larger and takes longer to
	restore, Microsoft recommends that when you restore an online backup of Exchange
	Server, you restore the online backup in two steps:
	
	- Restore only the Exchange Server directory, and then make sure that the
	  directory service runs properly.
	
	- Restore the Exchange Server information store as a separate step.
	
	Restoring the Exchange Server Directory:
	
	1. Make sure that you have backed up all of the files in the Dsadata subfolders
	  on all of the logical drives. There can be up to three Dsadata folders on
	  different drives: one for the Dir.edb database, one for the Edb.log files,
	  and one for the Edb.chk file. Check all of the logical drives on the computer
	  for an Exchsrvr subfolder and then check those folders for the presence of a
	  Dsadata folder. After you back up all of the Dsadata folders to flat file
	  copies, delete everything in the Dsadata folders on all of the logical
	  drives.
	
	2. If the Exchange Server computer is in a site that contains multiple servers
	  and can connect to other servers in the site, to restore the Exchange Server
	  directory:
	
	  a. Simply restore the directory from the most recent full online backup (in
	     the example above, the Wednesday night backup). You do not need to restore
	     all of the incremental log files and current log files that were generated
	     after the most recent online backup (in the example, the incremental log
	     files from Thursday and the current log files from Friday) because when
	     the directory service starts after an online backup is successfully
	     restored, the Exchange Server computer contacts the other servers in the
	     site and obtains any data that was generated after the most recent online
	     backup.
	
	  b. In your online backup program, make sure that you do not select the option
	     to automatically start the Exchange Server directory service after the
	     backup is restored. Do not start the Exchange Server directory manually
	     after you restore the online backup. Record the names of all of the files
	     in all of the Dsadata folders after you restore the online backup. Check
	     the application event log to determine which event is the most current.
	     Close the application event log. Manually start the Exchange Server
	     directory service by performing one of the following steps:
	
	      - In Control Panel, double-click Services, and then start the directory
	        service.
	
	-or-
	
	      - At a command prompt, type the following command:
	
	  Net Start MSExchangeDS
	
	  c. Open the application event log, check for new events, and make sure that
	     there are no errors starting the directory service. If there are no
	     errors, go directly to the "Restoring the Exchange Server Information
	     Store" section of this article. If the directory does not start, clear out
	     all of the Dsadata folders again, and try to restore the directory from an
	     earlier backup. Because the directory obtains any data that was generated
	     after the backup in a multiserver environment, if you use an older backup,
	     you do not lose data.
	
	3. If there is only a single server in the site, to restore the Exchange Server
	  directory:
	
	  a. Restore the directory from the most recent full online backup. In your
	     online backup program, make sure that you do not select the option to
	     automatically start the Exchange Server directory service after the backup
	     is restored. Do not start the Exchange Server directory manually after you
	     restore the online backup. After you restore the online backup, record the
	     names of all of the files in all of the Dsadata folders.
	
	  b. Restore the incremental backups that were taken for the directory in the
	     order they were created, beginning with the oldest one first and finishing
	     with the most recent one. In your backup program, make sure that you do
	     not select the option to automatically start the Exchange Server directory
	     service after the incremental backups are restored. Do not start the
	     Exchange Server directory manually after you restore the incremental
	     backups. After you restore the incremental backups, add the names of all
	     the new files in all of the Dsadata folders to the list of file names that
	     you started in step 3a.
	
	  c. Manually copy the Edbxxxxx.log files only (where xxxxx is a series of
	     hexadecimal digits, for example, Edb00001.log) from the backup of the
	     Dsadata log folder for the time after the last incremental backup was
	     taken (in the example above, the Edbxxxxx.log files for Friday). Make sure
	     that these Edbxxxxx.log files are in sequence with the other Edbxxxxx.log
	     files, including the Edb.log file itself. The current log file is always
	     the Edb.log file. The log files are generated in sequential order by using
	     hexadecimal numbers for the names. To make sure that the Edbxxxxx.log
	     files are sequence and that there are no missing log files, read the names
	     of the files in hexadecimal or convert the hexadecimal values to decimal
	     by using Scientific view of the Calculator utility (click Start, point to
	     Programs, point to Accessories, and then click Calculator).
	
	     Do not copy any other files (such as .chk files, Res.log files, and
	     Hierarch.dat files) from the temporary Dsadata backup folders.
	
	  d. If the server was shut down because of a disk failure or a power failure
	     and the server was not shut down "gracefully" (for example, if a hardware
	     failure did not allow the current data from memory to be transferred to
	     disk), do not copy the Edb.log file itself, because the Edb.log file may
	     cause problems during the restoration. If the server was shut down
	     "gracefully," include the actual Edb.log file when you copy the
	     Edbxxxxx.log log files from the Dsadata temporary backup folder.
	
	  e. IMPORTANT: Do not check the Dir.edb database from the online restoration
	     for consistency by using the eseutil /mh or edbutil /mh commands, now or
	     at any point during the online restoration process. This database from the
	     online restoration is automatically inconsistent because this is an online
	     restoration, and Exchange Server only produces offline databases that are
	     consistent if a server is shut down "gracefully."
	
	  f. Open the application event log and determine which event is the most
	     current. Close the application event log. Manually start the Exchange
	     Server directory service in Control Panel, Services. Open the application
	     event log, check for new events, and make sure that there are no errors
	     starting the Exchange Server directory service. If there are no errors,
	     you have successfully restored the Exchange Server directory service, and
	     you are now ready to restore the information store.
	
	Restoring the Exchange Server Information Store:
	
	1. Make sure that you have a complete backup of all of the files in all of the
	  Mdbdata folders on all of the drives on the computer. Then delete all of the
	  files in the Mdbdata folders on all of the logical drives.
	
	2. IMPORTANT: Select the option to restore both the private information store
	  and the public information store. This is a required step.
	
	  If you select either the private information store only or the public
	  information store only, the restoration may not work and you may have to
	  perform the steps to restore the directory again starting from the beginning,
	  which can be a lengthy process, depending on the size of the information
	  store databases.
	
	3. Restore the information store from the most recent online backup (in the
	  example above, the Wednesday night backup). Do not start the Exchange Server
	  information store manually after you restore the most recent online backup.
	  After the restoration has finished, record the names of all of the files in
	  all of the Mdbdata folders.
	
	4. Restore the incremental backups that were taken for both the private
	  information store and the public information store in the order that they
	  were created, beginning with the oldest one first and finishing with the most
	  recent one. Do not start the Exchange Server information store manually after
	  you restore the incremental backups. After you restore the incremental
	  backups, add the names of all of the new files in all of the Mdbdata folders
	  to the list of file names that you started in step 3.
	
	5. Manually copy the Edbxxxxx.log files only (where xxxxx is a series of
	  hexadecimal digits, for example, Edb00001.log) from the backup of the Mdbdata
	  log folder for the time after the last incremental backup was taken (in the
	  example above, the Edbxxxxx.log files for Friday). Make sure that the
	  Edbxxxxx.log files are in sequence with the other Edbxxxxx.log files,
	  including the Edb.log file itself. The current log file is always the Edb.log
	  file. The log files are generated in sequential order by using hexadecimal
	  numbers for the names. To make sure that the Edbxxxxx.log files are sequence
	  and that there are no missing log files, read the names of the files in
	  hexadecimal or convert the hexadecimal values to decimal by using Scientific
	  view of the Calculator utility (click Start, point to Programs, point to
	  Accessories, and then click Calculator).
	
	  Do not copy any other files (such as .chk files, Res.log files, and Tmp.edb
	  files) from the temporary Mdbdata backup folders.
	
	6. If the server was shut down because of a disk failure or a power failure and
	  the server was not shut down "gracefully" (for example, if a hardware failure
	  did not allow the current data from memory to be transferred to disk), do not
	  copy the Edb.log file itself, because the Edb.log file may cause problems
	  during the restoration. If the server was shut down "gracefully," include the
	  actual Edb.log file when you copy the Edbxxxxx.log log files from the Mdbdata
	  temporary backup folder.
	
	7. IMPORTANT: Do not check the Priv.edb and Pub.edb from the online restoration
	  for consistency by using the eseutil /mh or edbutil /mh commands, now or at
	  any point during the online restoration process. These databases from the
	  online restoration are automatically inconsistent because this is an online
	  restoration, and Exchange Server only produces offline databases that are
	  consistent if a server is shut down "gracefully."
	
	8. IMPORTANT: Do not run the isinteg -patch command. This is an online
	  restoration and the isinteg -patch command is run internally by the Exchange
	  Server-aware backup program behind the scenes.
	
	9. Check the application event log to determine which event is the most current.
	  Close the application event log. Manually start the Exchange Server
	  information store service in Control Panel, Services. Open the application
	  event log, check for new events, and make sure that there are no errors
	  starting the Exchange Server information store service. If there are no
	  errors, you have successfully restored the Exchange Server information store
	  service.
	
	Check the contents of a few mailboxes to make sure that the mailboxes are
	populated with messages and mailbox folders. Check mail flow by sending messages
	to other Exchange Server users with delivery receipt requested (in Microsoft
	Outlook, in the test message, click Properties on the File menu, and then click
	to select the "Delivery receipt requested" check box before you send the test
	message).
	
	If the messages are delivered, immediately perform a full Exchange Server-aware
	online backup (use full backup software logging and check the log for errors
	after the backup is finished) to ensure a current valid online backup of
	Exchange Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
