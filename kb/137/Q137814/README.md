---
layout: page
title: "Q137814: DOC: MFC ODBC Classes and Parameterized Pre-Defined Queries"
permalink: /kb/137/Q137814/
---

## Q137814: DOC: MFC ODBC Classes and Parameterized Pre-Defined Queries

{% raw %}

	Article: Q137814
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.5; winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbusage kbdocfix kbdocerr kbDatabase kbMFC kbODBC kbVC kbVC200 kbVC210 kbVC220 k
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MFC Encyclopedia article "Recordset: Declaring a Class for a Predefined
	Query" describes how to invoke a predefined query that takes parameters and
	returns a result set. The instructions in that article will not work for
	predefined queries that take parameters and do not return a result set. Some
	possible error messages you may receive when attempting to do this are:
	
	  No columns were bound prior to calling SQLExtendedFetch State:SL009:,
	  NATIVE:0, Origin: [Microsoft][ODBC Cursor Library]
	
	  Invalid cursor state State:24000, Native:24, Origin:[Microsoft][ODBC
	  Microsoft Access Driver]
	
	There are two ways that you can use predefined queries that take parameters and
	don't return a result set with the MFC ODBC classes:
	
	1. You can execute the query from the CRecordset::Open() member function. If you
	  do this, you will have to override the Open() function to not try to move to
	  the first record and also not call any recordset member functions that expect
	  a result set to be present.
	
	2. You can execute the query using direct ODBC API calls. In this case, you will
	  have to bind the parameters yourself rather than letting the RFX functions do
	  this for you.
	
	MORE INFORMATION
	================
	
	If your SQL command returns a result set, it is preferable to use a
	CRecordset-derived class, and pass the SQL to the recordset Open() member
	function. Using CRecordset is preferable when a result set is returned because
	the database classes do most of the work of binding the returned data to
	variables in your program. The CRecordset class will also do most of the work of
	binding parameters as well.
	
	If you have a predefined query that takes parameters, you have a choice between
	using a CRecordset-derived class to take advantage of its support for binding
	the parameters or using the CDatabase::m_hdbc member variable and doing the
	binding yourself.
	
	Using a CRecordset-derived Class
	--------------------------------
	
	In the first case, you can use the technique that is shown in the encyclopedia
	article "Recordset: Declaring a Class for a Predefined Query."
	
	You just have to make sure that you don't try to manipulate the result set,
	because there isn't one. The mandatory step is to override CRecordset::Open() to
	prevent calling the code that moves to the first record once the recordset is
	opened. This is accomplished by copying the code from CRecordset::Open() (in
	Dbcore.cpp) and commenting out the code that tries to move to the first record.
	For example, in MFC 3.2, you would comment out the MoveFirst() call at the end
	of the Open() function:
	
	       BOOL CMyRecordset::Open(.....)
	       {
	          .
	          .
	          .
	
	          // MoveFirst();  <<<< comment this line out!
	       }
	
	In addition, you should not call any function that assumes a result set is
	present.
	
	Then, set up the predefined query as mentioned in the encyclopedia article. To
	actually invoke the query, you would do something like this:
	
	       CMyRecordset rs;
	       rs.m_Param = someValue    // value for parameter
	       rs.Open(CRecordset::snapshot,"{CALL MyQuery (?)}",
	       CRecordset::readOnly);
	       rs.Close();
	
	NOTE: In Visual C++ 4.0 and 4.1, the implementation of CRecordset is changed and
	requires four additional steps to be taken to make this first approach work:
	
	1. You need to use a database object derived from CDatabase that contains an
	  accessor function that returns a reference (or pointer) to its
	  m_listRecordsets member. Your CRecordset-derived class needs to use this
	  reference to add itself to the m_listRecordsets. Here is how you can define
	  the CDatabase-derived class (you can place this declaration at the top of
	  your CRecordset-derived class's header file):
	
	        class CMyDatabase : public CDatabase
	        {
	        public:
	           CPtrList& GetRecordsetList() { return m_listRecordsets; }
	        };
	
	In order to use this function to add your recordset to the database's list of
	recordsets, you must construct your CRecordset-derived class off of a MyDatabase
	(or whatever you called the derived class) and replace the following lines in
	the copy of the CRecordset::Open:
	
	        // Add to list of CRecordsets with allocated hstmts
	        m_pDatabase->m_listRecordsets.AddHead(this);
	
	with this:
	
	        // Add to list of CRecordsets with allocated hstmts
	        CPtrList& listRecordsets =
	           ((CMyDatabase*)m_pDatabase)->GetRecordsetList();
	        listRecordsets.AddHead(this);
	
	The reason for this step is that MFC 4.0 and 4.1 declare CRecordset to be a
	friend of CDatabase that allows it to directly manipulate the protected
	m_listRecordsets member. Friendship is not inherited, however, so other measures
	must be taken to allow the recordset to add itself to the database's list of
	recordsets.
	
	1. #include <afxpriv.h> at the top of your CRecordset-derived class's .cpp
	  file. This is necessary because CRecordset::Open that you copied into your
	  recordset class makes use of the USES_CONVERSION and T2A macros.
	
	2. Remove the following line (which is only needed if you are building MFC) from
	  Open:
	
	        NO_CPP_EXCEPTION(strDefaultConnect.Empty());
	
	3. Add the following line at the top of your CRecordset-derived class's .cpp
	  file:
	
	        static const TCHAR szDriverNotCapable[] = _T("State:S1C00");
	
	This line is present in dbcore.cpp, and szDriverNotCapable is used in
	CRecordset::Open. Because it is static, it is not visible outside dbcore.cpp, so
	you must provide it in order to use the code for Open.
	
	Using CDatabase::m_hdbc and Doing Your Own Binding
	--------------------------------------------------
	
	Another possibility is to execute the predefined query using the m_hdbc member of
	CDatabase. If you choose this method, you will have to do the parameter binding
	yourself using ODBC API calls:
	
	        CDatabase*  pDb;
	        RETCODE     nRetCode;
	        HSTMT       hstmt;
	        SDWORD      cBytes;
	        SDWORD      nParamValue;
	
	        // Construct and open the database object
	        pDb = new CDatabase;
	        pDb->Open("My_Datasource");
	
	        // allocate the hstmt
	        AFX_SQL_SYNC(::SQLAllocStmt(pDb->m_hdbc,&hstmt));
	        if (!pDb->Check(nRetCode))
	           AfxThrowDBException(nRetCode,pDb,hstmt);
	
	        // bind the parameter
	        AFX_SQL_SYNC(::SQLBindParameter(hstmt,1,SQL_PARAM_INPUT,
	           SQL_C_LONG,SQL_INTEGER,10,0,&nParamValue,4,&cBytes));
	        if (nRetCode != SQL_SUCCESS)
	           AfxThrowDBException(nRetCode,pDb,hstmt);
	
	        // set the parameter value
	        nParamValue = 3;
	
	        // execute the query
	        AFX_SQL_ASYNC(pDb,::SQLExecDirect(hstmt,
	          (UCHAR FAR*)"{CALL MyQuery (?)}",SQL_NTS));
	        if (nRetCode != SQL_SUCCESS && nRetCode != SQL_SUCCESS_WITH_INFO)
	           AfxThrowDBException(nRetCode,pDb,hstmt);
	
	        // free the hstmt
	        AFX_SQL_SYNC(::SQLFreeStmt(hstmt,SQL_DROP));
	
	        // Close and destruct the database object
	        pDb->Close();
	        delete pDb;
	
	REFERENCES
	==========
	
	MFC Encyclopedia Article: "Recordset: Declaring a Class for a Predefined Query."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbusage kbdocfix kbdocerr kbDatabase kbMFC kbODBC kbVC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSVCDB kbDSupport kbMDAC250 
	Technology        : kbAudDeveloper kbMFC
	Version           : WINDOWS:2.5; winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	
	=============================================================================
	

{% endraw %}
