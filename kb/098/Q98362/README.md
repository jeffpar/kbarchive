---
layout: page
title: "Q98362: INFO: Differences Between MIN(), MAX(), &amp; SQL SELECT MIN/MAX"
permalink: /kb/098/Q98362/
---

## Q98362: INFO: Differences Between MIN(), MAX(), &amp; SQL SELECT MIN/MAX

{% raw %}

	Article: Q98362
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	There are distinct differences between the MIN() and MAX() functions and
	the SQL SELECT MIN() and MAX() field functions. The SQL SELECT MIN() and
	MAX() field functions accept only one argument, whereas the MIN() and MAX()
	functions accept multiple arguments.
	
	The following examples demonstrate how each function would be used in a
	FoxPro program.
	
	  SELECT MIN(price) from detail
	       && This statement will select the record with lowest price
	       && in the database.
	
	     SELECT MIN(IIF(price < 0,0,price)) FROM detail
	       && This statement will select the record with the lowest price
	       && as long as it is not less than zero; if it is less than zero,
	       && it will return zero (0).
	
	     ?MIN(54, 39, 40)
	       && This statement will return the minimum of the three parameters
	       && (39).
	
	     ?MAX(54, 39, 40)
	       && This statement will return the maximum of the three parameters
	       && (54).
	
	     SELECT MIN(price,0) from detail
	       && This statement will cause the error " MISSING ) " to occur.
	       && To correct this statement, remove the second argument from
	       && the MIN() function, as shown in the first example.
	
	SUMMARY
	=======
	
	
	
	Additional query words: FoxDos FoxWin errmsg error message parameters err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
