---
layout: page
title: "Q132244: PRB: Visual Basic DisableAsync Fails w/ MASJT200.DLL"
permalink: /kb/132/Q132244/
---

## Q132244: PRB: Visual Basic DisableAsync Fails w/ MASJT200.DLL

{% raw %}

	Article: Q132244
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have both the Visual Basic (VB) compatibility layer and the Microsoft
	ODBC Desktop Database Drivers installed, a VB application (EXE) always runs in
	asynchronous query execution mode, no matter if DisableAsync is set to one or
	zero in the application's initialization file(<app> .INI).
	
	WORKAROUND
	==========
	
	Install the Microsoft Access Service Pack, which upgrades the Jet Engine
	(MSAJT200.DLL) to version 2.50.1606.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q122927 WX1124: Microsoft Access Version 2.0 Service Pack
	
	
	A VB application will always run in synchronous query execution mode with this
	service pack installed.
	
	MORE INFORMATION
	================
	
	A VB application, which accesses ODBC data sources via Data Access Objects, can
	be forced into synchronous query execution mode by specifying the following in
	its .INI file:
	
	     [ODBC]
	     DisableAsync=1
	
	By default, DisableAsync is set to zero.
	
	When the VB compatibility layer is installed, the Jet Engine is upgraded from
	version 1.0 to version 2.0. If the Microsoft ODBC Desktop Database Drivers are
	then installed, the Jet Engine (MSAJT200.DLL) will be upgraded to version
	2.50.1117, which forces a VB application into asynchronous query execution mode
	forever.
	
	Additional query words: 2.00.2317 Windows NT 3.1 3.5
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
