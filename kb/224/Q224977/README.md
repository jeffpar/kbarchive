---
layout: page
title: "Q224977: XADM: Store Fails to Start: 4294965882, FFFFFA7A, Event 177,..."
permalink: /kb/224/Q224977/
---

## Q224977: XADM: Store Fails to Start: 4294965882, FFFFFA7A, Event 177,...

	Article: Q224977
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 20-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store may not start after restoration
	of an online backup. Information store utilities such as Isinteg and Eseutil
	also may not start. You may receive some or all of the following error
	messages:
	
	  Error -1414 or 0xfffffa7a or 4294965882 (JET_errSecondaryIndexCorrupted)
	
	  Error -1030 or 0xfffffbfa or 4294966266 or c8000406 or 3355444230
	  (JET_errAlreadyInitialized)
	
	  Error -1032 or 0xfffffbf8 or 4294966264 (JET_errFileAccessDenied)
	
	You may observe some or all of the following clusters of events in the
	Application Log:
	
	  Event ID: 172
	  Description: MSExchangeIS ((pid) ) The database engine is initiating index
	  cleanup of database '<DATABASE.EDB>' as a result of an NT version
	  upgrade from <version> to <version>.
	
	  Event ID: 177
	  Description:MSExchangeIS ((pid) ) Database '<DATABASE.EDB>': The
	  secondary index '<INDEX NUMBER>' of table '<TABLE>' is corrupt.
	  Please defragment the database to rebuild the index.
	
	  Event ID: 1081
	  Description: Unable to recover the database because error 0xfffffa7a occurred
	  after a restore operation.
	
	  Event ID: 5000
	  Description: Unable to initialize the Microsoft Exchange Information Store
	  service. Error 0xfffffa7a.
	
	  . . . . .
	
	  Event ID: 1080
	  Description: Unable to recover the database because error 0xc8000406 occurred
	  after a restore operation. The database was already called.
	
	  Event ID: 5000
	  Description: Unable to initialize the Microsoft Exchange Information Store
	  service. Error 0xc8000406.
	
	  . . . . .
	
	  Event ID: 1081
	  Description: Unable to recover the database because error 0xfffffbfa occurred
	  after a restore operation.
	
	  Event ID: 5000
	  Description: Unable to initialize the Microsoft Exchange Information Store
	  service. Error 0xfffffbfa.
	
	  . . . . .
	
	  Event ID: 145
	  Description: MSExchangeIS ((pid) ) The database engine could not access the
	  file called <path>\edb.log.
	
	  Event ID: 1120
	  Description: Error 0xfffffbf8 initializing the Microsoft Exchange Server
	  Information Store database.
	
	  Event ID: 5000
	  Description: Unable to initialize the Microsoft Exchange Information Store
	  service. Error 0xfffffbf8.
	
	CAUSE
	=====
	
	When the service pack level for Windows NT changes, Exchange Server rebuilds its
	database indexes as a precaution against incompatibilities with the service
	pack. This reindexing occurs whether the service pack level is changed upward or
	downward.
	
	In most cases, the index rebuild is virtually transparent and goes unnoticed. But
	if the computer name has also been changed along with the service pack level,
	the above symptoms may appear. The most common case in which this happens is
	during restoration of an online backup during single mailbox recovery procedures
	undertaken on a laboratory server.
	
	To have consistent success with Exchange online restores, always target the
	Exchange restore procedure to a recovery computer running the same Microsoft
	Windows NT Service Pack as the computer the backup was taken from. For example,
	if the Exchange 5.5 server you backed up was running Windows NT 4.0 SP5, your
	recovery server must also run Windows NT 4.0 SP5.
	
	These symptoms may also appear when no service pack revision has occurred, but
	computer names have changed, if both computers are running Windows NT 4.0
	Service Pack 4.
	
	RESOLUTION
	==========
	
	IMPORTANT: Please read the entire "Resolution" section before proceeding. The
	steps to get to the defrag procedure are listed below.
	
	This problem can be resolved by any one of the following three methods:
	
	- Performing an offline defragmentation of the database (ESEUTIL /D
	  <DATABASE.EDB>). This may take several hours for a large database.
	
	- Giving the current server the same name as the server from which the backup
	  was originally taken. This may be inconvenient, as two servers with the same
	  name cannot co-exist on the same network.
	
	- Following the procedure outlined below:
	
	IMPORTANT: Perform the following steps in exact order, omitting none of them.
	While some steps may seem redundant, each one plays a vital role in successfully
	reindexing and avoiding the necessity to defragment the database or rename the
	server.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  1. After online restore, start the information store.
	
	     NOTE: After restoration of an online backup, the first thing you should
	     always do, not just in this case, is to start the associated database
	     service. Running Eseutil or Isinteg, or otherwise tampering with any of
	     the restored files or registry entries before starting the database
	     service may make your database permanently unstartable and require another
	     restoration of your full backup.
	
	  2. Start Regedt32, and then locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\Restore in
	  Progress
	
	     Make sure that the "EDB Database recovered" value is 01, not 00. If this
	     value is 01, it means that critical parts of the restore process have
	     finished (specifically, the restored .pat files have been applied to the
	     database) and it is safe now to remove the Restore in Progress key.
	
	     If the flag is 01, save, and then delete the Restore in Progress key. If it
	     is still 00, you must discover the cause before deleting the key.
	
	     In the case of the symptoms described in this article, stopping ALL
	     Exchange Server services, including the System Attendant, and then
	     restarting the database service sets the flag to 01, unless there are
	     complicating unrelated factors present. Verify that all services have
	     actually stopped by typing "net start" (without the quotation marks) at a
	     command prompt.
	
	     IMPORTANT: If the flag is 00 at this step, you must stop all services,
	     restart the database service, and then recheck the key before proceeding
	     to the next step, despite the fact that doing so may seem redundant, and
	     even though the database service will likely fail the next start attempt
	     anyway.
	
	  3. Stop ALL Exchange Server services. Verify that all services have actually
	     stopped by typing "net start" (without the quotation marks) at a command
	     prompt.
	
	  4. Start the database service. It should fail with a 1011 error, indicating
	     that you must patch the database. Patching is a normal operation that does
	     not imply or suggest any damage or corruption.
	
	     If you do not receive a 1011 or other event telling you to patch the
	     database, you must troubleshoot the failure before proceeding to the next
	     step.
	
	  5. Run "Isinteg -patch" (without the quotation marks).
	
	  6. Start the database service.
	
	
	Additional query words: fffffbfa, fffffbf8, c8000406
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
