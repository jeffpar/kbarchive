---
layout: page
title: "Q136043: How to Allow Empty Fields in Visual FoxPro Crosstab Queries"
permalink: kb/136/Q136043/
---

## Q136043: How to Allow Empty Fields in Visual FoxPro Crosstab Queries

	Article: Q136043
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
	
	Crosstab queries created in FoxPro for Windows version 2.6 allowed empty fields
	in the output. In Visual FoxPro, however, the default behavior is to insert
	.NULL. as a placeholder where empty fields exist in the output.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	To have Visual FoxPro crosstab queries use empty fields instead of the .NULL.
	placeholder, follow these steps:
	
	1. Open Vfpxtab.prg and save it as Myxtab.prg.
	
	2. In Myxtab.prg, search for SET NULL ON and change it to SET NULL OFF.
	
	3. Search for this:
	
	     IF ISNULL(EVAL(FIELD(m.i)))
	        LOOP
	     ENDIF
	
	  Replace it with this:
	
	     cFieldName = field(m.i)
	     IF ISBLANK(&cFieldName)
	        LOOP
	     ENDIF
	
	4. In the Command window, type the following commands:
	
	      _GENXTAB = "C:\VFP\MYXTAB.PRG"
	      MODIFY COMMAND NULLTEST.
	
	5. Place the following code in Nulltest:
	
	         SELECT Customer.city, Customer.contact,;
	         COUNT(Customer.maxordamt);
	         FROM tastrade!customer;
	         GROUP BY Customer.city, Customer.contact;
	         ORDER BY Customer.city, Customer.contact;
	         INTO CURSOR SYS(2015)
	         DO (_GENXTAB) WITH 'Query',.t.,.t.,.t.,,,,.t.,1
	
	         BROWSE NOMODIFY
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
