---
layout: page
title: "Q129314: SCATTER &amp; GATHER Commands Have a New NAME Argument"
permalink: kb/129/Q129314/
---

## Q129314: SCATTER &amp; GATHER Commands Have a New NAME Argument

	Article: Q129314
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SCATTER and GATHER commands have a new argument (NAME <ObjectName>)
	that enables the Object Oriented Programming (OOP) features of Visual FoxPro.
	This article shows by example how to use this new argument.
	
	MORE INFORMATION
	================
	
	SCATTER Command
	---------------
	
	SCATTER NAME <ObjectName> creates a row or record type of object with
	properties that have the same name as the fields in the table. The values of the
	properties are initialized to the same value as that of the fields in the table.
	General and memo field types do not have a property created for them in the
	object.
	
	The syntax for the SCATTER command is:
	
	  SCATTER
	    [FIELDS <FieldNameList>
	    | FIELDS LIKE <Skeleton> | FIELDS EXCEPT <Skeleton>][MEMO]
	    TO <ArrayName> | TO <ArrayName> BLANK | MEMVAR | MEMVAR BLANK
	    | NAME <ObjectName>
	
	GATHER Command
	--------------
	
	GATHER NAME <ObjectName> writes a row or record of values from the object
	to the table where the object properties have names that are identical to the
	table field names.
	
	The syntax for the GATHER command is:
	
	  GATHER FROM <ArrayName> | MEMVAR | NAME <ObjectName>
	    [FIELDS <FieldList> | FIELDS LIKE <Skeleton>
	    | FIELDS EXCEPT <Skeleton>]
	    [MEMO]
	
	Code Sample
	-----------
	
	The following code defines a custom class that uses the SCATTER and GATHER
	commands with their object argument, NAME. The code demonstrates:
	
	- How to create the class.
	
	- How to instantiate the object from the class.
	
	- How to use SCATTER NAME and GATHER NAME to read and write to a table through
	  an object.
	
	- How to send messages to the object to access properties of the object.
	
	  * Program start.
	  * The following three commands close files and set up the environment
	  * to send output to the Visual FoxPro main screen.
	
	  ACTIVATE SCREEN
	  CLEAR
	  CLOSE DATABASES
	
	  * The next three commands create a new table and add two new records
	  * with values.
	
	  CREATE TABLE test1 (Name C(10), Age N(3))
	  INSERT INTO test1 (Name,Age) ;
	                  VALUES ('John Doe',43)
	  INSERT INTO test1 (Name,Age) ;
	                  VALUES ('Jane Smith',29)
	  CLOSE DATABASES
	
	  * The following command creates a new object 'oTable' from the custom
	  * class 'Table' defined at the end of this program. It uses the table
	  * 'test1' that was just made. The object 'oRow' is automatically
	  * created during the creation of oTable from the SCATTER NAME <object>
	  * command and has a property created for each field in the table.
	
	  oTable=CREATEOBJECT('Table','test1')
	  LIST
	
	  * The following command sends a message to the object oTable to run the
	  * method Next which moves the record pointer in the table ahead one.
	
	  oTable.Next()
	
	  * The next two commands send messages to assign new values to the
	  * properties of oTable.oRow.
	
	  oTable.oRow.Name='New Name'
	  oTable.oRow.Age=1
	
	  * Note that the following command is calling the user defined Gather
	  * function or method which then calls the GATHER NAME command.
	
	  oTable.Gather()
	
	  * The following sends a message to object oTable to run the method Previous
	  * and assign new values to properties before writing them to the
	  * table 'test1.dbf' with GATHER NAME command.
	
	  oTable.Previous()
	  oTable.oRow.Name='VFP'
	  oTable.oRow.Age=0
	  oTable.Gather()
	  LIST
	  RETURN
	
	  ***************************
	  *** Class Definition    ***
	  ***************************
	
	  DEFINE CLASS Table AS Custom
	
	  * The keyword PROTECTED scopes the methods, properties and
	  * objects making them only accessible to methods in the
	  * current class definition.
	
	  PROTECTED cFileName
	  cFileName=''
	  oRow=''
	
	  * The Init event runs each time a new object is instantiated
	  * from its class.
	
	  PROTECTED FUNCTION Init(tcFileName)
	     * tcFileName: second parameter of CreateObject command,
	     * which is the name of the file to open.
	     SELECT 0
	     * Open the file in the next available workarea.
	     this.Open(tcFileName)
	     * Note that the following command is calling the user
	     * defined Scatter method, which then calls the
	     * SCATTER NAME command.
	     this.Scatter()
	     RETURN .T.
	  ENDFUNC
	
	  FUNCTION Open(tcf)
	     * tcf: the filename to open.
	     USE (tcf)
	     RETURN .T.
	  ENDFUNC
	
	  FUNCTION Close
	     USE
	     RETURN .T.
	  ENDFUNC
	
	  FUNCTION Next
	     IF NOT EOF()
	        SKIP
	     ENDIF
	     IF EOF() AND NOT BOF()
	        SKIP -1
	     ENDIF
	     this.Scatter()
	     RETURN .T.
	  ENDFUNC
	
	  FUNCTION Previous
	     IF NOT BOF()
	        SKIP -1
	     ENDIF
	     this.Scatter()
	     RETURN .T.
	  ENDFUNC
	
	  FUNCTION Scatter
	
	     * SCATTER NAME <objectname>
	     * In Visual FoxPro only, creates an object
	     * the properties of which have the same names as
	     * the fields in the table. The values of each
	     * of the object's properties are the contents
	     * of the fields in the table.
	
	     SCATTER NAME this.oRow MEMO
	     RETURN .T.
	  ENDFUNC
	
	  FUNCTION Gather
	
	     * GATHER NAME <objectname>
	     * Specifies an object the properties of which
	     * have the same names as fields in the table.
	     * The contents of each field are replaced by
	     * the value of the property with the same
	     * names as the fields.
	
	     GATHER NAME this.oRow MEMO
	     RETURN .T.
	  ENDFUNC
	
	  FUNCTION Destroy
	     this.Close()
	     RETURN .T.
	  ENDFUNC
	
	  ENDDEFINE
	  * End of code sample
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
