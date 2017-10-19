---
layout: page
title: "Q216885: PRB: English Query Using SQL 7.0 Domain May Fail with SQL 6.5"
permalink: /kb/216/Q216885/
---

## Q216885: PRB: English Query Using SQL 7.0 Domain May Fail with SQL 6.5

	Article: Q216885
	Product(s): Microsoft C Compiler
	Version(s): NT:7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQLServ700 kbEngQuery kbGrpDSVCDBkbfaq
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft English Query, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An English Query project designed with SQL 7.0 database may give a syntax error
	for some queries while using a SQL Server 6.5 database at run time.
	
	CAUSE
	=====
	
	English Query takes advantage of the new SQL 7.0 T-SQL features, and may use
	such new keywords as "TOP n". If you use this English Query application with SQL
	Server 6.5, the new keywords aren't recognized, and generate a syntax error.
	
	WORKAROUND
	==========
	
	There are two possible workarounds for this issue:
	
	- 
	
	  Solution 1
	  ----------
	
	  Set the version for the data connection and rebuild the EQ domain:
	
	  Set Global properties/data connection/ version for your EQ project and rebuild
	  the EQ domain application. For example:
	
	  1. Open the sample pubs EQ project.
	
	  2. On the Edit menu, click the Gobal properties/data connection tab.
	
	  3. Change the version to 6.5 (for example, 06.50.201). If you click Change on
	     the data connection tab and choose a DSN for a SQL 6.5, the version field
	     on the dialog box is updated.
	
	  4. Rebuild the EQ domain application.
	
	- 
	
	  Solution 2
	  ----------
	
	  Use EQ session.SetDBMS method to generate code for SQL Server 6.5.
	
	  The SetDBMS Method sets the DBMS type and version for which the query is
	  generated. If the server running Microsoft SQL Server is version 7.0 (or
	  higher, when available), it allows the server to take advantage of the
	  features in that particular version.
	
	  Syntax
	  Session.SetDBMS(Type, Version)
	  Part	Description
	  Session	An object variable  representing an existing domain object.
	  Type	A reserved integer  it must be 0 (zero).
	  Version	A string  in the form of nn.nn.nnn
	
	  For example:
	
	  objEQSession.SetDBMS(0, "06.50.201")
	
	  You can use this method if you want to deploy on SQL Server 6.5 and can't
	  change the model and rebuild.
	
	  To change the MFCEQUI sample to query in SQL Server 6.5, modify the following
	  method in the Nlinter.cpp file by adding the following line:
	
	  (*m_pSession)->SetDBMS((enum NlDBMSType)0,"0.6.50.201");
	
	  bool CNlpSession::Startup(const LPCTSTR szDomainFilename)
	  {
	  	IMPL_UNICODE_CONVERSION;
	
	  	try {
	  		m_pSession= new _SessionPtr;
	  		m_pSession->CreateInstance(L"Mseq.Session.1");
	  		}
	  	catch(_com_error &e) {
	  		ReportError(e);
	  		return(false);
	  		}
	  	
	  	try {
	  		(*m_pSession)->InitDomain(A2W(szDomainFilename));
	  		(*m_pSession)->PutClarifySpellingErrors(true);
	    // **** Add this line to the sample ******
	  		(*m_pSession)->SetDBMS((enum NlDBMSType)0,"0.6.50.201");
	    // ***************************************
	  		}
	  	catch(_com_error &e) {
	  		delete(m_pSession);
	  		m_pSession = NULL;
	  		ReportError(e);
	  		return(false);
	  		}
	
	  	return(true);
	  	}
	
	MORE INFORMATION
	================
	
	STEPS TO REPRODUCE THE BEHAVIOR:
	--------------------------------
	
	1. Run the Visual C++ MFCEQUI sample that ships with English Query.
	
	2. Connect to a SQL 6.5 pubs database.
	
	3. Run the following query:
	
	  "who wrote the most books ?"
	
	RESULTS: The following error message results:
	
	  37000: .. Line 1: Incorrect syntax near '1'
	
	This is the query it generates:
	
	  select top 1 with ties dbo.authors.au_fname as "First Name", 
	
	  dbo.authors.au_lname as "Last Name", count(*) as "count" from 
	
	  dbo.titleauthor, dbo.authors where 
	
	  dbo.titleauthor.au_id=dbo.authors.au_id group by dbo.titleauthor.au_id, 
	
	  dbo.authors.au_fname, dbo.authors.au_lname order by 3 desc
	
	The above query works fine for SQL Server 7.0 and fails for SQL Server 6.5
	because "top 1 with ties" is a new SQL 7.0 T-SQL feature.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQLServ700 kbEngQuery kbGrpDSVCDB kbfaq
	Technology        : kbSQLServSearch kbEngQuery700
	Version           : NT:7.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
