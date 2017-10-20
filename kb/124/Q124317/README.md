---
layout: page
title: "Q124317: INF: SQLColAttributes(SQL_COLUMN_LABEL) and Field Description"
permalink: /kb/124/Q124317/
---

## Q124317: INF: SQLColAttributes(SQL_COLUMN_LABEL) and Field Description

{% raw %}

	Article: Q124317
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using Open Database Connectivity (ODBC) version 2.0 Microsoft Access driver when
	you call SQLColAttribute for fDescType=SQL_COLUMN_LABEL for a result set column
	that is a column in a table, the returned value is the field or column name and
	not the field description that might have been added to the table in Microsoft
	Access version 2.0.
	
	
	MORE INFORMATION
	================
	
	In Microsoft Access version 2.0 during a table design, a field description can
	be added for a column. However, when a query is executed that has a result set
	with that column, SQLColAttribute with fDescType equal to SQL_COLUMN_LABEL for
	that column returns column name as the label and not the field description.
	
	Additional query words: 2.00.2317 ODBC descriptor title Windows NT
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	
	=============================================================================
	

{% endraw %}
