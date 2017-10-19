---
layout: page
title: "Q183001: Retrieving Output Parameters From Stored Procedure"
permalink: /kb/183/Q183001/
---

## Q183001: Retrieving Output Parameters From Stored Procedure

	Article: Q183001
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbDatabase kbMFC kbODBC kbVC
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This Stored Procedure sample SPOutPut, which is described further in this
	article, shows how to derive from CDatabase in order to retrieve output
	parameters from a Stored Procedure within MFC.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	SPOutPut.exe
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	The first and main purpose of the SPOutPut sample is to show how to use MFC and
	derive from the CDatabase class in order to retrieve output parameters from a
	stored procedure that doesn't return a recordset. To accomplish the above, we
	need to override CDatabase's BindParameter function and call ODBC APIs directly
	as follows:
	
	     // This binds the RETURN value.
	     nRetCode = ::SQLBindParameter(hstmt, 1, SQL_PARAM_OUTPUT, SQL_C_SLONG,
	                                   SQL_INTEGER, 11, 0,
	                                   (void*)&m_lDbOutParam, 0,
	                                   &m_lBufLength);
	
	     // This binds the OUTPUT value.
	     nRetCode = ::SQLBindParameter(hstmt, 2, SQL_PARAM_OUTPUT,
	                                   SQL_C_SLONG, SQL_INTEGER, 11, 0,
	                                   (void*)&m_lDbOutParam2, 0,
	                                   &m_lBufLength2);
	
	     ASSERT (nRetCode == SQL_SUCCESS);
	
	The returned parameters are publicly declared so that these can be accessed from
	other classes.
	
	The derived CExecDatabase class is then used in conjunction with the
	CDatabase::ExecuteSQL member function inside CShiminDlg::OnBtnparamonly(); thus,
	no CRecordset class is ever used in this scenario.
	
	For the user to test this when running the sample, click the top button on the
	dialog box, which will then populate the two top-most edit boxes.
	
	The second purpose of the SPOutPut sample is to show how to retrieve output
	parameters when the stored procedure does return a recordset. For the user to
	test this when running the sample, click the bottom button, which will populate
	all five edit boxes.
	
	In order to accomplish the above, make sure that CParamSet::DoFieldExchange is
	implemented correctly. Each parameter must be bound in the same order as defined
	in the stored procedure, with the return parameter first. Remember to update
	CRecordset's m_nFields and m_nParams to reflect how many parameters and columns
	the stored procedure returns.
	
	     // Parameter order must be identical to what is declared in the SP.
	     pFX->SetFieldType(CFieldExchange::outputColumn);
	     RFX_Long(pFX, _T("colRecID"), m_colRecID);
	     RFX_Text(pFX, _T("colData"), m_colData);
	
	     // This is the RETURN value.
	     pFX->SetFieldType(CFieldExchange::outputParam);
	     RFX_Int(pFX, _T("output"), m_outputParam);
	
	     // This is the INPUT value.
	     pFX->SetFieldType(CFieldExchange::inputParam);
	     RFX_Int(pFX, _T("colData"), m_colDataParam);
	
	     // This is the OUTPUT value.
	     pFX->SetFieldType(CFieldExchange::outputParam);
	     RFX_Int(pFX, _T("output"), m_outputParam2);
	
	However, what happens with our return and output parameters if we bound a
	recordset as above, but the criteria given to the Stored Procedure doesn't
	return any records?
	
	SQL Server doesn't return output and return values until after the recordset is
	populated; therefore, it would not be possible to retrieve those values because
	the recordset is never being populated. To solve the above issue,
	FlushResultSet() is used as depicted below.
	
	Calling CRecordset's FlushResultSet() function is necessary if there is a
	possibility that the stored procedure doesn't return any records. For example,
	if you omit FlushResultSet() and were to provide the number 999 for the input
	parameter, TestQuery4 would not return any records even though there are bound
	columns that could have contained values.
	
	FlushResultSet calls "AFX_ODBC_CALL(::SQLMoreResults(m_hstmt));" in Dbcore.cpp
	and the output parameter is written to m_outputParam.
	
	     while( rs.FlushResultSet())
	     {
	
	        while (!rs.IsEOF())
	        {
	           rs.MoveNext();
	        }
	
	     }
	     m_nOutParam = rs.m_outputParam;   // Display the output parameter.
	
	A third approach records, which is left as an exercise for the reader, to
	retrieve the return value and output parameters if the stored procedure doesn't
	return any would be to derive from CRecordset. Theoretically, if you override
	the CRecordset's Move() method and return without doing anything you would be
	able to use its RFX bindings to get the values.
	
	To run the sample, perform the following steps:
	
	1. Create a DSN called pubs pointing to a SQL Server and the pubs database.
	
	2. Execute the script createstoredprocedures.sql in the pubs database.
	
	3. Build and execute the code.
	
	Clicking any of the two buttons in the displayed dialog box will show the result
	from any of two different methods of retrieving output parameters.
	
	The sample is written for Microsoft SQL Server but may run with other database
	systems supporting output parameters. If your database system supports output
	parameters, alter the included sql-script createstoredprocedures.sql as
	appropriate.
	
	Additional query words: kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbcode kbfile kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
