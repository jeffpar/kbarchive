---
layout: page
title: "Q194780: HOWTO: Requery a SQL-Select Only Changing a Variable"
permalink: /kb/194/Q194780/
---

## Q194780: HOWTO: Requery a SQL-Select Only Changing a Variable

{% raw %}

	Article: Q194780
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500a kbvfp600
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to create a SQL-Select statement and obtain a different
	result set by changing the value of the variable in the SQL WHERE clause.
	
	MORE INFORMATION
	================
	
	A common assumption is that to obtain a new result set you must reissue the SQL
	query. This is not always the case if you have an index set defined on the field
	used in the WHERE clause. It does not matter if the field in the WHERE clause is
	part of a compound or single field index.
	
	The reason Visual FoxPro is able to return a different result set is that Visual
	FoxPro internally sets a FILTER on the indexed field in the WHERE clause.
	
	The following code demonstrates how changing a variable then issuing a BROWSE
	changes the result set. The code uses the Customer table that has an index tag
	on the country field. If there is no index that contains country, the result set
	does not update. In Visual FoxPro 5.0a, use the Customer table in the
	\vfp5a\samples\data\ directory. If using Visual FoxPro 6.0, use the Customer
	table in the "c:\program files\microsoft visual
	studio\msdn98\98vs\1033\samples\vfp98\data\ directory.
	
	Sample Code
	-----------
	
	     ***** Begin code sample *****
	     IF "5.00"$VERSION()
	        dbfpath = HOME()+"samples\data\"
	     ELSE
	        dbfpath = HOME(2)+"data\"
	     ENDIF
	     CLEAR
	     PUBLIC acountry(1),i
	     mcountry=" "
	     SELECT DISTINCT(country) ;
	        FROM dbfpath+"customer" ;
	        WHERE !EMPTY(country) ;
	        ORDER BY country ;
	        INTO ARRAY acountry
	
	     SELECT company,contact,city,country ;
	        FROM customer ;
	        WHERE UPPER(country)=mcountry ;
	        INTO CURSOR QUERY
	     BROWSE NOWAIT
	     WAIT WINDOW "Hit a key to see next country..." TIME .5
	
	     FOR i= 2 TO ALEN(acountry)
	        mcountry=UPPER(acountry(i))
	        BROWSE NOWAIT
	        WAIT WINDOW "Hit a key to see next country..." TIME .5
	     ENDFOR
	     RELEASE WINDOW QUERY
	     ***** End code sample *****
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
