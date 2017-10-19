---
layout: page
title: "Q230294: Remote Data Service 1.5 Release Notes"
permalink: /kb/230/Q230294/
---

## Q230294: Remote Data Service 1.5 Release Notes

	Article: Q230294
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the Remote Data Service 1.5 Release Notes
	included with the Windows NT 4.0 Option Pack. It is listed here so that the
	issues it covers are included in queries performed against the Knowledge Base.
	
	The file containing these Release Notes is located in
	<%SystemRoot%>\Help\Iis\Htm\Core\Adcrlnts.htm.
	
	NOTE: Knowledge Base articles may be distributed in either ASCII-text or HTML
	form. If you are viewing the ASCII-text version of this article, some formatting
	may have been lost when it was converted from the original HTML form of
	Adcrlnts.htm
	
	MORE INFORMATION
	================
	
	Remote Data Service 1.5 Release Notes
	-------------------------------------
	
	This document provides late-breaking or other information that supplements the
	Microsoft Remote Data Service 1.5 documentation.
	
	The following sections are included in this document:
	
	- Product Description
	
	- New Features
	
	- Installation Notes
	
	- Technical Support
	
	- Technical Notes
	
	- Known Issues
	
	- Copyright Information
	
	Product Description
	-------------------
	
	Microsoft Remote Data Service (RDS) is a fast and efficient data connectivity and
	data publishing framework for applications hosted in Internet Explorer. It is
	based on a client/server, distributed technology that works over HTTP, HTTPS
	(HTTP over Secure Sockets layer), and DCOM application protocols. Using
	data-aware ActiveX controls, RDS provides data access programming in the style
	of Microsoft Visual Basic to Web developers who need to build distributed,
	data-intensive applications for use over corporate intranets and the Internet.
	
	CHANGE IN PRODUCT NAME
	
	The name, Microsoft Advanced Data Connector (ADC) is changing to Microsoft Remote
	Data Service (RDS), a feature of Microsoft ActiveX Data Objects (ADO). ADC has
	always relied on ADO and this change represents a move to more closely integrate
	and clarify the relationship between these two components. ADO is a programming
	interface which allows easy and flexible access to OLE DB and ODBC data sources.
	Remote Data Service builds on ADO to provide an easy, disconnected recordset,
	and remoting service. The functionality of Advanced Data Connector has not been
	affected by this change, and you will see a number of great new features with
	the release of version 1.5.
	
	New Features
	------------
	
	The following are new features in Remote Data Service 1.5. For more information
	on these features, refer to the documentation.
	
	- Expanded updatability. You can now update data to all ODBC compliant data
	  sources, and no longer need to use the "for browse" clause.
	
	- ActiveX Data Objects (ADO) methods now also provide RDS remoting
	  functionality from within ADO. This addition in programming model seamlessly
	  integrates RDS into ADO.
	
	- Sorting and filtering on Recordset objects.
	
	- Added support for asynchronous execution and result set fetching. This allows
	  the control to be handed back to the programmer or user without having to
	  wait for a query to finish.
	
	- Multiple output parameter support for business objects.
	
	- The CreateRecordset method on the RDS.DataControl object, so custom Recordset
	  objects can now be created on the client as well as on the
	  RDSServer.DataFactory.
	
	- The ConvertToString method on the RDSServer.DataFactory object.
	
	- Safe array marshaling provides support for the Safe Array data type.
	
	- Client impersonation provides support for IIS' NT Challenge/Response password
	  authentication feature.
	
	Installation Notes
	------------------
	
	Before You Run Setup
	
	Before you install Microsoft Remote Data Service, make sure that your client and
	server computers meet the minimum hardware and software requirements.
	
	Hardware Requirements
	
	To install Remote Data Service, you must meet certain hardware requirements,
	which include the following:
	
	- Any Microsoft Windows NT or Microsoft Windows 95 x86-compatible computer, or
	  a Digital Equipment Corporation Alpha processor machine.
	
	- A hard disk with a minimum of 8 megabytes (MB) available space for a full
	  installation of all the updated components required for RDS to run.
	
	- A minimum of 12 MB of RAM for client computers.
	
	- A minimum of 24 MB of RAM for server computers (32 MB of RAM recommended).
	
	Software Requirements
	
	Before you install Remote Data Service on a server computer, your server computer
	must meet the following software requirements:
	
	- Any of the following operating system platforms: Windows NT 4.0 Server or
	  Workstation with Service Pack 3 (SP3) or later. Remote Data Service currently
	  supports the x86/Intel and Alpha platforms. For production data environments,
	  the NT Server platform is strongly recommended.
	
	- Microsoft Internet Information Server (IIS) 3.0 or 4.0, with Microsoft Active
	  Server Pages.
	
	- Microsoft SQL Server 6.5 with Service Pack 2, or other ODBC 2.0 or greater
	  (Level 1 compliant) data source.
	
	To access Remote Data Service applications from client computers, client
	computers must meet the following software requirements:
	
	- Any of the following operating system platforms: Windows 95, Windows NT
	  Server 4.0 or later or Windows NT Workstation 4.0 or later.
	
	- Microsoft Internet Explorer version 4.0 or later.
	
	NOTE: Remote Data Service has not been tested with the Netscape browser
	technology.
	
	To build client Web pages, you can use typical HTML authoring tools, such as
	Notepad or the more fully featured Microsoft ActiveX Control Pad.
	
	To program server-side business objects, you can use any ActiveX/COM
	DLL-compatible tool, such as Microsoft Visual Basic 4.0 or later, or Microsoft
	Visual C++.
	
	Installing Microsoft Remote Data Service
	
	For Remote Data Service to work correctly, you should ensure that the Remote Data
	Service server and client components are installed correctly. The server
	component is installed via the setup program (mdac_nts.exe for Windows NT
	Server; mdac_ntw.exe for Windows NT Workstation; mdac_95.exe for Windows 95;
	mdac_as for Alpha server; mdac_aw.exe for Alpha workstation) or with the IIS 4.0
	integrated setup. The client files required are provided with Internet Explorer
	4.0, so no .cab file or setup program is required.
	
	Installing RDS Server Components on Your Web Servers
	
	You will install the Microsoft Remote Data Service server components on your Web
	server computer, which should have Windows NT Server version 4.0 with SP3 or
	later. Setup assumes that your computer meets all of the software requirements.
	To install Remote Data Service server components:
	
	1. From your Web server computer, connect to the Remote Data Service World Wide
	  Web site at:
	
	http://www.microsoft.com/data/rds (http://www.microsoft.com/data/rds/)
	
	2. Click Free Downloads in the left frame.
	
	3. Click the link for the installation you want (mdac_nts.exe for Windows NT
	  Server; mdac_ntw.exe for Windows NT Workstation; mdac_95.exe for Windows 95;
	  mdac_as.exe for Alpha server; mdac_aw.exe for Alpha workstation) to install
	  the software and documentation.
	
	4. Close other programs which may be running.
	
	5. Follow the Setup instructions on the screen.
	
	The Setup program installs the program files to the <device>:\Program
	Files\Common Files\System\MSADC directory. (This location is adjacent to other
	complementary Microsoft technologies such as ActiveX Data Objects and OLE DB.)
	The following subdirectories are created under the \MSADC directory with the
	setup program.
	
	+-----------------------------------------------------------------------------------------------+
	|                    |                                                                          | 
	+-----------------------------------------------------------------------------------------------+
	| Subdirectory       | Description                                                              | 
	+-----------------------------------------------------------------------------------------------+
	| ..\MSADC\Doc       | Contains the documentation.                                              | 
	+-----------------------------------------------------------------------------------------------+
	| ..\MSADC\Samples   | Contains the sample files.                                               | 
	+-----------------------------------------------------------------------------------------------+
	| ..\MSADC\Samples11 | Contains the sample files for the RDS 1.1 client, if this was installed. | 
	+-----------------------------------------------------------------------------------------------+
	
	The server installation program (mdac_nts.exe) also creates a Microsoft Internet
	Information Server virtual root on your Web server computer. The root is
	designated http://<servername>/msadc and you can use it to reference the
	files in that directory tree from the browser.
	
	After you have followed this procedure to set up Microsoft Remote Data Service on
	your Web server computer, you can validate your installation (see Validating
	Setup, below).
	
	INSTALLING RDS CLIENT COMPONENTS ON YOUR CLIENT COMPUTERS
	
	Microsoft Internet Explorer 4.0 already includes the necessary Remote Data
	Service (RDS) client components. Therefore, you don't need to include a .cab
	file on your Web page because client computers will already have the RDS client
	component DLLs. See the Technical Notes for a list of client files if your
	application needs to provide the client files.
	
	VALIDATING SETUP
	
	You can use the ADCTest.asp sample application to validate your Microsoft Remote
	Data Service installation. To validate setup with ADCTest, follow these steps:
	
	1. Start Internet Explorer, and enter the following address
	
	  http://<servername>/MSADC/Samples/Adctest.asp
	
	where <servername> is the name of your Web server.
	
	This should display the Remote Data Service Query Page. You'll notice that the
	server, connection, and query information is already provided for you.
	
	2. Click Run to execute the query.
	
	  If the grid displays a resultset, your installation is correct.
	
	If you run into any problems, review the setup instructions and refer to the
	"Troubleshooting Remote Data Service" and "Other RDS Configuration Information"
	topics in online Help.
	
	Technical Support
	-----------------
	
	Contacting Microsoft Technical Support
	
	If you have a technical question about Remote Data Service, please visit the
	Microsoft Data Access Web Site at the following Web site for information about
	support available from Microsoft Technical Support:
	
	http://www.microsoft.com/data/ (http://www.microsoft.com/data/)
	
	Visiting the Microsoft Remote Data Service Web Site
	
	You can visit the Microsoft Remote Data Service Home Page on the World Wide Web
	for documentation updates and information about other related technologies. The
	Web address is:
	
	http://www.microsoft.com/data/rds (http://www.microsoft.com/data/rds)
	
	JOINING THE REMOTE DATA SERVICE PUBLIC NEWSGROUP
	
	To facilitate discussion and information sharing, Microsoft has set up a public
	newsgroup: microsoft.public.ado.rds. You are welcome to post articles and
	messages to this unmoderated, unsupported newsgroup. Microsoft does not
	guarantee responses or direct support. For more information, visit the Remote
	Data Service Web site at:
	
	http://www.microsoft.com/data/rds/ ( http://www.microsoft.com/data/rds/)
	
	Technical Notes
	---------------
	
	- RDS (ADC) Beta 1 and Beta 2 clients and servers are not intended to be mixed
	  with final release versions of RDS clients and servers. You should uninstall,
	  and upgrade to the release version of the software to gain the benefit of
	  product fixes and new features. The client files for RDS 1.5 are provided
	  with Internet Explorer 4.0, so no .cab file or separate installation is
	  required.
	
	- Using FoxPro Databases
	
	If you access Visual FoxPro data, you must use the latest Visual FoxPro ODBC
	driver (version 5.0.0.402 or later), which is available from the following Web
	site:
	
	http://www.microsoft.com/vfoxpro/vfdownload
	(http://www.microsoft.com/vfoxpro/vfdownload)
	
	If you don't use the latest driver, you may not be able to execute queries
	correctly.
	
	- Sample Applications
	
	To load the grid in the RDS sample applications, you need to be able to access
	the Internet (as opposed to your intranet). If you try to load the samples that
	use the Sheridan grid, the Sheridan cab file referenced in the CODEBASE line
	attempts to download the mfc42.dll file patch from the Microsoft general fixes
	Web site. If it is unable to access this patch, the grid will not load. If the
	ActiveX control for the grid (ssdatb32.ocx) already resides on the client
	computer, the CODEBASE line will not need to unpack the .cab file, and the patch
	download prompt will not be encountered.
	
	- When you install the sample applications, an attempt is made to create a user
	  account ("adcdemo") within Microsoft(R) SQL Server. If this account already
	  exists, the installation will succeed, however, when you run the sample
	  application you may receive a "login failed" message. You can edit the sample
	  files to set the username and password to the actual test account
	  information.
	
	- 
	
	  "System error: Out of Virtual Memory" Error
	
	If you receive the error "System error: out of virtual memory error" from the Web
	Server requiring a reboot, the following may address the error. Your Web server
	machine may be out of virtual memory, or the SQL data source server may require
	more TempDB space to handle the size of the query you are attempting to run.
	Virtual memory can be adjusted from Control Panel (click the System icon, select
	the Performance tab, and click the Virtual Memory button to see if there is
	extra hard disk space available). More information on how to adjust the TempDB
	space can be found in the "Performance" Help topic's subtopic, "Ensuring
	Sufficient TempDB Space."
	
	- MDAC Client Files Provided with Internet Explorer 4.0
	
	For Web client convenience, the Microsoft Data Access Components client files are
	included with Internet Explorer version 4.0. Provided below is a list of files
	and their install locations if you wish to make these files available to your
	non-Internet Explorer client components using the MDAC server.
	
	Files marked with an asterisk (*) should be self-registered with regsvr32.dll
	which can be found in the \system (or \system32) directory of your machine. The
	notation for \system below refers to \winnt\system32 directory on Windows NT
	machines, or \win95\system on Windows 95 machines. It is important that these
	files are consistently installed to these locations, to ensure that all programs
	which rely on them will continue to function correctly in this and later
	versions.
	
	msadce.dll* - installed to \Program Files\Common Files\system\msadc
	
	msadcer.dll - installed to \Program Files\Common Files\system\msadc
	
	msadco.dll* - installed to \Program Files\Common Files\system\msadc
	
	msadcor.dll - installed to \Program Files\Common Files\system\msadc
	
	msader15.dll - installed to \Program Files\Common Files\system\ado
	
	msador15.dll* - installed to \Program Files\Common Files\system\ado
	
	msdadc.dll* - installed to \Program Files\Common Files\system\ole db
	
	msdaps.dll* - installed to \Program Files\Common Files\system\ole db
	
	msdaer.dll* - (Optional, for ADO error messages) installed to \Program Files\Common Files\system\ole db
	
	msdaerr.dll* - (Optional, for ADO error messages) installed to \Program Files\Common Files\system\ole db
	
	msr2c.dll* - installed to \system by Internet Explorer
	
	msr2cenu.dll - installed to \system by Internet Explorer
	
	wininet.dll* - installed to \system by Internet Explorer
	
	msdatsrc.tlb - installed to \system
	
	- If the install location name must be changed, the IIS vroot of /MSADC must
	  remain. The file MSADCS.DLL requires it be located in the root directory of
	  the /MSADC vroot.
	
	- Cannot filter for NULL The Filter property is not currently able to search
	  for Null values. The setting might be set as follows 'zipcode', '=',
	  '<null>' (which gets converted to NULL by the VBScript code), followed
	  by the Reset method to run the filter action. You will get a type mismatch
	  error.
	
	- The RDS.DataControl features three events that are not mentioned in the
	  documentation. These events are associated with asynchronous recordset
	  population. OnReadyStateChange - Fires whenever the ReadyState property
	  changes. This event is not available in JScript.
	
	  OnDataSetComplete - Fires when all data is fetched.
	
	  OnDataSetChanged - Fires when a new Recordset is returned but not yet fully
	  populated.
	
	  During an async fetch, the following sequence of events occurs:
	  OnReadyStateChange - The ReadyState property is set to
	  adcReadyStateInteractive while data is being fetched.
	
	  OnDataSetComplete - All data is fetched, but ReadyState is still set to
	  adcReadyStateInteractive.
	
	  OnReadyStateChange - The ReadyState property changes to adcReadyStateComplete.
	
	- The connection string for Remote Data Service typically references System
	  DSNs with a syntax like "DSN=MyDSN;UID=SalesMgr;PWD=Secret;". The syntax for
	  using a File DSN would be "FileDSN=c:\MySQL.dsn;".
	
	To get a disconnected recordset via ADO, you can use the following syntax.
	
	Rather than: cnn.Connectionstring =
	"provider=msdasql;dsn=MySQL;uid=SalesMgr;pwd=Secret" you can use:
	cnn.Connectionstring = "provider=MS Remote;Remote Server=http://MyServer;Remote
	Provider=msdasql;dsn=MySQL;uid=sa;pwd="
	
	Known Issues
	------------
	
	The following is a list of Remote Data Service 1.5 known issues.
	
	- The OnReadyStateChange async event is not issued. To work around this, you
	  can test the following events and property for equivalent state:
	
	OnDataSetChanged event will be issued when the Recordset exists, the query
	execution is complete, but not all rows are present. Immediately after the
	OnDataSetChanged event is issued, the ReadyState property is a value of 3.
	
	OnDataSetComplete event will be issued when the Recordset exists, and all rows
	are present. Immediately after the OnDataSetComplete event is issued the
	ReadyState property a value of 4.
	
	- If you receive an error in Setup about the MTXOCI.DLL, your machine may have
	  an older version of Microsoft Transaction Server (MTS). To resolve this
	  issue, upgrade to the newest version of MTS, which provides this necessary
	  file.
	
	- Version 1.0.0.806 of the Visual Basic Script DLL (vbscript.dll) contains a
	  memory leak. An updated version of the DLL (2.0.0.1114 or later) resolves the
	  issue. It is available with Internet Information Server 3.0, and can be
	  downloaded from:
	
	http://www.microsoft.com/vbscript (http://www.microsoft.com/vbscript)
	
	- The file msdaps.dll will register and work correctly. Currently it is unable
	  to unregister, however. This will only affect uninstall, and not the
	  functionality of the product. This may be resolved in NT Service Pack 4.
	
	- When using Microsoft SQL Server 6.5 with SQL Server Service Pack 3 installed,
	  an UPDATE, INSERT, or DELETE will fail if attempted against a self-join. An
	  error will occur on the line of code containing the SubmitChanges method.
	
	- The adctest.asp sample will silently fail unless the machine it is running on
	  has access to the internet (as opposed to an intranet). The application needs
	  to load some dll's from microsoft.com.
	
	- The language reference topics for the Reset method and the
	  SortColumn,SortDirection, FilterValue, FilterCriterion, and FilterColumn
	  properties all state that execution of the Reset method replaces the existing
	  RDS.DataControl object's Recordset with a read-only Recordset. This is
	  incorrect; the new Recordset is updatable.
	
	- When using an ORDER BY clause in a query against Microsoft SQL server with
	  Microsoft SQL Server Service Pack 3 installed, and returning an updatable
	  client-side cursor, columns referenced in the ORDER BY clause must also be
	  referenced in the SELECT clause.
	
	- The ODBC driver for Informix databases does not support transactions (being
	  able to roll back a change to the data). RDS does not support updating to
	  drivers without transactions support. Attempting to call SubmitChanges will
	  give the following error:
	
	  The operation requested by the application is not supported by the provider.
	
	Copyright Information
	---------------------
	
	(C) 1997 Microsoft Corporation These materials are provided "as-is," for
	informational purposes only.
	
	Neither Microsoft nor its suppliers makes any warranty, express or implied with
	respect to the content of these materials or the accuracy of any information
	contained herein, including, without limitation, the implied warranties of
	merchantability or fitness for a particular purpose. Because some
	states/jurisdictions do not allow exclusions of implied warranties, the above
	limitation may not apply to you.
	
	Neither Microsoft nor its suppliers shall have any liability for any damages
	whatsoever including consequential, incidental, direct, indirect, special, and
	lost profits. Because some states/jurisdictions do not allow exclusions of
	implied warranties, the above limitation may not apply to you. In any event,
	Microsoft's and its suppliers' entire liability in any manner arising out of
	these materials, whether by tort, contract, or otherwise shall not exceed the
	suggested retail price of these materials. Corporation. All rights reserved.
	
	Additional query words: rds iis kbreadme readme adcrlnts.htm adcrlnts ntop akz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbiisSearch kbiis400 kbWinNT400OptionPack
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
