---
layout: page
title: "Q142287: PRB: Cannot Trap for Error #1739"
permalink: kb/142/Q142287/
---

## Q142287: PRB: Cannot Trap for Error #1739

	Article: Q142287
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
	
	Changing a property of a Cursor or Relational Object correctly initiates error
	#1739 "Property setting will not take effect until data environment reloaded."
	Unfortunately, the error cannot be trapped with an Error Event nor an ON ERROR
	command.
	
	WORKAROUND
	==========
	
	Avoid any possibility of getting the error. Always unload the Data Environment
	before changing the property. To unload the Data Environment, use the following
	steps to initiate the CloseTables method of the Data Environment:
	
	1. Create a new property of the form called "DataLoad" with an initial value of
	  False (.F.).
	
	2. Inside the OpenTables method, include the following code:
	
	     THISFORM.DataLoad=.T.
	
	3. Inside the CloseTables method, include the following code:
	
	     THISFORM.DataLoad=.F.
	
	4. Use the DataLoad flag to check to see if the Data Environment has been loaded
	  and act accordingly. In the following code, the Data Environment is unloaded
	  before the Cursor property is changed. The code can be located inside any
	  method or event of the form.
	
	        IF THISFORM.DataLoad
	           THISFORM.DataEnvironment.CloseTables
	        ENDIF
	        THISFORM.DataEnvironment.Cursor1.ALIAS="FOX"
	
	  The DataLoad flag is used to determine if the data environment has been loaded
	  because the CloseTables method will generate an error if the Data Environment
	  had not first been loaded with the OpenTables method. OpenTables is called
	  initially if AutoOpenTables is True (.T.).
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following chart is a listing of all the current properties for the Data
	Environment, Cursor, and Relation objects. If the Data Environment has been
	loaded with the OpenTables method, the chart will show what will occur if an
	attempt is made to change the property. Although Error #1739 will occur for many
	of the Cursor and Relation objects, the value of the property will change and be
	in effect the next time the Data Environment is loaded.
	
	Data Environment       Read Only      Error #1739         No Error
	
	AutoCloseTables            X
	AutoOpenTables             X
	InitialSelectedAlias                                          X
	Name                                                          X
	
	Cursor Object
	-------------
	
	Alias                                      X
	Database                                   X
	Name                                                          X
	ReadOnly                                   X
	BufferModeOverride                         X
	Exclusive                                  X
	NoDataOnLoad                               X
	CursorSource                               X
	Filter                                                        X
	Order                                                         X
	
	Relation Object
	---------------
	
	ChildAlias                                 X
	OneToMany                                  X
	ChildOrder                                 X
	ParentAlias                                X
	Name                                                          X
	RelationalExpr                             X
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add any table to the Data Environment of the form.
	
	3. In the Load event for the form, type the following:
	
	     ON ERROR WAIT WINDOW "This is an Error"
	
	4. Run the form.
	
	5. In the Command window, type the following:
	
	     _SCREEN.Forms(1).DataEnvironment.Cursor1.Alias="FOX"
	
	6. The ON ERROR routine does not activate. A FoxPro Error Message is displayed
	  on the screen.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
