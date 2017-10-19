---
layout: page
title: "Q190059: PRB: Certificate Server Fails to Start After Unattended Installa"
permalink: /kb/190/Q190059/
---

## Q190059: PRB: Certificate Server Fails to Start After Unattended Installa

	Article: Q190059
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbOPK kbSBK
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Server version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After an unattended installation of the Windows NT 4.0 Option Pack, including
	Certificate Server version 1.0, the Certificate Authority service fails to
	start. The following application event log entry is generated:
	
	  Source: CertSvc
	  Event ID: 17
	  Description: "The Certificate Server did not start: Unable to initialize the
	  database connection for CA COMPUTERNAME. The error code is 0xffffffff."
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To work around this problem, run the following REGEDIT or REGINI script to create
	the "CertSrv" ODBC data source after the unattended Setup completes and you have
	restarted the server.
	
	Please note that the path specified in the "Driver" and "DBQ" entries must be
	adjusted according to the actual configuration.
	
	REGEDIT script file (CERTSRV.REG):
	
	REGEDIT4
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\odbc.ini\CertSrv]
	"Driver"="C:\\WINNT\\System32\\odbcjt32.dll"
	"DBQ"="C:\\WINNT\\System32\\CertLog\\certsrv.mdb"
	"DriverId"=dword:00000019
	"SafeTransactions"=dword:00000000
	"UID"="Admin"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\odbc.ini\CertSrv\Engines\Jet]
	"ImplicitCommitSync"="Yes"
	"Threads"=dword:00000003
	"UserCommitSync"="Yes"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\odbc.ini\ODBC Data Sources]
	"CertSrv"="Microsoft Access Driver (*.mdb)"
	
	The Regedit.exe utility is included with Windows NT Server 4.0. It can be run in
	silent mode by using the /S command-line option. A sample command line is:
	
	  REGEDIT /S C:\CERTSRV.REG
	
	REGINI script file:
	
	  \Registry\Machine\SOFTWARE\ODBC\odbc.ini
	
	  CertSrv
	  Driver = C:\WINNT\System32\odbcjt32.dll
	  DBQ = C:\WINNT\System32\CertLog\certsrv.mdb
	  DriverId = REG_DWORD 0x00000019
	  SafeTransactions = REG_DWORD 0x00000000
	  UID = Admin
	  Engines
	  Jet
	  ImplicitCommitSync = Yes
	  Threads = REG_DWORD 0x00000003
	  UserCommitSync = Yes
	  ODBC Data Sources
	  CertSrv = Microsoft Access Driver (*.mdb)
	
	Regini.exe is a utility to manipulate the registry either locally or remotely
	using a script file. This utility is included with the Windows NT Server
	Resource Kit.
	
	CAUSE
	=====
	
	The problem is caused by the unattended Setup program not adding the required
	ODBC data source for the Certificate Server database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Certificate Server version 1.0.
	
	Additional query words: ntop iis certsrv certsvc Unattended Setup
	
	======================================================================
	Keywords          : kbOPK kbSBK 
	Technology        : kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : winnt:1.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
