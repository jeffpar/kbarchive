---
layout: page
title: "Q157947: HOWTO: Create a Report Based on a Query"
permalink: /kb/157/Q157947/
---

## Q157947: HOWTO: Create a Report Based on a Query

{% raw %}

	Article: Q157947
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp300 kbvfp500 kbvfp600
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to create a report based on a query by placing the SELECT
	statement in the Init method of the DataEnvironment.
	
	MORE INFORMATION
	================
	
	Use the following steps to create a report based on a query:
	
	1. Issue the following command in the command window:
	
	        CREATE TABLE TEST (fld_one C(5), fld_two N(5))
	
	2. Add five records, three of them with "aaa" in fld_one.
	
	3. Create a report, and add the table to the DataEnvironment.
	
	4. Drag the fields to the detail band.
	
	5. Remove the Alias reference from each field in the report.
	
	6. In the Init method of the DataEnvironment enter the following code:
	
	        USE test  && Only need if the table is not already open.
	        SELECT fld_one, fld_two ;
	          FROM Test where fld_one= "aaa" ;
	          INTO CURSOR Temp
	
	7. In the Destroy method of the DataEnvironment enter CLOSE ALL. (You may leave
	  this out if you do not want to close everything.)
	
	8. Remove the table from the DataEnvironment.
	
	9. Save the report as QueryTest.
	
	10. In the Command window issue either of the following two commands:
	
	         REPORT FORM Querytest to PRINT
	
	  -or-
	
	         REPORT FORM Querytest PREVIEW
	
	REFERENCES
	==========
	
	For another method of doing this based on a view, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q130122 HOWTO: Add SQL SELECT to the Data Environment of a Report
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
