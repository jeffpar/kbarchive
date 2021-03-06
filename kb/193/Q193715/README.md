---
layout: page
title: "Q193715: WD97: Unable to Open Data Source Using MS Query"
permalink: /kb/193/Q193715/
---

## Q193715: WD97: Unable to Open Data Source Using MS Query

{% raw %}

	Article: Q193715
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to use Microsoft Access as a data source in MS Query (Microsoft
	Query), you may receive the following error message:
	
	  Word was unable to open the data source.
	
	NOTE: This problem may occur when you use either a Microsoft Access query or
	table.
	
	CAUSE
	=====
	
	This problem occurs when Word generates an SQL string longer than 255
	characters.
	
	WORKAROUND
	==========
	
	To work around this problem, either limit your query (Method 1) or don't use MS
	Query (Method 2).
	
	Method 1: Limit Your Query
	--------------------------
	
	To use Microsoft Access as a data source in Word, follow these steps:
	
	1. Click OK to the error message "Word was unable to open the data source."
	
	2. If you are using a Microsoft Access database as a data source in a Word mail
	  merge, in the Mail Merge Helper (on the Tools menu, click Mail Merge), click
	  Get Data, and then click Open Data Source. -or- If you are inserting a
	  database in a Word document, in the Database dialog box (on the Database
	  toolbar, click Insert Database), click Get Data. NOTE: To access the Database
	  toolbar, on the View menu, point to Toolbars, and then click Database.
	
	3. In the Open Data Source dialog box, click MS Query.
	
	4. In the Choose Data Source dialog box, select "MS Access 97 Database," and
	  then click OK. NOTE: Make sure the "Use the Query Wizard to create/edit
	  queries" check box is selected. This check box is selected by default.
	
	5. In the Select Database dialog box, select the Microsoft Access database file
	  that you want to use, and then click OK.
	
	6. In the "Query Wizard - Choose Columns" dialog box, in the "Available tables
	  and columns" list, expand the table or query that you want use. Then select
	  and add just the columns that you want to include in your query.
	
	7. In the "Query Wizard - Filter Data" dialog box, filter the data to specify
	  which rows to include in your query. If you don't want to filter the data,
	  click Next.
	
	8. In the "Query Wizard - Sort Order" dialog box, specify how you want your data
	  sorted. If you don't want to sort the data, click Next.
	
	9. In the "Query Wizard - Finish" dialog box, select what you would like to do.
	  Click Save Query to run the query and add this query to the list of available
	  queries. Use this list when you choose a query to run from Microsoft Excel or
	  Microsoft Query or when you choose a data source. Saves the query's design as
	  the file type *.dqy. -or- Click "Return Data to Microsoft Word," and then
	  click Finish to run the query and to return the query results to Microsoft
	  Word. -or- Click "View data or edit query in Microsoft Query," and then click
	  Finish to run the query and to return the query results to Microsoft Query.
	  You can view the data and make additional changes to your query in Microsoft
	  Query before returning the data to Microsoft Word.
	
	10. Word returns the results of your Microsoft Access query to your Word
	  document. If you are using mail merge, Word prompts you with the following
	  message: Word found no merge fields in your main document. Choose the Edit
	  Main Document button to insert merge fields into your main document. Click
	  Edit Main Document and continue your mail merge as usual. -or- If you are
	  inserting database information, in the Database dialog box, click Insert
	  Data. In the Insert Data dialog box, select either All to insert all of the
	  results of the Microsoft Access query into your Word document or select From
	  and specify which records you want to insert into your Word document. NOTE:
	  In the Insert Data dialog box, the "Insert data as field" is not selected by
	  default. If selected, this option inserts the data into the table as a
	  field. Select this check box if you want to update the data in your Word
	  document whenever the data source changes.
	
	Method 2: Do Not Use MS Query
	-----------------------------
	
	To use a Microsoft Access query or table(s) as a data source in Word, follow
	these steps:
	
	1. Click OK to the error message "Word was unable to open the data source."
	
	2. If you are using Microsoft Access as a data source in a Word mail merge, in
	  the Mail Merge Helper (on the Tools menu, click Mail Merge), click Get Data,
	  and then click Open Data Source. -or- If you are inserting a database in a
	  Word document, in the Database dialog box (on the Database toolbar, click
	  Insert Database), click Get Data. NOTE: To access the Database toolbar, on
	  the View menu, point to Toolbars, and then click Database.
	
	3. In the Open Data Source dialog box, follow these steps: a. In the Files Of
	  type box, select "MS Access Databases (*.mdb)." b. Select your Microsoft
	  Access database file. c. Click to select the Select Method check box. d.
	  Click Open.
	
	4. In the Confirm Data Source dialog box, select "MS Access Databases via DDE
	  (*.mdb)," and then click OK. NOTE: If "MS Access Databases via DDE (*.mdb)"
	  is not available, you will need to remove, and then reinstall Microsoft
	  Access 97 for Windows.
	
	5. In the Microsoft Access dialog box, do one of the following: On the Tables
	  tab, in the "Tables in <filename>.mdb" list, select the Microsoft
	  Access table that you want to use, and then click OK. -or- On the Queries
	  tab, in the "Queries in <filename>.mdb" list, select the Microsoft
	  Access query that you want to use, and then click OK.
	
	6. Word returns the results of your Microsoft Access query to your Word
	  document. If you are using mail merge, Word prompts you with the following
	  message: Word found no merge fields in your main document. Choose the Edit
	  Main Document button to insert merge fields into your main document. Click
	  Edit Main Document, and continue your mail merge as usual. -or- If you are
	  inserting database information, in the Database dialog box, click Insert
	  Data. In the Insert Data dialog box, select either All to insert all of the
	  results of the Microsoft Access query into your Word document or select From
	  and specify which records you want to insert into your Word document. NOTE:
	  In the Insert Data dialog box, the "Insert data as field" is not selected by
	  default. If selected, this option inserts the data into the table as a field.
	  Select this check box if you want to update the data in your Word document
	  whenever the data source changes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: datasource msaccess msquery
	
	======================================================================
	Keywords          : kbdta word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
