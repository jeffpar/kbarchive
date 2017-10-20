---
layout: page
title: "Q279888: BUG: Error When Using Client Cursor to Add Record to SQL Table"
permalink: /kb/279/Q279888/
---

## Q279888: BUG: Error When Using Client Cursor to Add Record to SQL Table

{% raw %}

	Article: Q279888
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1 SP2,2.5,2.6,6.0,7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMDAC kbSQLServ kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbATM kbmdac270 kbado270
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft SQL Server version 7.0 
	- Microsoft SQL Server 2000 (all editions) 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use ADO to insert a new record through a client-side recordset into a SQL
	Server table that has a non-nullable datetime field with a default value, you
	receive the following error message if you do not supply a value for the
	datetime field:
	
	  Run-time error '-2147217887 (80040e21)': Multiple-step operation generated
	  errors. Check each status value.
	
	This error occurs whether you use the OLE DB Provider for SQL Server or the OLE
	DB Provider for ODBC Drivers. The error message may differ when you use
	Microsoft Data Access Components (MDAC) version 2.5 Service Pack 1 (SP1) or
	earlier. This error does not occur with a server-side cursor.
	
	CAUSE
	=====
	
	This error occurs in the Client Cursor Engine when it attempts to convert the
	value of type DBTYPE_DBTIMESTAMP to DBTYPE_VARIANT.
	
	RESOLUTION
	==========
	
	There are several ways to work around this problem:
	
	- Use a server-side cursor for the recordset.
	
	- Remove the default value that is specified for the field in the database.
	
	- Always specify a value for the field when you add a new record.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Add a table to SQL Server that contains a datetime field that does not accept
	  nulls and that has a default value. Include at least one additional field.
	  For the sake of this article, the following SQL Server 2000 table is created:
	
	  if exists (select * from dbo.sysobjects where id = object_id(N'[dbo].[DateTest]')
	  and OBJECTPROPERTY(id, N'IsUserTable') = 1)
	  drop table [dbo].[DateTest]
	  GO
	
	  CREATE TABLE [dbo].[DateTest] (
	  	[DateId] [int] IDENTITY (1, 1) NOT NULL ,
	  	[TestDate] [datetime] NOT NULL ,
	  	[Nonsense] [varchar] (16) COLLATE SQL_Latin1_General_CP1_CI_AS NULL 
	  ) ON [PRIMARY]
	  GO
	
	  ALTER TABLE [dbo].[DateTest] WITH NOCHECK ADD 
	  	CONSTRAINT [DF_DateTest_TestDate] DEFAULT ('3/1/2001') FOR [TestDate],
	  	 PRIMARY KEY  CLUSTERED 
	  	(
	  		[DateId]
	  	)  ON [PRIMARY] 
	  GO
	
	2. To insert a row into the table, run code that is similar to the following
	  code:
	
	  NOTE: Make sure that you do not supply a value for the datetime field.
	
	      Dim cnn As ADODB.Connection
	      Dim rst As ADODB.Recordset
	      
	      Set cnn = New ADODB.Connection
	      cnn.Open "Provider=SQLOLEDB;Data Source=(local);" & _
	               "Initial Catalog=test;User Id=sa;Password=;"
	      
	      Set rst = New ADODB.Recordset
	      With rst
	          .CursorLocation = adUseClient
	          .Open "SELECT * FROM DateTest", cnn, adOpenStatic, adLockOptimistic
	      
	          .AddNew
	          .Fields("Nonsense").Value = "test data"
	          .Update
	      End With
	      
	      Debug.Print rst("TestDate").Value
	
	  You receive the above-mentioned error message when you examine the Value
	  property of the datetime field.
	
	Additional query words: -2147217887 (80040e21)
	
	======================================================================
	Keywords          : kbDatabase kbMDAC kbSQLServ kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbADOsearch kbADO200 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbSQLServ700 kbSQLServ2000Search kbZNotKeyword2 kbVB600Search kbVB600 kbSQLServ2000 kbADO270
	Version           : :2.0,2.1 SP2,2.5,2.6,6.0,7.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
