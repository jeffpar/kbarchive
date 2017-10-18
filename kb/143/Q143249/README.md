---
layout: page
title: "Q143249: PRB: ORDER BY Field in Result Set Without Being in Field List"
permalink: kb/143/Q143249/
---

## Q143249: PRB: ORDER BY Field in Result Set Without Being in Field List

	Article: Q143249
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the ORDER BY clause of a SQL SELECT statement, you must include the
	the ORDER BY field in the field list. If the ORDER BY field is not included in
	the field list, it is added by FoxPro without an error.
	
	STATUS
	======
	
	This behavior is by design. It is clearly documented in the Language Reference
	and help file that the ORDER BY field must be in the field list. The following
	quote is from the help file under the SELECT SQL topic:
	
	  ORDER BY sorts query results based on data in one or more columns. Each
	  Order_Item must correspond to a column in the query results
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Enter the following command in the Command Window:
	
	  SELECT last_name FROM samples/data/employee ORDER BY emp_id
	
	Notice that both last_name and emp_id are in the cursor even though the last_name
	field was the only field in the field list.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
