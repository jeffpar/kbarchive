---
layout: page
title: "Q131386: PRB: Default Values Not Written on Local Views"
permalink: /kb/131/Q131386/
---

## Q131386: PRB: Default Values Not Written on Local Views

{% raw %}

	Article: Q131386
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a table in a database contains default values and a blank record is
	appended to a local view based on that table, the defaults are not input into
	the fields automatically. If the view is closed and reopened, the default values
	are displayed.
	
	CAUSE
	=====
	
	The default clause in the database is part of the table definition. It is not
	defined when the local view is created. When the view is closed, the data is
	updated in the table, and default values are written.
	
	RESOLUTION
	==========
	
	You can use the DBSETPROP() function to attach a default value to a field in a
	view. This will automatically insert a default value when a new record is
	appended. Use the following syntax to set a default value:
	
	     =DBSETPROP('<View.Fieldname>','FIELD','DefaultValue', '<value>')
	
	For more information about the DBSETPROP() function, search for DBSETPROP() in
	the Visual FoxPro Help menu.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following code sample creates a local view that contains default values. To
	run this code, copy and paste it into a program. Then run the program. When the
	view is browsed, append records. The default values are inserted in the view.
	
	Code Sample
	-----------
	
	  CLOSE DATABASES
	  IF NOT FILE('testview.dbf')  &&creates a database and opens it
	     CREATE DATA dbctest
	     CREATE TABLE testview ;
	       (idnumber C (8), NAME C(20) DEFAULT "Smith", city C(20))
	  ELSE
	     SELECT 0
	     USE testview
	     dataopen=CursorGetProp('database','testview')
	     SET DATA TO &dataopen
	  ENDIF
	
	  * Creates a view and sets the view properties
	  CREATE SQL VIEW myview AS SELECT * FROM testview
	  =DBSetProp('myview.name','FIELD','DefaultValue',"'Smith'")
	  =DBSetProp('myview.idnumber','field','keyfield',.T.)
	  =DBSetProp('myview','view','SendUpdates',.T.)
	  =DBSetProp('myview.idnumber','field','Updatable',.T.)
	  =DBSetProp('myview.name','field','Updatable',.T.)
	  =DBSetProp('myview.city','field','Updatable',.T.)
	
	  SELECT 0
	  USE myview
	  =DBSetProp('myview','view','tables','testview')
	  BROWSE
	  USE
	
	  DELETE VIEW myview
	  CLOSE DATA ALL
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
