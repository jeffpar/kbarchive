---
layout: page
title: "Q141303: Dynasets w/ CLongBinary Fields Throws Incorrect Exception"
permalink: /kb/141/Q141303/
---

## Q141303: Dynasets w/ CLongBinary Fields Throws Incorrect Exception

	Article: Q141303
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbDatabase kbMFC kbODBC kbVC kbVC410fix
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An MFC ODBC application that uses dynaset recordsets with CLongBinary bound
	fields worked in Visual C++ 2.x, but it throws an exception in Visual C++ 4.0
	when the recordset is opened.
	
	The CDBException indicates: Data truncated.
	
	Additionally, the following trace messages are output (Microsoft Access driver
	output is shown):
	
	  
	
	  Error in row
	  State:01S01,Native:89,Origin:[Microsoft][ODBC Microsoft Access 7.0
	  Driver]
	
	  
	
	  Data truncated
	  State:01004,Native:2,Origin:[Microsoft][ODBC Microsoft Access 7.0
	  Driver]
	
	  
	
	  Error: field data truncated during Open or Requery.
	  Data truncated.
	
	The exception is thrown from CRecordset::InitRecord(). Also, in release builds,
	the same exception is also thrown by CRecordset::Move(). The exception is thrown
	incorrectly. The problem is a bug in the MFC code. Both CRecordset::InitRecord()
	(responsible for initializing the recordset with the first record of the result
	set) and CRecordset::Move() perform a check following the fetch. If the fetch
	returns SQL_SUCCESS_WITH_INFO and the subsequent call to SQLError indicates that
	data was truncated, an exception should only be thrown if snapshots are being
	used. If the recordset is a dynaset, then data truncation is expected because of
	the way in which the MFC classes handle binding in dynasets, so it should be
	ignored.
	
	The MFC code performs an incorrect comparison to determine if dynasets are being
	used resulting in the exact opposite of the desired effect -- exceptions are
	only thrown if dynasets are being used with CLongBinary fields. The incorrect
	code is shown below (from CRecordset::InitRecord()):
	
	     if (!((m_pDatabase->m_dwUpdateOptions & AFX_SQL_POSITIONEDSQL) &&
	              m_bLongBinaryColumns))
	       {
	          //throw the exception
	       }
	
	AFX_SQL_POSITIONEDSQL corresponds to the update option for a snapshot, not a
	dynaset. Unfortunately, CRecordset::InitRecord() is not a virtual function.
	Consequently, the two virtual functions that call InitRecord() must be
	overridden to allow a corrected version of InitRecord() to be called. Note that
	after you apply the following workaround, the trace messages will still be
	output but can be safely ignored.
	
	NOTE: To assist you in implementing a workaround for this problem, obtain
	NOTRUNC.EXE:
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Notrunc.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	After running the Notrunc.exe, you will have a custom component file
	(Notrunc.ogx), .cpp file, .h file, and a Readme.txt file. You can import the
	.ogx file into the component gallery, and then reuse it as needed. For more
	information on importing components, see Importing Components in the Visual C++
	User's Guide.
	
	Workaround Example
	------------------
	
	If you downloaded Notrunc.exe, go to step 8. If you want to implement the
	modifications yourself, proceed with step 1:
	
	1. Using ClassWizard, add a new class derived from CRecordset to your project
	  (referred to as CNewRecordset hereafter) and specify the file name as
	  Notrunc.cpp and Notrunc.h.
	
	  a. Clear the Bind All Columns database option.
	
	  b. Select a datasource and table at random.
	
	2. Using ClassWizard, override the virtual functions Move() and Requery() for
	  CNewRecordset:
	
	  a. Remove the code provided by ClassWizard so that the bodies of the
	     functions are empty.
	
	  b. Copy the bodies of MFC's implementations of these functions into your
	     overrides verbatim. These implementations can be found in
	     Mfc\Src\Dbcore.cpp.
	
	3. Add a function to CNewRecordset that will be your own implementation of
	  InitRecord() (referred to as NewInitRecord() hereafter). Copy the MFC
	  implementation of InitRecord() into your NewInitRecord() function - also from
	  Dbcore.cpp.
	
	4. Copy the declarations of both szRowFetch and szDataTruncated from Dbcore.cpp
	  to Notrunc.cpp. Be sure to place the declarations above both the Move()
	  override and your NewInitRecord() function.
	
	5. Remove the four lines from Notrunc.cpp that contain the macro
	  NO_CPP_EXCEPTION. This macro is only used when rebuilding the MFC libraries;
	  it is unnecessary in this case.
	
	6. Create an empty derivation from CDatabase by placing the following text at
	  the top of Notrunc.h. (This class will be referred to as CnewDatabase
	  hereafter.)
	
	        class CNewDatabase : public CDatabase
	        {
	           friend class CNewRecordset;
	        };
	
	7. In Notrunc.cpp, perform the following text replacements:
	
	  Replace 2 occurrences of:
	
	        m_pDatabase->m_dwUpdateOptions
	
	  With:
	
	        ((CNewDatabase *)m_pDatabase)->m_dwUpdateOptions
	
	  Replace 2 occurrences of:
	
	        AFX_SQL_POSITIONEDSQL
	
	  With:
	
	        AFX_SQL_SETPOSUPDATES
	
	  Replace 2 occurrences of:
	
	        InitRecord
	
	  With:
	
	        NewInitRecord
	
	8. Change the .h and .cpp files of your existing recordsets so that they derive
	  from CNewRecordset.
	  a. In the header files, change the class declarations:
	
	        class CMySet : public CNewRecordset
	
	  b. In the implementation files, change the constructor to call the
	     CNewRecordset constructor:
	
	        CMySet::CMySet(CDatabase* pdb) : CNewRecordset(pdb)
	
	9. Include the Notrunc.h file in each recordset .h file that uses the new
	  CNewRecordset class or add the Notrunc.h to the bottom of Stdafx.h.
	
	10. Rebuild your project. Your application should no longer throw the undesired
	  exception. Note that the trace messages will still be output, but these can
	  be safely ignored.
	
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	
	
	Additional query words: kbVC400bug truncation long binary column
	
	======================================================================
	Keywords          : kbcode kbfile kbDatabase kbMFC kbODBC kbVC kbVC410fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Solution Type     : kbfix
	
	=============================================================================
	
