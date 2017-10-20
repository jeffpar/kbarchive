---
layout: page
title: "Q136016: AFIELDS() Has Been Enhanced in Visual FoxPro"
permalink: /kb/136/Q136016/
---

## Q136016: AFIELDS() Has Been Enhanced in Visual FoxPro

{% raw %}

	Article: Q136016
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The AFIELDS() function has been enhanced in Visual FoxPro to allow the work area
	or alias to be specified.
	
	MORE INFORMATION
	================
	
	To place the structure of a table that is not in the currently selected work
	area into an array, include the work area number or the alias name. If the work
	area number or alias name is not included, the currently selected table is used,
	which is the only behavior allowed in FoxPro version 2.X.
	
	To test the difference in behavior run the following code in Visual FoxPro:
	
	     CLOSE ALL
	     USE C:\VFP\SAMPLES\MAINSAMP\DATA\Customer.dbf IN 1 EXCLUSIVE
	     USE C:\VFP\SAMPLES\MAINSAMP\DATA\Employee.dbf IN 2 EXCLUSIVE
	     SELECT CUSTOMER
	     =AFIELDS(aMyarray,2)
	     DISPLAY MEMORY LIKE aMyarray
	
	Then run the following code in FoxPro version 2.X:
	
	     CLOSE ALL
	     USE C:\FPW\TUTORIAL\Customer.dbf IN 1 EXCLUSIVE
	     USE C:\FPW\TUTORIAL\Salesman.dbf IN 2 EXCLUSIVE
	     SELECT CUSTOMER
	     =AFIELDS(aMyarray,2)
	     DISPLAY MEMORY LIKE aMyarray
	
	This code generates the error message "Too many arguments" in FoxPro version 2.x.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
