---
layout: page
title: "Q242364: XADM: Information Store Does Not Start After Offline Defrag"
permalink: kb/242/Q242364/
---

## Q242364: XADM: Information Store Does Not Start After Offline Defrag

	Article: Q242364
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run an offline defragmentation (the eseutil /d command), the
	information store does not start and returns an error message 4294966277.
	
	The following events are logged in the application event log:
	
	  Event ID: 0
	  Source: ESE97
	  Type: Error
	  Category: Logging/Recovery
	  Description: MSExchangeIS ((451)) -1019
	
	  Event ID: 1120
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	  Description: Error 0xfffffc05 initializing the Microsoft Exchange Server
	  Information Store database.
	
	The Tempdfrg.edb file (this file name may be different if you used a /t switch in
	the defragmentation command) that is created during the defragmentation is still
	on the drive; a normal defragmentation deletes it.
	
	CAUSE
	=====
	
	The information store defragmentation does not finish the copy of the database
	from the temporary (defragmented) file back to the original location. The
	database is therefore damaged and unusable. The 4294966277 error message is a
	JET_errPageNotInitialized error, which means that a page within the database is
	blank or has not been properly initialized.
	
	RESOLUTION
	==========
	
	When the offline defragmentation does not finish the copy, the temporary
	database is not deleted. If the temporary database is the intact, successfully
	defragmented database, you can manually copy it back to the correct location.
	
	If you only defragmented one database and already know which database is damaged,
	proceed to the "Copying the Temporary Database" section of this article. If you
	defragmented both the Priv.edb and Pub.edb databases and you are not sure which
	database has caused the problem, perform the following steps to determine which
	database is causing the problem:
	
	1. Check the integrity of both the Priv.edb and Pub.edb databases:
	
	   - To check the Priv.edb database, at a command prompt, run the following:
	
	  eseutil /g /ispriv
	
	   - To check the Pub.edb database, at a command prompt, run the following:
	
	  eseutil /g /ispub
	
	2. Note which database does not pass the integrity check and returns a -1019
	  error message.
	
	3. Note the size of the database file that did not pass the integrity check.
	
	4. Compare this size to the size of the temporary file.
	
	By comparing the sizes of the two files, you can determine if the Tempdfrg.edb
	file is the defragmented version of the damaged database file. In most cases,
	the files are exactly the same size. The copy process sets aside the space at
	the beginning of the process, and although the process does not finish, the size
	of the database file still matches the source file.
	
	Copying the Temporary Database:
	
	To ensure that the database defragmentation finished successfully and to copy the
	defragmented file back to the correct location:
	
	NOTE: These steps assume that the information store databases are located on the
	server in the D:\Exchsrvr\Mdbdata folder and the temporary defragmentation file
	is located on drive D (D:\Tempdfrg.edb).
	
	1. Perform an integrity check against the temporary file. At a command prompt,
	  run the following:
	
	  eseutil /g d:\tempdfrg.edb
	
	  If the integrity check finishes successfully, proceed to the next step. If the
	  integrity check does not finish successfully, both copies of the database are
	  damaged and you must restore the database from a backup.
	
	2. Rename the damaged database (either the Priv.edb or Pub.edb database).
	
	3. Copy the temporary defragmentation file from drive D (D:\Tempdfrg.edb) to the
	  D:\Exchsrvr\Mdbdata folder.
	
	4. In the D:\Exchsrvr\Mdbdata folder, rename the Tempdfrg.edb file to the
	  correct database file name (either Priv.edb or Pub.edb).
	
	5. Start the information store.
	
	NOTE: If a -1011 error message is displayed when you start the information store,
	it does not indicate a problem. The information store and the directory need to
	be resynchronized. To synchronize the information store and the directory, at a
	command prompt, run the following:
	
	  \exchsrvr\bin\isinteg -patch
	
	MORE INFORMATION
	================
	
	An offline defragmentation copies data from the current database to a new
	database file. When the defragmentation process reaches 100% the temporary file
	is a complete and defragmented database. At this point, the utility copies the
	temporary file back to the original location, which overwrites the original
	database.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
