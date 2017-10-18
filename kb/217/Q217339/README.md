---
layout: page
title: "Q217339: Certificate Server Fails to Start with Event ID 7000 or 7009"
permalink: kb/217/Q217339/
---

## Q217339: Certificate Server Fails to Start with Event ID 7000 or 7009

	Article: Q217339
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Windows NT Option pack (NTOP), the Certificate Authority
	service fails to start and the following Event IDs occur in the event log:
	
	  Event ID: 7000 Source: Service Control Manager Description: The Certificate
	  Authority service failed to start due to the following error: The service did
	  not respond to the start or control request in a timely fashion.
	
	  Event ID: 7009 Source: Service Control Manager Description: Timeout (120000
	  milliseconds) waiting for service to connect.
	
	CAUSE
	=====
	
	This is caused by a User DSN being created in the 32-Bit ODBC applet in Control
	Panel for the Certificate Server's Access Database. This DSN needs to be created
	as a System DSN.
	
	RESOLUTION
	==========
	
	To work around this problem, run the following registry script to create the
	"CertSrv" ODBC data source.
	Please note that the path specified in the "Driver" and "DBQ" entries must be
	adjusted according to the actual configuration.
	
	Copy and paste the following code into a new Text document using Notepad, and
	then save the document as "certsrv_odbcupdate.reg" (without the quotation
	marks).
	
	  REGEDIT4
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\odbc.ini\CertSrv]
	  "Driver"="C:\WINNT\System32\odbcjt32.dll"
	  "DBQ"="C:\WINNT\System32\CertLog\certsrv.mdb"
	  "DriverId"=dword:00000019
	  "SafeTransactions"=dword:00000000
	  "UID"="Admin"
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\odbc.ini\CertSrv\Engines\Jet]
	  "ImplicitCommitSync"="Yes"
	  "Threads"=dword:00000003
	  "UserCommitSync"="Yes"
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\odbc.ini\ODBC Data Sources]
	  "CertSrv"="Microsoft Access Driver (*.mdb)"
	
	Double-click the new Certsrv_odbcupdate.reg file to merge these settings into the
	Registry. After you double-click the file and it opens in Notepad, make sure
	that the file is saved with the .reg extension and not a .txt extension.
	
	If simply creating the System DSN does not resolve the issue, then try the
	following steps:
	
	1. In the ODBC Data Source Administrator, make sure that there is a System DSN
	  for Certificate Server, and that there is not a User DSN. If a User DSN
	  exists, delete it.
	
	2. In the Certificate Server Service Configuration found in Services under
	  Control Panel, check to see if the service is running under the context of
	  the System Account. If it is, try selecting Allow Service to Interact with
	  Desktop.
	
	3. Also in the Certificate Server Service Configuration, change the account to
	  an account that has local administrative rights.
	
	4. In the ODBC Data Source Administrator on the System DSN tab, highlight the
	  Certificate Server DSN and choose Configure. Select Repair the Database. The
	  database name is Certsrv.mdb, and by default it is located in
	  %winnt%\system32\certlog.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Certificate Server 1.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : winnt:1.0
	Issue type        : kbprb
	
	=============================================================================
	
