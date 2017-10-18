---
layout: page
title: "Q133311: FIX: Errors Occur When SQL Server Binary Field Over 64K"
permalink: kb/133/Q133311/
---

## Q133311: FIX: Errors Occur When SQL Server Binary Field Over 64K

	Article: Q133311
	Product(s): Microsoft C Compiler
	Version(s): 1.52 1.52a 1.52b | 2.00 2.10 2.2
	Operating System(s): 
	Keyword(s): kbcode kbDatabase kbMFC kbODBC kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.52, 1.52a, 1.52b 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to store more than 64K of data in a binary field using the SQL
	Server ODBC 2.0 driver version 2.00.1912, data is truncated. The following error
	may also occur with the 16-bit version of the driver:
	
	  
	
	  Incorrect syntax near 'NULLNULL'.
	  State:37000[Microsoft][ODBC SQL Server Driver][SQL Server]
	
	NOTE: 32-bit applications using the SQL Server Driver delivered with Visual C++
	4.x (version 2.50.0126) should not exhibit this behavior.
	
	CAUSE
	=====
	
	The SQL Server driver fails to handle calls to SQLSetParam() correctly.
	
	Also, the data needs to be retrieved and sent in chunks less than 64K. The
	existing implementation for the 32-bit database classes reads and writes the
	data in one large chunk and encounters network errors with the SQL Server ODBC
	driver when sending chunks of data larger than 64K.
	
	RESOLUTION
	==========
	
	The SQLSetParam() ODBC 1.0 function has been replaced by the ODBC 2.0
	SQLBindParameter() function. The MFC database classes use SQLSetParam to
	maintain compatibility with ODBC 1.0 drivers. If you are using the SQL Server
	ODBC 2.0 driver, you can work around the SQLSetParam() bug by calling
	SQLBindParameter() instead.
	
	If you are in a 32-bit environment, you'll also need to override some functions
	to read and write the binary data in chunks of less than 64K bytes.
	
	To fix the MFC Database classes, perform the following steps:
	
	1. Copy the RFX_LongBinary() function from \MSVC\MFC\SRC\DBRFX.CPP into your own
	  .CPP file, and rename the function to something like RFX_LongBinary2().
	
	2. Modify the RFX_LongBinary() function by replacing the call to SQLSetParam()
	  with a call to SQLBindParameter(). You'll see a line of code such as this:
	
	        AFX_SQL_SYNC(::SQLSetParam(pFX->m_hstmt,
	         (unsigned short int)pFX->m_nParamFields, SQL_C_DEFAULT,
	         // Get actual SQL type - may differ from CType (e.g. DECIMAL)
	         (short int)pFX->GetColumnType(nField), value.m_dwDataLength,
	         0, &value, plLength));
	
	  Replace it with this code:
	
	        AFX_SQL_SYNC(::SQLBindParameter(pFX->m_hstmt,
	         (unsigned short int)pFX->m_nParamFields,SQL_PARAM_INPUT,
	         SQL_C_DEFAULT,
	         // Get actual SQL type - may differ from CType (e.g. DECIMAL)
	         (short int)pFX->GetColumnType(nField), value.m_dwDataLength,
	         0, &value, sizeof(value), plLength));
	
	  Replace the following code in the CFieldExchange::Value case:
	
	        *plLength = SQL_DATA_AT_EXEC;
	
	  with this code:
	
	        *plLength=SQL_LEN_DATA_AT_EXEC(((LONG)value.m_dwDataLength));
	
	3. For the 32-bit database classes, add code to the RFX_LongBinary2() function
	  to get the binary data in chunks. Again, use the the RFX_LongBinary2()
	  function below.
	
	  Replace this code:
	
	        AFX_SQL_ASYNC(pFX->m_prs, ::SQLGetData(pFX->m_prs->m_hstmt,
	         (UWORD)nField,SQL_C_BINARY, (UCHAR*)lpLongBinary,
	         *plLength, plLength));
	
	  with this code:
	
	        do
	        {
	           DWORD dwChunkSize = value.m_dwDataLength - dwDataLength;
	           if (dwChunkSize > 0x8000)
	              dwChunkSize = 0x8000;
	
	           // Ignore expected data truncated warnings
	           AFX_SQL_ASYNC(pFX->m_prs, ::SQLGetData(pFX->m_prs->m_hstmt,
	            (unsigned short int)nField, SQL_C_BINARY,
	            (UCHAR FAR*)lpLongBinary, dwChunkSize, plLength));
	
	           dwDataLength += dwChunkSize;
	           lpLongBinary += dwChunkSize;
	
	        } while (nRetCode == SQL_SUCCESS || nRetCode ==
	           SQL_SUCCESS_WITH_INFO);
	
	  And do the following:
	
	  1. At the top of the RFX_LongBinary2() function, declare the DWORD variable
	     dwDataLength and initialize it to zero:
	
	        void AFXAPI RFX_LongBinary2(CFieldExchange* pFX,
	         const char *szName, CLongBinary& value)
	        {
	           DWORD dwDataLength = 0;     // Add this line!
	        .
	        .
	        .
	
	  2. Include <limits.h> in the .CPP file that contains RFX_LongBinary2.
	     You need this because the RFX_LongBinary code that you copied over has a
	     reference to the LONG_MAX constant.
	
	  3. Add a global static char* called szComma, and initialize it to point to a
	     string literal that contains a single comma:
	
	        static char* szComma = ",";
	
	     Do this because RFX_LongBinary() refers to this variable, which is in the
	     file DBRFX.CPP. Because it is declared static in that file, it cannot be
	     seen outside of it, so it must be supplied in the file that contains
	     RFX_LongBinary2().
	
	4. Change the call to RFX_LongBinary() in your CRecordset DoFieldExchange()
	  function so that the new RFX_LongBinary2() function is called.
	
	5. For the 32-bit database classes, copy the code for Update(),
	  UpdateInsertDelete(), ExecuteUpdateSQL(), ExecuteSetPosUpdate(), and
	  SendLongBinaryData() into your own CRecordset functions. You'll need to add
	  code to the SendLongBinaryData() function. The only reason the other
	  functions must be copied to your recordset is because the Update() function
	  is virtual. By doing this, you make certain that the corrected
	  SendLongBinaryData function is called.
	
	  Replace the following code in SendLongBinaryData():
	
	        AFX_SQL_ASYNC(this, ::SQLPutData(hstmt, (PTR)lpData,
	         pLongBinary->m_dwDataLength));
	        ::GlobalUnlock(pLongBinary->m_hData);
	
	        if (!Check(nRetCode))
	        {
	           // cache away error
	           CDBException* pException = new CDBException(nRetCode);
	           pException->BuildErrorString(m_pDatabase, hstmt);
	
	           // then cancel Execute operation
	           Cancel();
	           THROW(pException);
	        }
	
	  with this code:
	
	        DWORD dwDataLength = 0;
	        while (dwDataLength != pLongBinary->m_dwDataLength)
	        {
	           DWORD dwSend = pLongBinary->m_dwDataLength-dwDataLength;
	           if (dwSend > 0x8000)
	              dwSend = 0x8000;
	           AFX_SQL_ASYNC(this, ::SQLPutData(m_hstmtUpdate,
	            (PTR)lpData, dwSend));
	           if (!Check(nRetCode))
	           {
	              ::GlobalUnlock(pLongBinary->m_hData);
	              // Cache away error
	              CDBException* pException = new CDBException(nRetCode);
	              pException->BuildErrorString(m_pDatabase, m_hstmtUpdate);
	              // Then cancel Execute operation
	              Cancel();
	              THROW(pException);
	           }
	           lpData += dwSend;
	           dwDataLength += dwSend;
	        }
	
	Correction for SendLongBinaryData() Code
	----------------------------------------
	
	  BOOL CMyRecordset::Update()
	  {
	     // Insert the CRecordset::Update() code from MFC\SRC\DBCORE.CPP
	  }
	  BOOL CMyRecordset::UpdateInsertDelete()
	  {
	     // Insert the CRecordset::UpdateInsertDelete() code
	     // from MFC\SRC\DBCORE.CPP
	  }
	
	  void CMyRecordset::ExecuteUpdateSQL()
	  {
	     // Insert the CRecordset::ExecuteUpdateSQL() code
	     // from MFC\SRC\DBCORE.CPP
	  }
	
	  void CMyRecordset::ExecuteSetPosUpdate()
	  {
	     // Insert the CRecordset::ExecuteSetPosUpdate() code
	     // from MFC\SRC\DBCORE.CPP
	  }
	
	  void CMyRecordset::SendLongBinaryData(HSTMT hstmt)
	  {
	     RETCODE nRetCode;
	     void* pv;
	     AFX_SQL_ASYNC(this, ::SQLParamData(hstmt, &pv));
	     if (!Check(nRetCode))
	     {
	        // cache away error
	        CDBException* pException = new CDBException(nRetCode);
	        pException->BuildErrorString(m_pDatabase, hstmt);
	
	        // then cancel Execute operation
	        Cancel();
	        THROW(pException);
	     }
	
	     while (nRetCode == SQL_NEED_DATA)
	     {
	        CLongBinary* pLongBinary = (CLongBinary*)pv;
	        ASSERT_VALID(pLongBinary);
	
	        const BYTE* lpData =
	         (const BYTE*)::GlobalLock(pLongBinary->m_hData);
	        ASSERT(lpData != NULL);
	
	        DWORD dwDataLength = 0;
	        while (dwDataLength != pLongBinary->m_dwDataLength)
	        {
	           DWORD dwSend =
	            pLongBinary->m_dwDataLength-dwDataLength;
	           if (dwSend > 0x8000)
	              dwSend = 0x8000;
	           AFX_SQL_ASYNC(this,
	            ::SQLPutData(m_hstmtUpdate, (PTR)lpData, dwSend));
	           if (!Check(nRetCode))
	           {
	              ::GlobalUnlock(pLongBinary->m_hData);
	              // Cache away error
	              CDBException* pException =
	               new CDBException(nRetCode);
	              pException->BuildErrorString(
	               m_pDatabase, m_hstmtUpdate);
	              // Then cancel Execute operation
	              Cancel();
	              THROW(pException);
	           }
	           lpData += dwSend;
	           dwDataLength += dwSend;
	        }
	
	        // Check for another DATA_AT_EXEC
	        AFX_SQL_ASYNC(this, ::SQLParamData(hstmt, &pv));
	        if (!Check(nRetCode))
	        {
	           TRACE0("Error: failure handling long binary"
	                  "value during update.\n");
	           ThrowDBException(nRetCode, hstmt);
	        }
	     }
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in the 32- bit SQL
	Server driver that ships with Visual C++ 4.0 and 4.1 (driver version 2.50.0126).
	
	REFERENCES
	==========
	
	For more information about the ODBC 2.0 SQL Server driver bug (SQLSetParam() not
	working), please see the following article in the Microsoft Knowledge Base:
	
	  Q125306 BUG: Cannot Insert BLOB Data Sized Between 64K and 128K
	
	Additional query words: 2.00 2.10 2.20 2.5 2.51 2.52 2.52a 3.0 3.1 3.10 3.2 3.20
	
	======================================================================
	Keywords          : kbcode kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.52 1.52a 1.52b | 2.00 2.10 2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
