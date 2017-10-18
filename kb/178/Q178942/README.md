---
layout: page
title: "Q178942: HOWTO: Performance Tuning the Jet Engine Per Instance in MFC"
permalink: kb/178/Q178942/
---

## Q178942: HOWTO: Performance Tuning the Jet Engine Per Instance in MFC

	Article: Q178942
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbJET kbMFC kbVC500 kbVC600
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MFC does not document or directly expose any methods to manipulate the
	performance parameters of the Jet Database (DB) engine. However, if you are
	using DAO 3.5, you can gain access to the DB engine from within an MFC
	application and alter the performance characteristics just for the instance of
	the Jet engine your application is using. This method allows the user to
	programatically set performance characteristics, which will apply only to the
	specific application. For example, the MaxBufferSize could be set during program
	startup.
	
	MORE INFORMATION
	================
	
	To gain access to the functions that allow manipulation of Jet, you must first
	get access to the DB engine. The undocumented function AfxDaoGetEngine() returns
	a pointer to the current instance of the DB engine. The function is found in
	Daocore.cpp:
	
	     DAODBEngine* AFXAPI AfxDaoGetEngine()
	     {
	       // Return DAODBEngine object for direct access
	       return AfxGetDaoState()->m_pDAODBEngine;
	     }
	
	The following line of code returns a pointer to the DB engine. No special header
	files are required:
	
	     DAODBEngine* m_pDAODBEngine = AfxDaoGetEngine();
	
	Once you have a pointer to the DB engine, the DAO SDK function SetOption() can be
	used to set performance parameters. These parameters only affect the specific
	instance of the engine for your application. They do not affect the default Jet
	performance parameters stored in the registry. The following code examples show
	how to change some of the specific parameters:
	
	     // Change the MaxBufferSize to 128. When doing thousands of
	     // inserts, this will restrict memory growth.
	     COleVariant  vBufferSize((long)128, VT_I4);
	     m_pDAODBEngine->SetOption( dbMaxBufferSize, vBufferSize );
	
	     // Reduce the time to defer asynchronous flushes on a
	     // database opened for exclusive use.
	     COleVariant  vExclusiveAsyncDelay((long)10, VT_I4);
	     m_pDAODBEngine->SetOption(dbExclusiveAsyncDelay,vExclusiveAsyncDelay);
	
	     // Reduce the time to defer asynchronous flushes on a
	     // database opened for shared use.
	     COleVariant vSharedAsyncDelay((long)15, VT_I4);
	     m_pDAODBEngine->SetOption(dbSharedAsyncDelay, vSharedAsyncDelay);
	
	NOTE: It is necessary to cast the first parameter in the constructor for the
	COleVariant in order to avoid the "ambiguous call to overloaded function" error
	at compile time.
	
	The following values and their defaults can be changed:
	
	  
	  +--------------------------------+
	  | PageTimeout             | 5000 | 
	  +--------------------------------+
	  | SharedAsyncDelay        | 100  | 
	  +--------------------------------+
	  | ExclusiveAsyncDelay     | 2000 | 
	  +--------------------------------+
	  | LockRetry               | 20   | 
	  +--------------------------------+
	  | UserCommitSync          | Yes  | 
	  +--------------------------------+
	  | ImplicitCommitSync      | NO   | 
	  +--------------------------------+
	  | MaxBufferSize           | 0    | 
	  +--------------------------------+
	  | MaxLocksPerFile         | 9500 | 
	  +--------------------------------+
	  | LockDelay               | 100  | 
	  +--------------------------------+
	  | RecycleLVs              | 0    | 
	  +--------------------------------+
	  | FlushTransactionTimeout | 500  | 
	  +--------------------------------+
	
	References
	----------
	
	Note: The best source for additional information on these settings is the Access
	97 Help Files. Search for the topic:
	
	  Initializing the Microsoft Jet 3.5 Database Engine Driver
	
	Additional query words: defaults settings registry
	
	======================================================================
	Keywords          : kbDAOsearch kbJET kbMFC kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbMFC kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
