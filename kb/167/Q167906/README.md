---
layout: page
title: "Q167906: PRB: Access 7.0 Database Corrupt After Calling RepairDatabase"
permalink: /kb/167/Q167906/
---

## Q167906: PRB: Access 7.0 Database Corrupt After Calling RepairDatabase

	Article: Q167906
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbprogramming kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you call CDaoWorkspace::RepairDatabase() or CdbDbEngine::RepairDatabase on a
	corrupt Access 7.0 database, it may result in a database that is so corrupt that
	it cannot be recovered.
	
	NOTE: This same behavior may occur in Microsoft Access 97 with databases That are
	converted from Microsoft Access 7.0. If this happens, you should either:
	
	Create a new database in Microsoft Access 97 and import all the objects from a
	backup copy of the Microsoft Access 7.0 database.
	
	  - or -
	
	Use Jetcomp.exe, a stand-alone utility, to compact the database.
	
	CAUSE
	=====
	
	The MSysObjects system table is corrupted.
	
	RESOLUTION
	==========
	
	You should always call CDaoWorkspace::CompactDatabase() before calling
	CDaoWorkspace::RepairDatabase() on an Access 7.0 database. It is a good idea to
	compact, repair, and backup your database frequently.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	      */ 
	
	     // The following code will repair the database C:\DB1.MDB
	     // using the MFC DAO classes
	      try
	      {
	          CDaoWorkspace::CompactDatabase( _T( "C:\\DB1.MDB" ),
	              _T( "C:\\DB2.MDB" ) );
	          CDaoWorkspace::RepairDatabase( _T( "C:\\DB2.MDB" ) );
	      }
	      catch( CDaoException* e )
	      {
	          AfxMessageBox( e->m_pErrorInfo->m_strDescription );
	          e->Delete();
	      }
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q109953 ACC: How to Repair a Damaged Database
	
	  Q158933 PRA: Error "<Database Name> Isn't an Index in This Table"
	
	Additional query words: Jet 3.0
	
	======================================================================
	Keywords          : kbcode kbprogramming kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
