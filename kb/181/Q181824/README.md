---
layout: page
title: "Q181824: XADM: Exch DB Doesn't Detect Removed Page in B-tree Split Opera"
permalink: /kb/181/Q181824/
---

## Q181824: XADM: Exch DB Doesn't Detect Removed Page in B-tree Split Opera

{% raw %}

	Article: Q181824
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage exc55kbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange information store database may experience one of the
	following symptoms during normal operation:
	
	During an offline defragmentation (ESEUTIL /D) of the database, the process stops
	with JET error
	
	  -1601(JET_errRecordNotFound)
	
	or
	
	  -1603(JET_errNoCurrentRecord)
	
	.
	
	In 5.5 SP1 during an offline defragmentation (ESEUTIL /D), the process may stop
	with JET error
	
	  -1526 (JET_errLVCorrupted)
	
	.
	
	During normal operation, you may get a
	
	  -1069 error (JET_errVersionStoreOutOfMemory)
	
	in the application log.
	
	  Event ID: 1101
	  Source: MSExchangeIS Private
	  Type: Error
	  Category: Background Cleanup
	  Description:
	  Error 0xfffffbd3 occurred on message <Message ID> during a background
	  cleanup.
	
	If you run the consistency checker (ESEUTIL /G <db> /V /X piped to a text
	file), it reports ERROR: corrupted LV(number) (lid changed without root), and/or
	ERROR: orphaned LV(lid, size, refcount). An orphaned LV is a non-corrupting
	error.
	
	In 5.5 SP1, ESEUTIL /G /V /X may stop with the following JET Error -1206
	(JET_errDatabaseCorrupted).
	
	
	With Diagnostic Logging turned up to general on the Information Store you may
	receive the following Application Event Log: During normal operation, you may
	get a -1069 error (JET_errVersionStoreOutOfMemory) in the application log.
	
	  Event ID: 195
	  Source: ESE97
	  Type: Information
	  Category: General
	  Description: MSExchangeIS ((322) ) Internal trace: lv.cxx@395
	
	The information store service (Store.exe) may access violate during normal
	operation when it encounters corrupt data.
	
	
	The information store process is using 100 percent of the CPU time all consumed
	by one thread (there are occasions when up to three threads are affected). You
	can view this by following these steps:
	
	1. Start the Windows NT Performance Monitor.
	
	2. On the Edit menu, click Add To Chart.
	
	3. In the Object list, click Thread.
	
	4. In the Instance list, select all values that contain "store".
	
	5. Click Add.
	
	
	CAUSE
	=====
	
	When the Exchange database engine inserts a record into the binary tree
	(b-tree), it may find a record with the same primary key that is marked for
	deletion. Because the node is just marked for deletion and has not been
	physically deleted yet, the Exchange database engine "undeletes" the node and
	changes its data to that of the new record. Because the Exchange database engine
	is changing the data associated with the record, the Exchange database engine
	may be changing the record's size. If the record becomes too big for the page,
	the Exchange database engine has to perform a b-tree split. During the split,
	the Exchange database engine must release the latch on the pages in the tree and
	then re-latch them when the split is completed. In rare circumstances where the
	information store cleanup thread comes along in the small delta where the pages
	were unlatched, the information store cleanup thread may remove the page marked
	for deletion. When the Exchange database engine tries to re-latch the pages, it
	does not know the record has been removed. As a result, the information store
	either stops responding (uses 100 percent processor time in one or more threads)
	or corrupts the data.
	
	RESOLUTION
	==========
	
	Apply the fix described below. The Exchange database engine has been fixed to
	detect whether the page has been removed and to take appropriate action if it
	has.
	
	If you have already experienced the corruption symptoms of this problem, you can
	perform the following steps to repair the corruption with NO loss of data and no
	need to run ISINTEG -fix (as long as there is no other corruption in the
	database).
	
	NOTE: Only run ESEUTIL /P after you have performed the steps to find LV problems
	in your database, which are outlined in the "Symptoms" section of this article.
	
	Run the consistency checker (ESEUTIL /G <db> /V /X piped to a text file);
	it reports:
	
	  corrupted LV(number) (lid changed without root),
	
	and/or
	
	  orphaned LV(lid, size, refcount).
	
	An orphaned LV is a non-corrupting error.
	
	Corrupted and Orphaned LVs Reported:
	
	If both corrupted and orpaned LVs are reported, then you must follow these
	steps:
	
	1. Make sure the new Ese.dll file described below is in place (\winnt\system32).
	
	2. Stop the information store service.
	
	3. Run ESEUTIL /P <dbswitch> /X to repair the corruption.
	
	4. Perform an offline defragmentation of the database (ESEUTIL /D <db>).
	
	5. Restart the information store service.
	
	6. Perform a full online backup of the information store service to be sure you
	  have the repaired version of the database backed up.
	
	Orphaned LVs Reported:
	
	If only orphaned LVs are reported by ESEUTIL /G <db> /V /X, and no
	corrupted LVs are reported, you can remove the errors by performing an offline
	defragmentation of the database (ESEUTIL /D <db>).
	
	Corrupted LVs Reported:
	
	If corrupted LVs are reported you must:
	
	1. Make sure the new Ese.dll file described below is in place (\winnt\system32).
	
	2. Stop the information store service.
	
	3. Run ESEUTIL /P <dbswitch> /X to repair the corruption.
	
	4. Restart the information store service.
	
	5. Perform a FULL online backup of the information store service to be sure you
	  have the repaired version of the database backed up.
	
	NOTE: be sure to have current backups of your databases prior to running any
	utilities or upgrades on them.
	
	If you have not experienced any of these symptoms but want to be proactive and
	prevent this corruption from occurring, make sure the Ese.dll file is in place
	(\winnt\system32) and restart the information store service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	This fix is currently available at the following location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostRTM/ESE-FIX/
	
	MORE INFORMATION
	================
	
	High CPU use or a stoppage of the information store occurs if there are exactly
	two nodes on the page being split. This is because the Exchange database engine
	tries to split one record on a page, which is not possible.
	
	Data corruption occurs if there are more than two nodes on the page being split.
	This is because Exchange database engine replaces the node immediately after the
	one it intended to insert to.
	
	Additional query words: ese!JetGetTableColumnInfo kbfaq exfaq
	
	======================================================================
	Keywords          : kbusage exc55 kbfaq
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
