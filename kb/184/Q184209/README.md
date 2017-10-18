---
layout: page
title: "Q184209: XADM: Error Msg: JET_errPageNotInitialized When Starting Store"
permalink: kb/184/Q184209/
---

## Q184209: XADM: Error Msg: JET_errPageNotInitialized When Starting Store

	Article: Q184209
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the Microsoft Exchange information store service, the
	following error message may be displayed on the screen or in the system log:
	
	  The Microsoft Exchange Information Store service terminated with service-
	  specific error 4294966277.
	
	  Application log:
	
	  Event ID: 0
	  Source: ESE97
	  Type: Error
	  Category: Logging/Recovery
	
	  Description: MSExchangeIS ((451)) -1019
	
	  Event ID: 1120
	  Source: MSExchangeIS
	  Type Error
	  Category: General
	
	  Description: Error 0xfffffc05 initializing the Microsoft Exchange Server
	  Information Store database.
	
	  System log:
	
	  Event ID: 7024
	  Source: Service Control Manager
	  Type: Error
	
	  Description: The Microsoft Exchange Information Store service terminated
	  with service-specific error 4294966277.
	
	Also, when you try to repair the database, ESEUTIL may report:
	
	-1019 0xFFFFFC05 JET_errPageNotInitialized       Repair Only: Read an
	unused page  4294966277
	
	This error message shows that the database is corrupt and needs to be restored
	from backup.
	
	CAUSE
	=====
	
	JET_errPageNotInitialized means that a page within the database is blank. If the
	store will not start because of this error, it is likely that a page crucial to
	the database is corrupt.
	
	WORKAROUND
	==========
	
	It is not recommended that the database be repaired under this condition,
	because there may be more than one uninitialized page.
	
	You should restore the database from backup and investigate the cause of the
	error, following this procedure:
	
	1. Make an offline backup of the entire Exchange subdirectory structure on all
	  drives (transaction logs and database files).
	
	2. Locate the file EDB.CHK and include it in your backup set.
	
	3. Disable any low-level access applications, including open file backup agents
	  and virus checkers. Investigate these applications' compatibility with
	  Exchange before you re-enable them.
	
	4. Examine the System log for hardware-related errors.
	
	5. Save your System and Application event logs and include them in your backup
	  set.
	
	6. Run diagnostics on the server hardware.
	
	7. Contact Microsoft Technical Support for additional help.
	
	MORE INFORMATION
	================
	
	Unlike a page that does not checksum (-1018), an uninitialized page (-1019) will
	be backed up successfully. If a page is uninitialized, it may not always be
	found on Startup, but it may be encountered during runtime. ESEUTIL /G finds
	these errors (you can test the database after restoring).
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
