---
layout: page
title: "Q161498: FIX: Full Outer Join Returns No Records If One Table is Empty"
permalink: /kb/161/Q161498/
---

## Q161498: FIX: Full Outer Join Returns No Records If One Table is Empty

{% raw %}

	Article: Q161498
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Full Outer Join SQL-SELECT command returns an empty result set when one of
	the tables or cursors is empty.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	The Full Outer Join should return all the records from both tables or cursors.
	If one file is empty, then a Full Outer Join should return all the records from
	the other table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a program file and add the following code:
	
	     CREATE CURSOR cur1 (id_1 I(4), desc_1 C(20))
	     CREATE CURSOR cur2 (id_2 I(4), desc_2 C(20))
	     ** Places 10 records in cur1
	     FOR l_n = 1 TO 10
	        INSERT INTO cur1 (id_1, desc_1) VALUES (l_n, "TABLE1__"  + ;
	         ALLTRIM(STR(l_n)))
	     ENDFOR
	     ** Performs full outer join
	     SELECT * FROM cur1 FULL OUTER JOIN cur2 ON id_1 = id_2
	
	The Browse window displays an empty result set.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
