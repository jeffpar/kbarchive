---
layout: page
title: "Q156758: BUG: Perfmon Terminates While Monitoring SQL Procedure Cache"
permalink: kb/156/Q156758/
---

## Q156758: BUG: Perfmon Terminates While Monitoring SQL Procedure Cache

	Article: Q156758
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 12-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you shut down SQL Server while you are monitoring any SQL Server - Procedure
	Cache counter in Performance Monitor (Perfmon.exe), Perfmon.exe and Winlogon.exe
	close with a Divide By Zero Exception error. If you run Perfmon.exe on the
	Windows NT console, an Unhandled Exception error in SQLCTR60.DLL appears in
	Perfmon.exe.
	
	If you monitor the counter in Perfmon.exe from a client computer, the Exception
	error occurs in Winlogon.exe and a STOP: 0xc000021a (Fatal System Error) screen
	appears.
	
	In addition, the following Application event appears in Event Viewer:
	
	  Event ID: 8
	  Source:  SQLCTR60.DLL
	  Description: DB-LIBRARY error: Attempt to bind to a non-existent column.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Do not monitor SQL Server - Procedure Cache counters when you shut down SQL
	  Server.
	
	  -or-
	
	- Use "On Demand Mode" for SQL Server Perfmon Integration. For more
	  information, see the "Integration with Windows NT Performance Monitor"
	  section in the SQL Server Administrator's Companion guide.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SQL Server version
	6.5. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbSQLServSearch kbAudDeveloper
	Version           : winnt:
	
	=============================================================================
	
