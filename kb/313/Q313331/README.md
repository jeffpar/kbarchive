---
layout: page
title: "Q313331: INFO: Pooling the ODBC Driver for DB2 with MTS/COM+"
permalink: /kb/313/Q313331/
---

## Q313331: INFO: Pooling the ODBC Driver for DB2 with MTS/COM+

	Article: Q313331
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Microsoft Transaction Server (MTS) and Microsoft COM+ enable Open Database
	Connectivity (ODBC) connection pooling by default. An MTS/COM+ application does
	not need to explicitly enable ODBC connection pooling. However, when you use the
	Microsoft ODBC Driver for DB2 that comes with Host Integration Server (HIS)
	2000, you need to perform an extra configuration step to enable ODBC connection
	pooling in MTS/COM+ applications.
	
	This article assumes that you are developing MTS/COM+ components using ActiveX
	Data Objects (ADO) that are registered under MTS/COM+.
	
	MORE INFORMATION
	================
	
	MTS/COM+ components that use ADO communicate with the Microsoft ODBC Driver for
	DB2 by using the Microsoft OLE DB Provider for ODBC Drivers (MSDASQL). For ODBC
	connection pooling to work with the Microsoft ODBC Driver for DB2, you must turn
	off OLE DB session pooling for the MSDASQL provider. With Microsoft Data Access
	Components (MDAC) version 2.1 and later, OLE DB session pooling is turned on by
	default.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To turn off OLE DB session pooling for MSDASQL, follow these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the OLEDB_SERVICES value under the following key in the registry:
	
	  HKEY_CLASSES_ROOT\CLSID\{c8b522cb-5cf3-11ce-ade5-00aa0044773d}\
	
	3. On the Edit menu, click DWORD, type "0xfffffffc" (without the quotation
	  marks), and then click OK.
	
	4. Quit Registry Editor.
	
	NOTE: If you make this change in the registry, it affects all applications that
	are using the MSDASQL provider. To avoid this, you can also set this value in
	your application by adding the value OLE DB SERVICES=-4 in your connection
	string to turn off OLE DB session pooling and autoenlistment. This setting turns
	off these properties for the OLE DB provider, and allows the pooling and
	autoenlistment to occur at the ODBC driver level.
	
	For additional information about ODBC connection pooling, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q237844 HOWTO: Enable ODBC Connection Pooling in a Visual Basic ADO
	  Application
	
	  Q245543 INFO: ODBC Connection Pooling Counters in Performance Monitor and ADO
	
	  Q169470 INFO: Frequently Asked Questions About ODBC Connection Pooling
	
	Additional query words: MSEIDB2D MSEIDB2D.DLL resource
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	
	=============================================================================
	
