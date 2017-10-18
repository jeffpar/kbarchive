---
layout: page
title: "Q161189: Error 7008 when Using StarSQL ODBC Driver"
permalink: kb/161/Q161189/
---

## Q161189: Error 7008 when Using StarSQL ODBC Driver

	Article: Q161189
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error appears when you try to manipulate a table on an AS/400
	using the StarSQL driver included with SNA Server:
	
	  Error 7008 [Starware] [Start SQL ODBC Drivers]
	  [DB2/400] file-name Not Valid for operation [#-7008]
	
	CAUSE
	=====
	
	This error occurs when you try to access non-journaled physical files residing
	on an AS/400. If you are using the StarSQL driver that is included with the
	Microsoft SNA Server, version 2.11, access to non-journaled physical files on
	OS/400 V2R3 should work without a problem. The error should occur only with
	other versions of OS/400.
	
	WORKAROUND
	==========
	
	For access to non-journaled physical files on OS/400 V3R1 you must edit the
	Odbc.ini (16 bit ODBC driver), or the Windows 95 or Windows NT Registry (32 bit
	ODBC driver) and add the following to the StarSQL data source description:
	
	  IsolationLevel=0
	
	The data source should be deleted and re-added using the ODBC Administrator for
	the change to take place properly.
	
	For example, for Windows or Windows for Workgroups (16 bit ODBC Driver), the
	ODBC.INI file will look similar to the following:
	
	       [STARSQL]
	          Driver:C:\WINDOWS\SYSTEM\swodbc16.dll
	          Description=example for v3r1
	          SERVER=RDBELLE
	          CatQual=QSYS2
	          PkgColID=STARSQL
	          Netlib=SWWAPPC.DLL
	          ReadOnly=No
	          LocalLU=SISYPHUS
	          RemoteLU=ELLE
	          ModeName=QPCSUPP
	          AutoTypDefNam=QTDSQL400
	          UID=PETER
	          IsolationLevel=0
	
	For Windows NT or Windows 95 (32 bit ODBC Driver), use the Registry Editor
	(REGEDT32.EXE or REGEDIT.EXE) to add the following value:
	
	    HKEY_CURRENT_USER\Software\ODBC\ODBC.INI\IsolationLevel
	    Data Type of REG_SZ (NT) or String (Windows 95)
	    Value of 0 (zero).
	
	The line on Windows NT should appear as: IsolationLevel:REG_SZ:0 The line on
	Windows 95 should appear as: IsolationLevel "0"
	
	MORE INFORMATION
	================
	
	For more information about the IsolationLevel parameter, please refer to the
	Advopts.txt file included in the ODBC directory of the corresponding client.
	
	Additional query words: StarSQL as400 as/400 odbc physical
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
