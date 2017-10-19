---
layout: page
title: "Q118609: HOWTO: Create an .MDB File for Microsoft Access Databases"
permalink: /kb/118/Q118609/
---

## Q118609: HOWTO: Create an .MDB File for Microsoft Access Databases

	Article: Q118609
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1
	Operating System(s): 
	Keyword(s): kbprogramming kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	NOTE: For information about how to create .MDB files programmatically using
	Visual C++ version 4.x or later, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q126606 INFO: Accessing CREATE_DB, REPAIR_DB, and COMPACT_DB
	
	An .mdb file is always required to configure a Microsoft Access data source
	either by using the Open Database Connectivity (ODBC) administrator or by
	configuring the data source programmatically. An .mdb file cannot be created by
	using the MFC Database Classes or the ODBC application programming interface
	(API).
	
	You can use one of the following methods to have an application configure a data
	source on your computer:
	
	- Ship and install the .mdb file along with the application.
	
	- Make the .mdb file into a user-defined resource. Then, copy the .mdb file at
	  run time.
	
	This article discusses the second method, making the .mdb file into a user-
	defined resource.
	
	MORE INFORMATION
	================
	
	You can use a user-defined resource to attach miscellaneous data to a .EXE file.
	If an .mdb file is made into a resource, the resource can be loaded at run time
	and then written to an .mdb file. The steps required to do this are as follows:
	
	1. Create an .mdb file either by using Microsoft Access or MSQuery.
	
	2. Create the .mdb file as a user-defined resource by adding the following line
	  to your .RC file:
	
	        mdb_file  MDB_RESOURCE filename.mdb
	
	  where:
	
	     mdb_file      is  a name for identifying the resource.
	     MDB_RESOURCE  is  a name for identifying the type of the resource
	                       and can be any user-defined type.
	     filename.mdb  is  the name of the .mdb file.
	
	3. Load the resource and write it out to an .mdb file. You can use the following
	  function, from anywhere in your application, to create the .mdb file. (A
	  typical place for creating the .mdb file would be the override of the
	  CWinApp::InitInstance() function.)
	
	     CreateMDBFile()
	     {
	        // Get the instance handle - required for loading the resource
	        HINSTANCE hInst = AfxGetInstanceHandle();
	
	        // Load the user-defined resource.
	        HRSRC hmdbFile = ::FindResource(hInst, "mdb_file", "MDB_RESOURCE");
	           HGLOBAL hRes = ::LoadResource(hInst, hmdbFile);
	           DWORD dwResSize = ::SizeofResource(hInst, hmdbFile);
	
	           if (hRes != NULL)
	           {
	              UINT FAR* lpnRes = (UINT FAR*)::LockResource(hRes);
	              CString szFileName = "Filename.mdb";
	
	              TRY
	              {
	                 // Create the .mdb file
	                 CFile f( szFileName, CFile::modeCreate | CFile::modeWrite );
	
	                 // Write the user-defined resource to the .mdb file
	                 f.WriteHuge(lpnRes, dwResSize);
	                 f.Flush();
	              }
	              CATCH( CFileException, e )
	              {
	        #ifdef _DEBUG
	               afxDump << "File could not be opened " << e->m_cause << "\n";
	        #endif
	              }
	              END_CATCH
	
	        #ifndef WIN32 //Unlock Resource is obsolete in the Win32 API
	              ::UnlockResource(hRes);
	        #endif
	              ::FreeResource(hRes);
	           }
	        }
	
	The one disadvantage of this method is that it increases the size of the .exe
	file according to the size of the .mdb file. Because even an empty .mdb file is
	64K in size, the .exe is increased by at least 64K. One way to reduce the size
	of the .exe is to store a compressed .mdb file onto the .exe and expand it at
	run time when storing the resource.
	
	REFERENCES
	==========
	
	For more information on user-defined resources, refer to the Windows SDK Help.
	
	For additional information on configuring a data source programmatically, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q110507 HOWTO: Configure ODBC Data Sources on the Fly
	
	  Q110508 HOWTO: Create Tables with Foundation Database Classes
	
	Additional query words: 2.50 2.51 2.52 3.00 3.10 ODBC
	
	======================================================================
	Keywords          : kbprogramming kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1
	Issue type        : kbhowto
	
	=============================================================================
	
