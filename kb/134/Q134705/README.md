---
layout: page
title: "Q134705: DOC: DBGETPROP() Returns Unexpected Value"
permalink: /kb/134/Q134705/
---

## Q134705: DOC: DBGETPROP() Returns Unexpected Value

{% raw %}

	Article: Q134705
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Help file topic for the DBGETPROP(cName, cType, cProperty) function states
	incorrectly that when the cType is "view" and the cProperty is "tables," the
	return value for the cProperty will be a comma-separated string of table names.
	However, the return value in Visual FoxPro is actually a string of names
	separated by spaces, not commas.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual FoxPro for Windows.
	
	2. In the Command window, enter these commands:
	
	     CREATE DATABASE test
	     CREATE TABLE t1 (Name c(20))
	     CREATE TABLE t2 (Name c(20))
	     CREATE TABLE t3 (Name c(20))
	     CREATE SQL VIEW testvu AS SELECT * FROM t1, t2, t3
	     ? DBGETPROP("testvu","view","tables")
	
	3. Observe that the returned value shown on the upper-left area of the desktop
	  is t1 t2 t3. The Help file states that the returned value should be t1,t2,t3.
	
	Additional query words: 3.00 docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
