---
layout: page
title: "Q249803: BUG: Unicode Issue: Using MFC ODBC w/ the SQL Server ODBC Driver"
permalink: kb/249/Q249803/
---

## Q249803: BUG: Unicode Issue: Using MFC ODBC w/ the SQL Server ODBC Driver

	Article: Q249803
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbVC420bug kbVC500bug kbVC600bug kbGrpDSVCDB kbDSupport
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the SQL Server Open Database Connectivity (ODBC) driver (version 3.70.06.90
	or later), UNICODE data is treated as UNICODE and the behavior of SQLDescribeCol
	is changed from the previous drivers. If you use the MFC ODBC CRecordset class
	with the latest drivers, the length returned from CRecordset::GetTextLen is
	incorrect, and therefore the data is truncated when CRecordset::GetFieldValue is
	called.
	
	CAUSE
	=====
	
	With UNICODE fields in SQL Server version 7.0, for example, and a field with
	"nchar" datatype that calls SQLDescribeCol on this column, the previous SQL
	Server ODBC driver (version 3.60.03.19 or earlier) returns SQL_CHAR with the
	column size doubled. However, if SQLDescribeCol is called with the new SQL
	Server ODBC driver (version 3.70.06.90 or later), SQL_WCHAR is returned with the
	column size as defined in the database.
	
	In MFC ODBC, when CRecordset::GetFieldValue is called, it will call
	CRecordset::GetTextLen, which doesn't provide you with the option to check
	against the SQL_WCHAR datatype. It just adds one more byte to the result from
	SQLDescribeCol. For UNICODE data, this length is incorrect and the fetched data
	is truncated.
	
	RESOLUTION
	==========
	
	There are two ways you can work around this problem:
	
	- Use the odbccmpt utility.
	
	  The odbccmpt utility is shipped with SQL Server version 7.0 (you can find it
	  in the Mssql7\Binn folder). The odbccmpt utility sets certain behaviors of
	  the SQL Server ODBC version 3.7 driver to be compatible with the earlier SQL
	  Server ODBC drivers.
	
	  One way to use this utility is to run it from the DOS prompt; for example:
	
	  " dos prompt>odbccmpt yourAppName" (without the quotation marks)
	
	  No code modification is required under this option.
	
	-or-
	
	- Use the overwrite CRecordset::GetFieldValue method.
	
	  Under certain circumstances, if the odbccmpt utility cannot be used, another
	  workaround is to overwrite CRecordset::GetFieldValue. The following steps
	  outline the method to overwrite GetFieldValue to handle the SQL_WCHAR
	  datatype:
	
	1. Add the following three methods to your CRecordset-derived class declaration:
	
	  void GetFieldValueMyEx(LPCTSTR lpszName, CString& strValue);
	  void GetFieldValueMyEx(short nIndex, CString& strValue);
	  int PASCAL GetTextLenMyEx(short nSQLType, UDWORD nPrecision);
	
	2. From the Mfc/Src/Dbcore.cpp file, copy and paste the implementation of these
	  three methods, corresponding to the methods in your .cpp file:
	
	  void GetFieldValue(LPCTSTR lpszName, CString& strValue);
	  void GetFieldValue(short nIndex, CString& strValue);
	  int PASCAL GetTextLen(short nSQLType, UDWORD nPrecision);
	
	3. The only modification you need to make is inside GetTextLen, which you need
	  to add the check against SQL_WCHAR, for example:
	
	  if(nSQLType == SQL_WCHAR)
	  {
	  	nLen = 2*nPrecision + 1;
	  }
	
	4. Implement GetTextLenMyEx as follows:
	
	  int PASCAL CMyRecordset::GetTextLenMyEx(short nSQLType, UDWORD nPrecision)
	  {
	  	int nLen;
	
	  	if (nSQLType == SQL_LONGVARCHAR || nSQLType == SQL_LONGVARBINARY)
	  	{
	  		// Use a dummy length of 1 (will just get NULL terminator).
	  		nLen = 1;
	  	}
	  	else
	  	{
	  		// Better know the length.
	  		ASSERT(nPrecision >= 0);
	  		if(nSQLType == SQL_WCHAR)	
	  		{
	  			nLen = 2*nPrecision + 1;
	  		}
	  		else
	  		{			
	  			nLen = nPrecision + 1;
	  		}
	  		// If converting Numeric or Decimal to text, you need
	  		// room for decimal point and sign in string.
	  		if (nSQLType == SQL_NUMERIC || nSQLType == SQL_DECIMAL)
	  			nLen += 2;
	  	}
	
	  	return nLen;
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the following script to create a table named "TestingTable" in the SQL
	  Server 7.0 Pubs sample database and insert one row into the table:
	
	  CREATE TABLE [dbo].[TestingTable] (
	  	[id] [int] IDENTITY (1, 1) NOT NULL ,
	  	[net_address] [nchar] (12) NULL 
	  ) ON [PRIMARY]
	
	  INSERT INTO TestingTable(net_address) VALUES ('a12345678901')
	
	2. Set up a data source name (DSN) with the name "pubs" that points to the Pubs
	  database.
	
	3. Create a Win32 console application that supports MFC, add the following code
	  into the "else" block of _tmain, and then add the "afxdb.h" header file for
	  MFC ODBC classes:
	
	  Db.Open("pubs");
	  CRecordset myquery(&Db);
	  try
	  {
	  	myquery.Open(CRecordset::forwardOnly, _T("select net_address from TestingTable"),
	  	CRecordset::readOnly |CRecordset::executeDirect);
	  			
	  	CString sID;
	  	if (!myquery.IsBOF())
	  	{
	  	    myquery.GetFieldValue("net_address", sID);			
	  	}
	  	AfxMessageBox(sID);
	  	myquery.Close();
	  	Db.Close();	
	  	}
	  catch(CDBException * e)
	  {
	  	e->ReportError();
	  	e->Delete();
	  	return -1;
	  }
	
	4. Compile and run the project.
	
	From the message box, you will see the data returned is "a1234567890", which is
	truncated.
	
	REFERENCES
	==========
	
	For more information on the odbccmpt utility, search the documentation on
	odbccmpt in the SQL books online.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbVC420bug kbVC500bug kbVC600bug kbGrpDSVCDB kbDSupport 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
