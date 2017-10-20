---
layout: page
title: "Q151797: HOWTO: How To Create an SQL Outer Join Using the View Designer"
permalink: /kb/151/Q151797/
---

## Q151797: HOWTO: How To Create an SQL Outer Join Using the View Designer

{% raw %}

	Article: Q151797
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to create an outer join on a SQL Server table using
	the Remote View Designer. An outer join is necessary if the View needs to
	display not only matching rows between tables (rows with values in the specified
	columns that satisfy the join condition), but also non- matching rows. An outer
	join can only be performed if the backend DBMS supports it. This article uses
	the pubs database in Microsoft SQL Server.
	
	MORE INFORMATION
	================
	
	This query uses the Authors table and the Publishers table and shows not only
	authors who have publishers in the same city, but also authors without
	publishers in the same city.
	
	1. Create a datasource to the pubs database on SQL Server.
	
	2. Create a new remote View, and select your new datasource created in step 1.
	
	3. Select the Authors table.
	
	4. Click again, and select the Publishers table.
	
	5. The join condition dialog appears showing:
	
	  Publishers.city - Authors.city
	
	6. Change the join condition to Right Outer Join.
	
	7. Select the following fields from the Authors table:
	
	  authors.au_fname
	  authors.au_lname
	
	8. Select the following field from the Publishers table:
	
	  Publisher.pub_name
	
	9. Run the query.
	
	REFERENCES
	==========
	
	"SQL Server Database Developers Companion", and "Visual FoxPro Developer's
	Guide."
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b
	Version           : WINDOWS:2.5,3.0,3.0b
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
