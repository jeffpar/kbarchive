---
layout: page
title: "Q259851: XADM: Ramifications of Running ESEUTIL /P or EDBUTIL /D /R"
permalink: /kb/259/Q259851/
---

## Q259851: XADM: Ramifications of Running ESEUTIL /P or EDBUTIL /D /R

{% raw %}

	Article: Q259851
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 25-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	A hard repair occurs when you run an eseutil /p or edbutil /d /r command against
	an Exchange Server database file, such as the Priv.edb, Pub.edb, or Dir.edb
	database. The repair goes through the database and checks and repairs critical
	structures inside the database (such as system tables, attachment tables, and so
	on) and checks for damaged pages in the databases.
	
	If the repair encounters a page that is damaged (for example, an invalid checksum
	caused by a modification to the page that was not preformed by Jet) it deletes
	the page (-1018). When this happens, critical data may be lost after the repair
	finishes. This data may be part of an e-mail message, a calendar appointment, a
	note, an attachment, or in the worst-case scenario, part of a system table.
	
	If that system table is the attachment table, every user on the server may lose
	the attachments to their messages. This is only one possible scenario, but if
	there are damaged pages in the database, data will be lost following a hard
	repair.
	
	IMPORTANT: It is always best to restore from a backup whenever possible.
	
	If you restore from a backup, you ensure that you have a good, clean, stable,
	database that will start and run on your server. In almost every circumstance,
	it is faster and more reliable to restore from a backup than to perform a hard
	repair on the database. This is because the repair runs at approximately 4 to 6
	gigabytes (GB) per hour, and you must run the Isinteg process after the repair,
	which runs at approximately 3 to 6 GB per hour. (These rates are average;
	performance may vary depending on how many passes the repair has to make on your
	database and the speed of the hardware.)
	
	For example, if you use the fastest possible hardware setup, a 50-GB database
	requires approximately 8 hours for repair and approximately 8 hours for the
	Isinteg process, for a total of 16 hours. If you use a typical Wide
	SCSI-connected digital linear tape (DLT) 35/70, which averages around 3
	megabytes (MB) per second for restoration, the same database needs approximately
	5 hours for restoration. That is a time savings of 11 hours. Extremely high
	speed "snapshot" type backup systems, such as the system from EMC Corporation,
	can restore a database of this size in a matter of minutes.
	
	If you have no backup, and no other option but to run a hard repair on your
	database, you must run the Isinteg utility after you run the hard repair. The
	Isinteg utility fixes the logical problems that may arise when you run a hard
	repair:
	
	- For the Exchange Server 4.0 and 5.0 private information store, run the
	  following command:
	
	  isinteg -fix -pri
	
	- For the Exchange Server 4.0 and 5.0 public information store, run the
	  following command:
	
	  isinteg -fix -pub
	
	- For the Exchange Server 5.5 private information store, run the following
	  command:
	
	  isinteg -pri -fix -test alltests
	
	- For the Exchange Server 5.5 public information store, run the following
	  command:
	
	  isinteg -pub -fix -test alltests
	
	After you run the eseutil /p or edbutil /d /r command on the Priv.edb or Pub.edb
	databases, the databases may exhibit the following symptoms:
	
	- The information store either will not stop or stops responding.
	
	- The information store stops accepting mail from the message transfer agent
	  (MTA).
	
	- E-mail remains in the Outboxes of the users.
	
	- The Store.exe program runs with very high CPU use with no load on the server.
	
	- The Store.exe program generates an access violation if there is a heavy load.
	
	- Users cannot open e-mail attachments or e-mail messages.
	
	After you run a hard repair on a database that has extensive damage, it is not
	fit for production use. Only run a hard repair on your database as a last
	resort; if possible, always restore from a backup.
	
	If you have to run a hard repair on your production database, Microsoft
	recommends that you move the data out of the repaired database to a new
	database. Use one of the following two methods to move the data to a new
	database:
	
	- Using an Offline Defragmentation:
	
	An offline defragmentation automatically creates a new database structure and
	moves the existing data to that structure. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q192185 XADM: How to Defragment with the Eseutil Utility (Eseutil.exe)
	
	- Using Exmerge:
	
	The Exmerge utility can extract data from one database and place it in another
	database previously created. For additional information, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q259688 XADM: Steps for Using EXMERGE to extract Data from a damaged Database
	
	
	MORE INFORMATION
	================
	
	To determine if a hard repair has been run against your database, dump the
	header by using the following command line (the repair count will be zero if the
	databases have not been repaired):
	
	  eseutil /mh x:\exchsrvr\mdbdata\priv.edb |more
	
	  eseutil /mh x:\exchsrvr\mdbdata\pub.edb |more
	
	The following is a sample of a Priv.edb header:
	
	  Microsoft(R) Windows NT(TM) Server Database Utilities
	  Version 5.5
	  Copyright (C) Microsoft Corporation 1991-1999. All Rights Reserved.
	
	  Initiating FILE DUMP mode...
	  Database: d:\exchsrvr\mdbdata\priv.edb
	
	  Format ulMagic: 0x89abcdef
	  Engine ulMagic: 0x89abcdef
	  Format ulVersion: 0x620,2
	  Engine ulVersion: 0x620,2
	  DB Signature: Create time:4/5/2000 17:48:52 Rand:769046 Computer:
	  cbDbPage: 4096
	  dbtime: 556457
	  State: Consistent
	  Shadowed: Yes
	  Last Objid: 184
	  Scrub Dbtime: 0
	  Scrub Date: 00/00/1900 00:00:00
	  Repair Count: 1
	  Repair Date: 2/20/2000 10:48:50
	
	Additional query words: -1018 -1019
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
