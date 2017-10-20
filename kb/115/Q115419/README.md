---
layout: page
title: "Q115419: PRB: REPORT FORM Filter Syntax Incorrect on Date Field"
permalink: /kb/115/Q115419/
---

## Q115419: PRB: REPORT FORM Filter Syntax Incorrect on Date Field

{% raw %}

	Article: Q115419
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
	
	When you are building a REPORT FORM command that is filtered on a date field by
	using the FoxCentral menu, the output does not reflect the filter condition.
	FoxCentral does not produce the correct syntax for a REPORT FORM statement that
	is filtered on a date field.
	
	CAUSE
	=====
	
	Earlier versions of FoxCentral incorrectly construct the REPORT FORM statement
	when the output is filtered on a date field. FoxCentral places two CTOD()
	functions within the REPORT FORM command. Frequently, FoxBASE+ does not produce
	an error when the statement is executed. However, the resulting output is
	incorrect.
	
	RESOLUTION
	==========
	
	This problem was corrected in the latest version of FoxCentral. The most current
	version is available as a file called FOXCEN.EXE. For more information about
	this file, please see the following article in the Microsoft Knowledge Base:
	
	  Q93319 PATCH: Foxcen.exe FoxCentral Update for FoxBase+ for MS-DOS
	
	Additional query words: assist report
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	

{% endraw %}
