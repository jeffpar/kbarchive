---
layout: page
title: "Q185225: XFOR: MSExchangeDX Fails To Start With Missing Xdir.edb File"
permalink: kb/185/Q185225/
---

## Q185225: XFOR: MSExchangeDX Fails To Start With Missing Xdir.edb File

	Article: Q185225
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Directory Synchronization service (DXA) may fail to start
	with the following error:
	
	  Error 2140: An Internal Windows NT error occurred
	
	This error will be displayed when you attempt to manually start the (DXA) service
	using the Control Panel's services icon.
	
	You may also see the following event in the Application event log:
	
	  Event 124
	  Source: ESE97
	  Category: Logging/Recovery
	  Desc: MSExchangeDX 185 (Unable to read the log header. error - 1022)
	
	The only other events with the source of MSExchangeDX are the startup and
	shutdown confirmations.
	
	CAUSE
	=====
	
	The transaction log files (Edb.log) are present but the Xdir.edb file is missing
	from the Exchsrvr\Dxadata directory.
	
	WORKAROUND
	==========
	
	Restore Xdir.edb from backup, or remove all files in the Exchsrvr\Dxadata
	directory. Removing the files will cause them to be recreated empty. This
	results in the loss of any uncommitted Directory Synchronization transactions.
	
	MORE INFORMATION
	================
	
	Edb.log contains the path to Xdir.edb. When the Microsoft Exchange Server
	Directory Synchronization is started, the Exchange database is initialized. The
	Edb.chk file is checked to find out which transactions have been committed from
	the Edb.log file to the Xdir.edb file.
	
	If Xdir.edb is not present, the MSExchangeDX service will stop and report the
	above errors.
	
	Additional query words: dxa
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
