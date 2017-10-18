---
layout: page
title: "Q258302: XADM: Troubleshooting Refer.mdb File Issues"
permalink: kb/258/Q258302/
---

## Q258302: XADM: Troubleshooting Refer.mdb File Issues

	Article: Q258302
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 23-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may find a file called Refer.mdb in the Exchsrvr\Mdbdata folder, where the
	Priv.edb or Pub.edb file is located.
	
	You may be unable to run Edbutil. You may also be unable to run the isinteg -fix
	command; it may cause an access violation or an unhandled exception. You may be
	unable to restore the information store from an online backup, and you may be
	unable to start the information store service. Either the Priv.edb file, the
	Pub.edb file, or both files may be inconsistent.
	
	The following error message may be logged in the Microsoft Windows NT Event
	Viewer application event log:
	
	  Event ID: 37
	  Source:EDB
	  Type: Warning
	  Category: Logging/Recovery
	  Description: MSExchangeIS 245 Unable to read header of database.
	  x:\exchsrvr\mdbdata\Refer.mdb error -1206.
	
	NOTE: Other possible event IDs that reference the Refer.mdb file are event ID 39,
	event ID 200, event ID 132, and event ID 145. Most commonly, however, the event
	ID that refers to this file is event ID 37.
	
	CAUSE
	=====
	
	This issue can occur if the Isinteg utility did not finish normally during the
	utility's last run.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename or remove the Refer.mdb file, because the
	Refer.mdb file may occasionally interfere with the normal operation of the
	information store process and the Jet database engine if the Refer.mdb file
	remains after you run Isinteg. Microsoft recommends that you rename the
	Refer.mdb file, and then move the Refer.mdb file to a temporary subdirectory for
	future reference if the issue returns.
	
	To rename or remove the Refer.mdb file:
	
	1. Look for the Refer.mdb file first in the Exchsrvr\Mdbdata folder where the
	  Priv.edb and Pub.edb files are located; the Priv.edb and Pub.edb files may be
	  located in separate folders. If the Priv.edb and Pub.edb files are located in
	  separate folders, check both folders. Microsoft recommends that you check the
	  entire hard disk for the Refer.mdb file.
	
	2. Notice the date on the Refer.mdb file. It may indicate the time that Isinteg
	  was last run. Look for anything unusual that may have occurred the last time
	  that Isinteg was run, either anything unusual when Isinteg was run or
	  anything unusual that may affect the information store. Look for known
	  problems in the information store at the time that Isinteg was last run by
	  checking the application event log in Event Viewer.
	
	3. If the information store does not start, check the consistency of the
	  Priv.edb and Pub.edb files by using either the edbutil /mh command or the
	  eseutil /mh command. If the databases are consistent and you simply remove or
	  rename the Refer.mdb file, the information store may start, which enables you
	  to run Eseutil or Isinteg successfully and run a backup restoration
	  successfully.
	
	4. If the either the Priv.edb or Pub.edb file is not consistent, rename the
	  Refer.mdb file, and then perform a soft recovery on the information store
	  database by running either the edbutil /r command or the eseutil /r command.
	
	  IMPORTANT: Do not run a soft recovery immediately after an online restoration
	  because you may damage the restored databases.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q231299 XADM: Information Store Returns Service-Specific Error 335544375
	
	If either information store database is inconsistent and you are unable to bring
	the database to consistency by running a soft recovery, you may need to restore
	from online backup.
	
	MORE INFORMATION
	================
	
	The Refer.mdb file is a temporary database that is created when you run Isinteg.
	Isinteg scans the tables in the information store database for errors. Isinteg
	builds a temporary Exchange Server database of reference counts, the Refer.mdb
	file, for the cross-reference tables of reference counts before Isinteg scans
	the tables. After Isinteg traverses all of the cross-reference tables, Isinteg
	compares the counts that it found to the counts in the reference database. If
	Isinteg is running with the fix switch, these counts are updated to their true
	values as determined by Isinteg.
	
	Because the Refer.mdb file is a temporary database, it is normally automatically
	removed after Isinteg finishes. If the Refer.mdb file is on the server and
	Isinteg is not running, Isinteg did not finish normally when it was last run.
	
	For additional information about the Refer.mdb file and troubleshooting problems
	with the Refer.mdb file, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q182081 XADM: Description of ISINTEG Utility
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
