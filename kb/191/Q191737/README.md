---
layout: page
title: "Q191737: PRB: DAO MDB on Read-Only Media Must Be Opened Exclusively"
permalink: /kb/191/Q191737/
---

## Q191737: PRB: DAO MDB on Read-Only Media Must Be Opened Exclusively

{% raw %}

	Article: Q191737
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0, 97
	Operating System(s): 
	Keyword(s): kberrmsg kbAccess kbDAOsearch kbDatabase kbMFC kbVS97 kbVS600
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual Studio versions 97, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DAO applications that use a Microsoft Access .mdb file on a read-only media
	(CD-ROM, floppy disk write protected, a hard disk that is read only to the user,
	etc) must open the database file with exclusive access.
	
	If you don't open the database exclusively, you get one of the following errors
	when attempting to open a recordset:
	
	- The Microsoft Jet Database engine cannot open the file 'YourMDBfile.mdb'. It
	  is already opened exclusively by another user, or you need permission to view
	  its data.
	
	- Couldn't Lock File
	
	CAUSE
	=====
	
	Jet requires the creation of a locking file (.ldb file) in order to open a
	database file in shared access mode. If you request shared access mode, Jet
	attempts to create the locking file, which fails on read-only media. If you open
	a database using exclusive mode, Jet does not need to create the locking file.
	
	RESOLUTION
	==========
	
	Open the database with exclusive access. One way to do this is to insert the
	following three lines into the wizard generated RecordView OnInitialUpdate as
	follows:
	
	     static CDaoDatabase mdb;          //** Add db class here or in .h file.
	     mdb.Open("D:\\RO.mdb",TRUE,TRUE); //**  RO && Exclusive
	     m_pSet->m_pDatabase= &mdb;        //** Assign DB to RecordSet class.
	
	Even though you must open the .mdb file with exclusive access, other applications
	can also open it read-only and exclusive.
	
	MORE INFORMATION
	================
	
	The following code shows the three lines inserted into the RecordView
	OnInitialUpdate method:
	
	     void CCDRomView::OnInitialUpdate(){
	     m_pSet = &GetDocument()->m_rOSet;    // Original wizard code.
	     #ifdef FixCode
	        //** Add db class here or in .h file.
	        static CDaoDatabase mdb;
	        //** Open it ReadOnly and Exclusive.
	        mdb.Open("D:\\RO.mdb",TRUE,TRUE);
	        //** Assign DB to RecordSet class.
	        m_pSet->m_pDatabase= &mdb;
	     #endif
	     CDaoRecordView::OnInitialUpdate();   // original wizard code
	     }
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a small .mdb file with one table and call it "RO.mdb".
	
	2. Use the MFC AppWizard to create a CDaoDatabase project using the table in the
	  RO.mdb file.
	
	3. Build and test the application.
	
	4. Copy RO.mdb to a floppy disk, and set the write protect tab on the floppy.
	
	5. In the recordset class, change the GetDefaultDBName to point to the RO.mdb
	  database file on the floppy disk.
	
	6. Rebuild and run the application. You get the error message.
	
	======================================================================
	Keywords          : kberrmsg kbAccess kbDAOsearch kbDatabase kbMFC kbVS97 kbVS600 
	Technology        : kbVSsearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbVS97 kbVS600 kbVS97Search kbVS600Search
	Version           : WINDOWS:6.0, 97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
