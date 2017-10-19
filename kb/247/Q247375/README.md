---
layout: page
title: "Q247375: INETINFO.EXE Ends With MTS Event 4097 Using MS ODBC for DB2"
permalink: /kb/247/Q247375/
---

## Q247375: INETINFO.EXE Ends With MTS Event 4097 Using MS ODBC for DB2

	Article: Q247375
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When stress-testing an Active Server Page configured to retrieve DB2 table data
	using the Microsoft ODBC Driver for DB2 (included in SNA Server 4.0 Service Pack
	3), the IIS process (Inetinfo.exe) may end unexpectedly and log the following
	event:
	
	  Event ID: 4097
	  Source: Transaction Server
	  Description: The run-time environment has detected an inconsistency in its
	  internal state and has terminated the process. Please contact Microsoft
	  Product Support Services to report this error. Error 80040154 from
	  CoCreateInstance of CLSID_MultiThreadedAptHelper (Microsoft Transaction
	  Server Internals Information: File: d:\viper\src\runtime\mtxex\vipthrd.cpp,
	  Line: 382) Data: 80040154
	
	Although the provider has been registered properly, the 80040154 error indicates
	REGDB_E_CLASSNOTREG, or "class not registered."
	
	WORKAROUND
	==========
	
	To prevent this failure, use the native Microsoft OLE DB Provider for DB2
	(DB2OLEDB) in the Active Server Page, instead of the Microsoft ODBC Driver for
	DB2. Using the native DB2OLEDB interface is also much faster, because the
	Microsoft ODBC Driver for DB2 automatically communicates through the DB2OLEDB
	Provider.
	
	The following is an example of some VBScript commands that use the DB2OLEDB
	Provider:
	
	  sub CnnSetup(cnn)
	  cnn.ConnectionTimeout = 60
	  cnn.CommandTimeout = 60
	  cnn.Open "Provider=DB2OLEDB;Password=TESTPW;User ID=TESTUSR;Initial
	  Catalog=OLYMPIA;APPC Remote LU Alias=OLYMPIA;APPC Local LU Alias=LOCAL;APPC
	  Mode Name=QPCSUPP;Network Transport Library=SNA;Host CCSID=37;PC Code
	  Page=1252;Package Collection=WNW3XX;Default Schema=WNW3XX;Default Isolation
	  Level=NC;Auto Commit Mode=False;Process Binary as Character=False;Read
	  Only=False"
	
	  CnnSetup(ENotesData)
	
	  Dim RS
	  Dim strSQL
	  Dim dbErrCount
	  Dim strDest
	  Dim numEditBtn
	  Dim numDeleteBtn
	
	  strSQL = "SELECT std_comment_seq_no,std_comment_dest,std_comment,
	  SubStr(std_comment,1,250) FROM wnw3xx.erovstdc ORDER BY std_comment_dest ASC,
	  4 ASC"
	  Set RS = ENotesData.Execute(strSQL)
	
	WARNING: If the DB2OLEDB provider is using SNA connectivity from an SNA Server
	client through an SNA Server located on another computer over TCP/IP, large
	numbers of concurrent client requests will cause a large traffic load between
	the client and server computer. This is fine, although the SNA Server or client
	may encounter the "MaxPendingWrites" limit while writing data on the LAN
	session, causing the SNA Server or client to drop the LAN session, indicated
	when SNA Server logs event 706. To prevent this, override the MaxPendingWrites
	registry key, and increase it to 300 or more. For additional information, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q142037 SNA Server Fails to Release Memory in SNA TCP/IP Interface DLL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 4.0 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	
	1. Configure an Active Server Page, which retrieves DB2 data using the Microsoft
	  ODBC Driver for DB2.
	
	2. Using an Internet Server stress tool, such as the Microsoft Web Application
	  Stress Tool (Homer), generate a large number of client browser requests
	  against the Active Server Page.
	
	Result: Within a minute, the INETINFO process ends abnormally and the event 4097
	is logged.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
