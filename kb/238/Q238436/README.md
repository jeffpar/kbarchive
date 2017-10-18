---
layout: page
title: "Q238436: PRB: MFC DAO Classes Error &quot;Syntax Error in From Clause&quot;"
permalink: kb/238/Q238436/
---

## Q238436: PRB: MFC DAO Classes Error &quot;Syntax Error in From Clause&quot;

	Article: Q238436
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbVC kbVC600 kbGrpDSVCDB kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the debug version of your MFC DAO application, you may get an assertion in
	the Daocore.cpp file, line 4854, followed by one of the following error
	messages:
	
	  Syntax Error in From Clause
	
	  -or-
	
	  The SELECT statement includes a reserved word or an argument name that is
	  misspelled or missing, or the punctuation is incorrect.
	
	This problem happens only if you open a dynaset or snapshot type of CDaoRecordset
	object and its SQL select statement has a space before it.
	
	CAUSE
	=====
	
	The source of this problem is in the MFC CDaoRecordset::Open function located in
	Daocore.cpp. This function tries to sense the nature of the SQL statement passed
	to it by scanning for the keyword "SELECT" at line 3345 in Daocore.cpp. If you
	place a space before the select statement, this code doesn't successfully
	predict the type of SQL statement, and therefore fails.
	
	RESOLUTION
	==========
	
	Remove the preceding space from your SQL select statement.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, create a simple dialog-based MFC application. Add a
	command button to the dialog box and in the handler for this button, add the
	following code:
	
	  CDaoDatabase db;
	  db.Open("d:\\nwind2.mdb");
	  CDaoRecordset rs(&db);
	  rs.Open(dbOpenDynaset, " SELECT * from employees"); //Note the space before the select statement.
	  while (!rs.IsEOF())
	  {
	  	rs.MoveNext();
	  }
	
	Compile and run this application. By clicking the created button, you will see an
	assertion followed by one of the error messages in the Summary section. For an
	AppWizard-generated CDaoRecordset-derived class, the error message is:
	
	  Syntax Error in From Clause
	
	For a nonderived CDaoRecordset class, the error is:
	
	  The SELECT statement includes a reserved word or an argument name that is
	  misspelled or missing, or the punctuation is incorrect.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbVC kbVC600 kbGrpDSVCDB kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	
