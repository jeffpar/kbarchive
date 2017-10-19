---
layout: page
title: "Q153908: FIX: 16-bit Driver Times Out on Async Calls to SQLTables"
permalink: /kb/153/Q153908/
---

## Q153908: FIX: 16-bit Driver Times Out on Async Calls to SQLTables

	Article: Q153908
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	2.65.0201
	
	WINDOWS
	
	kbnetwork kbbug2.65 kbfix6.50.sp1
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 15563 (2.65.0201)
	
	SYMPTOMS
	========
	
	When a 16-bit ODBC application calls SQLTables() using the Microsoft SQL Server
	ODBC Driver version 2.65.0201 set in asynchronous mode, a "Timeout expired"
	error message appears immediately after the second async retry.
	
	CAUSE
	=====
	
	This problem occurs with any network library configuration and Windows NT local
	pipes. The Timeout error message also appears regardless of other login or query
	timeouts you configure on the client computer.
	
	WORKAROUND
	==========
	
	To correct this problem, upgrade to Microsoft SQL Server ODBC Driver version
	2.65.0212, included in Microsoft SQL Server version 6.5 Service Pack 1.
	
	To work around this problem, do not call the ODBC driver in asynchronous mode.
	This can be done with different applications and they apply as follows:
	
	- For ODBC programs written directly to the ODBC API, call SQLSetStmtOption()
	  with SQL_ASYNC_ENABLE (set to SQL_ASYNC_ENABLE_OFF).
	
	- For Visual Basic 3.0 and Access 2.0 applications, set DisableAsync to 1 in
	  the [ODBC] section of in the Vb.ini, App.ini or Msacc20.ini respectively.
	
	- For Visual Basic 4.0, set the INIPATH property of DBENGINE to point to Vb.ini
	  or App.ini that has DisableAsync set to 1.
	
	For MSACC20.INI entry settings applicable to Access 95, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q139044 INF: How to Add Former MSACC20.INI ODBC Section to Registry
	
	Jet 3.x (a base component of Access 95 and Visual Basic 4.0) registry information
	is on Appendix C of the Microsoft Jet Database Engine Programmer's Guide. You
	can obtain Jet 2.x database engine information from the Microsoft Developer
	Network Library Level 1 by querying the following:
	
	  jet database engine connectivity neil black
	
	You can also reference the Technical Backgrounder called "Jet Database Engine
	ODBC Connectivity."
	
	MORE INFORMATION
	================
	
	Microsoft client/server database applications, such as Access 2.0, Visual Basic
	3.0 and Visual Basic 4.0 (16-bit), are designed on top of the Jet Database
	engine. Therefore, they attempt to make calls to SQLTables() during several ODBC
	operations, which include attaching to a SQL Server 6.5 table. These
	applications utilize ODBC in asynchronous mode, by default. Unless the default
	asynchronous behavior is turned off, the "Timeout Expired" error message will
	occur with the driver version 2.65.0201.
	
	NOTE: Microsoft Excel and Microsoft Query are not designed on top of the Jet
	Database engine, thus the problem does not occur.
	
	For more information about the Jet Database Engine, please refer to the Microsoft
	Jet Database Engine Programmer's Guide published by Microsoft Press. The ISBN
	number is 1-55615-877-7. You can order guide by calling (800) MSP-RESS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SQL Server ODBC Driver
	version 2.65.0201. This problem was corrected in Microsoft SQL Server ODBC
	Driver version 2.65.0212. For more information, contact your primary support
	provider.
	
	Additional query words: 2.65.0212
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300 kbODBC200
	Version           : WINDOWS:2.0,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
