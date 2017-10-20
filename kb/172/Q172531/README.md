---
layout: page
title: "Q172531: BUG: IDBSchemaRowset Reports DBTYPE_NUMERIC for MONEY Datatype"
permalink: /kb/172/Q172531/
---

## Q172531: BUG: IDBSchemaRowset Reports DBTYPE_NUMERIC for MONEY Datatype

{% raw %}

	Article: Q172531
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 02-MAY-2001
	
	-----------------------------------------------------------------------
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB, version 1.1 
	-------------------------------------------------------------------------------
	
	BUG #: 4643 (OLEDSDK)
	
	SYMPTOMS
	========
	
	When an application queries SQL Server for the MONEY datatype using
	IDBSchemaRowset::GetRowset DBSCHEMA_COLUMNS, it returns DBTYPE_NUMERIC (131).
	This is inconsistent with IColumnsInfo::GetColumnInfo, which returns DBTYPE_CY
	(6) for the MONEY datatype.
	
	WORKAROUND
	==========
	
	To work around this problem, use IColumnsInfo::GetColumnInfo for the column
	metadata.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in OLEDB SDK version 1.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: ODBC SQL_DECIMAL software developers developer's kit
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDB110
	Version           : :1.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
