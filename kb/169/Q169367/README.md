---
layout: page
title: "Q169367: FIX: Cannot Update More Than 23 Columns of a View"
permalink: /kb/169/Q169367/
---

## Q169367: FIX: Cannot Update More Than 23 Columns of a View

{% raw %}

	Article: Q169367
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to update more than 23 columns of a view, the update fails and the
	following error message appears:
	
	  Error 1812 SQL: Statement too long
	
	CAUSE
	=====
	
	There is a fixed limit to how complex the WHERE clause of a query can be. It is
	limited to 200 simple expression elements or less (where one element is a
	variable reference, or a function call, etc.). With the WhereType view property
	set to KeyAndModified, and then updating all the fields will generate an UPDATE
	query that exceeds the WHERE clause limits.
	
	RESOLUTION
	==========
	
	Setting the WhereType of the View to Key (1) instead of KeyAndModified (3)
	resolves this problem.
	
	In the sample code in the Steps to Reproduce Behavior below, change the following
	line of code:
	
	     =DBSetProp('VGOLF', 'View', 'WhereType', 3)
	
	to:
	
	     =DBSetProp('VGOLF', 'View', 'WhereType', 1)
	
	It is the 5th line below:
	
	***************** View setup for VGOLF ***************
	
	After making the change, rerun the program and the update will be successful.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Place the following code into a program file and then run the program:
	
	     CLOSE DATA ALL
	     CREATE DATABASE 'TEST24.DBC'
	
	     ***** Table setup for GOLF *****
	     CREATE TABLE 'GOLF.DBF' NAME 'GOLF' (ID C(10) NOT NULL, ;
	                        FNAME C(10) NOT NULL, ;
	                        LNAME C(10) NOT NULL, ;
	                        ADDRESS C(10) NOT NULL, ;
	                        CITY C(10) NOT NULL, ;
	                        STATE C(10) NOT NULL, ;
	                        ZIP C(10) NOT NULL, ;
	                        HANDICAP C(10) NOT NULL, ;
	                        HOLE1 C(10) NOT NULL, ;
	                        HOLE2 C(10) NOT NULL, ;
	                        HOLE3 C(10) NOT NULL, ;
	                        HOLE4 C(10) NOT NULL, ;
	                        HOLE5 C(10) NOT NULL, ;
	                        HOLE6 C(10) NOT NULL, ;
	                        HOLE7 C(10) NOT NULL, ;
	                        HOLE8 C(10) NOT NULL, ;
	                        HOLE9 C(10) NOT NULL, ;
	                        HOLE10 C(10) NOT NULL, ;
	                        HOLE11 C(10) NOT NULL, ;
	                        HOLE12 C(10) NOT NULL, ;
	                        HOLE13 C(10) NOT NULL, ;
	                        HOLE14 C(10) NOT NULL, ;
	                        HOLE15 C(10) NOT NULL, ;
	                        HOLE16 C(10) NOT NULL, ;
	                        HOLE17 C(10) NOT NULL, ;
	                        HOLE18 C(10) NOT NULL, ;
	                        TEST C(10) NOT NULL)
	
	     ***** Create each index for GOLF *****
	     SET COLLATE TO 'MACHINE'
	     ALTER TABLE 'GOLF' ADD PRIMARY KEY ID TAG PKEY
	
	     ***** Change properties for GOLF *****
	     ***************** View setup for VGOLF ***************
	     CREATE SQL VIEW "VGOLF" ;
	        AS SELECT * FROM test24!golf
	     ****
	     =DBSetProp('VGOLF', 'View', 'UpdateType', 1)
	     =DBSetProp('VGOLF', 'View', 'WhereType', 3)
	     =DBSetProp('VGOLF', 'View', 'FetchMemo', .T.)
	     =DBSetProp('VGOLF', 'View', 'SendUpdates', .T.)
	     =DBSetProp('VGOLF', 'View', 'FetchSize', 100)
	     =DBSetProp('VGOLF', 'View', 'MaxRecords', -1)
	     =DBSetProp('VGOLF', 'View', 'Tables', 'test24!golf')
	     =DBSetProp('VGOLF', 'View', 'Prepared', .F.)
	     =DBSetProp('VGOLF', 'View', 'CompareMemo', .T.)
	     =DBSetProp('VGOLF', 'View', 'FetchAsNeeded', .F.)
	
	     *! Field Level Properties for VGOLF
	     * Props for the VGOLF.id field.
	     =DBSetProp('VGOLF.id', 'Field', 'KeyField', .T.)
	     =DBSetProp('VGOLF.id', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.id', 'Field', 'UpdateName', 'test24!golf.id')
	     =DBSETPROP("VGOLF.id", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.fname field.
	     =DBSetProp('VGOLF.fname', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.fname', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.fname', 'Field', 'UpdateName', 'test24!golf.fname')
	     =DBSETPROP("VGOLF.fname", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.lname field.
	     =DBSetProp('VGOLF.lname', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.lname', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.lname', 'Field', 'UpdateName', 'test24!golf.lname')
	     =DBSETPROP("VGOLF.lname", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.address field.
	     =DBSetProp('VGOLF.address', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.address', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.address', 'Field', 'UpdateName', ;
	     'test24!golf.address')
	     =DBSETPROP("VGOLF.address", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.city field.
	     =DBSetProp('VGOLF.city', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.city', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.city', 'Field', 'UpdateName', 'test24!golf.city')
	     =DBSETPROP("VGOLF.city", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.state field.
	     =DBSetProp('VGOLF.state', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.state', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.state', 'Field', 'UpdateName', 'test24!golf.state')
	     =DBSETPROP("VGOLF.state", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.zip field.
	     =DBSetProp('VGOLF.zip', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.zip', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.zip', 'Field', 'UpdateName', 'test24!golf.zip')
	     =DBSETPROP("VGOLF.zip", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.handicap field.
	     =DBSetProp('VGOLF.handicap', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.handicap', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.handicap', 'Field', 'UpdateName', ;
	     'test24!golf.handicap')
	     =DBSETPROP("VGOLF.handicap", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole1 field.
	     =DBSetProp('VGOLF.hole1', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole1', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole1', 'Field', 'UpdateName', 'test24!golf.hole1')
	     =DBSETPROP("VGOLF.hole1", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole2 field.
	     =DBSetProp('VGOLF.hole2', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole2', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole2', 'Field', 'UpdateName', 'test24!golf.hole2')
	     =DBSETPROP("VGOLF.hole2", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole3 field.
	     =DBSetProp('VGOLF.hole3', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole3', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole3', 'Field', 'UpdateName', 'test24!golf.hole3')
	     =DBSETPROP("VGOLF.hole3", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole4 field.
	     =DBSetProp('VGOLF.hole4', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole4', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole4', 'Field', 'UpdateName', 'test24!golf.hole4')
	     =DBSETPROP("VGOLF.hole4", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole5 field.
	     =DBSetProp('VGOLF.hole5', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole5', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole5', 'Field', 'UpdateName', 'test24!golf.hole5')
	     =DBSETPROP("VGOLF.hole5", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole6 field.
	     =DBSetProp('VGOLF.hole6', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole6', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole6', 'Field', 'UpdateName', 'test24!golf.hole6')
	     =DBSETPROP("VGOLF.hole6", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole7 field.
	     =DBSetProp('VGOLF.hole7', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole7', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole7', 'Field', 'UpdateName', 'test24!golf.hole7')
	     =DBSETPROP("VGOLF.hole7", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole8 field.
	     =DBSetProp('VGOLF.hole8', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole8', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole8', 'Field', 'UpdateName', 'test24!golf.hole8')
	     =DBSETPROP("VGOLF.hole8", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole9 field.
	     =DBSetProp('VGOLF.hole9', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole9', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole9', 'Field', 'UpdateName', 'test24!golf.hole9')
	     =DBSETPROP("VGOLF.hole9", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole10 field.
	     =DBSetProp('VGOLF.hole10', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole10', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole10', 'Field', 'UpdateName', 'test24!golf.hole10')
	     =DBSETPROP("VGOLF.hole10", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole11 field.
	     =DBSetProp('VGOLF.hole11', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole11', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole11', 'Field', 'UpdateName', 'test24!golf.hole11')
	     =DBSETPROP("VGOLF.hole11", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole12 field.
	     =DBSetProp('VGOLF.hole12', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole12', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole12', 'Field', 'UpdateName', 'test24!golf.hole12')
	     =DBSETPROP("VGOLF.hole12", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole13 field.
	     =DBSetProp('VGOLF.hole13', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole13', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole13', 'Field', 'UpdateName', 'test24!golf.hole13')
	     =DBSETPROP("VGOLF.hole13", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole14 field.
	     =DBSetProp('VGOLF.hole14', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole14', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole14', 'Field', 'UpdateName', 'test24!golf.hole14')
	     =DBSETPROP("VGOLF.hole14", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole15 field.
	     =DBSetProp('VGOLF.hole15', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole15', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole15', 'Field', 'UpdateName', 'test24!golf.hole15')
	     =DBSETPROP("VGOLF.hole15", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole16 field.
	     =DBSetProp('VGOLF.hole16', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole16', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole16', 'Field', 'UpdateName', 'test24!golf.hole16')
	     =DBSETPROP("VGOLF.hole16", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole17 field.
	     =DBSetProp('VGOLF.hole17', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole17', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole17', 'Field', 'UpdateName', 'test24!golf.hole17')
	     =DBSETPROP("VGOLF.hole17", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.hole18 field.
	     =DBSetProp('VGOLF.hole18', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.hole18', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.hole18', 'Field', 'UpdateName', 'test24!golf.hole18')
	     =DBSETPROP("VGOLF.hole18", "Field", "DataType", "C(10)")
	     * Props for the VGOLF.test field.
	     =DBSetProp('VGOLF.test', 'Field', 'KeyField', .F.)
	     =DBSetProp('VGOLF.test', 'Field', 'Updatable', .T.)
	     =DBSetProp('VGOLF.test', 'Field', 'UpdateName', 'test24!golf.test')
	     =DBSETPROP("VGOLF.test", "Field", "DataType", "C(10)")
	
	     * ----------------------------------------------------------------
	     CLEAR
	     USE VGolf
	     BROWSE NOWAIT
	     WAIT WINDOW TIME 3 "About to insert a new record into the view."
	
	     * Create one blank record *
	     APPEND BLANK
	     * Fill in first record *
	     FOR i = 1 TO FCOUNT()
	       REPLACE (FIELD(i)) WITH "I"
	     ENDFOR
	
	     l_lSuccess = TABLEUPDATE()
	     SHOW WINDOW VGolf REFRESH SAME
	     WAIT WINDOW TIME 3 IIF(l_lSuccess, "Insert sucessfully complete", ;
	     "Insert Failed, here's why...")
	
	     IF l_lSuccess
	       WAIT WINDOW TIME 3 "Now here comes an update of 27 fields."
	       FOR i = 1 TO FCOUNT()
	         REPLACE (FIELD(i)) WITH "U"
	       ENDFOR
	
	       l_lSuccess = TABLEUPDATE()
	       SHOW WINDOW VGolf REFRESH SAME
	       WAIT WINDOW TIME 3 IIF(l_lSuccess, "Update successful", "Update ;
	       Failed, here's why...")
	     ENDIF
	
	     IF !l_lSuccess
	       DIMENSION g_aError[2]
	       =AERROR(g_aerror)
	       =MESSAGEBOX("Error " + STR(g_aerror[1]) + " " + g_aerror[2])
	       WAIT WINDOW TIME 2 "Reverting the update..."
	       =TABLEREVERT()
	     ENDIF
	
	     WAIT WINDOW TIME 2 "Test complete..."
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
