---
layout: page
title: "Q101797: PRB: &quot;Missing Operand&quot; Error Using a Database in FoxCentral"
permalink: /kb/101/Q101797/
---

## Q101797: PRB: &quot;Missing Operand&quot; Error Using a Database in FoxCentral

{% raw %}

	Article: Q101797
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the
	
	  Operand Missing
	
	error message when you use FoxCentral and attempt to use an index on a database.
	
	CAUSE
	=====
	
	FoxCentral saves all information about its environment in two files called
	CENTRAL.ADM and CENTRAL.ADX. This environment information includes frequently
	used databases and any indexes associated with them. Because FoxCentral saves
	this information in these two files, if the databases saved in these environment
	files are modified outside FoxCentral, the information saved in the files can
	become outdated or invalid.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Quit FoxBASE+ and rename the files CENTRAL.ADM and CENTRAL.ADX to
	  CENTRAL2.ADM and CENTRAL2.ADX using the MS-DOS RENAME command.
	
	2. Restart FoxBASE+ and go into FoxCentral.
	
	You should now be able to use the database and its corresponding index without a
	problem.
	
	MORE INFORMATION
	================
	
	FoxCentral is the nonprogramming user interface in FoxBASE+ for MS-DOS that
	gives users access to the most powerful FoxBASE+ commands without doing any
	programming.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	

{% endraw %}
