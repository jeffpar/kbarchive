---
layout: page
title: "Q124656: BUG: SQLColumns Returning NULLABLE May Not Be Accurate"
permalink: kb/124/Q124656/
---

## Q124656: BUG: SQLColumns Returning NULLABLE May Not Be Accurate

	Article: Q124656
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJET: 1845 (2.00.2317)
	
	SYMPTOMS
	========
	
	The behavior discussed in this article pertains to the Microsoft Access driver
	only. SQLColumns returns NULLABLE=1 for a column that is actually not nullable
	(for example, the Required property was set to Yes for this column using
	Microsoft Access).
	
	Use Microsoft Access to create a table called test that has a column called col1
	of type text(10). For this column, set the Required property to Yes. As a
	result, this column does not allow nulls. However, SQLColumns returns NULLABLE=1
	for col1, indicating that the column does allow nulls, which is not correct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Access Driver version
	2.00.2317. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00.2317 ODBC MFC VISUAL C++ MSVC Desktop Database Drivers Pack Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
