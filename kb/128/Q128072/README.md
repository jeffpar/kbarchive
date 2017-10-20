---
layout: page
title: "Q128072: How to use SQL Select to Locate NULL Values"
permalink: /kb/128/Q128072/
---

## Q128072: How to use SQL Select to Locate NULL Values

{% raw %}

	Article: Q128072
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Visual FoxPro version 3.0, you may want to use the SQL SELECT command
	to locate records in which a particular field contains null values. This article
	explains how to do it.
	
	MORE INFORMATION
	================
	
	If a table contains null values (represented as .NULL.) the following SELECT
	statement will always return zero records even when cFld1 contains null values:
	
	     SELECT * FROM mytable WHERE cFld1 = .NULL.
	
	Null should be used when a value is missing, irrelevant, or unknown. When any
	conditional expression encounters a null value, a .NULL. will be returned. A
	value of true (.T.) or false (.F.) cannot be returned if part of the expression
	is unknown or null. The expression in the above example, cFld1 = .NULL., will
	never evaluate to True, instead it will evaluate to .NULL. and as a result no
	records will be returned.
	
	To locate .NULL. values in cfld1, use the new IS NULL clause of the SQL SELECT
	command. The IS NULL clause is new to Visual FoxPro version 3.0. It provides a
	mechanism for comparing fields with .NULL. values and returning true or false.
	For example, consider this SELECT command:
	
	     SELECT * FROM mytable WHERE cfld1 IS NULL
	
	In this example, whenever cfld1 is .NULL., the IS NULL clause will cause the
	SELECT command to return a .T. and the desired records.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
