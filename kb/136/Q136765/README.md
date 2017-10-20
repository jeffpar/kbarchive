---
layout: page
title: "Q136765: How Memory &amp; Disk Space Are Used During an SQL SELECT Command"
permalink: /kb/136/Q136765/
---

## Q136765: How Memory &amp; Disk Space Are Used During an SQL SELECT Command

{% raw %}

	Article: Q136765
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how Visual FoxPro uses memory and disk space during an SQL
	SELECT command.
	
	MORE INFORMATION
	================
	
	SQL uses as much internal memory as it can for file caching (read buffering),
	sorting (for ORDER BY, GROUP BY, SELECT DISTINCT, and UNION DISTINCT), and
	performing joins. This memory is limited by the setting of SYS(3050).
	
	When executing complex queries, SQL sometimes generates intermediate temporary
	tables. These temporary tables consist of the result of one of the following:
	
	- A JOIN of two source tables (or previous intermediate results).
	
	  -or-
	
	- A SORT of a source table (or previous intermediate result) to satisfy an
	  ORDER BY, GROUP BY, SELECT DISTINCT, or UNION DISTINCT.
	
	In many cases, a join and a sort or multiple sorts can be combined into one pass,
	removing an intermediate temporary table result.
	
	In addition, temporary files are used while performing a sort if the entire sort
	cannot be performed in memory. The size of the temporary sort files for a given
	sort should be no larger than:
	
	  (record length + key length) * (number of records) * 2
	
	In addition, SQL creates a temporary index file to perform a join if no index
	exists. Creating the index may create temporary files also.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	

{% endraw %}
