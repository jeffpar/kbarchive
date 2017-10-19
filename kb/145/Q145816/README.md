---
layout: page
title: "Q145816: How to Access Report's Data Environment While the Report Runs"
permalink: /kb/145/Q145816/
---

## Q145816: How to Access Report's Data Environment While the Report Runs

	Article: Q145816
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to access a report's data environment while the report
	is running.
	
	MORE INFORMATION
	================
	
	When you create a report, an associated data environment (DE) is created. The
	data environment contains information about the tables, views and relations
	associated with the report.
	
	The data environment is an object, and it is a container for a cursor and a
	relation object. You can gain access to the DE of a report while it is running,
	so you can manipulate the its properties and methods.
	
	To gain access to the data environment, you need to be able to reference it as an
	object. Use the NAME clause on the REPORT FORM command to specify an object's
	variable name for the data environment as in this example:
	
	     REPORT FORM Samples\Mainsamp\Reports\salessum NAME salessum PREVIEW ;
	        NOWAIT
	     ?salessum.Name           && Returns DataEnvironment
	     ?salessum.Cursor1.Alias  && Returns sales_summary
	
	For example, if you want to manually open the tables associated with a report,
	you can call the OpenTables method of the data environment. The following
	step-by-step procedure explains how.
	
	Step-by-Step Procedure
	----------------------
	
	1. Create a new report.
	
	2. Add the Customer table, located in Samples\Data, to the data environment, and
	  drag it onto the Detail band of the report to create a quick report.
	
	3. In the DE, set the AutoOpenTables property to false (.F.).
	
	4. Add a title to the report, and place a field in the Title band. In the field
	  expression, type OpenAll() to call a user-defined function.
	
	5. Create a program file. Adjust the following code to your needs, and place it
	  in the program file:
	
	     REPORT FORM <reportname> NAME TEST  &&Names the data environment TEST
	
	     PROCEDURE openall
	     IF <condition>
	        TEST.OpenTables      && Calls the OpenTables method of the DE
	     ENDIF
	     RETURN ""
	
	6. Save the program, and run it.
	
	Additional query words: DE aselobj
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	
