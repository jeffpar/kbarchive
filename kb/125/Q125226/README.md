---
layout: page
title: "Q125226: PRB: ODBC Reserved Word in a RFX Function Causes Syntax Error"
permalink: kb/125/Q125226/
---

## Q125226: PRB: ODBC Reserved Word in a RFX Function Causes Syntax Error

	Article: Q125226
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbprb
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, versions 1.50, 1.51 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to update a data source produces a command failed message box and MFC
	Trace output:
	
	  Syntax error in UPDATE statement.
	  State:37000,Native:-3503,Origin:
	  [Microsoft][ODBC Microsoft Access 2.0 Driver]
	
	CAUSE
	=====
	
	Using an ODBC reserved word as the second parameter (char* szName) in an RFX
	function causes the syntax error. The parameter represents the table's column
	name. For example, the following code causes the error:
	
	  void CMyRecordset::DoFieldExchange(CFieldExchange *pFX)
	  {
	  ...
	
	    RFX_Date(pFX, "date", ...); // error "date" is ODBC reserved word!
	
	  ...
	  }
	
	NOTE: Another scenario that will cause a similar error is caused by using a
	reserved Access word for a table name, then trying to insert the table via MFC
	and ODBC.
	
	RESOLUTION
	==========
	
	Implement one of the following solutions:
	
	- Change the name of the column in the data source's table. For example, change
	  DATE to BIRTHDATE. DATE is a reserved word.
	
	-or-
	
	- Enclose the column name in square brackets when you use it in the RFX
	  function in CRecordset::DoFieldExchange. For example:
	
	  change this:
	
	        RFX_Date (pFX, "Date",...);
	
	  to this:
	
	        RFX_Date(...,"[Date]",...);
	
	-or-
	
	- Qualify the column name with a table name (as MSQuery does) in the RFX
	  function in CRecordset::DoFieldExchange. For example,
	
	  Change this:
	
	        RFX_Date(..., "Date",...);
	
	  to this:
	
	        RFX_Date(..., "table1.Date",...);
	
	MORE INFORMATION
	================
	
	For a list of ODBC reserved words, see Appendix C of the ODBC Programmer's
	Reference.
	
	Additional query words: 1.50 2.00 2.50 2.51 3.00 update reserved keyword
	
	======================================================================
	Keywords          : kbprb 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
