---
layout: page
title: "Q132568: PRB: Creating Instance of OLE Control Causes Exception Error"
permalink: kb/132/Q132568/
---

## Q132568: PRB: Creating Instance of OLE Control Causes Exception Error

	Article: Q132568
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating simultaneous instances of OLE automation objects, Visual FoxPro
	displays this error:
	
	  OLE error Code
	
	Under some circumstances, an exception error is generated in one of the server
	applications. This behavior occurs when one of the OLE objects is an OLE control
	(OCX).
	
	CAUSE
	=====
	
	This error results from creating an instance of an OLE control with the
	following syntax:
	
	  Oobject1=CREATEOBJECT(<olecustomcontrol>)
	
	OLE Automation objects (OCX) are not designed to be standalone automation
	servers.
	
	
	WORKAROUND
	==========
	
	Place the OLE control in an OLE container instead of creating an instance of the
	OLE control. The following example illustrates this method. It uses the outline
	control that ships with Visual FoxPro.
	
	Example code
	------------
	
	  oMyform=CREATEOBJECT('new_form')
	  oMyform.SHOW
	
	  * The following lines add three items to the outline control.
	
	  oMyform.myoutline.ADDITEM('VFP',0)
	  oMyform.myoutline.indent(0)=1
	  oMyform.myoutline.ADDITEM('Samples',1)
	  oMyform.myoutline.indent(1)=2
	  oMyform.myoutline.ADDITEM('Controls',2)
	  oMyform.myoutline.indent(2)=3
	  READ EVENTS
	
	  * Form class definition. The form contains a command button and an
	  * olecontrol
	
	  DEFINE CLASS new_form AS FORM
	     AUTOCENTER=.T.
	     BACKCOLOR=RGB(192,192,192)
	     WIDTH= 220
	     HEIGHT= 200
	     CAPTION= "Using the outline control"
	     ADD OBJECT myoutline AS outlinecontrol
	     ADD OBJECT mycmd AS cmdquit WITH TOP=120, LEFT=80
	  ENDDEFINE
	
	  * Defines the Ole container control. The OLE class is MSOutl. Outline.
	  * The Outline control is used.
	  DEFINE CLASS outlinecontrol AS OLECONTROL
	     OLECLASS = "MSOutl.Outline"
	     LEFT=12
	     Top=12
	     Width=170
	     Height=80
	     FontSize=10
	     FontName="Arial"
	     FontBold=.F.
	     FontItalic=.T.
	  ENDDEFINE
	
	Class Definition for Command Button
	-----------------------------------
	
	  * Class definition for the command button. When users click the command
	  * button, the form is released.
	
	  DEFINE CLASS cmdquit AS COMMANDBUTTON
	     Width=40
	     Height=25
	     Caption = "Quit"
	
	     PROCEDURE CLICK
	        RELEASE ThisForm
	        CLEAR EVENTS
	     ENDPROC
	  ENDDEFINE
	
	MORE INFORMATION
	================
	
	Code to Reproduce Behavior
	--------------------------
	
	  ON ERROR ? "-------------------------> "+message()
	  oObj1=CREATEOBJECT("Word.Basic")
	  oObj2= CREATEOBJECT("Excel.Sheet")
	  oObj5= CREATEOBJECT('msoutl.outline')
	  ON ERROR
	
	Additional query words: VFoxWin crash
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
