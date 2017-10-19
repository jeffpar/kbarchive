---
layout: page
title: "Q233972: PRB: &quot;Syntax Error in PARAMETER clause&quot; When Opening an MFC DAO"
permalink: /kb/233/Q233972/
---

## Q233972: PRB: &quot;Syntax Error in PARAMETER clause&quot; When Opening an MFC DAO

	Article: Q233972
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDAO350 kbDatabase kbMFC kbAppWizard kbGrpDSVCDB kbprb
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening an MFC DAO Recordset on an Microsoft Access parameterized query in
	an MFC AppWizard project, the application displays a message box containing the
	following error:
	
	  Syntax error in PARAMETER clause
	
	The error occurs when the parameter names for the query have a space in them; for
	example, "Param 1".
	
	CAUSE
	=====
	
	CDaoRecordset does not build the PARAMETERS clause correctly. For example, the
	following SQL statement may be constructed:
	
	  PARAMETERS Some Param Text;
	  SELECT * from [AccessQuery]
	
	The syntax error occurs because of the space between "Some" and "Param".
	
	RESOLUTION
	==========
	
	Following are two ways to work around the problem:
	
	- You can change the string returned from the GetDefaultSQL() function from the
	  following
	
	  CString CAccessParamSet::GetDefaultSQL()
	  {
	     return _T("[AccessQuery]");
	  }
	
	  to the following:
	
	  CString CAccessParamSet::GetDefaultSQL()
	  {
	     return _T("select * from [AccessQuery]");
	  }
	
	  This prevents MFC from constructing a "PARAMETERS" clause as part of the SQL
	  statement.
	
	-or-
	
	- You can change the DDX function for the parameter in the DoFieldExchange()
	  function to include square brackets around the parameter name. For example,
	  in the recordset's DoFieldExchange() function, change the following
	
	  DFX_Text(pFX, _T("param 1"), m_param_1);
	
	  to the following:
	
	  DFX_Text(pFX, _T("[param 1]"), m_param_1);
	
	  You may encounter additional problems if the wizard mapped the DFX_Text()
	  function to a numeric parameter. The DFX_Text() function attempts to
	  construct a PARAMETERS clause with "text" as the data type. If the parameter
	  is really a number, you will get a datatype mismatch. You may want to
	  suppress the creation of a PARAMETERS clause in the SQL statement by
	  implementing the first workaround or you may want to use a different DFX
	  function, such as DFX_Long() instead of DFX_Text().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a query in Microsoft Access that contains an input parameter.
	
	2. Create an MFC AppWizard project that accesses the query created in step 1.
	
	3. Run the Application.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAO350 kbDatabase kbMFC kbAppWizard kbGrpDSVCDB kbprb 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug kbprb
	
	=============================================================================
	
