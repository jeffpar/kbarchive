---
layout: page
title: "Q192978: PRB: Query Output to Label or Report Prints All Records"
permalink: kb/192/Q192978/
---

## Q192978: PRB: Query Output to Label or Report Prints All Records

	Article: Q192978
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
	
	Create a new query and make the query output destination a label or a report
	that was created using the Label Wizard. When you run the query all of the
	records are printed, instead of the records that you selected in the query.
	
	CAUSE
	=====
	
	The label or report has a table in the label or report's Data Environment.
	
	RESOLUTION
	==========
	
	Remove the table from the label or report's Data Environment.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When a new query is created, the user has the option to choose an output
	destination by right-clicking the Query Designer and choosing Output Settings.
	If a report or label is chosen, the user is prompted to either enter a file name
	or to create a new label or report using the Wizard. If the report or label is
	created using the Wizard, the user is prompted for a table, which is placed in
	the Data Environment of the label or report.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new query using the Query Designer. Add a table to the query when
	  prompted.
	
	2. Right-click in the Query Designer and Select "Output Settings...".
	
	3. Select either a report or a label.
	
	4. In the Query Destination dialog box, select the Builder button that is
	  located to the immediate right of the Open Report/Label text box.
	
	5. Follow the steps to create a report or label, selecting the table that you
	  added to the query in Step 1. Add the fields when prompted and then click OK
	  to close the Query Destination dialog box.
	
	6. In the Query Designer, click the Filter tab and create a filter that limits
	  the records the query returns.
	
	7. Right-click the Query Designer and then select Run Query.
	
	RESULTS: All of the records are returned in the report or label instead of the
	subset you selected.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike A. Stewart, Microsoft Corporation
	
	
	Additional query words: kbVFp500a kbVFp500 kbVFp600 kbPrinting kbReportWriter
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
