---
layout: page
title: "Q168708: HOWTO: Performing Transactions with SQL Server 6.x"
permalink: kb/168/Q168708/
---

## Q168708: HOWTO: Performing Transactions with SQL Server 6.x

	Article: Q168708
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS NT: 2.0, 2.1, 2.2, 4.0, 4.1, 4.2, 5.0, 6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbusage kbDatabase kbMFC kbODBC kbVC
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses topics related to performing transactions with the
	Microsoft SQL Server 6.0 and 6.5 using the MFC ODBC classes.
	
	Please refer to the following documentation for more information on MFC database
	transactions prior to this article:
	
	In the Microsoft Knowledge Base:
	
	  Q128208 How to Perform Transactions with the MFC Database Classes
	
	  MFC Tech Note #47 - "Relaxing Database Transaction Requirements."
	
	MORE INFORMATION
	================
	
	Below is a list of transaction related values the SQL Server ODBC driver returns
	via SQLGetInfo().
	
	                            SQL Server ODBC
	InfoType                     Driver Version     Return Value
	SQL_TXN_CAPABLE                  2.50           SQL_TC_DML*
	                                2.65           SQL_TC_ALL*
	
	SQL_CURSOR_COMMIT_BEHAVIOR       2.50           SQL_CB_CLOSE
	                                2.65           SQL_CB_CLOSE
	
	SQL_CURSOR_ROLLBACK_BEHAVIOR     2.50           SQL_CB_CLOSE
	                                2.65           SQL_CB_CLOSE
	
	*SQL_TC_DML = Transactions can only contain Data Manipulation Language
	             (DML) statements (SELECT, INSERT, UPDATE, DELETE). Data
	             Definition Language (DDL) statements encountered in a
	             transaction cause an error.
	
	*SQL_TC_ALL = Transactions can contain DDL statements and DML statements
	             in any order.
	------------------------------------------------------------------------
	
	SQL_CB_CLOSE, which is the ANSI-specified default behavior, means that the cursor
	is closed after a commit or rollback. As a result, an MFC recordset will not
	have a valid cursor after CommitTrans() or Rollback() is called. No operations
	should be performed on a recordset prior to calling Requery().
	
	An application may want to preserve cursors across transaction commits and
	rollbacks. The default behavior can be overridden for the SQL Server ODBC driver
	by using a driver-specific connection option, SQL_PRESERVE_CURSORS. This option
	can be set by calling SQLSetConnectOption(), as shown below:
	
	    CMyDatabase db;
	
	    db.Open( NULL, FALSE, FALSE,"ODBC;", FALSE  );  // Select  SQL Server
	                                                    // 6.x data source
	    // rcode will equal 0 (SQL_SUCCESS) if call succeeds
	    int rcode = ::SQLSetConnectOption (db.m_hdbc,1204, 1L );
	
	    // 1204 = SQL_PRESERVE_CURSORS, 1L = SQL_PC_ON
	    // values for driver-specific options are given in the driver help file
	
	    // if NOT using MFC 4.2, need to enable transaction support
	    // look at Q128208 for more information
	    // db.SetTransactions();
	
	    BOOL bCanTrans = db.CanTransact();
	
	    if (bCanTrans)
	    {
	      CMyRecordset rs(&db);
	      BOOL ret = db.BeginTrans();
	      rs.Open( CRecordset::dynaset );
	      rs.Edit();
	      // change some fields
	      rs.Update();
	      db.Rollback();
	
	      // since the cursor is preserved, we do NOT have
	      // to call Requery
	      rs.MoveFirst();
	    }
	
	NOTE: SQL_PRESERVE_CURSORS works only for server-side cursors. As a result, even
	after setting this connection option, the ODBC driver will return SQL_CB_CLOSE
	when queried for SQL_CURSOR_COMMIT_BEHAVIOR. For additional information, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q138280 INF: SQLGetInfo Returned with SQL_PRESERVE_CURSORS
	
	REFERENCES
	==========
	
	MFC Technote #47 - "Relaxing Database Transaction Requirements."
	MFC Technote #68 - "Performing Transactions with the Microsoft Access 7 ODBC
	Driver"
	
	MFC Encyclopedia articles:
	
	- "Transaction"
	
	- "Transaction: Performing a Transaction in a Recordset"
	
	- "Transaction: How Transactions Affect Updates"
	
	Additional query words: kbVC200 kbVC210 kbVC220 kbVC410 kbVC420 kbVC500 kbVC600
	
	======================================================================
	Keywords          : kbprogramming kbusage kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS NT: 2.0, 2.1, 2.2, 4.0, 4.1, 4.2, 5.0, 6.0
	Issue type        : kbhowto
	
	=============================================================================
	
