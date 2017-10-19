---
layout: page
title: "Q141904: HOWTO: Use SQL Aggregate Functions with the MFC DAO Classes"
permalink: /kb/141/Q141904/
---

## Q141904: HOWTO: Use SQL Aggregate Functions with the MFC DAO Classes

	Article: Q141904
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.1b 4.2 4.2b 5.0 6.0
	Operating System(s): 
	Keyword(s): kbcode kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1, 4.1b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two ways to use SQL aggregate functions to retrieve information with
	the MFC DAO classes. One method uses the GetFieldValue() member function of the
	CDaoRecordset class to retrieve the values. The other involves modifying a
	CDaoRecordset-derived class by changing the SQL statement used to open the
	recordset and placing column alias names in the DFX calls of the recordset's
	DoFieldExchange() member function.
	
	NOTE: You can't use the technique described in the MFC Encylopedia article
	"Recordset: Obtaining SUMs and Other Aggregate Results (ODBC)" to work with SQL
	aggregate functions under DAO. That article pertains to the MFC ODBC classes
	only.
	
	MORE INFORMATION
	================
	
	SQL Aggregate Functions Using CDaoRecordset::GetFieldValue()
	------------------------------------------------------------
	
	The Visual C++ documentation discusses how to use the
	CDaoRecordset::GetFieldValue() member function. This function allows you to use
	a CDaoRecordset object without deriving from it. One technique for retrieving
	records returned from a SQL statement that contains an aggregate function is to
	use this GetFieldValue() member function to retrieve the values.
	
	For example, assume that you have a student database that contains the name of
	the student and scores from tests they have taken. If you want the average score
	for each of the students, you could use this code:
	
	     CDaoDatabase db;
	     db.Open(_T("d:\\scores.mdb"));
	
	     CDaoRecordset rs(&db);
	     rs.Open(dbOpenDynaset,
	        _T("SELECT [Student Name], AVG([Test Score]) AS AvgScore "
	           "FROM Scores GROUP BY [Student Name]"));
	
	     while (!rs.IsEOF())
	     {
	        COleVariant varName;
	        COleVariant varAvg;
	        varName = rs.GetFieldValue(_T("student name"));
	        varAvg = rs.GetFieldValue(_T("AvgScore"));
	
	        // You know that the return values are BSTR and VT_R8 types.
	        // if you didn't know, you would have to do some checking
	        // here. Look at the vt member of the COleVariant to see what
	        // type the data is.
	
	        // Do something with the data. This sample prints the
	        // information to the output window of the debugger.
	        TRACE(_T("%s\n%f\n"), V_BSTRT(&varName), V_R8(&varAvg));
	        rs.MoveNext();
	     }
	     rs.Close();
	     db.Close();
	
	NOTE: The alias name "AvgScore" is used for the column that will contain the
	average score for each student.
	
	SQL Aggregate Functions Using a CDaoRecordset-Derived Class
	-----------------------------------------------------------
	
	To create a CDaoRecordset-derived class that retrieves the results of a SQL
	statement with an SQL aggregate function, you need to:
	
	- Explicitly specify the full SQL statement as the second argument of the
	  Open() call or return the full SQL statement from the GetDefaultSQL() member
	  function. In the SQL statement, specify a column alias for the functions that
	  will contain the results of SQL aggregate functions such as AVG() or SUM().
	  For example:
	
	     rs.Open(dbOpenDynaset,
	         _T("SELECT [Student Name], AVG([Test Score]) AS AvgScore "
	            "FROM Scores GROUP BY [Student Name]"));
	
	- Modify the DFX functions in the DoFieldExchange() member function of the
	  CDaoRecordset-derived class so that it uses the alias names. For example:
	
	     void CMyRecordset::DoFieldExchange(CDaoFieldExchange* pFX)
	     {
	        ...
	        DFX_Text(pFX, _T("[student name]"), m_student_name);
	        DFX_Double(pFX, _T("[AvgScore]"), m_avg_score);
	        ...
	     }
	
	Using this second technique makes the code a little cleaner. For example, after
	the CDaoRecordset-derived class has been modified as described above, here is
	what the code might look like:
	
	     CAvgSet rs;
	     rs.Open(dbOpenDynaset,
	        _T("SELECT [Student Name], AVG([Test Score]) AS AvgScore "
	           "FROM Scores GROUP BY [Sudent Name]"));
	     while (!rs.IsEOF())
	     {
	        TRACE(_T("%s\n%f\n"), (LPCTSTR)rs.m_student_name, rs.m_test_score);
	        rs.MoveNext();
	     }
	     rs.Close();
	
	NOTE: There isn't a need to work with COleVariants unlike the GetFieldValue()
	technique described previously.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.0 4.1 4.1b 4.2 4.2b 5.0 6.0
	Issue type        : kbhowto
	
	=============================================================================
	
