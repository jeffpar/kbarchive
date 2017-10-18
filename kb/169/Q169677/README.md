---
layout: page
title: "Q169677: XFOR: DXA Reports 249 Error with Error -1201"
permalink: kb/169/Q169677/
---

## Q169677: XFOR: DXA Reports 249 Error with Error -1201

	Article: Q169677
	Product(s): Microsoft Exchange
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade a Microsoft Exchange Server version 4.0 that was running the
	Microsoft Exchange Directory Synchronization (DXA) service to Microsoft Exchange
	Server version 5.0, or you upgrade Windows NT or install a Windows NT Service
	Pack, the following error may appear in the Windows NT Event Viewer Application
	Event Log.
	
	  EventID: 249
	  Source: MSExchangeDX
	  Type: Error
	  Category: Startup
	  Description:
	  Error -1201 occurred while trying to create a new database.
	
	
	CAUSE
	=====
	
	On systems that have recently been upgraded (either Microsoft Exchange or the
	operating system), the database indexes must be rebuilt to assure proper sort
	order. This is due to subtle changes in the Windows NT 4.0 Unicode sort order.
	The DXA does not rebuild Xdir.edb automatically and this causes the above
	error.
	
	
	WORKAROUND
	==========
	
	The underlying database in the \DXADATA subdirectory is a standard Exchange
	database. This database needs to be defragged after upgrading to Microsoft
	Exchange version 5.0 from Microsoft Exchange version 4.0. \ To do this, follow
	these steps:
	
	1. Stop the Microsoft Exchange Directory Synchronization service (DXA).
	
	2. Run "EDBUTIL /d XDIR.EDB" (without the quotation marks) against the XDIR.EDB
	  located in the \DXADATA directory.
	
	  NOTE: In cases where the XDIR.EDB has grown to contain a great deal of data,
	  step 2 above may fail with the following error:
	
	  Encountered duplicate key in MapTable table.
	  Operation terminated with error -1605.
	
	  If this is incountered, the database must be repaired as well using:
	
	  EDBUTIL /d /r XDIR.EDB
	
	3. Start the Microsoft Exchange Directory Synchronization service (DXA).
	
	After performing the defrag, the aforementioned error in the SYMPTOMS section
	will be logged one more time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q153658 XFOR: DXA Crashing with Event ID 268
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
