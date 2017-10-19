---
layout: page
title: "Q119812: BUG: SQLSRVR.DLL GP Fault on Vines When SQL Server Not Running"
permalink: /kb/119/Q119812/
---

## Q119812: BUG: SQLSRVR.DLL GP Fault on Vines When SQL Server Not Running

	Article: Q119812
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCSDK2: 10118 (1.02.3231)
	
	SYMPTOMS
	========
	
	When a Microsoft Windows version 3.1 or Microsoft Windows for Workgroups version
	3.11 workstation is configured to use the Banyan Vines Network Library and
	attempts to connect to a SQL Server machine on a Banyan Vines, but SQL Server is
	not present or not running, SQLSRVR.DLL will cause a general protection fault
	(GP fault).
	
	The following configuration exhibits the above behavior:
	
	- Windows or Windows for Workgroups workstation with Banyan Vines redirector
	  installed
	
	- SQL Server Win16 client Network Library (Net-Library) installed
	  (DBMSVIN3.DLL). This is the Vines IP client-side Network Library.
	
	- A Banyan Vines server with a PC-based service created.
	
	If ODBC is configured to use DBMSVIN3.DLL and an attempt is made to connect to a
	PC-based service name that is currently not being used by SQL Server (for
	example, no SQL server has registered with the PC-based service), then when the
	ODBC client attempts to connect, a GP fault will occur in SQLSRVR.DLL with the
	following message:
	
	  Application Error
	  <application name> caused a General Protection Fault in module
	  SQLSRVR.DLL at 000C:098C.
	
	WORKAROUND
	==========
	
	Make sure SQL Server is started before you attempt to connect with the ODBC SQL
	Server driver and the Banyan Vines Network Library.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC SQL Server driver
	version 1.02.3231. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 1.02.3231 gpf
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
