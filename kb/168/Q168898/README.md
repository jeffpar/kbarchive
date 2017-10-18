---
layout: page
title: "Q168898: PRB: Wizstyle Add Button Does Not Add Child Record"
permalink: kb/168/Q168898/
---

## Q168898: PRB: Wizstyle Add Button Does Not Add Child Record

	Article: Q168898
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Add button, in all of the navigation classes in the WIZSTYLE class library
	(Wizstyle.vcx), does not work correctly when adding a record to a child table.
	This problem occurs when the field linking the Parent to the Child table is of
	type Numeric.
	
	RESOLUTION
	==========
	
	To workaround this issue, create a character version of the fields in each
	table. The character fields can then be used to set the relation between the two
	tables.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The WIZSTYLE class library (Wizstyle.vcx) contains many class definitions. There
	are three class definitions that are used to navigate in tables: txtbtns,
	picbtns, and verttxtbtns. Each of these classes have an Add button. In a
	one-to-many table configuration if the field linking the Parent and Child tables
	is of type numeric, then the Add button, for any of the navigation classes, does
	not work correctly when adding a record to the child table.
	
	The following steps illustrate the behavior of using the txtbtns navigation
	buttons class on a One-to-Many form.
	
	Steps to Reproduce Behavior
	---------------------------
	
	There are two parts in setting up this example: Part 1 is to create the two
	tables used in the One-to-Many wizard. Part 2 is to create the One-to-Many form
	using the wizard.
	
	Part 1 - Create the two tables used in the One-to-Many wizard:
	
	1. Save the following code to a file called Creatabs.prg:
	
	        *** Begin code ***
	        CREATE TABLE parent (Char1 C(2),  Id N(2))
	        CREATE TABLE child (Id N(2), Value1 N(3), Value2 N(4))
	        SELECT child
	        INDEX ON Id TAG Id
	        INSERT INTO parent (Char1,Id) VALUES ('11',11)
	        INSERT INTO parent (Char1,Id) VALUES ('22',22)
	        INSERT INTO parent (Char1,Id) VALUES ('33',33)
	        INSERT INTO child  (Id,Value1,Value2) VALUES (11,111,1111)
	        INSERT INTO child (Id,Value1,Value2) VALUES (11,123,1234)
	        INSERT INTO child (Id,Value1,Value2) VALUES (11,134,1345)
	        INSERT INTO child (Id,Value1,Value2) VALUES (22,222,2222)
	        INSERT INTO child (Id,Value1,Value2) VALUES (22,234,2345)
	        INSERT INTO child (Id,Value1,Value2) VALUES (33,333,3333)
	        *** End code ***
	
	2. Run Creatabs.prg that creates both tables and inserts values into each table:
	
	Part 2 - Create the 'One-to-Many' Form:
	
	1. From the Visual FoxPro File menu, select New, and then click Form. Click the
	  Wizard button.
	
	2. On the Wizard Selection dialog box, click the One-to-Many Wizard.
	
	  a. In Step 1, move all the fields from the Parent table to the Selected
	     fields pane.
	
	  b. In Step 2, move all the fields from the child table to the Selected fields
	     pane.
	
	  c. In Step 3, click Next, as the parent.id = child.id is relation is
	     correctly set.
	
	  d. In Step 4, click Next after choosing a form style.
	
	  e. In Step 5, move the Char1 field to the Selected fields pane.
	
	  f. In Step 6, select the Save and Run button, and click Finish.
	
	NOTE: At this point, the Save As dialog box appears. Once a name has been
	entered, and the Save button is clicked, the form will run.
	
	1. Click the Add button.
	
	2. In the Add Record dialog box, click Add record to child (grid) only, and
	  click the Add button.
	
	NOTE: The wizard-generated code has not added a new record to the grid, nor it is
	not possible to move the cursor into a blank row of the grid.
	
	Additional query words: disabled
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
