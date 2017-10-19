---
layout: page
title: "Q189418: INFO: Difference Between INDEXSEEK and KEYMATCH Functions"
permalink: /kb/189/Q189418/
---

## Q189418: INFO: Difference Between INDEXSEEK and KEYMATCH Functions

	Article: Q189418
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The purpose of the INDEXSEEK and KEYMATCH functions are exactly alike. They both
	search an index key for a specific expression, indicate if there is a matching
	key and remain on the current record. However, the difference between the two
	functions is that the INDEXSEEK function never moves the record pointer while
	KEYMATCH does move the record pointer, causing triggers to fire.
	
	MORE INFORMATION
	================
	
	The INDEXSEEK function searches an index key for a certain expression just like
	the KEYMATCH function, but the INDEXSEEK function does not fire any triggers
	when it searches because INDEXSEEK never leaves the current record. The KEYMATCH
	function leaves the current record and then goes back to it after completing the
	search, thus firing existing triggers. This makes the INDEXSEEK function a
	better function to use with tables that have triggers associated with them.
	Typically, you would use INDEXSEEK to search for an existing key before you have
	committed the record. The following code example demonstrates how the INDEXSEEK
	function works differently from the KEYMATCH function.
	
	Sample Code
	-----------
	
	     * Start code here.
	     PUBLIC oForm
	     DisplayStatus([Creating database...])
	     CLOSE DATA ALL
	     CREATE DATABASE 'SAMPLE1.DBC'
	     DisplayStatus([Creating table TABLE1...])
	     MakeTable_TABLE1()
	     DisplayStatus([Finished.])
	     SET MULTILOCKS ON
	     open data sample1.dbc
	     oForm= CREATEOBJECT('seekmatch')
	     oForm.VISIBLE = .T.
	
	     FUNCTION MakeTable_TABLE1
	     ***** Table setup for TABLE1 *****
	     CREATE TABLE 'TABLE1.DBF' NAME 'TABLE1' (CHAR1 C(10) NOT NULL)
	
	     ***** Create each index for TABLE1 *****
	     SET COLLATE TO 'MACHINE'
	     ALTER TABLE 'TABLE1' ADD PRIMARY KEY CHAR1 TAG CHAR1
	
	     ***** Change properties for TABLE1 *****
	     CREATE TRIGGER ON 'TABLE1' FOR INSERT AS inserted()
	     ENDFUNC
	
	     FUNCTION inserted
	     WAIT WINDOW 'Insert Trigger Fired'
	     RETURN .T.
	     ENDFUNC
	
	     FUNCTION DisplayStatus(lcMessage)
	     WAIT WINDOW NOWAIT lcMessage
	     ENDFUNC
	
	     **************************************************
	     *-- Class:        seekmatch
	     *-- ParentClass:  form
	     *-- BaseClass:    form
	     *
	     DEFINE CLASS seekmatch AS FORM
	
	        TOP = 0
	        LEFT = 0
	        HEIGHT = 181
	        WIDTH = 337
	        DOCREATE = .T.
	        BUFFERMODE = 0
	        CAPTION = "Form1"
	        NAME = "Form1"
	
	     ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	       TOP = 24, ;
	       LEFT = 24, ;
	       HEIGHT = 49, ;
	       WIDTH = 133, ;
	       CAPTION = "Do IndexSeek()", ;
	       NAME = "Command1"
	
	     ADD OBJECT command2 AS COMMANDBUTTON WITH ;
	       TOP = 24, ;
	       LEFT = 168, ;
	       HEIGHT = 49, ;
	       WIDTH = 145, ;
	       CAPTION = "Do KeyMatch()", ;
	       NAME = "Command2"
	
	     ADD OBJECT command3 AS COMMANDBUTTON WITH ;
	       TOP = 96, ;
	       LEFT = 96, ;
	       HEIGHT = 48, ;
	       WIDTH = 145, ;
	       CAPTION = "Close", ;
	       NAME = "Command3"
	
	     PROCEDURE INIT
	       SET SAFETY OFF
	       ZAP
	       SET SAFETY ON
	       SET ORDER TO CHAR1
	
	       FOR i = 1 TO 5
	          APPEND BLANK
	          REPLACE CHAR1 WITH "Test"+ALLTRIM(STR(i))
	       ENDFOR
	       =CURSORSETPROP('buffering',2)
	     ENDPROC
	
	     PROCEDURE command1.CLICK
	        APPEND BLANK
	        x = INDEXSEEK('Test3')
	        IF x
	           WAIT WINDOW "Record found and no trigger fired"
	        ELSE
	           WAIT WINDOW "Record not found"
	        ENDIF
	        =TABLEREVERT(.T.)
	     ENDPROC
	
	     PROCEDURE command2.CLICK
	        APPEND BLANK
	        x = KEYMATCH('Test3')
	        IF x
	          WAIT WINDOW 'Record found and trigger fired'
	        ELSE
	          WAIT WINDOW 'Record not found'
	        ENDIF
	          =TABLEREVERT(.T.)
	     ENDPROC
	
	     PROCEDURE command3.CLICK
	        THISFORM.RELEASE
	     ENDPROC
	
	     ENDDEFINE
	     *
	     *-- EndDefine: seekmatch
	
	Steps to Create Sample
	----------------------
	
	1. Copy the code into a new program and run the program. You will see a WAIT
	  WINDOW displayed five times. Press any key to proceed after each window
	  displays. A form appears.
	
	2. Click the "Do INDEXSEEK" command button. This appends a record and calls the
	  INDEXSEEK function to search for a string in the table. Note that the
	  function finds the record, but the Insert trigger is never fired.
	
	3. Click the "Do KEYMATCH" command button. This appends a record and calls the
	  KEYMATCH function, which searches for a string in the table. Note this time
	  the Insert trigger fires, displaying a WAIT WINDOW message.
	
	There are other differences between these functions, such as, the INDEXSEEK
	
	  function accepts a parameter that takes you to the matching record, which
	
	acts just like a Seek. However, the KEYMATCH function does not have this
	functionality.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by David Botzenhart, Microsoft Corporation
	
	
	Additional query words: kbVFp600 kbXbase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
