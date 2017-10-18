---
layout: page
title: "Q139997: FIX: &quot;Item not found in this collection&quot; with MFC DAO Join"
permalink: kb/139/Q139997/
---

## Q139997: FIX: &quot;Item not found in this collection&quot; with MFC DAO Join

	Article: Q139997
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbwizard kbDAOsearch kbDatabase kbMFC kbVC kbVC410fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard 
	- The ClassWizard 
	
	as they apply to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to modify a record in an MFC DAO application that uses a recordset
	based on a join and that was created by AppWizard or ClassWizard, the
	application may throw an exception on the update. Specifically, the exception
	indicates:
	
	  Item not found in this collection.
	
	CAUSE
	=====
	
	When the wizards generate references to columns that have names that appear in
	multiple tables of the join, the wizards will precede the column name with the
	name of the table as a qualifier. Both the table name qualifier and column name
	are enclosed in brackets in the DFX functions of the CDaoRecordset-derived
	class's DoFieldExchange. For example:
	
	     [Table].[Column]
	
	The presence of the brackets combined with the use of the table name qualifier
	causes the search for the specified field in the collection of fields maintained
	by the database engine to fail.
	
	NOTE: The presence of brackets around unqualified column names does not interfere
	with the field name search and is thus acceptable. This explains why some fields
	will be updatable while attempts to update others throws the exception; the
	updatable fields are likely unique and therefore unqualified.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following two techniques depending
	on the names of the affected tables and columns (the ones for which table
	qualifiers are necessary).
	
	If Table and Column Names Contain No Spaces
	-------------------------------------------
	
	Remove the brackets that enclose the table and column names. The resulting
	reference should be of this form:
	
	     Table.Column
	
	If Table and/or Column Names Contain Spaces
	-------------------------------------------
	
	Don't remove the bracket delimiters or your application will throw an exception
	that indicates:
	
	  Syntax error in query expression 'table name.column name'.
	
	Instead, you must override one of the existing overloads of the virtual function
	CDaoRecordset::SetFieldValue() as follows (assuming your CDaoRecordset is named
	CMyDaoRecordset):
	
	     void CMyDaoRecordset::SetFieldValue(LPCTSTR lpszName,
	                                    const COleVariant& varValue)
	     {
	          CString strNewName(lpszName);
	          StripBrackets(strNewName, strNewName.GetBuffer(0));
	          strNewName.ReleaseBuffer();
	          CDaoRecordset::SetFieldValue(strNewName, varValue);
	     }
	
	This override uses the StripBrackets member function of CDaoRecordset to remove
	the offending brackets and allows the search for the field in the field
	collection to succeed.
	
	NOTE: You can easily add this override to your application by using the Visual
	C++ ClassView Add Member Function command. Please refer to the online
	documentation and Help files for more details about this command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbwizard kbDAOsearch kbDatabase kbMFC kbVC kbVC410fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbAppWizard kbClassWizard
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
