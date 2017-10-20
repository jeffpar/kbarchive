---
layout: page
title: "Q132331: PRB: Null Values Disappear When Selected in a Grid or Browse"
permalink: /kb/132/Q132331/
---

## Q132331: PRB: Null Values Disappear When Selected in a Grid or Browse

{% raw %}

	Article: Q132331
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The text string ".NULL." for null values disappears when the field is selected.
	When you move out of the field, ".NULL." reappears. This is by design.
	
	
	RESOLUTION
	==========
	
	To display a text string ".NULL." for the currently selected field, create a
	column class that displays a label with the text string ".NULL." via the
	column's DynamicCurrentControl property. Copy the following code into
	TESTNULL.PRG, and then run it. You will see a grid with one column and 10 rows.
	Some of the rows contain numeric values, and some contain ".NULL." as a text
	string. Press DOWN ARROW to move through the records, note that the text string
	value of ".NULL." is displayed when the pointer is on a record that contains a
	null value.
	
	    PUBLIC oForm
	    oForm = CREATEOBJECT('myform')
	    oForm.SHOW
	
	    DEFINE CLASS mytextbox AS textbox
	       SpecialEffect = 1
	       BorderStyle = 0
	       FontBold = .F.
	
	       PROCEDURE keypress
	       LPARAMETERS nKeyCode, nShiftAltCtrl
	
	         IF nKeyCode = 48
	           REPLACE testnull.name WITH .NULL.
	           This.Value = ".NULL."
	           NODEFAULT
	         ENDIF
	       ENDPROC
	    ENDDEFINE
	
	    DEFINE CLASS mytextbox1 AS mytextbox
	       ControlSource = "testnull.name"
	    ENDDEFINE
	
	    DEFINE CLASS mytextbox2 AS mytextbox
	       ControlSource = "This.Value"
	       Value = ".NULL."
	
	       PROCEDURE gotfocus
	          This.Value = ".NULL."
	       ENDPROC
	
	       PROCEDURE lostfocus
	          IF This.Value <> ".NULL."
	             REPLACE testnull.name WITH This.Value
	          ENDIF
	       ENDPROC
	    ENDDEFINE
	
	    DEFINE CLASS mycolumn AS column
	       DynamicCurrentControl = "IIF(ISNULL(testnull.name),'text2', 'text1')"
	       Sparse = .f.
	       Bound = .f.
	
	       ADD OBJECT text1 AS mytextbox1
	       ADD OBJECT text2 AS mytextbox2
	    ENDDEFINE
	
	    DEFINE CLASS mygrid AS grid
	       RecordSource = ALIAS()
	       ADD OBJECT c1 AS mycolumn
	    ENDDEFINE
	
	    DEFINE CLASS myform AS form
	       ADD OBJECT g1 AS mygrid
	
	       PROCEDURE load
	          DELETE FILE testnull.dbf
	          CREATE TABLE testnull (name c(10) NULL)
	
	          FOR cnt = 1 to 10
	            APPEND BLANK
	            REPLACE name WITH IIF(MOD(RAND()*100, 2) >=1, SYS(3), .NULL.)
	          ENDFOR
	          GO TOP
	       ENDPROC
	
	       PROCEDURE unload
	          CLOSE DATA ALL
	       ENDPROC
	    ENDDEFINE
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To see the behavior described above, run the following code in the Command
	window:
	
	     CREATE TABLE test (name C(10) NULL)
	     APPEND BLANK
	     REPLACE name WITH "Harry"
	     APPEND BLANK
	     REPLACE name WITH .NULL.
	     BROWSE
	
	The currently selected field has no text in it. Press the UP ARROW key or click
	in record 1. Record 2 now displays the ".NULL." text string.
	
	Additional query words: VFoxWin browse
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
