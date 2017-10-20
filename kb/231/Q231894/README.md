---
layout: page
title: "Q231894: HOWTO: Update a SQL Server Text Field Through a View"
permalink: /kb/231/Q231894/
---

## Q231894: HOWTO: Update a SQL Server Text Field Through a View

{% raw %}

	Article: Q231894
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbSQLServ kbvfp600 KbDBFDBC kbVS600sp3 kbGrpDSFox kbDSupport kbCodeSn
	Last Modified: 06-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are specific settings necessary when updating a SQL Server text field
	using a Visual FoxPro Remote View if you are accessing the text field through a
	SQL Server View.
	
	NOTE: This only works correctly in Visual FoxPro 6.0 with Service Pack 3
	installed.
	
	MORE INFORMATION
	================
	
	When setting up a remote view to a SQL Server view that has a text field in the
	SQL Server view, it is important to remember that there are specific settings
	that will make updating the text field fail.
	
	If you do not set the view property CompareMemo to Off, the following settings
	for the SQL Where Clause Includes causes an update to the text field to fail:
	
	- Key and Updateable Fields
	
	- Key and Modified Fields
	
	These settings succeed with the Compare Memo property set to true or false
	
	- Key Fields Only
	
	- Key and Timestamp
	
	When the text field is included in the Where clause, the SQL Server ODBC driver
	uses the WriteText update method. This method will not update a text field in a
	SQL View, and it returns the following error:
	
	  Update Conflict
	
	At this point you can use the following command to clear the changes:
	
	  ?TABLEREVERT(.T.)
	
	Sample:
	
	  CLOSE DATABASES ALL
	  SET SAFETY OFF
	  CREATE DATABASE TextTest
	  CREATE CONNECTION conn1 CONNSTRING 'driver=sql server;server=sphinxsql;' + ;
	     'database=pubs;uid=sa;pwd='
	  myconn=SQLCONNECT('conn1')
	  IF myconn=-1 then
	     MESSAGEBOX("Connection Failed")
	     AERROR(myerr)
	     DISPLAY MEMORY LIKE myerr
	     RETURN
	  ENDIF
	
	  *!* Test for the view in SQL Server.
	  *!* If it exists, drop it.
	  iTestForView=sqlexec(myconn,"if exists (select * from sysobjects where name='test1'" + ;
	     " and type = 'V')" + CHR(13) + ;
	     "   begin" + CHR(13) + ;
	     "   drop view test1" + CHR(13) + ;
	     "   end")
	
	  *!* Test for the table in SQL Server.
	  *!* If it exists, drop it and recreate it.
	  iSucc=sqlexec(myconn,"if exists(select * from sysobjects where name='ttest')" + CHR(13) + ;
	     "   begin" + CHR(13) + ;
	     "   drop table ttest" + CHR(13) + ;
	     "   end" + CHR(13) + ;
	     "create table dbo.ttest (ID char(10) primary key," + CHR(13) + ;
	     "   myTime timestamp,tnotes text)")
	  IF iSucc=-1 then
	     MESSAGEBOX('Create Table Failed')
	     AERROR(myerr)
	     DISPLAY MEMORY LIKE myerr
	     SQLDISCONNECT(myconn)
	     RETURN
	  ENDIF
	  MyNotes=REPLICATE('This is a test of the emergency broadcast system. ' + ;
	     ' If this were an actual emergency, you would be told ' + ;
	     ' where in your area to contact for news and additional ' + ;
	     'information.' ,50) + CHR(13) + CHR(10) + ;
	     'End of Original Memo'+ CHR(13) + CHR(10)
	
	  iSucc=sqlexec(myconn,"insert into ttest (ID,tnotes) values ('1',?MyNotes)")
	  IF iSucc=-1 then
	     MESSAGEBOX("Insert Failed")
	     AERROR(myerr)
	     DISPLAY MEMO LIKE myerr
	     sqldisconn(myconn)
	     RETURN
	  ENDIF
	
	  iSucc=sqlexec(myconn,"create view dbo.test1 as select * from ttest")
	  IF iSucc=-1 then
	     MESSAGEBOX("Create View Failed")
	     AERROR(myerr)
	     DISPLAY MEMO LIKE myerr
	     SQLDISCONNECT(myconn)
	     RETURN
	  ENDIF
	
	  CREATE SQL VIEW MyTest REMOTE CONNECTION conn1 ;
	     AS SELECT test1.ID,test1.tNotes FROM dbo.test1
	  DBSETPROP('Mytest','view','sendupdates',.T.)
	  DBSETPROP('MyTest','view','WhereType',3)
	  DBSETPROP('MyTest','view','tables','dbo.test1')
	  DBSETPROP('mytest.id','field','keyfield',.T.)
	  DBSETPROP('mytest.id','field','updatable',.T.)
	  DBSETPROP('mytest.id','Field','updatename','dbo.test1.id')
	  DBSETPROP('mytest.tnotes','Field','updatable',.T.)
	  DBSETPROP('mytest.tnotes','Field','updatename','dbo.test1.tNotes')
	  DBSETPROP('MyTest','view','CompareMemo',.F.)
	
	  USE MyTest
	  BROWSE NOWAIT
	  UPDATE MyTest SET tNotes=tNotes + "This is added on to the end!"
	  ?TABLEUPDATE()
	  REQUERY()
	  MODIFY MEMORY tNotes NOWAIT
	
	To see the error, please comment out the last DBSETPROP line:
	
	  DBSETPROP('MyTest','view','CompareMemo',.F.)
	
	REFERENCES
	==========
	
	For additional information on SQL Views in SQL Server, search the Index for
	"Views" in SQL Server Books Online.
	
	For additional information on Visual FoxPro Remote Views, search on "Remote
	Views" in the Index of Visual FoxPro Books Online.
	
	Additional query words: kbdse
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbSQLServ kbvfp600 KbDBFDBC kbVS600sp3 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
