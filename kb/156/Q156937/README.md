---
layout: page
title: "Q156937: PRB: Report Wizard Shows Surplus Data Sources for Query"
permalink: kb/156/Q156937/
---

## Q156937: PRB: Report Wizard Shows Surplus Data Sources for Query

	Article: Q156937
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Query Designer to select a limited number of fields from a
	limited number of tables, if the Destination is a report and the Report Wizard
	is invoked, the Step 1 - Select Fields dialog box displays the names of all
	tables and cursors open in work areas and all of the tables in the currently
	open database, with the fields of the first table listed the Available Fields
	list box.
	
	Because the query has already been designed and the selected fields have already
	been specified, you might expect the Report Wizard to show only those fields in
	the Select Fields dialog form.
	
	CAUSE
	=====
	
	The Wizard can be called from a number of locations (menus, and so forth). When
	it is called it has no idea that it was called from the Output Destination
	dialog box of the Query Designer.
	
	To make it easier for the user, the Wizard displays the open Databases to gather
	information on tables, views, and so forth. It also reads all the tables open in
	work areas.
	
	When calling the Report Wizard from the Query Designer, unless you actually run
	the query before you choose the Output Destinations options, there is no way for
	the Wizard to gather this information. If you do run the query first, the Wizard
	picks up these fields as well, as the result set is in an active cursor.
	
	For the Report Wizard to display only the fields selected from the queried table,
	the behavior of the Query Designer has to be changed to run the Query before you
	specify an output destination.
	
	Another aspect of the issue is that the Report Wizard saves the original table as
	the data source in the report's data environment if the query hasn't been run.
	If the query has been run and the cursor that it created is still open, this
	cursor, normally named "query," is saved in the report's data environment.
	Usually this isn't a problem. But the best way to set this up is to modify the
	report after its creation and remove any and all tables or cursors from the data
	environment. Then when the report is run from the query it will always use the
	correct data. The report wizard does not add the table or cursor alias to the
	report expressions for the fields. For instance, it uses CUST_ID for the report
	expression to print the CUST_ID field rather than CUSTOMER.CUST_ID or
	QUERY.CUST_ID. This is the best way to setup the report expressions and should
	not be changed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Samples\Data\Testdata database
	
	2. Create a new query, selecting two fields from the Customer table.
	
	3. In the Output Destination dialog box, choose the Report button, and then the
	  Wizard button, which is at the right end of the Open Report text box, and
	  then the Report Wizard. Select the "Report Wizard" from the Wizard Selection
	  dialog box.
	
	The fields listed are from the first table in the database, Customers. The
	remaining tables are also listed.
	
	Additional query words: kbdsd vFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
