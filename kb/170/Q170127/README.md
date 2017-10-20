---
layout: page
title: "Q170127: HOWTO: Add Tables in a Database to Source Control"
permalink: /kb/170/Q170127/
---

## Q170127: HOWTO: Add Tables in a Database to Source Control

{% raw %}

	Article: Q170127
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Tables in a database container are not included in the list of files that can be
	added to Source Control. This article describes some of the methods that can be
	used to add database tables to Source Control.
	
	MORE INFORMATION
	================
	
	When you add a project to Source Control you do not get an option to add the
	tables belonging to any of the databases in the project.
	
	In order to add the tables to Source Control you can do one of the following:
	
	1. Include the Database in the Project.
	
	  NOTE: Once the database is included in the project, when you add the project
	  to Source Control the tables will show up in the list of files that can be
	  added to Source Control.
	
	2. Add the Tables, individually, into the "Other" section of the project.
	
	  NOTE: Adding the tables to the "Other" section should be done before adding
	  the Database to Source Control. In order to modify the tables from within the
	  database these tables should be checked out before checking out the database.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
