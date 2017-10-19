---
layout: page
title: "Q188401: PRB: ACCESS Cannot Import/Link Table if Index Contains Function"
permalink: /kb/188/Q188401/
---

## Q188401: PRB: ACCESS Cannot Import/Link Table if Index Contains Function

	Article: Q188401
	Product(s): Microsoft FoxPro
	Version(s): 2.5,3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbDSupport kbMDAC250
	Last Modified: 24-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Visual FoxPro table has an index tag that calls a User Defined Function or
	a FoxPro function like DELETED() or RECNO(), the table cannot be imported or
	linked from Microsoft Access.
	
	Microsoft Access does not seem to have a problem with string functions like
	SUBSTR(), LEFT(), RIGHT(), AT(), STRTRAN(), TRIM(), ALLTRIM(), or STUFF().
	
	NOTE: Under Microsoft Visual Basic version 5.0 and 6.0, using ODBC and connecting
	to a FoxPro table with an Index tag that calls a function causes an application
	error to occur.
	
	
	RESOLUTION
	==========
	
	Workarounds
	-----------
	
	There are two ways to work around this behavior:
	
	- Do not use an index tag that calls a function.
	
	  -or-
	
	- Create a local view in Visual FoxPro based on the table with the offending
	  index and link to the view instead.
	
	  To accomplish this, use the following steps:
	
	  a. From Visual FoxPro, create a new database container (DBC). This is not
	     really required, but is preferable if you wish to leave your existing DBC
	     unmodified, or if the table to which you want to link is a free table.
	     Open the DBC in the Database Designer.
	
	  b. Create a new Local View. The View Designer will open. When prompted for a
	     table, select the table to which you want to link.
	
	  c. In the View Designer, select the fields you want to link to in the Fields
	     tab.
	
	  d. This step is only required if you want the data to be updateable. Select
	     the Update Criteria tab in the View Designer. Select the key field under
	     the Key column, and select every field that you want to be updateable
	     under the Pencil column in the Field name list. Select the Send SQL
	     updates check box. If you leave the Send SQL updates check box is cleared,
	     the changes you make when you are linked to the view will not be saved
	     back to the table.
	
	  e. Save the view. The name you save it under will appear as the tablename in
	     the list when you connect through ODBC.
	
	  f. Close the View Designer and Database Designer.
	
	  g. To connect, make an ODBC Datasource that uses the DBC you created in step
	     1. The list of tables will include the view you saved in step 5. If you
	     created a view for each table in the customer's DBC (repeat steps 2-5 for
	     each table) then you could link to all of them.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run FoxPro, create a table and add two records using the following code:
	
	        CREATE TABLE Tbl1 (Fld1 c(4), Fld2 c(4))
	        INSERT INTO Tbl1 (Fld1,Fld2) VALUES ("one","two")
	        INSERT INTO Tbl1 (Fld1,Fld2) VALUES ("four","five")
	
	2. Create an index that calls a function with the following command:
	
	        INDEX ON DELETED() TAG dltd
	
	  -or-
	
	  Create a program, named Myudf.prg, with some code then create the following
	  Index tag:
	
	        INDEX ON myudf() TAG myfunc
	
	  -or-
	
	        INDEX ON RECNO() TAG rnum
	
	3. Close the table by issuing this command:
	
	        USE Tbl1
	
	4. Run Microsoft Access and create or open a database.
	
	5. From the File menu, choose Get External Data, and then select the Import or
	  Link Tables option.
	
	6. In the Files of Type box, of the Import or Link dialog box (depending on the
	  option selected in step 5), select ODBC Databases.
	
	7. In the Select Data Source dialog box, click the Machine Data Source tab.
	
	8. Double-click the Visual FoxPro Tables option and then click OK.
	
	9. From the Configure Connection dialog box, select Free Table Directory as the
	  database type, and then select the directory where you saved the table
	  created in step 1 (Tbl1). Next, click OK.
	
	10. When the Link Tables or Import dialog box opens (depending on the option
	  selected in step 5), select the table, Tbl1, and then click OK. At this
	  point, the following error message appears:
	
	  Invalid Field definition <Function Name> in definition of Index or
	  relationship.
	
	  Subsequently, Microsoft Access will not be able to import or create a link to
	  the table.
	
	NOTE: The same behavior occurs if the table is in a database container.
	
	Additional query words: kbdse
	
	======================================================================
	Keywords          : kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : :2.5,3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
