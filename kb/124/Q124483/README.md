---
layout: page
title: "Q124483: INF: Index Types and NULL Values"
permalink: /kb/124/Q124483/
---

## Q124483: INF: Index Types and NULL Values

{% raw %}

	Article: Q124483
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the use of the indexing options DISALLOW NULL and UNIQUE
	and how NULL values are treated with these indexes.
	
	MORE INFORMATION
	================
	
	The CREATE INDEX syntax for ODBC Desktop Database Drivers is as follows:
	
	     CREATE [UNIQUE] INDEX index-name
	     ON table-name (column-identifier [ASC][DESC]
	                    [, column-identifier [ASC][DESC]...])
	     WITH <index option list>
	
	where <index option list> can be: PRIMARY|DISALLOW NULL|IGNORE NULL
	
	Only the Microsoft Access driver uses the DISALLOW NULL and IGNORE NULL index
	options. The Btrieve, dBASE, Microsoft FoxPro, and Paradox drivers accept the
	syntax, but ignore the presence of either option.
	
	If the DISALLOW NULL option is used, an index is created such that NULL values
	are no longer allowed in the column that comprise the index. Because the
	Microsoft Access driver does not support the NOT NULL constraint in a CREATE
	TABLE statement, the use of DISALLOW NULL becomes a good way to achieve the same
	effect.
	
	However, if a set of columns do not allow NULLs because they have a DISALLOW NULL
	type of index, SQLColumns still returns NULLABLE=1 on these columns. Thus, even
	though NULLs are not permitted in these columns because of the type of index
	assigned to them, SQLColumns does not recognize this. This is because SQLColumns
	reports the nullability (or lack thereof) of the underlying column and does not
	take into account the semantics of an index of that column.
	
	Creating a UNIQUE index will result in the column not allowing duplicate values.
	However, note the following behavior with respect to NULL values:
	
	  If a table test has a UNIQUE index on col1, then it is possible to insert two
	  rows into test, such that both the rows have NULL in col1. This is a result
	  of the semantics of a NULL value. By definition, a NULL value represents
	  something that is unknown. Since two unknown values are not necessarily the
	  same, two NULL values are not equal to each other. Thus, the uniqueness
	  criterion on the column is not violated.
	
	Additional query words: 2.00.2317 ODBC DESKTOP DATABASE DRIVERS PACK MFC VISUAL C++ Windows NT
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
