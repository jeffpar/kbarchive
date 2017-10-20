---
layout: page
title: "Q135115: PRB: VAL() Does Not Return Error When Number Is Out of Range"
permalink: /kb/135/Q135115/
---

## Q135115: PRB: VAL() Does Not Return Error When Number Is Out of Range

{% raw %}

	Article: Q135115
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assigning a variable a number that is out of the allowed range for double
	precision numbers doesn't generate an error.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Code to Reproduce Behavior
	--------------------------
	
	Create and run this program:
	
	  CREATE TABLE test (numeric N(10,5), float F(10,5), ;
	     double D, currency M, integer I)
	  APPEND BLANK
	  nBig=VAL('1E+700')  && largest double precision number has an exp of 308
	
	  ? TYPE ('nBig')             &&  prints 'N'
	  ? nBig                      &&  prints ********
	  ? STR(nBig,203,7)           && prints 203 *'s
	  REPLACE numeric WITH nBig   && Numeric overflow. Data was lost
	  REPLACE float WITH nBig     && Numeric overflow. Data was lost
	  REPLACE double WITH nBig    && data type mismatch
	  REPLACE currency WITH nBig  && data type mismatch
	  REPLACE integer WITH nBig   && Numeric overflow. Data was lost
	  ? LOG(nBig)                 && prints 20 asterisks
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
