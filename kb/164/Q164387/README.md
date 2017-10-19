---
layout: page
title: "Q164387: PRB: Send SQL Updates is Checked but Data Not Saved"
permalink: /kb/164/Q164387/
---

## Q164387: PRB: Send SQL Updates is Checked but Data Not Saved

	Article: Q164387
	Product(s): Microsoft FoxPro
	Version(s): 3.0 3.0b 5.0, 6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding a record to a remote view, sometimes the record does not appear in
	the table after updating. Or the following error may occur when trying to close
	the view:
	
	  Table buffer for alias <view name> contains uncommitted changes
	
	Even though the "Send SQL Updates" box is checked in the Update Criteria tab of
	the view, make sure that the Updateable (marked with a pencil symbol) column for
	the primary key is checked also.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	Depending on the rules that are applied to a table, many times a rule requires
	that the primary key field of a new record must have a value placed into it
	before the record is saved.
	
	It is often assumed that while in the Update Criteria tab of the View Designer,
	selecting a primary key field in the Field Name list box and then clicking the
	Update All button updates the primary key and all other fields in the list box.
	This is not entirely true; while all of the other fields have the Updatable
	column (marked with the pencil symbol) checked, the Updateable column of the
	primary key is not checked. It has to be checked manually in order for the
	primary field to be updated. If the primary key field is not checked, this
	causes the record not to be added to the table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a database.
	
	2. From the File menu, click New. Click Remote View and click New.
	
	3. Select a connection or data source in the list box and supply the correct
	  information to connect.
	
	4. Add a table from the list box.
	
	5. In the Fields tab, select all records.
	
	6. In the Update Criteria tab, check the Send SQL Updates box and make sure that
	  there is a primary key checked. Click Update All to select all of the fields
	  to be updated.
	
	7. Run the view and click Append New Record from the Table menu. Add data to the
	  fields and close the Browse window.
	
	8. Close the view after naming it; reopen and run it. Note that the record that
	  you added is not there. By going into the View Designer and checking the
	  Updatable column on the primary key field, a record can now be added to the
	  table. Note that if the table that the view is created on does not have rules
	  that the primary key field must have a value in it. It is then possible to
	  add a record but the primary key field is left blank.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : 3.0 3.0b 5.0, 6.0
	
	=============================================================================
	
