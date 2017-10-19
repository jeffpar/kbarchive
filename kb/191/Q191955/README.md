---
layout: page
title: "Q191955: PRB: NOWAIT Breaks Filter Printing Report from Preview Window"
permalink: /kb/191/Q191955/
---

## Q191955: PRB: NOWAIT Breaks Filter Printing Report from Preview Window

	Article: Q191955
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the NOWAIT clause is present in the REPORT FORM command, printing a report
	by clicking the printer icon in the report preview window will not print
	according to the filter setting, rather, it prints all the records.
	
	CAUSE
	=====
	
	The filter setting is not retained due to the NOWAIT keyword.
	
	RESOLUTION
	==========
	
	- Remove the NOWAIT clause from the end of the REPORT FORM command.
	
	-or-
	
	- Create a cursor with the filter setting before calling the REPORT FORM
	  command.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table by running the following code:
	
	        CREATE TABLE cust ( Name C(10), State C(2))
	        INSERT INTO cust VALUES ("Smith", "MA")
	        INSERT INTO cust VALUES ("Mary", "AL")
	        INSERT INTO cust VALUES ("Tom", "MA")
	        INSERT INTO cust VALUES ("Joe", "MA")
	        INSERT INTO cust VALUES ("Tomi", "CA")
	        INSERT INTO cust VALUES ("John", "CA")
	        INSERT INTO cust VALUES ("Linda", "MA")
	
	2. Create a quick report based on the preceding table. Save the report as
	  Cust.frx.
	
	3. Create a program (.prg) and place the following code in the .prg file:
	
	        DEFINE WINDOW wShowInq ;
	           FROM 0,0 TO 10,10 ;
	           SYSTEM ;
	           ZOOM ;
	           TITLE [&tcTitle.]
	
	        ZOOM WINDOW wShowInq MAX
	        USE cust
	
	        *-- Comment the NOWAIT clause to obtain the expected results.
	        REPORT FORM cust FOR State = "MA"  PREVIEW NOWAIT
	
	4. Save the program and run it.
	
	When the Print Preview appears, only all the "MA" records are in the print
	preview.
	
	1. Click the Printer button on the Report Preview toolbar to print the report.
	
	You will see all the records are printed in the hard copy of the report.
	
	Additional query words: kbPrinting kbReportWriter kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
