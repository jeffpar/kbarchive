---
layout: page
title: "Q176517: SMS: Troubleshooting Inventory MIF Backlog Problems"
permalink: kb/176/Q176517/
---

## Q176517: SMS: Troubleshooting Inventory MIF Backlog Problems

	Article: Q176517
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbConfig kbDatabase kbDataLoader smshowto smsconfig smsdatabase smsdataloader
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MIFs may build up in the ..SMS\Site.srv\Dataloder.box\Deltamif.col directory (or
	the ..SMS\Site.srv\Dataloder.box\Deltamif.col\Process directory in version 1.2)
	for a variety of reasons. This article outlines troubleshooting suggestions to
	why the build up occurs and how to resolve it.
	
	Before you proceed, verify the following information:
	
	- The SQL Server tempdb has the SELECT INTO/BULK COPY option set.
	
	- Successful network and communication links exists between SQL Server and the
	  computer running Systems Management Server.
	
	- The SQL Server login information is correct.
	
	If any of these conditions is not true, take appropriate steps to correct it.
	
	MORE INFORMATION
	================
	
	The ..SMS\Logs\Datalodr.log and the Windows NT Application Event Log on both the
	SQL Server computer and the Systems Management Server site server provide
	information about possible causes. You should also check the SQL Server error
	log.
	
	NOTE: Before you begin troubleshooting, dump the Systems Management Server and
	Master databases and then back up the Systems Management Server directory
	structure and the HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS registry key.
	
	Site Speed
	----------
	
	The site speed (set in Site Properties on the Services tab) should never be set
	to Very Fast. A setting of Medium or Fast will process MIFs faster because the
	Site Configuration Manager does not have to continually perform watchdog cycles
	which gives the Dataloader utility a chance to run uninterrupted for a longer
	period of time.
	
	SQL Server Configuration
	------------------------
	
	If Open Objects is set to less than 5,000, Dataloader can get backed up. Tempdb
	should be 20 to 30 percent of the largest database on the SQL Server. User
	connections must be set appropriately.
	
	For additional information about important tuning parameters, see the following
	article in the Microsoft Knowledge Base:
	
	  Q166244 SMS: SQL Server Tuning Parameters for Systems Management Server
	
	Use Performance Monitor to check the Cache Hit Ratio and make sure that the
	database is in cache (it should be above 99 percent), not paging out. Add RAM
	and/or dedicated memory to SQL Server if necessary.
	
	Database and Transaction Log Size
	---------------------------------
	
	Make sure that the Systems Management Server database and its transaction log are
	not full, and that the transaction log is 20 percent of the Systems Management
	Server database size. If the database is less than 20 percent free, failures may
	occur.
	
	Services
	--------
	
	Make sure that the Systems Management Server Executive Service is running on the
	site server.
	
	Client Resynchronizations
	-------------------------
	
	Check the Windows NT event log for a high number of client resynchronizations
	(Event 186). If there are several resyncs, they may occur because duplicate
	SMSIDs are assigned. For additional information, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q127052 SMS Unique ID (SMSID) Allocation
	
	  Q138021 How Inventory Dataloader Finds Matching Computers in SMS
	
	
	SQL Server Service Pack
	-----------------------
	
	Apply (or re-apply) the latest SQL Server Service Pack.
	
	SQL Server Tracing
	------------------
	
	You can enable SQL statement input and output in the Dataloder.log by setting
	the
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Tracing\SQL Enabled
	
	registry parameter to 1. To disable SQL tracing, set the value to 0.
	
	The Systems Management Server Executive service must be stopped and restarted for
	the change to take effect.
	
	NOTE: SQL Tracing should be disabled when you are not performing troubleshooting
	steps. Leaving it enabled causes the Dataloader to slow down and the log to fill
	up more quickly.
	
	DBCC Checks
	-----------
	
	Run SQL Server DBCC CHECKDB and DBCC NEWALLOC statements on the Systems
	Management Server database in Single User Mode.
	
	Site Reporter
	-------------
	
	Check the ..SMS\Site.srv\Siterep.box to see if files are present. If there are,
	and the site is a child primary site, ensure that site-to-site communication is
	functioning properly. To determine this, do the following:
	
	- Look in the appropriate sender log.
	
	- Check the addresses.
	
	- Check the Windows NT Application Event Log.
	
	- Check the Outbox scheduling.
	
	If files are present in the Siterep.box subdirectory, temporarily move them to
	another subdirectory to see if the MIF processing improves.
	
	User Group MIFS
	---------------
	
	Check the SMS\Site.srv\Dataloder.box\Deltamif.col directory for UMF files. If
	there are several UMF files, and they are large, you probably have a large
	number of users, groups, or a complicated trust matrix in your environment.
	
	You may want to change the default polling interval for user and group
	enumeration using the Setgug.exe utility. For additional information about the
	utility, please see the following articles in the Microsoft Knowledge Base:
	
	  Q168724 SMS: List of Tools Available on the SMS 1.2 Compact Disc
	
	  Q171005 SMS: Site Config Manager Service Locks Trusted Service Account
	
	MIF Size
	--------
	
	Check the SMS\Site.srv\Dataloder.box\Deltamif.col and
	SMS\Site.srv\Dataloder.box\Deltamif.col\Process directories and note the MIF
	size. Larger MIFs (that is, MIFs that contain custom information or extensive
	software inventory) will be processed more slowly.
	
	I/O Errors
	----------
	
	If SQL Server devices and Systems Management Server directories are on the same
	drive or the drive is mirrored with a single disk controller, check for I/O disk
	errors reported in the SQL Server log file and/or Performance Monitor.
	
	If disk I/O appears to be a bottleneck, you may need to move SQL Server devices
	to another physical disk drive, install a second controller, and so forth.
	
	SMSMaint Script
	---------------
	
	Run the SMSMaint.sql script from the BackOffice Resource Kit.
	
	SPID Performance
	----------------
	
	Monitor the SQL Server spid performance by using SQL WHO and Performance Monitor
	to correlate this to the Dataloader thread. For additional information, see the
	following article in the Microsoft Knowledge Base:
	
	  Q117559 How to Correlate Spid, Kpid, and Thread
	
	
	Inventory Frequency
	-------------------
	
	Decrease inventory frequency if necessary. For example, if there are six child
	sites of 2,000 to 4,000 computers, plus clients that inventory every time they
	log on, and they report to a central site, an expected backlog will occur.
	
	Systems Management Server 1.2 Dataloader is multithreaded. If MIFs are large,
	and/or the number of clients is large, a Systems Management Server version 1.0
	or 1.1 site may have a MIF backup and the troubleshooting suggestions provided
	in this article may not help. If the site is running Systems Management Server
	1.0 or 1.1, consider upgrading to Systems Management Server version 1.2 (and the
	latest Systems Management Server service pack).
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbDatabase kbDataLoader smshowto smsconfig smsdatabase smsdataloader 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	
