---
layout: page
title: "Q136578: Code Samples Demonstrate How to Use the Outline Control"
permalink: kb/136/Q136578/
---

## Q136578: Code Samples Demonstrate How to Use the Outline Control

	Article: Q136578
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides code that demonstrates how to use the Outline control.
	
	MORE INFORMATION
	================
	
	Code Sample One
	---------------
	
	In this example, the user selects a database (.dbc file). Then all of its tables,
	fields, and indexes are listed hierarchically in the outline control.
	
	  **** BEGINNING ***
	  *: TEST
	  PUBLIC frm1
	  frm1=CREA('Myform')
	  frm1.SHOW
	
	  FOR i=1 TO frm1.CONTROLCOUNT
	     frm1.CONTROLS(i).VISIBLE=.T.
	  ENDFOR
	
	  *:*************************************************************************
	  *:
	  *: Class:myform  BaseClass: FORM
	  *:
	  *:*************************************************************************
	
	  DEFINE CLASS myform AS FORM
	     SCALEMODE=3
	     WIDTH=600
	     HEIGHT=600
	
	     ADD OBJECT CtnOle AS cont1
	     ADD OBJECT cmd1 AS cmdbtn
	
	     PROCEDURE INIT
	        THISFORM.CtnOle.ole1.ADDITEM('test')
	        THISFORM. CtnOle.ole1.ADDITEM('test1')
	
	        THISFORM. CtnOle.ole1.indent(0)=1
	        THISFORM. CtnOle.ole1.indent(1)=2
	     ENDPROC
	
	  ENDDEFINE
	
	  *:************************************************************************
	  *:
	  *: Class:Cont1 BaseClass: CONTAINER
	  *:
	  *:*************************************************************************
	
	  DEFINE CLASS Cont1 AS CONTAINER
	     WIDTH=400
	     TOP=50
	     LEFT=50
	     HEIGHT=400
	     ADD OBJECT ole1 AS OleCtrl
	  ENDDEFINE
	
	  *:*************************************************************************
	  *:
	  *: Class:OleCtrl  BaseClass: OLECONTROL
	  *:
	  *:*************************************************************************
	
	  DEFINE CLASS OleCtrl AS OLECONTROL
	     OLECLASS='MSoutl.outline'
	     TOP=60
	     LEFT=60
	     WIDTH=280
	     HEIGHT=250
	     VISIBLE=.T.
	  ENDDEFINE
	
	  *:*************************************************************************
	  *:
	  *: Class:cmdbtn  BaseClass: COMMANDBUTTON
	  *:
	  *:*************************************************************************
	  DEFINE CLASS cmdbtn AS COMMANDBUTTON
	     TOP=80
	     LEFT=460
	     HEIGHT=30
	     WIDTH=100
	     VISIBLE=.T.
	     CAPTION="Move"
	
	     PROCEDURE CLICK
	        THISFORM.CtnOle.ole1.MOVE(120,120,200)
	     ENDPROC
	  ENDDEFINE
	  **** END OF EXAMPLE 1 ***
	
	Code Sample Two
	---------------
	
	This example shows how to use the :: operator to call the Outline control's Init
	event.
	
	  **** BEGINNING ***
	  PUBLIC oForm
	  oForm=CREATE('form')
	  oForm.ADDOBJECT('oRedOutl','out1')
	  oForm.oRedOutl.VISIBLE=.T.
	  oForm.oRedOutl.CLICK
	  oForm.SHOW
	
	  *:*************************************************************************
	  *:
	  *: Class:out  BaseClass: OLECONTROL
	  *:
	  *:*************************************************************************
	  DEFINE CLASS out AS OLECONTROL
	     TOP = 24
	     LEFT = 24
	     HEIGHT = 193
	     WIDTH = 289
	     OLECLASS='msoutl.outline'
	
	     PROCEDURE INIT
	        THIS.ADDITEM('test')
	        THIS.ADDITEM('test')
	        THIS.ADDITEM('test')
	        THIS.ADDITEM('test')
	        THIS.ADDITEM('test')
	        THIS.ADDITEM('test')
	        THIS.indent(0)=1
	        THIS.indent(1)=2
	        THIS.indent(2)=2
	        THIS.indent(3)=2
	        THIS.indent(4)=2
	        THIS.indent(5)=2
	     ENDPROC
	  ENDDEFINE
	
	  *:*************************************************************************
	  *:
	  *: Class:out1  BaseClass: out
	  *:
	  *:*************************************************************************
	  DEFINE CLASS out1 AS out
	  PROCEDURE INIT
	        out::INIT
	        THIS.OBJECT.BACKCOLOR = RGB(255,0,0)
	
	     ENDPROC
	
	     PROCEDURE CLICK
	        WAIT WINDOW
	     ENDPROC
	
	  ENDDEFINE
	  **** END OF EXAMPLE 2 ***
	
	For an example of a form (.scx file) that uses the Outline control, please see
	the Outline1.scx sample form located in the Vfp\Samples\Ole directory.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
