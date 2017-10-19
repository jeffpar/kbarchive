---
layout: page
title: "Q231879: PRB: No Update Tables are Specified when Updating Records"
permalink: /kb/231/Q231879/
---

## Q231879: PRB: No Update Tables are Specified when Updating Records

	Article: Q231879
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox
	Last Modified: 25-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 6.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating an updateable SQL View in Visual FoxPro that is based on another
	updateable view using the CREATE SQL VIEW command, updating a record could
	result in the following error:
	
	  No update tables are specified. Use the Tables property of the cursor.
	
	In some cases, you might not receive an error message, but the table may not be
	updated.
	
	CAUSE
	=====
	
	This could be caused by not specifying the update tables in the Tables property
	of the view or by not specifying the UpdateName property of each field in the
	view.
	
	RESOLUTION
	==========
	
	When creating a SQL View in Visual FoxPro using the Create SQL View command,
	ensure the Tables and UpdateName fields are properly set.
	
	Notice in the sample below that the code uses the database name in the table and
	field references for the Tables and UpdateName properties.
	
	If V1 was a remote view to SQL Server, you would change the database name to the
	database owner (dbo). So the setting for the Tables property in the sample would
	be:
	
	  DBSETPROP('v1','view','tables','dbo.test1')
	
	Sample:
	
	  SET SAFETY OFF
	  CLOSE DATA ALL
	  CREATE DATA kbtest1
	  CREATE TABLE test1 (fld1 c(10) PRIMARY KEY, fld2 b(3),fld3 T)
	  INSERT INTO test1 VALUES ('1',2.322,DATETIME())
	  CREATE SQL VIEW v1 AS SELECT test1.fld1,test1.fld2,test1.fld3 FROM test1
	  CREATE SQL VIEW v2 AS SELECT v1.fld1,v1.fld2,v1.fld3 FROM v1
	
	  =DBSETPROP('v1','view','sendupdates',.T.)
	  =DBSETPROP('v1','view','tables','kbtest1!test1')
	  =DBSETPROP('v1.fld1','field','keyfield',.T.)
	  =DBSETPROP('v1.fld1','field','updatable',.T.)
	  =DBSETPROP('v1.fld1','field','updatename','kbtest1!test1.fld1')
	  =DBSETPROP('v1.fld2','field','updatable',.T.)
	  =DBSETPROP('v1.fld2','field','updatename','kbtest1!test1.fld2')
	  =DBSETPROP('v1.fld3','field','updatable',.T.)
	  =DBSETPROP('v1.fld3','field','updatename','kbtest1!test1.fld3')
	
	  =DBSETPROP('v2','view','sendupdates',.T.)
	  =DBSETPROP('v2','view','tables','kbtest1!v1')
	  =DBSETPROP('v2.fld1','field','keyfield',.T.)
	  =DBSETPROP('v2.fld1','field','updatable',.T.)
	  =DBSETPROP('v2.fld1','field','updatename','kbtest1!v1.fld1')
	  =DBSETPROP('v2.fld2','field','updatable',.T.)
	  =DBSETPROP('v2.fld2','field','updatename','kbtest1!v1.fld2')
	  =DBSETPROP('v2.fld3','field','updatable',.T.)
	  =DBSETPROP('v2.fld3','field','updatename','kbtest1!v1.fld3')
	
	  USE v2
	  UPDATE v2 SET fld2=3.255
	  SELECT v2
	  BROWSE
	  ?TABLEUPDATE()
	  BROWSE
	  SELECT v1
	  BROWSE
	  CLEAR ALL
	
	  SET SAFETY ON
	
	To clear the error, select the V2 view, and put the following code in the Command
	window:
	
	  =TableRevert()
	
	Then close all the tables and views.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Notice in the sample below that the Tables property is correctly set. The
	problem occurs when you do not specify the UpdateName property of the field or
	specify these incorrectly.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code to reproduce the problem:
	
	  SET SAFETY OFF
	  CLOSE DATA ALL
	  CREATE DATA kbtest1
	  CREATE TABLE test1 (fld1 c(10) PRIMARY KEY, fld2 b(3),fld3 T)
	  INSERT INTO test1 VALUES ('1',2.322,DATETIME())
	  CREATE SQL VIEW v1 AS SELECT test1.fld1,test1.fld2,test1.fld3 FROM test1
	  CREATE SQL VIEW v2 AS SELECT v1.fld1,v1.fld2,v1.fld3 FROM v1
	
	  =DBSETPROP('v1','view','sendupdates',.T.)
	  =DBSETPROP('v1','view','tables','kbtest1!test1')
	  =DBSETPROP('v1.fld1','field','keyfield',.T.)
	  =DBSETPROP('v1.fld1','field','updatable',.T.)
	  =DBSETPROP('v1.fld2','field','updatable',.T.)
	  =DBSETPROP('v1.fld3','field','updatable',.T.)
	
	  =DBSETPROP('v2','view','sendupdates',.T.)
	  =DBSETPROP('v2','view','tables','kbtest1!v1')
	  =DBSETPROP('v2.fld1','field','keyfield',.T.)
	  =DBSETPROP('v2.fld1','field','updatable',.T.)
	  =DBSETPROP('v2.fld2','field','updatable',.T.)
	  =DBSETPROP('v2.fld3','field','updatable',.T.)
	
	  USE v2
	  UPDATE v2 SET fld2=3.255
	  SELECT v2
	  BROWSE
	  ?TABLEUPDATE()
	  BROWSE
	  SELECT v1
	  BROWSE
	  CLEAR ALL
	
	  SET SAFETY ON
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0,6.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
