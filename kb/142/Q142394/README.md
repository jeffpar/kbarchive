---
layout: page
title: "Q142394: PRB: CLEAR ALL Removes Back-Links from Data Environment Object"
permalink: /kb/142/Q142394/
---

## Q142394: PRB: CLEAR ALL Removes Back-Links from Data Environment Object

{% raw %}

	Article: Q142394
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the CLEAR ALL command is issued with an open Data Environment Object, the
	back-links of the tables contained in the Data Environment are destroyed.
	Consecutive access of these tables will yield this error:
	
	  Table 'tablename.dbf' is not marked as belonging to the 'databasename'
	  database. Would you like to create the back link to mark it?
	
	RESOLUTION
	==========
	
	The tables must be opened exclusively to properly update the back links. If the
	tables are not opened exclusively the following error will occur in the Init
	event of the DataEnvironment class:
	
	  File must be opened exclusively.
	
	To work around this behavior, be sure to release all DataEnvironment objects
	before issuing the CLEAR ALL command.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Data Environments can be classed programatically. Once instantiated, you may
	issue the CLEAR ALL command with open tables and database containers. If the
	CLEAR ALL command is issued with an open Data Environment Object, the tables
	open at that time lose their links to the database container.
	
	This does not occur with forms' Data Environments.
	
	Code to Demonstrate Behavior
	----------------------------
	
	The following program demonstrates this behavior. Each time this program is run
	subsequent to the first time, Visual FoxPro produces the error listed above for
	each table that the DataEnvironment class defines.
	
	  SET DEFAULT TO c:\vfp
	  CLOSE DATA
	  oDe = CreateObject('de')
	  CLEAR ALL    && remove this line, and run the program twice to
	               && resolve the problem
	
	  DEFINE CLASS de AS DataEnvironment
	
	  Name = "DE"
	  AutoCloseTables = .F.
	  AutoOpenTables = .T.
	  InitialSelectedAlias = "customer"
	
	  ADD OBJECT oCustomer AS cursor WITH ;
	     Alias = 'customer', ;
	     Database = CURDIR() + 'samples\data\testdata.dbc', ;
	     CursorSource = 'customer', ;
	     Exclusive = .T.
	
	  PROCEDURE Init
	     THIS.OpenTables
	  ENDPROC
	  ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
