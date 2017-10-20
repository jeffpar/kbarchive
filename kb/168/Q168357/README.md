---
layout: page
title: "Q168357: XADM: Event ID: 24 Asynchronous Read Page Time Error"
permalink: /kb/168/Q168357/
---

## Q168357: XADM: Event ID: 24 Asynchronous Read Page Time Error

{% raw %}

	Article: Q168357
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Directory replication may stop and the Event Viewer Application Log may display
	the following error:
	
	  Event ID: 24
	  Source:   EDB
	  Type:     Error
	  Category: Database Page Cache
	
	The description may be similar to:
	
	  MSExchangeDS ((198) ) Asynchronous read page time error -1018 (
	  (1:21534, 21304)
	  (0-24430833), (0-60422491), 1298669031, 1900239879 ) occurred. Please
	  restore the databases from a previous backup.
	
	CAUSE
	=====
	
	The Directory database (Dir.edb) most likely has become corrupt. To discover
	which database is corrupt, start the Windows NT Event Viewer and look in the
	Application log for the following Event ID:
	
	  Event ID: 39
	  Source:   EDB
	  Type:     Warning
	  Category: Logging/Recovery
	
	The description may be similar to:
	
	  ((269) ) Unable to read header of database F:\Exchsrvr\Mdbdata\Dir.edb.
	  Error -1206.
	
	The file listed in the description is the corrupt database.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Restore Dir.edb from a previous backup.
	
	  -OR-
	
	- Repair the bad page of data by running Edbutil.exe:
	
	CAUTION: Edbutil.exe is a low-level Exchange database engine utility that
	defragmentsand checks the consistency of the database. The repair option (which
	is EDBUTIL /d /r <dbname>) attempts to repair bad pages or remove bad
	pages if the repair is unsuccessful. If a page is removed using the repair
	option, there most certainly will be data loss.
	
	1. Make sure you have made a full backup of the Dsadata directory.
	
	2. Make sure you have enough free disk space. You must have more free disk space
	  than the size of the DIR.EDB file. This free space should be on the drive
	  from which Edbutil.exe is run.
	
	3. From the \exchsrvr\bin directory run:
	
	  Edbutil /d /r /ds
	
	MORE INFORMATION
	================
	
	If you receive an error running Edbutil /d /ds /r, you may need to specify the
	entire path to the Dir.edb file. For example:
	
	  edbutil /d c:\exchsrvr\dsadata\dir.edb /r
	
	Refer to the Microsoft Exchange Administrators guide for more details on the use
	of Edbutil.exe.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
