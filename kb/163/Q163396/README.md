---
layout: page
title: "Q163396: PRB: Creating Regular Indexes Through VFP ODBC Driver"
permalink: kb/163/Q163396/
---

## Q163396: PRB: Creating Regular Indexes Through VFP ODBC Driver

	Article: Q163396
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbODBC kbvfp
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Currently, it is not possible to create a regular index with the INDEX ON
	command on a table through the Visual FoxPro ODBC driver, either by SQL Pass
	Through or a Default Value, Rule, or Trigger code.
	
	RESOLUTION
	==========
	
	It is possible to create a Regular index indirectly with the ALTER TABLE or
	CREATE TABLE commands.
	
	NOTE: Please use steps 1-6 from the MORE INFORMATION section below prior to using
	the following examples.
	
	Example 1
	---------
	
	This example creates a Regular index on a table when the table is created. A
	problem you might encounter is that the SQLEXEC() function returns a < 0
	result indicating that it failed (and it did fail to carry out the exact command
	it was passed). The command passed tries to create a Persistent Relationship to
	itself and Visual FoxPro completed a portion of the process before it realized
	it could not complete the entire operation. The byproduct of the command failing
	is the index tag. The drawback with this method is there is no positive means of
	determining whether the tag was actually created:
	
	        mchnl=SQLCONNECT('vfp') && Connect to datasouce
	        ? mchnl && Needs to return a value > 0
	        ? SQLEXEC(mchnl,'CREATE TABLE x6 (col1 c(1), col2 c(3), ;
	            FOREIGN KEY col2 TAG col2 REFERENCES x6)')
	        ? AERROR(temp)
	        DISPLAY MEMORY temp
	        ? SQLDISCONNECT(mchnl)
	
	Example 2
	---------
	
	This example creates a regular index on an existing table. It functions on the
	same principles as Example 1 and has the same drawbacks:
	
	        mchnl=SQLCONNECT('vfp') && Connect to datasouce
	        ? mchnl && Needs to return a value > 0
	        ? SQLEXEC(mchnl,'CREATE TABLE x1 (col1 c(1), col2 c(3))')
	        ? SQLEXEC(mchnl,'ALTER TABLE x1 ;
	        ADD FOREIGN KEY col2 TAG col2 REFERENCES x1')
	
	Example 3
	---------
	
	This is probably the best method because you can be confident that the Index was
	not created if the SQL Pass Through command returns a < 0 number. This
	example requires a Primary Key to exist for the same reasons that Examples 1 and
	2 SQL Pass Through commands failed. The SQL Pass Through command being passed is
	going to establish a Persistent Relationship and then DROP the FOREIGN KEY with
	the SAVE clause. This will destroy the Persistent Relationship but will preserve
	the Regular index TAG:
	
	        mchnl=SQLCONNECT('vfp') && Connect to datasource
	        ? mchnl && Needs to return a value > 0
	        ? SQLEXEC(mchnl,'CREATE TABLE x2 (col1 c(1) PRIMARY KEY col2 c(3))')
	        ? SQLEXEC(mchnl,'ALTER TABLE x2 ;
	            ADD FOREIGN KEY col2 TAG col2 REFERENCES x2')
	        ? SQLEXEC(mchnl,'ALTER TABLE x2 DROP FOREIGN KEY TAG col2 SAVE')
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Using the INDEX ON command through the Visual FoxPro ODBC driver will generate
	either a syntax error or a "Trigger Failed" error.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the ODBC Driver Manager or ODBC Data Source Administrator.
	
	2. Create a New Datasource using the Visual FoxPro Database Driver.
	
	3. Give the Datasource the name of "VFP."
	
	4. For Database Type, choose Visual FoxPro Database(.DBC).
	
	5. For the Path of the Database, use the BROWSE button and point to
	  SAMPLES\DATA\testdata.dbc in the Visual FoxPro directory.
	
	6. Start Visual FoxPro.
	
	7. Issue a MODIFY DATABASE ? command, and then select the
	  SAMPLES\DATA\Testdata.dbc.
	
	8. From the Database Menu, select Edit Stored Procedures.
	
	9. Place the following code in the Stored Procedures:
	
	        PROCEDURE cmdins
	        USE customer IN 0 EXCLUSIVE
	        SELECT customer
	        INDEX ON contact TAG contact
	        RETURN .T.
	
	10. Save and the changes made to the Stored Procedures and then choose Close.
	
	11. Select the Customer Table.
	
	12. Right-click the Customer Table to bring up the Shortcut menu.
	
	13. Choose Modify.
	
	14. In the MODIFY STRUCTURE dialog box for the Customer table, select the TABLE
	  Tab.
	
	15. For the INSERT Trigger, enter "cmdins()" (the stored procedure above).
	
	16. Save everything and issue a CLOSE ALL to close the database and table.
	
	17. Issue the following commands from the Command Window:
	
	        mchnl=SQLCONNECT('vfp') && Use the datasource defined above.
	        ? mchnl && Ensure that a value greater than zero is returned.
	        ? SQLEXEC(mchnl,"INSERT INTO customer ;
	            (cust_id, company, contact, title, address, city, region, ;
	            postalcode, country, phone, fax, maxordamt) ;
	            VALUES ('31111', 'one', 'one', 'one', 'one', 'one', 'one', ;
	            'one', 'one', 'one', 'one', 1)")
	        * The above command invokes the Insert Trigger which fails.
	        ? AERROR(temp) && Use AERROR() to get the last error
	        DISPLAY MEMORY LIKE temp
	        * Note it returns the "Trigger Failed" error
	
	Additional query words: 1.00 5.00
	
	======================================================================
	Keywords          : kbODBC kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
