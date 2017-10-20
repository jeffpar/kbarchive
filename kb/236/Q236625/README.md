---
layout: page
title: "Q236625: PRB: TABLEREVERT Fails with Row Buffering and List Box RowSource"
permalink: /kb/236/Q236625/
---

## Q236625: PRB: TABLEREVERT Fails with Row Buffering and List Box RowSource

{% raw %}

	Article: Q236625
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbOOP kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox
	Last Modified: 17-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Fields do not revert to unedited values after issuing a TABLEREVERT command.
	
	CAUSE
	=====
	
	This behavior occurs when Optimistic or Pessimistic Row Buffering is enabled and
	the table being reverted to unedited values serves as the RowSource for a list
	box with the RowSourceType set to 6 - Fields.
	
	RESOLUTION
	==========
	
	Set the buffer mode of the table to one of the following values:
	
	+-------------------------------------------+
	| Buffer Mode | Description                 | 
	+-------------------------------------------+
	| 4           | Pessimistic table buffering | 
	+-------------------------------------------+
	| 5           | Optimistic table buffering  | 
	+-------------------------------------------+
	
	MORE INFORMATION
	================
	
	This problem does not happen with drop-down list-type combo boxes.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named 'CBODEMO.PRG' using the following code:
	
	  PUBLIC ox
	  ox=CREATEOBJECT('testfrm')
	  ox.SHOW
	
	  DEFINE CLASS testfrm AS FORM
	
	     TOP = 0
	     LEFT = 0
	     HEIGHT = 237
	     WIDTH = 325
	     DOCREATE = .T.
	     CAPTION = "Form1"
	     NAME = "Form1"
	     editing = .F.
	
	     ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	        TOP = 192, ;
	        LEFT = 120, ;
	        HEIGHT = 27, ;
	        WIDTH = 84, ;
	        CAPTION = "Edit", ;
	        NAME = "Command1"
	
	     ADD OBJECT command2 AS COMMANDBUTTON WITH ;
	        TOP = 192, ;
	        LEFT = 228, ;
	        HEIGHT = 27, ;
	        WIDTH = 84, ;
	        CAPTION = "Close", ;
	        NAME = "Command2"
	
	     ADD OBJECT text1 AS TEXTBOX WITH ;
	        CONTROLSOURCE = "testtbl.charfldb", ;
	        HEIGHT = 23, ;
	        LEFT = 24, ;
	        TOP = 60, ;
	        WIDTH = 100, ;
	        NAME = "Text1"
	
	     ADD OBJECT list1 AS listbox WITH ;
	        ROWSOURCETYPE = 6, ;
	        ROWSOURCE = "testtbl.charflda", ;
	        HEIGHT = 145, ;
	        LEFT = 132, ;
	        TOP = 24, ;
	        WIDTH = 181, ;
	        NAME = "List1"
	
	     PROCEDURE LOAD
	        PUBLIC MULTI_LOCK_STAT
	        MULTI_LOCK_STAT=SET('multilocks')
	        IF !USED('testtbl')
	           CREATE CURSOR testtbl (charflda c(10), charfldb c(10))
	           SELECT testtbl
	           INSERT INTO testtbl VALUES ('1000000000','1000000000')
	           INSERT INTO testtbl VALUES ('2000000000','0000000000')
	        ENDIF
	        IF MULTI_LOCK_STAT='OFF'
	           SET MULTILOCKS ON
	        ENDIF
	        =CURSORSETPROP('Buffering',3,'testtbl')
	     ENDPROC
	
	     PROCEDURE UNLOAD
	        SET MULTILOCKS &MULTI_LOCK_STAT
	     ENDPROC
	     
	     PROCEDURE command1.REFRESH
	        IF THIS.PARENT.editing
	           THIS.CAPTION='Save'
	        ELSE
	           THIS.CAPTION='Edit'
	        ENDIF
	     ENDPROC
	
	     PROCEDURE command1.CLICK
	        IF THIS.CAPTION = "Edit"
	           THISFORM.editing = .T.
	        ELSE
	           =TABLEUPDATE(.F.,.F.,"testtbl")
	           THISFORM.editing = .F.
	        ENDIF
	        THISFORM.REFRESH
	        IF THISFORM.editing
	           THISFORM.text1.SETFOCUS
	        ENDIF
	     ENDPROC
	
	     PROCEDURE command2.CLICK
	        IF THIS.CAPTION = "Close"
	           THISFORM.RELEASE
	           USE IN testtbl
	        ELSE
	           =TABLEREVERT(.T.,"testtbl")
	           THISFORM.editing = .F.
	        ENDIF
	        IF USED('testtbl')
	           THISFORM.REFRESH
	        ENDIF
	     ENDPROC
	
	     PROCEDURE command2.REFRESH
	        IF THIS.PARENT.editing
	           THIS.CAPTION='Revert'
	        ELSE
	           THIS.CAPTION='Close'
	        ENDIF
	     ENDPROC
	
	     PROCEDURE text1.REFRESH
	        IF THIS.PARENT.editing
	           THIS.ENABLED=.T.
	        ELSE
	           THIS.ENABLED=.F.
	        ENDIF
	     ENDPROC
	
	     PROCEDURE list1.CLICK
	        THISFORM.REFRESH
	     ENDPROC
	  ENDDEFINE
	
	2. From the Command window, type DO CBODEMO.
	
	3. Click on the first item of the list box.
	
	4. Click the Edit button to enable the text box.
	
	5. Change the value displayed in the text box.
	
	6. Click the Revert button, and note that the value displayed in the text box
	  did not revert to its unedited value.
	
	7. Change the following line of code:
	
	  =CURSORSETPROP('Buffering',3,'testtbl')
	
	so that it now reads:
	
	  =CURSORSETPROP('Buffering',5,'testtbl')
	
	8. Repeat steps 2 through 6 and note that the value displayed in the text box
	  reverts to its unedited value.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	Additional query words: ComboBox Buffering Controls
	
	======================================================================
	Keywords          : kbDatabase kbOOP kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
