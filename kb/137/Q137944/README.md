---
layout: page
title: "Q137944: HOWTO: How to Create a Remote Connection or View Programmaticall"
permalink: /kb/137/Q137944/
---

## Q137944: HOWTO: How to Create a Remote Connection or View Programmaticall

	Article: Q137944
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to create remote connections and remote views
	programmatically.
	
	MORE INFORMATION
	================
	
	The following code creates a database in which to store the remote view and
	remote connection. The remote connection is created first, and then the remote
	view is created by using the remote connection.
	
	The data source used in this example is Sqltest, which is the name of the
	corresponding SQL Server ODBC driver that exists in the ODBC driver manager. The
	Pubs database comes with Microsoft SQL Server and contains a table called
	Sales.
	
	     CLOSE ALL
	     SET DEFAULT TO c:\temp
	     * A view cannot exist without a database.
	     * Create a database to contain view.
	     CREATE DATABASE zdb
	
	     * Create a connection for the view to use.
	     CREATE CONNECTION zconn DATASOURCE sqltest USERID sa PASSWORD ""
	
	     * Create the view using the remote connection.
	     CREATE SQL VIEW zview REMOTE CONNECTION zconn AS select * from ;
	        pubs..sales
	
	     * Open the view and browse the resulting data set.
	     USE zview
	     BROWSE
	
	By default, a view is not updatable. For information about creating an updatable
	view, please see the following article in the Microsoft Knowledge Base:
	
	  Q130413 How to Create an Updatable Cursor (View) to Update Table
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
