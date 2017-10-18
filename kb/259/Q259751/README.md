---
layout: page
title: "Q259751: XADM: How to Recover from a Full Transaction Log File Drive"
permalink: kb/259/Q259751/
---

## Q259751: XADM: How to Recover from a Full Transaction Log File Drive

	Article: Q259751
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
	
	The Exchange Server directory service and information store service may shut
	down if the drive space for the associated transaction logs or the drive space
	for the database drive falls to 10 megabytes (MB) or less.
	
	CAUSE
	=====
	
	The Exchange Server directory service and the information store log the changes
	that are made to the databases in transaction logs for recovery purposes.
	
	If you have circular logging disabled, logs are left on the drive until a full or
	incremental online backup (that uses Exchange Server-aware backup software) is
	performed.
	
	If your database is not backed up and excessive changes are made to your server
	or data is added to your databases, the drive that holds the transaction logs
	may fill up, which causes the Exchange Server services to stop.
	
	WORKAROUND
	==========
	
	To work around this issue, determine which log files you can safely move to free
	up disk space, and move them.
	
	The Edb.chk is the checkpoint file for the logs, which keeps track of the last
	committed log to the Dir.edb, Pub.edb, or Priv.edb databases. This file is
	usually located on the same drive as the <x>:\Exchsrvr\Bin folder under
	the <x>:\Exchsrvr\Dsadata folder (for the directory service), and
	<x>:\Exchsrvr\Mdbdata (for the information store).
	
	To find out what the last committed log is, run one of the following commands:
	
	- For the directory service:
	
	  ESEUTIL /mk x:\exchsrvr\dsadata\edb.chk
	
	- For the information store:
	
	  ESEUTIL /mk x:\exchsrvr\mdbdata\edb.chk
	
	The output of this command is similar to the following example:
	
	  Microsoft(R) Windows NT(TM) Server Database Utilities
	  Version 5.5
	  Copyright (C) Microsoft Corporation 1991-1999. All Rights Reserved.
	
	  Initiating FILE DUMP mode...
	  Checkpoint file: c:\exchsrvr\mdbdata\edb.chk
	
	  LastFullBackupCheckpoint (135,5422,45)
	  Checkpoint (255,5582,406)
	  FullBackup (135,5422,45)
	  FullBackup time:4/15/2000 00:34:05
	  IncBackup (201,4231,62)
	  IncBackup time:4/17/2000 00:30:15
	  Signature: Create time:4/5/2000 17:48:47 Rand:721684 Computer:
	  Env (Session, Opentbl, VerPage, Cursors, LogBufs, LogFile, Buffers)
	  ( 168, 25200, 4440, 8400, 84, 10240, 32622)
	  Operation completed successfully in 0.50 seconds.
	
	To find out which log files are safe to move:
	
	1. In the output from the command, the first number in the parentheses next to
	  the Checkpoint field is the last committed log in decimal. In this example it
	  is 255. Use the Calc.exe utility in windows in scientific mode to convert 255
	  to hexadecimal FF. The last committed log to the database in this example is
	  therefore Edb000FF.log.
	
	2. When you examine your log directory, if there is one number down from this
	  log, in this example Edb000FE.log, then your Edb.log is actually
	  Edb000FF.log, internally, or the next log in the sequence.
	
	3. Count back five logs and move (IMPORTANT: move, not delete) the logs that are
	  older or lower in numerical value. Therefore in this example it is safe to
	  move all of the numerical value transaction logs before Edb000F0.log.
	
	IMPORTANT: Do not move Edb.log, Res1.log, or Res2.log. Only move logs that have a
	numerical value, such as EdbXXXXX.log. If you move the wrong logs, your service
	does not start and returns a -1811 0xFFFFF8ED JET_errFileNotFound or a service
	specific error 4294965485.
	
	The following errors may also be displayed if logs are missing:
	
	- -509 0xFFFFFE03 JET_errMissingPreviousLogFile SSE 4294966787
	
	- -515 0xFFFFFDFD JET_errInvalidLogSequence SSE 4294966781
	
	- -528 0xFFFFFDF0 JET_errMissingLogFile SSE 4294966768
	
	- -550 0xFFFFFDDA JET_errDatabaseInconsistent SSE 4294966746
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q240145 XADM: How to Tell Which Transaction Log Files Can Be Safely Removed
	
	  Q246272 XADM: Service Specific Error 4294966767 Appears, Information Store
	  Stops with Low Disk Space
	
	  Q163913 XADM: IS or DS Stops Due to Lack of Drive Space for Log Files
	
	For additional information about this procedure in Exchange 2000 Server and how
	it differs from the procedure described in this article, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q182961 XADM: Using Eseutil to Determine Which Logs Have Been Committed
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
