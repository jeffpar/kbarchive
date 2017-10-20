---
layout: page
title: "Q157047: HOWTO: Use the FetchAsNeeded Property in Visual FoxPro 5.0"
permalink: /kb/157/Q157047/
---

## Q157047: HOWTO: Use the FetchAsNeeded Property in Visual FoxPro 5.0

{% raw %}

	Article: Q157047
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp500 kbvfp600
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the FetchAsNeeded property is set to true (.T.) on a remote view, the view
	retrieves only the number of records specified by the FetchSize property. If you
	scroll past the last record in the set, Visual FoxPro automatically requeries to
	get the next set of records, up to the total amount of records or to the number
	specified by the MaxRecords property.
	
	MORE INFORMATION
	================
	
	You can use the FetchAsNeeded property to optimize data retrieval through a
	remote view. By setting this property to .T., and setting the FetchSize property
	to 50, as an example, the query gets only 50 records at a time from the server.
	Returning a subset of the data results in shorter wait times than returning the
	entire data set.
	
	The following example demonstrates how the FetchAsNeeded property works. The
	example assumes that you have a DataSource named "SQLTest" setup for SQL
	Server's Pubs database:
	
	1. Enter the following code into a program (prg):
	
	       OPEN DATA (SYS(2004)+"samples\data\testdata.dbc")
	       CREATE CONNECTION Myconn DATASOURCE "SQLTest" USERID "sa"
	       CREATE SQL VIEW Roysched_remote_view CONNECTION SQLtest ;
	       AS SELECT * FROM Roysched
	
	       =DBSETPROP("roysched_remote_view","view","Fetchasneeded",.T.)
	       =DBSETPROP("roysched_remote_view","view","fetchsize",10)
	
	       USE Roysched_remote_view
	
	2. Run the program and observe the status bar. You should see "Record: 1/10."
	  This shows that only 10 records have been retrieved into the current cursor.
	
	3. From the Command window issue the command GO 10. The status bar should now
	  read "Record: 10/10."
	
	4. Now issue the command SKIP 1. The status bar should read "Record: 11/20."
	  This shows that once you skip past the last record in the set, Visual FoxPro
	  retrieves the next 10 records.
	
	5. Now issue the command GO BOTTOM and notice that the entire result set is
	  retrieved. Any command that requires to go to the end of file retrieves the
	  entire result from the server. Commands like Browse, Locate For, Count,
	  Report Form, Reccount, and others fetch all the records in the data set.
	
	  NOTE: Keep this in mind if you intend to use FetchAsNeeded.
	
	  If you want to use this feature with a grid on a form, you should not use any
	  buffering mode for the view, form, or the grid.
	
	REFERENCES
	==========
	
	Visual FoxPro 5.0 "Developer's Guide," Chapter 22 "Optimizing Client/Server
	Performance"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
