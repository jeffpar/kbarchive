---
layout: page
title: "Q237569: PRB: Scrolling a List Box with DELETED Off Moves Record Pointer"
permalink: /kb/237/Q237569/
---

## Q237569: PRB: Scrolling a List Box with DELETED Off Moves Record Pointer

{% raw %}

	Article: Q237569
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport
	Last Modified: 09-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 6.0, scrolling a list box using the thumb moves the record
	pointer. This behavior occurs when the following is true:
	
	1. The list box RowSourceType is set to "6-Fields."
	
	2. The list box RowSource is set to a field in a cursor or table.
	
	3. DELETED is OFF.
	
	RESOLUTION
	==========
	
	Populate the list box with an alternate RowSourceType, such as an array.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new program in Visual FoxPro 6.0.
	
	2. Add the following code to the program, save it as LISTBOX.PRG and run it:
	
	  *~~~~~~~~~~~~~~~~~~~
	  *~~Code starts here
	  *
	  PUBLIC oLstForm
	  oLstForm = CREATEOBJECT('FORM1')
	
	  DEFINE CLASS form1 AS FORM
	
	  	HEIGHT = 285
	  	WIDTH = 184
	  	DOCREATE = .T.
	  	AUTOCENTER = .T.
	  	BORDERSTYLE = 1
	  	CAPTION = "List Box Problem"
	  	MAXBUTTON = .F.
	  	MINBUTTON = .F.
	  	NAME = "form1"
	
	  	ADD OBJECT list1 AS LISTBOX WITH ;
	  		ROWSOURCETYPE = 6, ;
	  		ROWSOURCE = "lst_test.id", ;
	  		HEIGHT = 204, ;
	  		LEFT = 17, ;
	  		TOP = 8, ;
	  		WIDTH = 150, ;
	  		NAME = "List1"
	
	  	ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	  		TOP = 219, ;
	  		LEFT = 17, ;
	  		HEIGHT = 27, ;
	  		WIDTH = 150, ;
	  		CAPTION = "Toggle SET DELETED", ;
	  		NAME = "Command1"
	
	  	ADD OBJECT text1 AS TEXTBOX WITH ;
	  		ALIGNMENT = 2, ;
	  		HEIGHT = 23, ;
	  		LEFT = 17, ;
	  		READONLY = .T., ;
	  		TOP = 254, ;
	  		WIDTH = 150, ;
	  		NAME = "Text1"
	
	  	PROCEDURE DESTROY
	  		SET DELETED &cOldDel
	  		SET STATUS BAR &cOldStatBar
	  		USE IN LST_TEST
	  	ENDPROC
	
	  	PROCEDURE LOAD
	  		THIS.VISIBLE = .T.
	  		PUBLIC cOldDel, cOldStatBar
	  		STORE SET('DELETED') TO cOldDel
	  		STORE SET ('status bar') TO cOldStatBar
	  		SET DELETED OFF
	  		SET STATUS BAR ON
	
	  		CREATE CURSOR LST_TEST (ID N(2))
	  		FOR i = 1 TO 50
	  			INSERT INTO LST_TEST (ID) VALUES (i)
	  		ENDFOR
	  	ENDPROC
	
	  	PROCEDURE command1.CLICK
	  		LOCAL cDelSet
	  		cDelSet = SET('DELETED')
	  		IF cDelSet = 'ON'
	  			SET DELETED OFF
	  		ELSE
	  			SET DELETED ON
	  		ENDIF
	  		THISFORM.text1.VALUE = "DELETED IS " + SET('DELETED')
	  	ENDPROC
	
	  	PROCEDURE text1.INIT
	  		THIS.VALUE = "DELETED IS " + SET('DELETED')
	  	ENDPROC
	
	  ENDDEFINE
	  *
	  *~~End Code
	  *~~~~~~~~~~~~~~~~~~~~~
	
	The list box is populated by a field in a temporary cursor. The field contains
	numbers 1 through 50 (which correspond to the record number). When the form
	initially starts, DELETED is OFF.
	
	Scroll the list box using the thumb (not the ARROW keys) and watch the record
	number in the STATUS BAR. Notice that the record pointer moves as the list box
	is scrolled.
	
	Click the command button to SET DELETED ON. Scroll the list box using the thumb
	again. Watch the status bar and notice that the record pointer does not move.
	
	REFERENCES
	==========
	
	For additional information about populating a list box with values from an
	array, click on the article number below to view it in the Microsoft Knowledge
	Base:
	
	  Q129329 HOWTO: Populate a Form's List Box Object from an Array
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Trevor Hancock, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
