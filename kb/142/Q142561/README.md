---
layout: page
title: "Q142561: IIS ErrMsg: Specified Driver Could Not Be Loaded"
permalink: kb/142/Q142561/
---

## Q142561: IIS ErrMsg: Specified Driver Could Not Be Loaded

	Article: Q142561
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error appears when you query an ODBC data source from Internet
	Information Server (IIS):
	
	  [State=IM003][Error=0][Microsoft][ODBC Driver Manager] Specified driver
	  could not be loaded
	
	CAUSE
	=====
	
	This error occurs because the ODBC driver (SQLSRV32.DLL in this case) specified
	by your DSN is not in the path which is listed in the ODBC.INI file.
	
	RESOLUTION
	==========
	
	Check the ODBC driver path specified by your DSN in the ODBC.INI file and
	correct it. Below is an excerpt from an ODBC.INI file:
	
	     [ODBC 32 bit Data Sources]
	     YourDSNname=SQL Server (32 bit)
	
	     [YourDSNname]
	     Driver32=D:\WINDOWS\SYSTEM\sqlsrv32.dll
	
	Additional query words: prodiis1
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
