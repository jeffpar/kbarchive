---
layout: page
title: "Q124589: How to Create a Left-Right Outer Join in FoxPro for Windows"
permalink: /kb/124/Q124589/
---

## Q124589: How to Create a Left-Right Outer Join in FoxPro for Windows

{% raw %}

	Article: Q124589
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 2.6a, 3.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use a left outer join to find all occurrences of a key value whether or
	not a matching record exists in the joined table. However, this article shows by
	example how to find records from both tables without matching records in the
	corresponding table. The code in this article illustrates a method to produce a
	complete (left-right) outer join.
	
	MORE INFORMATION
	================
	
	The following code uses two sample tables to:
	
	- Determine the number of subscribers who ordered each of several publications
	  per month.
	
	- Display the number of issues per publication generated each month.
	
	The tables have been simplified in this example to contain only the fields
	necessary for this demonstration. A zero indicates that either no magazines of a
	particular type were produced or no subscriptions were placed for a particular
	magazine during the month.
	
	The first table (SUBSCRIB) contains subscription information consisting of the
	subscription month, the magazine ID, and the subscription count. The second
	table (PRODUX) contains the subscription month, magazine ID, and number of
	magazines produced.
	
	Sample Code
	-----------
	
	  ******************************************************
	  *  LR_JOIN.PRG   Left-Right Outer Join Program
	  *
	  *  table structures:     SUBSCRIB         PRODUX
	  *                      -------------   -------------
	  *                      Month     N 3   Month     N 3
	  *                      MagID     C 3   MagID     C 3
	  *                      Sub       N 4   Prod      N 5
	  *
	  * Eliminate blanks from the SUBSCRIB table
	
	      SELECT * FROM subscrib ;
	      WHERE !EMPTY(sub) ;
	      INTO CURSOR temp1
	
	  * Eliminate blanks from the PRODUX table
	
	      SELECT * FROM produx ;
	      WHERE !EMPTY(prod) ;
	      INTO CURSOR temp2
	
	  * Only records containing data in the count fields for either table
	  * are valid. The month and magID fields are assumed to be valid.
	
	  * Create the left outer join
	
	      SELECT a.*, b.prod FROM temp1 a, temp2 b ;
	      WHERE ALLTRIM(STR(a.Month)) + a.MagID = ;
	            ALLTRIM(STR(b.Month)) + b.MagID ;
	      UNION ;
	      SELECT *, 00000 FROM temp1 ;
	      WHERE ALLTRIM(STR(Month))+MagID NOT IN ;
	      (SELECT ALLTRIM(STR(Month))+MagID FROM temp2) ;
	      ORDER BY 1, 2 INTO CURSOR left
	
	  * Create the right outer join
	
	      SELECT a.*, b.sub FROM temp2 a, temp1 b ;
	      WHERE ALLTRIM(STR(a.Month)) + a.MagID = ;
	            ALLTRIM(STR(b.Month)) + b.MagID ;
	      UNION ;
	      SELECT *, 0000 FROM temp2 ;
	      WHERE ALLTRIM(STR(Month))+MagID NOT IN ;
	      (SELECT ALLTRIM(STR(Month))+MagID FROM temp1) ;
	      ORDER BY 1, 2 INTO CURSOR right
	
	  * Combine both joins into the final result
	
	      SELECT Month, MagID, Sub, Prod FROM right ;
	      UNION ;
	      SELECT * FROM left INTO CURSOR result
	
	How the Join Works
	------------------
	
	As the UNION clause expects the structures to be identical, the first part of the
	combined joins declares the output field list from the RIGHT cursor (which has
	the structure of Month, MagID, Prod, Sub) in the same order as found in the LEFT
	cursor (Month, MagID, Sub, Prod).
	
	Additional query words: kbvfp260a kbvfp300
	
	======================================================================
	Keywords          : kbprogramming kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : WINDOWS: 2.6a, 3.0
	
	=============================================================================
	

{% endraw %}
