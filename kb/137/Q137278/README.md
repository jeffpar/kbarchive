---
layout: page
title: "Q137278: PRB: Trigger Fails with One-to-Many Form Wizard and RI Builder"
permalink: kb/137/Q137278/
---

## Q137278: PRB: Trigger Fails with One-to-Many Form Wizard and RI Builder

	Article: Q137278
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following sequence of events results in this error:
	
	  Failed to update table: Trigger Failed
	
	Sequence of Events Leading to Error
	-----------------------------------
	
	1. Use the Referential Integrity (RI) Builder to set the Insert Trigger of the
	  child table to Restrict.
	
	2. Use the One-to-Many Form Wizard to create a form.
	
	3. Run the form, and click Add, then click Add Record to Both in the Add Record
	  dialog box, and save the form.
	
	CAUSE
	=====
	
	When Visual FoxPro opens the tables, it opens the parent first and then the
	child. The Parent table is opened in work area one. When the child table is
	opened, the parent is moved to work area two, and the child is opened in work
	area one.
	
	The UpdateRows method in Wizstyle.vcx handles updating the tables. It uses the
	AUSED() function to place the names of the tables into an array and a For loop
	to cycle through each table and append the new record. Because the record is
	appended to the child table first (because of its order in the array and work
	area), the trigger cannot find a matching record in the parent, so it fails. If
	the the record was appended to the parent table first, the problem would not
	occur.
	
	RESOLUTION
	==========
	
	You can modify the code in the UpdateRows method of the txtbtns class of
	Wizstyle.vcx. Find the line that reads:
	
	     FOR I = 1 TO m.nTablesUsed
	
	Change it to this:
	
	     FOR I = m.nTablesUsed TO 1 STEP -1
	
	This causes the record to be appended to the parent table first, so the Insert
	trigger will see a corresponding record in the parent when it updates the child.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a database called test, and add two tables (a parent and a child, also
	  known as master and detail) to the database giving each a field in common
	  such as Id.
	
	2. Set the index on the parent table to Primary, and the index on the child
	  table to Candidate. Create a persistent relationship between the tables.
	
	3. Start the Referential Integrity Builder. Change the Insert rule to Restrict,
	  and save the database.
	
	4. Start the One-to-Many Form Wizard, and follow these steps:
	
	  a. Select the fields in the parent (step 1).
	
	  b. Select the fields in the child (step 2).
	
	  c. Take the default relationship (step 3).
	
	  d. Select any button style you want (step 4).
	
	  e. Don't specify a sort order (step 5). None is needed.
	
	  f. Save and run the Form (step 6).
	
	5. When the form is running Click Add. The click Add Record to Both in the Add
	  Record Dialog box.
	
	6. Type a value in the Key Value text box.
	
	7. Click Add, and then click Save. At this point, the error occurs:
	
	  Failed to update Table: Trigger Failed
	
	8. Change the line of code as previously described, and rerun the form.
	  Everything now works correctly.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
