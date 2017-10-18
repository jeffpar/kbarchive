---
layout: page
title: "Q278604: &quot;HTTP 500.100&quot; Error When You Try to Access a Provider"
permalink: kb/278/Q278604/
---

## Q278604: &quot;HTTP 500.100&quot; Error When You Try to Access a Provider

	Article: Q278604
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400 kbiis500
	Last Modified: 20-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a provider from within an Active Server Pages (ASP)
	page, you may receive the following error in the browser:
	
	  HTTP 500.100 - Internal Server Error - ASP error Internet Information
	  Services
	
	If friendly HTTP error messages are disabled, you may receive the following error
	message when you attempt to run the ASP page:
	
	  ADODB.Connection (0x800A0E7A)
	  Provider cannot be found. It may not be properly installed.
	  /Nwind.asp, line 10
	
	CAUSE
	=====
	
	This error occurs because a dynamic-link library (DLL) that is required by the
	Microsoft Data Access Components is not registered.
	
	RESOLUTION
	==========
	
	NOTE: This resolution uses a SQL Server OLE Provider DLL (Sqloledb.dll) as an
	example. Because the unregistered DLL may vary based on the OLE DB Provider that
	you are using, modify step 2 accordingly.
	
	To resolve this problem, reregister the faulty DLL as follows:
	
	1. At a command prompt, change to the C:\Program Files\Common Files\System\Ole
	  DB folder.
	
	2. At a command prompt, type the following command:
	
	  "regsvr32 sqloledb.dll" (without the quotation marks)
	
	3. You should receive confirmation that the DLL is registered successfully.
	
	MORE INFORMATION
	================
	
	The following list names the possible providers and their pertinent DLLs:
	
	Microsoft ISAM 1.1 OLE DB Provider
	Provider=Microsoft.ISAM.OLEDB.1.1
	C:\WINNT\System32\Msisam11.dll
	C:\WINNT\System32\Msuni11.dll
	
	Microsoft Jet 3.51 OLE DB Provider
	Provider=Microsoft.Jet.OLEDB.3.51
	C:\Program Files\Common Files\System\OLE DB\Msjtor35.dll
	C:\WINNT\System32\Msjt4jlt.dll
	C:\WINNT\System32\Msjter35.dll
	C:\WINNT\System32\Msjint35.dll
	
	Microsoft Jet 4.0 OLE DB Provider
	Provider=Microsoft.Jet.OLEDB.4.0
	C:\WINNT\System32\Msjetoledb40.dll
	C:\WINNT\System32\Msjet40.dll
	C:\WINNT\System32\Mswstr10.dll
	C:\WINNT\System32\Msjter40.dll
	C:\WINNT\System32\Msjint40.dll
	
	Microsoft OLE DB Provider for Indexing Service
	Provider=MSIDXS.1
	C:\WINNT\System32\Query.dll
	
	Internet Publishing
	Provider=MSDAIPP.DSO.1
	C:\Program Files\Common Files\System\OLE DB\Msdaipp.dll
	C:\WINNT\System32\Wininet.dll
	C:\WINNT\System32\Shlwapi.dll
	C:\WINNT\System32\Version.dll
	C:\WINNT\System32\Lz32.dll
	C:\WINNT\System32\Shell32.dll
	
	Microsoft OLE DB Provider for ODBC Drivers
	Provider=MSDASQL.1
	C:\Program Files\Common Files\System\OLE DB\Msdasql.dll
	C:\Program Files\Common Files\System\OLE DB\Msdatl2.dll
	C:\Program Files\Common Files\System\OLE DB\Msdasqlr.dll
	C:\Program Files\Common Files\System\Msadc\Msadce.dll
	C:\Program Files\Common Files\system\Msadc\Msadcer.dll
	C:\WINNT\System32\Odbc32.dll
	C:\WINNT\System32\Comdlg32.dll
	C:\WINNT\System32\Odbcint.dll
	
	Microsoft OLE DB Provider for OLAP Services
	Provider=MSOLAP.1
	C:\Program Files\Common Files\System\OLE DB\MSOLAP.DLL
	C:\Program Files\Common Files\System\OLE DB\Msolapr.dll
	C:\Program Files\Common Files\system\OLE DB\msdaosp.dll
	C:\WINNT\System32\Security.dll
	C:\WINNT\System32\Sqlwoa.dll
	C:\WINNT\System32\Sqlwid.dll
	C:\WINNT\System32\Nddeapi.dll
	C:\WINNT\System32\Winspool.drv
	C:\WINNT\System32\Msv1_0.dll
	
	Microsoft OLE DB Provider for Oracle
	Provider=MSDAORA.1
	C:\Program Files\Common Files\System\OLE DB\Msdaora.dll
	C:\WINNT\System32\Mtxoci.dll
	
	Microsoft OLE DB Provider for SQL Server
	Provider=SQLOLEDB.1
	C:\Program Files\Common Files\System\OLE DB\Sqloledb.dll
	C:\WINNT\System32\Dbnmpntw.dll
	
	MSDataShape
	Provider=MSDataShape.1
	C:\Program Files\Common Files\System\Msadc\Msadds.dll
	C:\Program Files\Common Files\System\Msadc\Msaddsr.dll
	
	OLE DB Provider for Microsoft Directory Services
	Provider=ADsDSOObject
	C:\WINNT\System32\Activeds.dll
	C:\WINNT\System32\Adsldpc.dll
	
	
	NOTE: This is not a complete list and may have missing information. Please
	reference the provider that you are using for more specific information
	regarding errors that you may be experiencing.
	
	
	Additional query words: iis 5 0x800A0E7A HTTP 500.100
	
	======================================================================
	Keywords          : kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
