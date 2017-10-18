---
layout: page
title: "Q271905: XADM: Using Replay Process to Restore Data from MTA Backlog"
permalink: kb/271/Q271905/
---

## Q271905: XADM: Using Replay Process to Restore Data from MTA Backlog

	Article: Q271905
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes the three replay processes that you can use to recover
	messages when the message flow over the Exchange Message Transfer Agent (MTA)
	slows or stops. The three replay processes are Full Remote, Remote Incremental,
	and Local Incremental.
	
	MORE INFORMATION
	================
	
	In some instances, message delivery over the MTA in Exchange Server 5.5 may slow
	significantly or stop entirely. The probable causes are corrupted messages and
	an excessive number of messages due to connections that are down or to directory
	replication issues. This slowdown can result in an extremely large backlog of
	messages, a backlog that the Exchange Server computer or the MTA cannot process
	in a timely manner.
	
	After you exhaust all of the standard troubleshooting methods for the MTA, you
	can move messages out of the database and replay them in more manageable sets or
	on another Exchange Server computer. Replaying the messages quickly restores the
	original MTA so that it can route current incoming messages. However,
	administrators should not hastily perform this procedure. Exchange Server 5.5 is
	fairly robust and can recover from most temporary communications problems.
	Administrators need to carefully weigh the needs of the business against the
	cost (in both time and human resources) of performing this procedure.
	
	CAUTION: Even if no messages are corrupted, improperly replaying MTA data files
	can result in the loss of data. Please read this entire document carefully
	before you begin the replay process.
	
	Note that you cannot replay an Exchange Server 5.5 MTA database on an earlier
	version of the MTA, nor can files from an MTA that runs on an Intel-based
	computer be replayed on an Alpha-based computer. Also, the need for MTA replays
	in general, and incremental replays specifically, is significantly less for the
	Exchange Server 5.5 version of the MTA than for earlier versions.
	
	Replay Methods
	--------------
	
	This article describes three methods of replaying the MTA database:
	
	- Full Remote Replay
	
	- Remote Incremental Replay
	
	- Local Incremental Replay
	
	Full Remote Replay:
	
	A Full Remote Replay consists of moving all of the DAT files to a different MTA,
	one that is located on another Exchange Server computer. The server you use for
	a replay must run on the same platform (i386, ALPHA, and so on) that the
	original Exchange Server computer runs on. This type of replay is typically used
	when the backlogged MTA is on a bridgehead or hub server and must be put back
	into operation as soon as possible.
	
	A Full Remote Replay requires that the replay server be another server within the
	same Exchange organization, and preferably within the same site. Replication
	must be current; this is especially important if the server is not in the same
	site.
	
	When you are deciding which server to use as the remote replay server, select one
	that has the same types of connectors as the source server. When the remote
	server replays the messages from the source server, some messages may be
	addressed to locations outside the site. If this is the case, and if the source
	server is the only server that has the connector to a remote location, then the
	remote replay server merely reroutes all the messages back to the source server,
	thus defeating the whole purpose of a remote replay.
	
	For example, suppose that a particular bridgehead server has become backlogged
	with 50,000 messages, most of which are going to the Internet or to three remote
	sites over X.400 Connectors. Suppose also that no other server in the site has
	an Internet Mail Service, and no other server has an X.400 Connector to another
	site. If you perform the remote replay procedure on another server in the site
	without setting up redundant X.400 Connectors on that server and without setting
	up a secondary Internet Mail Service, most of the replayed messages are swiftly
	routed back to the bridgehead server, in all likelihood overwhelming it again
	within a matter of minutes.
	
	Remote Incremental Replay:
	
	A Remote Incremental Replay consists of splitting the files from the master
	database into smaller, more manageable sets and then replaying each set
	independently so that the server has fewer files to process at one time.
	Incremental replay is also useful if the database contains one or more corrupted
	messages. A set that has no corrupted messages replays with no difficulty, and a
	set that does contain corrupted data can be further split and replayed until
	only the bad data remains unplayed.
	
	EXTREME CAUTION: Manually splitting an MTA database without suffering serious
	data loss is a task for experts only. If splitting a database is required,
	contact a senior MTA specialist at Microsoft for assistance.
	
	Before you start a Remote Incremental Replay, it is important that you first
	isolate all of the core MTA files, along with all of the queue files such as the
	Work Queue and any Internet Mail Connector or MSMail Connector queues. If core
	MTA or queue files are damaged, the likelihood of recovering mail diminishes
	significantly.
	
	MTA database files are named DB*.dat, where the asterisk represents a six-digit
	hexadecimal number ranging from 000001 to FFFFFF. On a brand new minimal
	installation, the MTAData directory that contains the database files already has
	a core set of files, ranging from DB000001.dat to DB000026.dat:
	
	DB000001.dat	DB000009.dat	DB000011.dat	DB000019.dat	DB000021.dat	
	DB000002.dat	DB00000A.dat	DB000012.dat	DB00001A.dat	DB000022.dat	
	DB000003.dat	DB00000B.dat	DB000013.dat	DB00001B.dat	DB000023.dat	
	DB000004.dat	DB00000C.dat	DB000014.dat	DB00001C.dat	DB000024.dat	
	DB000005.dat	DB00000D.dat	DB000015.dat	DB00001D.dat	DB000025.dat	
	DB000006.dat	DB00000E.dat	DB000016.dat	DB00001E.dat	DB000026.dat	
	DB000007.dat	DB00000F.dat	DB000017.dat	DB00001F.dat		
	DB000008.dat	DB000010.dat	DB000018.dat	DB000020.dat	
	
	These 38 files are needed to start the MTA service properly. The first time the
	MTA runs, an additional file (typically DB000027.dat on Exchange Server 5.5) is
	created to serve as the Work Queue for the MTA. When additional connectors are
	added or configured, additional files may also be created to act as queues.
	Messages that the MTA is currently processing also generate DB*.dat files. For
	more information about the MTA database, see:
	
	  Q282780 XCON: MTA Database Format and Structure
	
	EXTREME CAUTION: Of all the files in the MTA database, DB000001.dat is the most
	important. It is the "Super Queue" or Queue of Queues file. If this file is
	corrupted or lost, all messages that have been queued to "secured" queues are
	undeliverable.
	
	Local Incremental Replay:
	
	A Local Incremental Replay consists of removing DAT files and then reintroducing
	them to the MTA in manageable sets.
	
	Replay Procedures
	-----------------
	
	The following sections describe how to prepare for the replay and how to perform
	the replay. In these procedures, "source MTA" refers to the MTA that is
	backlogged or needs recovery. "Replay MTA" refers to the MTA where the messages
	are replayed, also referred to as the "remote MTA".
	
	Preparing for a Full Remote Replay:
	
	To prepare for the replay process, do the following on the source MTA:
	
	1. Determine where the MTA database is located by noting the value in the
	  following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters\<MTA
	  database path>
	
	Also make note of the following value:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters\MTA
	  Run Directory
	
	2. If the "MTA database path" and "MTA Run Directory" are the same:
	
	  a. Copy all DB*.dat files to a backup directory such as MTABackup.
	
	  b. After you verify that all files are successfully copied to the MTABackup
	     directory, delete all DB*.dat files from the MTAData directory.
	
	3. If the "MTA database path" and "MTA Run Directory" are different:
	
	  a. Back up the MTA database path by renaming the MTAData directory to
	     MTABackup.
	
	  b. After renaming the MTA database path, create a new MTA database path in
	     the same location: ... \MTAData.
	
	  From here on, these instructions refer to the backed-up MTA database as the
	  "master database."
	
	4. Copy all files from the Bootenv directory on the Exchange Server CD (under
	  the appropriate platform) to the MTAData directory. For example, for Intel
	  i386-based computers, this path would be:
	
	  <CD drive>:\SERVER\Setup\i386\Bootenv
	
	  Because DAT files are not version-specific, you can copy them from any version
	  of the Exchange Server CD.
	
	5. Use File Manager, Windows Explorer, or the command prompt to remove the
	  read-only attributes from all DB*.dat files in the MTA database path
	  directory.
	
	6. In Control Panel, under Services, restart the Microsoft Exchange Message
	  Transfer Agent service. The Source MTA should start up with empty queues.
	
	Performing a Full Remote Replay:
	
	After you complete the preparation on the source MTA, start the Full Remote
	Replay on the remote MTA (on the "replay server"):
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Check the replay MTA's queues to make sure that there are no messages
	  pending.
	
	2. In Control Panel, under Services, stop the Microsoft Exchange Message
	  Transfer Agent service on the replay server.
	
	3. Copy all DB*.dat files from the replay server's MTA database path directory
	  to a temporary location, the "secondary database".
	
	4. Start Registry Editor.
	
	5. Open the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	6. Add the following value setting if it does not already exist:
	
	  Dispatch Remote MTA messages : REG_DWORD: 1
	
	7. Copy the master database from the source MTA to the MTA database path
	  directory on the replay server.
	
	8. Run the mtacheck /rd /rp /rl command to remove directory replication, public
	  folder replication, and link monitor messages.
	
	9. In Control Panel, under Services, start the Microsoft Exchange Message
	  Transfer Agent service.
	
	10. Start Performance Monitor to monitor the MTA Work Queue length and to verify
	  that messages are flowing from the replay server. If messages flow, the data
	  is being successfully replayed.
	
	Preparing for a Remote Incremental Replay:
	
	If the Full Remote Replay does not successfully deliver the mail, run a Remote
	Incremental Replay. An incremental replay can help you identify any corrupted
	message that could be the source of the whole problem.
	
	To prepare for a Remote Incremental Replay:
	
	1. Back up the master database on the source MTA, using the steps described
	  under "Preparing for a Full Remote Replay."
	
	2. Run the mtacheck /rd /rp /rl command against the master database to remove
	  directory replication, public folder replication, and link monitor messages
	  before you attempt to split up the remaining DAT files for an incremental
	  replay.
	
	3. Run the mtacheck /v /f mtacheck.log command to determine which DAT files may
	  be "secured" queue files. For detailed information about identifying secured
	  queues, see:
	
	  Q282780 XCON: MTA Database Format and Structure
	
	4. Create a CoreData directory, and then copy all of the core MTA data (01-26)
	  files and all of the "secured" queue files from the replication-message-free
	  master database to the CoreData directory.
	
	5. Split the remaining DAT files into chunks of files and place them into
	  separate "\Chunk" directories that you create.
	
	6. After you split the master database between the CoreData and the \Chunk
	  directories, copy the CoreData files into each of the \Chunk directories.
	
	The following example illustrates how to prepare for a Remote Incremental Replay.
	If for example there are 2,000 DAT files in the master database, you could split
	the files into four chunks, each containing copies of the core and queue files.
	
	\CoreData    (44 core and queue files)
	\Chunk1      (489 data files + 44 core and queue files)
	\Chunk2      (489 data files + 44 core and queue files)
	\Chunk3      (489 data files + 44 core and queue files)
	\Chunk4      (489 data files + 44 core and queue files)
	
	You can put any number of message files in the \Chunk directories. The number of
	files in each \Chunk directory should be determined by how much time is
	necessary to replay the messages and by how many messages the remote MTA can
	handle without bogging down.
	
	Performing a Remote Incremental Replay:
	
	After you complete the preparation, perform the Remote Incremental Replay:
	
	1. Make sure that no mail is pending delivery on the remote replay server.
	
	2. In Control Panel, under Services, stop the Microsoft Exchange Message
	  Transfer Agent service on the replay server.
	
	3. Move all DB*.dat files from the replay server's MTA database path directory
	  to a temporary location, referred to as the "secondary database."
	
	4. On the replay server, start Registry Editor.
	
	5. Open the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	6. Add the following value setting if it does not already exist:
	
	  Dispatch Remote MTA messages : REG_DWORD: 1
	
	7. Copy a full set of files from one of the \Chunk directories to the MTA
	  database path directory on the remote server. It is best to replay the newest
	  set because the oldest set is more likely to contain the data that originally
	  contributed to the backlog.
	
	8. Run the mtacheck command. No startup switches are needed.
	
	9. In Control Panel on the replay server, under Services, start the Microsoft
	  Exchange Message Transfer Agent service.
	
	10. If the \Chunk set does not deliver all messages successfully:
	
	  a. In Control Panel, under Services, stop the Microsoft Exchange Message
	     Transfer Agent service.
	
	  b. Move the unsuccessful replay set back to its original directory.
	
	  c. Move in the next replay set.
	
	  d. Run a new mtacheck command.
	
	  e. In Control Panel, under Services, start the Microsoft Exchange Message
	     Transfer Agent service.
	
	  f. Monitor the MTA's processing of the latest \Chunk set, and then repeat
	     Steps 2 through 7 for each \Chunk set that processes cleanly.
	
	11. If a replay set does not process successfully, split it into smaller sets,
	  and then try to replay each of the smaller sets. The replay process is
	  complete when all sets have replayed or when you are down to just the files
	  that do not replay.
	
	  NOTE: If running MTACheck generates an exception violation, one or more of
	  the core MTA files may be missing. You can try copying just the missing file
	  from the Bootenv directory on the Exchange Server CD. Do not replace any DAT
	  files from the Exchange Server CD unless the files are missing and there is
	  no other way of recovering them. If any of the core DAT files are missing,
	  the likelihood of recovery is significantly reduced.
	
	Resetting the Replay Server After a Full or Incremental Remote Replay:
	
	To reset the replay server after a Full or Incremental Remote Replay:
	
	1. In Control Panel on the replay server, under Services, stop the Microsoft
	  Exchange Message Transfer Agent service.
	
	  NOTE: If no mail was pending on the replay server before you created the
	  secondary database copy, you can omit Steps 2 and 3.
	
	2. Delete all DB*.dat files from the MTAData directory.
	
	3. Move the secondary database back to the MTAData directory.
	
	4. On the remote server, start Registry Editor.
	
	5. Open the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	6. Change the Dispatch Remote MTA messages value setting to 0 (zero).
	
	  NOTE: If you do not reset this registry value, Exchange Server sends
	  non-delivery reports (NDRs) for all messages after the server returns to its
	  original role.
	
	7. Run the mtacheck command.
	
	8. In Control Panel, under Services, start the Microsoft Exchange Message
	  Transfer Agent service.
	
	Performing a Local Incremental Replay:
	
	Performing a Local Incremental Replay is virtually identical to performing a
	Remote Incremental Replay, except that the replay is done on the source MTA
	server. To perform a Local Incremental Replay:
	
	1. Run the mtacheck /rd /rp /rl command against the master database to remove
	  directory and folder replication messages.
	
	2. Split the master database into \Chunk sets.
	
	3. In Control Panel, under Services, stop the Microsoft Exchange Message
	  Transfer Agent service.
	
	4. Move the newest replay set to the MTAData directory. The oldest set is more
	  likely to contain the data that originally contributed to the backlog.
	
	5. Run the mtacheck command.
	
	6. In Control Panel, under Services, start the Microsoft Exchange Message
	  Transfer Agent service.
	
	7. If the replay set does not deliver all messages that are in the \Chunk set:
	
	  a. In Control Panel, under Services, stop the Microsoft Exchange Message
	     Transfer Agent service.
	
	  b. Move the unsuccessful \Chunk set back to its original directory.
	
	  c. Move in the next \Chunk set.
	
	  d. Run a new MTACheck.
	
	  e. In Control Panel, under Services, start the Microsoft Exchange Message
	     Transfer Agent service.
	
	  f. Monitor the MTA's processing of the latest replay set.
	
	8. Repeat Steps 3 through 6 for each \Chunk set that processes cleanly. If the
	  replay set has problems, follow the procedure in Step 7.
	
	If a replay set does not process, split it into smaller sets and then try to
	replay each of the smaller sets. The replay process is complete when all sets
	have replayed or when you are down to just the files that do not replay.
	
	NOTE: If running MTACheck generates an exception violation, one or more of the
	core MTA files may be missing. You can copy the missing file from the correct
	Bootenv directory on the Exchange Server CD. Do not replace any DAT files from
	the Exchange Server CD unless the files are missing and there is no other way to
	recover them. If any of the core DAT files are missing, the likelihood of
	recovery is significantly reduced.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
