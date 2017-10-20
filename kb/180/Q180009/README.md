---
layout: page
title: "Q180009: XADM: Exchange 5.5 Upgrade Fails With ID No: c106fdda"
permalink: /kb/180/Q180009/
---

## Q180009: XADM: Exchange 5.5 Upgrade Fails With ID No: c106fdda

{% raw %}

	Article: Q180009
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade to Microsoft Exchange Server 5.5, you may receive
	the following error message:
	
	  An unexpected error has occurred.
	  ID No. c106fdda
	
	If you chose a fault-tolerant setup, you will receive an error message similar to
	the following:
	
	  Your upgrade did not complete successfully. Please restart your Microsoft
	  Exchange services and your system will behave as it did before the upgrade
	  was attempted.
	
	If you did not choose a fault-tolerant setup, you must uninstall and reinstall
	Exchange Server 5.0 and then restore your databases from a backup copy.
	
	CAUSE
	=====
	
	This problem occurs when Setup is attempting to upgrade one of the databases
	that is inconsistent.
	
	WORKAROUND
	==========
	
	To work around this problem, quit the Setup program and restore the Priv.edb,
	Pub.edb, and Dir.edb databases if needed.
	
	If a fault-tolerant upgrade was chosen originally, with the Directory and
	Information Store services stopped, run the following commands to verify the
	consistency of each database:
	
	  <drive>:\exchsrvr\bin\edbeutil /mh <full path>\dir.edb
	  <drive>:\exchsrvr\bin\edbeutil /mh <full path>\priv.edb
	  <drive>:\exchsrvr\bin\edbeutil /mh <full path>\pub.edb
	  <drive>:\exchsrvr\bin\edbeutil /mh <full path>\xdir.edb
	
	If a fault-tolerant upgrade was not chosen originally, with the Directory and
	Information Store services stopped, run the following commands to verify the
	consistency of each database:
	
	  <drive>:\Winnt\System32\eseutil /mh <full path>\dir.edb
	  <drive>:\Winnt\System32\eseutil /mh <full path>\priv.edb
	  <drive>:\Winnt\System32\eseutil /mh <full path>\pub.edb
	  <drive>:\Winnt\System32\eseutil /mh <full path>\xdir.edb
	
	For the database that is inconsistent, run the following command to attempt to
	force consistency:
	
	  <drive>:\Winnt\System32\eseutil /r /ds or /ispriv or /ispub
	
	If the directory, private, or public database does not become consistent, restore
	from a good backup, verify consistency, and rerun Setup.
	
	MORE INFORMATION
	================
	
	The upgrade process to Exchange Server 5.5 upgrades all Exchange databases
	including the Priv.edb, Pub.edb, Dir.edb, and also the Xdir.edb in the DXADATA
	directory, which contains directory synchronization information if directory
	synchronization has been set up on this server.
	
	If the upgrade process fails on the Xdir.edb, this database may be inconsistent
	because of an ungraceful shutdown. To verify the consistency of this database,
	run the following command from the Exchsrvr\Bin directory:
	
	  eseutil /mh <path>\dxadata\xdir.edb |more
	
	A portion of the screen output will show the state of the database to be either
	consistent or inconsistent.
	
	Check for the Microsoft Exchange Server Directory Synchronization service. If the
	service is present and the database is inconsistent, you must attempt to make it
	consistent using the appropriate method:
	
	- Start the Directory Synchronization service, which attempts to perform a soft
	  recovery and replay its log files.
	
	- In Exchange Server 5.0, run the following command:
	
	  edbutil /d <path>\dxadata\xdir.edb /r
	
	- In Exchange Server 5.5, run the following command:
	
	  eseutil /p <path>\dxadata\xdir.edb
	
	If the Directory Synchronization service is not present, simply delete all the
	files from the <path>\dxadata\.directory. NOTE: This database is not
	backed up with Online Backup utilities and can only be restored if there is an
	offline copy available.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
