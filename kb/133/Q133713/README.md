---
layout: page
title: "Q133713: PRB: Problems Using the PivotTable Wizard"
permalink: /kb/133/Q133713/
---

## Q133713: PRB: Problems Using the PivotTable Wizard

{% raw %}

	Article: Q133713
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following symptoms occur when you use the PivotTable Wizard in Visual
	FoxPro:
	
	- The SQL Data Sources dialog is opened after Microsoft Excel is launched. In
	  some cases, an OLE error is then displayed. The PivotTable Wizard continues
	  to fail, regardless of the data used.
	
	-or-
	
	- The PivotTable Wizard fails on some tables.
	
	-or-
	
	- The PivotTable Wizard does not display International or high ASCII
	  characters.
	
	CAUSE
	=====
	
	The cause of these problem is likely related to the ODBC configuration. The
	PivotTable Wizard uses ODBC to generate the Pivot table in Microsoft Excel.
	
	RESOLUTION
	==========
	
	Here are three steps you can take to troubleshoot this problem:
	
	1. Verify the content of the ODBC.INI file located in the WINDOWS directory. It
	  should contain the sections and the entries listed below. Under Windows NT,
	  the Driver32 entry is necessary for the PivotTable Wizard to work well. The
	  PivotTable Wizard uses OLE automation to communicate with Microsoft Excel,
	  which in turn retrieves the Visual FoxPro data for its PivotTable by using
	  MSQuery.
	
	
	  Windows NT
	  ----------
	  [ODBC Data Sources]
	  MS Access Databases=Access Data (*.mdb)
	  FoxPro Files=FoxPro Files (*.dbf)
	  dBASE Files=dBase Files (*.dbf)
	  Paradox Files=Paradox Files (*.dp )
	  NWind=dBase Files (*.dbf)
	  MS Access 2.0 Databases=Access 2.0 for MS Office (*.mdb)
	
	  [FoxPro Files]
	  Driver=C:\WINNT35\SYSTEM\SIMBA.DLL
	  FileType=FoxPro 2.5
	  SingleUser=False
	  Driver32=C:\WINNT35\System32\odbcjt32.dll
	
	  Windows and Windows for Workgroups
	  ----------------------------------
	  [ODBC Data Sources]
	  MS Access Databases=Access Data (*.mdb)
	  FoxPro Files=FoxPro Files (*.dbf)
	  dBASE Files=dBase Files (*.dbf)
	  Paradox Files=Paradox Files (*.dp )
	  NWind=dBase Files (*.dbf)
	  MS Access 2.0 Databases=Access 2.0 for MS Office (*.mdb)
	
	  [FoxPro Files]
	  Driver=C:\WINDOWS\SYSTEM\ODBCJT16.DLL
	  DriverId=24
	  JetIniPath=odbcddp.ini
	
	1. Verify the dates and sizees of the ODBCDLL and ODBCINST.DLL files. They may
	  be outdated. These files are located in the WINDOWS\SYSTEM directory in
	  Windows version 3.1 or Windows for Workgroups, or in the WINNT\SYSTEM
	  directory in Windows NT. Visual FoxPro installs 16-bit ODBC drivers under
	  Windows, and 32-bit ODBC drivers under Windows NT. The file sizes for each
	  drivers should be at least:
	
	  ODBC.DLL       55,792
	  ODBCINST.DLL   86,800
	
	2. Verify the name of the FoxPro ODBC driver used. If the Driver= line lists
	  SIMBA.DLL, you might be using an outdated version of the driver that does not
	  support General fields or high ASCII characters.
	
	To resolve these problems, reinstall the ODBC drivers. You can use the Visual
	FoxPro Setup program to reinstall these drivers.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You must have Microsoft Excel with Microsoft Query installed on your computer to
	be able to create a pivot table. For more information about pivot tables, please
	see the Microsoft Excel Help menu.
	
	For more information about the PivotTable Wizard, please query using "PivotTable
	Wizard" in the Visual FoxPro Help menu.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
