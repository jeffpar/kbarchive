---
layout: page
title: "Q180223: HOWTO: Synchronizing Reads and Writes Between Two DAO Processes"
permalink: /kb/180/Q180223/
---

## Q180223: HOWTO: Synchronizing Reads and Writes Between Two DAO Processes

{% raw %}

	Article: Q180223
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbJET kbMFC kbVC kbVC500 kbVC600
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Jet database engine (the underlying engine used by DAO to write
	and read to a Microsoft Access database file) uses a page buffer to improve
	write and read performance. Because of this buffering activity, you cannot
	accurately predict the time it will take for a write from one process to be
	subsequently read by another process.
	
	Every process that uses the Jet database engine maintains a private page buffer,
	which makes synchronous write/read activity between two processes difficult to
	achieve. For example, suppose you have two processes (Process 1 and Process 2)
	using the Jet database engine to write and read data to and from the same
	database file. When Process 1 writes to the database, the new data may not
	immediately get flushed to the physical database file. When Process 2 reads from
	the database, it may be reading a data page in the page buffer, rather that the
	new information written by Process 1.
	
	So if Process 1 writes a record to the database and then signals Process 2 to
	read the same record, the read may occasionally fail due to the independent
	buffers.
	
	This article demonstrates how to optimize a DAO-based program so that writes to a
	physical database and reads from a physical database are likely to occur in a
	synchronous manner. Use the techniques described here to help you obtain the
	best possible synchronous writing and reading performance when using DAO.
	
	Important Notes
	---------------
	
	- The techniques described in this article help ensure that writes and reads
	  are performed synchronously. However, due to factors beyond the control of
	  Jet, such as network and operating system latency, there is no way to
	  guarantee such behavior. The Jet Engine was not designed to support ACID
	  (Atomic, Concurrent, Independent, Durable) transactions and should not be
	  used in any application environment where such transactions are required.
	
	- Because the Microsoft Access ODBC driver does not expose the functionality of
	  the DAO SDK's Idle method, it is not possible to optimize ODBC-based programs
	  for synchronous writing and reading.
	
	MORE INFORMATION
	================
	
	Forcing a Write Using DAO
	-------------------------
	
	With the release of the Microsoft Jet 3.5 database engine, you can force a write
	to the physical database file by using the dbForceOSFlush flag in conjunction
	with a DAO workspace transaction. This functionality is available to both the
	DAO 3.5 SDK and to the MFC DAO classes that ship with Visual C++. Calling the
	CommitTrans(dbForceOSFlush) method tells the Microsoft Jet database engine to
	write the contents of the page buffer out to the physical database file. All new
	information in the page buffer is written out to the physical database file
	before the call to CommitTrans returns.
	
	Using DAO 3.5 SDK Code
	----------------------
	
	     CdbWorkspace wsDAO;
	     ... Open DAO workspace and various
	     ... DAO objects needed.
	     // Start workspace transaction.
	     wsDAO.BeginTrans();
	     ... Write data to database using DAO
	     ... objects opened under workspace ws.
	     // Commit changes and force flush.
	     wsDAO.CommitTrans( dbForceOSFlush );
	     ... Send signal to Process 2 to READ data.
	
	Using MFC DAO Code
	------------------
	
	     CDaoWorkspace wsMFC;
	     ... Open DAO workspace and various
	     ... DAO objects needed.
	     // Start transaction.
	     wsMFC.BeginTrans();
	     ... Write data to database using DAO
	     ... objects opened under workspace ws.
	     // Commit changes and force flush.
	     wsMFC.m_pDAOWorkspace->CommitTrans( dbForceOSFlush );
	     ... Send signal to Process 2 to READ data.
	
	NOTE: MFC DAO code above uses the underlying DAO workspace pointer to call
	CommitTrans because the MFC DAO classes do not allow passing in the
	dbForceOSFlush flag to the CDaoWorkspace CommitTrans method.
	
	Forcing a Read Using DAO
	------------------------
	
	With the release of the Microsoft Jet 3.5 database engine, you can force a
	synchronous read from the physical database file by using the dbRefreshCache
	flag in conjunction with the workspace Idle method. This functionality is
	available to both the DAO 3.5 SDK and to the MFC DAO classes that ship with
	Visual C++.
	
	Calling the Idle(dbRefreshCache) method tells the Microsoft Jet database engine
	to completely refresh the page buffer with the current information from the
	physical database file. All updated pages in the physical database is pulled
	into the page buffer before the call to Idle returns.
	
	Using DAO 3.5 SDK Code
	----------------------
	
	     CdbEngine engDAO;
	     CdbWorkspace wsDAO;
	
	     // Note: You must append workspace in order for
	     // Idle to work for your workspace.
	     wsDAO = engDAO.CreateWorkspace( _T("MyWS"), _T("Admin"),
	                                     _T(""), dbUseJet );
	     engDAO.Workspaces.Append( wsDAO );
	     ... Open DAO database and various
	     ... DAO objects using wsDAO workspace.
	
	     ... Wait here for READ signal from Process 1.
	
	     dbEngine.Idle( dbRefreshCache );
	     ... Read data from process#1 here.
	
	Using MFC DAO Code
	------------------
	
	     CDaoWorkspace wsMFC;
	     // Note: You must append workspace in order for
	     // Idle to work for your workspace.
	     wsMFC.Create( _T("MyWs"), _T("Admin"), _T("") );
	     wsMFC.Append();
	     ... Open DAO database and various
	     ... DAO objects needed using workspace above
	
	     ... Wait here for READ signal from Process 1.
	
	     wsMFC.Idle( dbRefreshCache );
	     ... Read data from Process 1 here.
	
	Additional query words: PageTimeout MaxBufferSize MFCDAO DAOSDK DOA
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbJET kbMFC kbVC kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
