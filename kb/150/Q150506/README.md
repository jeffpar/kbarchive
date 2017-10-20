---
layout: page
title: "Q150506: Files and Data Sources Installed by Visual FoxPro ODBC Driver"
permalink: /kb/150/Q150506/
---

## Q150506: Files and Data Sources Installed by Visual FoxPro ODBC Driver

{% raw %}

	Article: Q150506
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the files installed by the Visual FoxPro ODBC driver version
	1.0.
	
	MORE INFORMATION
	================
	
	In addition to the Vfpodbc.dll file, which is the ODBC driver, the setup program
	installs the 32-bit ODBC Administrator and its supporting files. All of the
	files are installed in the System directory on the Windows 95 platform and in
	the System32 directory on the Windows NT platform.
	
	File            Version       Description
	--------------------------------------------------------------------
	
	Visual FoxPro ODBC Driver
	-------------------------
	
	Drvvfp.hlp      1.00          Visual FoxPro ODBC Driver Help file
	Drvvfp.cnt
	FoxPro.int                    Collation sequence file
	Vfpodbc.dll     1.0.0.83      Visual FoxPro ODBC driver
	Vfpodbc.txt                   Additional information not included in
	                             the Help file.
	Vfpodbc.stf
	
	ODBC and System Files
	---------------------
	
	Odbc32.dll      2.50.3006     Microsoft ODBC Driver Manager
	Odbcad32.exe    2.50.3006     32 Bit ODBC Administrator
	Odbc32gt.dll    2.50.3006     Microsoft ODBC Driver Generic Thunk
	Odbccp32.cpl    2.50.3006     Microsoft ODBC CPL Thunk
	Odbccr32.dll    2.50.3006     Microsoft ODBC Cursor Library
	Odbcinst.cnt
	Odbcinst.hlp
	Odbcint.dll     2.50.3006     Microsoft ODBC Resource DLL
	Odbckey.inf
	Odbcstf.dll     03.40.22.04   ODBC custom action setup DLL
	Odbc16gt.dll    2.50.3006     Microsoft ODBC Driver Generic Thunk
	Ctl3d32.dll     2.31.000      Dialog DLL
	Ctl3ds.dll      2.30.000      Ctl3D 3D Windows Controls
	Ds16gt.dll      2.10.2323     Microsoft ODBC Driver Setup Generic
	                             Thunk
	Ds32gt.dll      2.50.3006     Microsoft ODBC Driver Setup Generic
	                             Thunk
	ReadMe25.txt                  ReadMe file for the ODBC 2.5 Component
	                             changes
	Msvcrt20.dll  2.10.000        Microsoft C Runtime Library
	
	Setup Program Files
	-------------------
	
	Setup.exe       1.2           MS-Setup Setup Exe
	Setup.ini
	Setup.lst
	Setup.tdf
	Mssetup.dll     1.2           Setup DLL
	Extract.exe
	Qfeupd.exe      4.0.954       Windows 95 QFE Installer
	
	
	The Visual FoxPro ODBC driver also installs two default data source names (DSN).
	They are the "Visual FoxPro tables" and "Visual FoxPro databases."
	
	The "Visual FoxPro tables" data source is the default DSN for free tables and the
	"Visual FoxPro Databases" is the default DSN for databases. However, these DSNs
	do not point to any data. You need to configure them in the ODBC Administrator
	to give the data source a database or directory specification.
	
	Additional query words: 1.00 VFoxWin
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
