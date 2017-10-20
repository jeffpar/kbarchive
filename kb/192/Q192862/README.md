---
layout: page
title: "Q192862: BUG: Incorrect Return of SubSelect in SELECT-SQL Statement"
permalink: /kb/192/Q192862/
---

## Q192862: BUG: Incorrect Return of SubSelect in SELECT-SQL Statement

{% raw %}

	Article: Q192862
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A SQL Select using the Not In clause with a subquery might incorrectly return no
	records.
	
	RESOLUTION
	==========
	
	Use a user defined function in the subselect similar to the example below:
	
	      SELECT * FROM orders WHERE order_id NOT IN ;
	         (SELECT order_id FROM orditems WHERE MyFunction(order_id))
	
	      FUNCTION MyFunction
	         LPARAM lx
	         RETURN .F.
	      ENDFUNC
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	In the following cases, the main query could return an incorrect number of
	records:
	
	     SELECT * FROM orders WHERE order_id NOT IN ;
	        (SELECT order_id FROM orditems WHERE 1=2)
	
	  -or-
	
	     SELECT * FROM orders WHERE order_id NOT IN ;
	        (SELECT order_id FROM orditems WHERE .F.)
	
	The above queries return 0 records rather than all records in the table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the TestData Sample Database.
	
	2. Run one of the SQL Select statements listed in the MORE INFORMATION section
	  of this article.
	
	3. Notice that the Select returns no rows.
	
	Additional query words: kbDSupport KBDSE kbVFp300bbug kbVFp500abug kbVFp600bug kbSQL
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
