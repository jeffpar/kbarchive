---
layout: page
title: "Q175313: BUG: S1000 Error When Sharing Connection in Multiple Threads"
permalink: /kb/175/Q175313/
---

## Q175313: BUG: S1000 Error When Sharing Connection in Multiple Threads

{% raw %}

	Article: Q175313
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbSQLServ kbVC500 kbGrpDSMDAC kbDSupport kbGrpDSODBC
	Last Modified: 14-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, versions 2.0, 3.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you share a CDatabase object between multiple threads and use the SQL
	Server ODBC driver version 2.65.0240 or later, you may receive the following
	error message:
	
	  SQLSTATE: S1000
	  [Microsoft][ODBC SQL Server Driver]Connection is busy with the results for
	  another hstmt
	
	When you use the Microsoft Data Access Components (MDAC) 2.6 driver, you may
	receive the following error message:
	
	  State:37000,Native:16909,Origin:[Microsoft][ODBC SQL Server Driver][SQL
	  Server]
	  sp_cursorfetch: The cursor identifier value provided (1) is not valid
	
	CAUSE
	=====
	
	This error occurs because of a timing conflict in the SQL Server ODBC driver or
	MDAC 2.6 driver. If two threads are in the process of calling SQLPrepare(),
	followed by a SQLExecute() call, this error may occur.
	
	RESOLUTION
	==========
	
	Put CRecordset::Open() calls within a critical section to guarantee that only
	one thread is executing a SQL command on the connection at a given time.
	
	On the SQL Server back end, it is recomended that you use different CDatabase
	objects for different threads.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft SQL Server driver.
	
	
	
	MORE INFORMATION
	================
	
	Following is a code sample that can cause this error to occur:
	
	Sample code
	-----------
	
	     void CDBProblemDlg::OnDoDatabase()
	     {
	        //Open connection to database
	        m_DB.Open();
	        CSQLRecordSet rs(&m_DB);
	
	        StartThread(&m_DB);
	
	        if ( rs.Open(CRecordset::dynaset) )
	        {
	            .
	            .
	            .
	            SQLRecordSet.Close();
	        }
	     }
	
	        void StartThread(CDatabase * pDB)
	     {
	        AfxBeginThread(InitThreadProc, pDB, THREAD_PRIORITY_NORMAL);
	     }
	
	     UINT CDBProblemDlg::InitThreadProc( LPVOID pParam )
	     {
	        CDatabase* pDB = (CDatabase*) pParam;
	        if (pDB->IsOpen())
	        {
	           CSQLRecordSet SQLRecordSet(pDB);
	
	           if (SQLRecordSet.Open(CRecordset::dynaset))
	           {
	              .
	              .
	              .
	              SQLRecordSet.Close();
	           }
	        }
	     }
	
	Additional query words: VC++
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbSQLServ kbVC500 kbGrpDSMDAC kbDSupport kbGrpDSODBC 
	Technology        : kbVCsearch kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ200 kbODBCSQLServ300 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :2.0,3.0,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
