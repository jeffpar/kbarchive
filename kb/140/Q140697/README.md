---
layout: page
title: "Q140697: INF: Win16 ODBC Applications in a Win32 Environment"
permalink: /kb/140/Q140697/
---

## Q140697: INF: Win16 ODBC Applications in a Win32 Environment

{% raw %}

	Article: Q140697
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	2.00 2.50
	
	WINDOWS
	
	kbenv kbtshoot
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses some implications of running Win16 ODBC applications in
	Win32 environments.
	
	MORE INFORMATION
	================
	
	As noted in the ODBC 2.0 "Programmer's Reference and SDK Guide," it is possible
	to run Win16 applications in a Win32 environment using Win32 ODBC drivers. Many
	people assume that this means they do not need any Win16 ODBC components, that
	they only need to install the Win32 ODBC components. However, even if you are
	using all Win32 ODBC drivers, Win16 applications do use 3 Win16 components:
	
	1. The Win16 ODBC Driver Manager (ODBC.DLL) is required.
	
	2. The DLLs ODBC16GT.DLL and ODBC32GT.DLL are required by the ODBC Driver
	  Manager to thunk between the Win16 application and the Win32 ODBC Drivers.
	
	3. The Win16 ODBC Administrator (ODBCADM.EXE and ODBCINST.DLL) is needed to see
	  exactly what data sources are used by Win16 ODBC applications.
	
	If the DLLs in items one and two above are not in the Win16 application's path,
	attempts to call ODBC functions will fail with the error:
	
	  attempt to call undefined dynalink
	
	The easiest way to ensure that these components are present when running Win16
	applications on a Win32 system such as Windows 95 and Windows NT is to run a
	Win16 ODBC Setup. For example, Microsoft SQL Server comes with both Win32 and
	Win16 ODBC setup directories. For Windows 95 and Windows NT clients that will be
	running Win16 applications, it is best to run both the Win16 and Win32 setups to
	ensure that both levels of ODBC components are available.
	
	Another issue on Win32 clients is that they may have both Win16 and Win32
	versions of the ODBC Administrator utility. The Win32 ODBC Administrator will
	show only Win32 ODBC drivers and their data sources, because Win32 applications
	cannot use Win16 ODBC drivers under Windows NT and Windows 95. The Win16
	Administrator will show both Win16 and Win32 drivers and their data sources
	since Win16 applications can transparently use either type of driver. ODBC
	setups install an ODBC Administrator icon in the client's Control Panel.
	
	In Windows 95 and Windows NT, this Control Panel ODBC Administrator icon will
	always be a Win32 ODBC Administrator; in Windows or Windows for Workgroups
	(WFW), the Control Panel icon will be the Win16 ODBC Administrator. If you want
	to manage Win16 drivers and their data sources on Windows 95 or Windows NT, you
	will need to install the Win16 ODBC Administrator. This will also let you see
	the data sources seen by Win16 applications. If you are running both Win16 and
	Win32 drivers on a client, you should use the Win16 ODBC Administrator to manage
	data sources for the Win16 drivers, and the Win32 ODBC Administrator to manage
	data sources for the Win32 drivers. You can always distinguish the version of
	ODBC Administrator from its icon; the Win32 icon contains a "32," while the
	Win16 icon does not.
	
	A third issue on Win32 clients concerns the names by which drivers are
	referenced. An example from the Microsoft SQL Server ODBC Driver illustrates
	this. The Microsoft SQL Server ODBC Driver has both a Win16 (SQLSRVR.DLL) and
	Win32 (SQLSRV32.DLL) version. The names by which these drivers are referenced in
	Win16 and Win32 environments are:
	
	Driver           Name in Win16 Env.       Name in Win32 Env.
	-------------    ------------------       ------------------
	SQLSRVR.DLL      SQL Server               Not Accessible
	SQLSRV32.DLL     SQL Server (32 Bit)      SQL Server
	
	From this chart you can see that Win16 ODBC Administrator users can determine if
	a data source uses the Win16 or Win32 driver simply by looking at the driver
	name. It also means that if an application asks for a driver named SQL Server
	(for example in the DRIVER= parameter on a SQLDriverConnect), then Win16
	versions of the application will reference the Win16 driver while Win32 versions
	will reference the Win32 driver.
	
	There is another issue to consider when having Win16 applications attempt to use
	Win32 drivers on Windows 95. While Windows 95 does let a process that starts as
	a Win16 application thunk up to Win32 components, it will not support any
	threading commands for that process, even if they are only issued by the Win32
	component. This means that no Win16 application running on Windows 95 can use a
	Win32 driver that issues any threading commands. Since the Win32 Microsoft SQL
	Server ODBC driver and the Win32 Microsoft Desktop Drivers all issue thread
	commands, they cannot be called from a Win16 application on Windows 95.
	
	Additional query words: 6.00 sql6 odbc dsn data source name debug
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	
	=============================================================================
	

{% endraw %}
