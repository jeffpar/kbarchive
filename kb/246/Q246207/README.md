---
layout: page
title: "Q246207: XADM: Database Won't Start with -1206 Error After Failed Upgrade"
permalink: /kb/246/Q246207/
---

## Q246207: XADM: Database Won't Start with -1206 Error After Failed Upgrade

	Article: Q246207
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Exchange Server 5.0 to Exchange Server 5.5 and the upgrade
	does not work, you may experience the following symptoms:
	
	- When you try to start the directory or information store, you receive the
	  following error message:
	
	  -1206, JET_errDatabaseCorrupted
	
	- When you try to run the Exchange Server 5.5 upgrade again, you receive the
	  following error message:
	
	  An unexpected error has occurred. ID No. c106fdda
	
	CAUSE
	=====
	
	When you receive a -1206 error when you are starting the information store or
	directory, the database may not actually be damaged, but may be the wrong
	version (for example, running an Exchange Server 5.0 database against an
	Exchange Server 5.5 computer). In the case of a failed upgrade, this may be
	because the databases were upgraded, at least partially, but the 5.5 files were
	never copied into the Exchsrvr folder.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Verify that this is a version issue by examining the database headers with
	  the Exchange Server 5.5 Eseutil utility.
	
	2. Copy the Eseutil.exe and Ese.dll files from the Exchange Server 5.5 CD to the
	  Exchsrvr\Mdbdata folder where the databases are located.
	
	3. From a command prompt, navigate to the Exchsrvr\Mdbdata folder, type the
	  following commands, and press ENTER after each:
	
	  eseutil.exe /mh priv.edb|find "State"
	
	-and-
	
	  eseutil.exe /mh pub.edb|find "State"
	
	Both commands should return:
	
	  "State: Consistent"
	
	NOTE: Exchange 2000 Service Pack 2 and later, do not report the database state as
	"Consistent" or "Inconsistent" but as "Clean Shutdown" or "Dirty Shutdown." The
	meaning of "Clean Shutdown" is the same as "Consistent", and the meaning of
	"Dirty Shutdown" is the same as "Inconsistent."
	
	If the databases are not consistent, follow the instructions in the following
	Microsoft Knowledge Base article to bring the databases to a consistent state
	before continuing:
	
	  Q180009 XADM: Exchange 5.5 Upgrade Fails With ID No: c106fdda
	
	After the databases are consistent, perform the following steps to resolve the
	issue:
	
	1. Note the database and log file paths for the Information Store service and
	  Directory service.
	
	2. Rename the Dsadata and Mdbdata folders on each drive to Dsadata.old and
	  Mdbdata.old, respectively.
	
	3. Create new Dsadata and Mdbdata folders on each drive.
	
	4. Uninstall Exchange Server.
	
	5. Run Exchange Server 5.0 Setup. Install it in a new site with the same
	  organization and site names. DO NOT JOIN AN EXISTING SITE.
	
	6. If you had any connectors installed, such as the Internet Mail Service, make
	  sure to install them during Setup by choosing to run a Complete/Custom Setup.
	
	7. After the 5.0 Setup finishes, run Exchange Server 5.5 Setup, and click
	  Upgrade. When Setup finishes, stop the Exchange Server services.
	
	8. Run Performance Optimizer to put the databases and log files in their
	  previous locations. Do not restart the services after the files are moved.
	
	9. Rename the Dsadata and Mdbdata folders on each drive to Dsadata.new and
	  Mdbdata.new, respectively.
	
	10. Create new Dsadata and Mdbdata folders on each drive.
	
	11. Copy the Dir.edb file from Dsadata.old to Dsadata. Copy the Priv.edb and
	  Pub.edb files from Mdbdata.old to Mdbdata.
	
	12. Start the System Attendant and the Directory service.
	
	13. At a command prompt in the Exchsrvr\Bin folder, run "isinteg -patch"
	  (without the quotation marks).
	
	14. Start the Information Store service and any remaining Exchange Server
	  services.
	
	
	  At this point, all services should be started.
	
	15. Start the Exchange Server Administrator program and verify that all
	  connectors work.
	
	16. Make a full backup of Exchange Server.
	
	MORE INFORMATION
	================
	
	For additional information on the -1206 error, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q233295 XADM: Error -1206 Starting Database
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
