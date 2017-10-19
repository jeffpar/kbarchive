---
layout: page
title: "Q128973: How To Create a Vertical Caption in Label Control"
permalink: /kb/128/Q128973/
---

## Q128973: How To Create a Vertical Caption in Label Control

	Article: Q128973
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The label control is a graphical control that displays text. The label presents
	a horizontal caption by default. This article provides a sample program that
	creates a vertical label and displays it on the form.
	
	MORE INFORMATION
	================
	
	The text displayed in a label is presented horizontally by default, and the
	label control does not expose a vertical property that would allow you to
	vertically align a label. However, typing a CHR(13) in the caption of a label
	inserts a carriage return and the string is displayed vertically. For example,
	the following property assignment displays the word 'Test' vertically.
	
	     label.Caption="T"+chr(13)+"e"+chr(13)+"s"+chr(13)+"t"
	
	The following sample program displays a modal form that prompts the user to enter
	a caption. The text entered is then used in another form to display a vertical
	label. The same technique could be used to create a visual class that would
	implement a VERTICAL property. To run this example, copy and paste the code to a
	program (.PRG) file.
	
	Sample Code
	-----------
	
	  *:*************************************************************************
	  *: Code to instantiate the forms
	  *:*************************************************************************
	  *: VERTICAL
	     cText=""
	     oTxtLabel=CREATEOBJECT('formlabel')
	     oTxtLabel.Show
	     oMyform=CREATE('myform')
	     oMyform.Show
	     READ EVENTS
	
	  *:*************************************************************************
	  *: Class: FORMLABEL  BaseClass: FORM
	  *: Modal form to input the label caption
	  *:*************************************************************************
	     DEFINE Class FORMLABEL AS Form
	       WindowType=1
	       Width=125
	       AutoCenter=.T.
	       ADD OBJECT lblCaption AS Label WITH ;
	         Caption="Enter your caption", AutoSize=.T., BackStyle=0
	       ADD OBJECT CMDQUIT AS CommandButton WITH Caption="Quit", Top =80
	       ADD OBJECT txtLabelCaption AS TextBox WITH ;
	         ControlSource='cText',Top=34,Left=3
	       PROCEDURE CMDQUIT.Click
	         RELEASE Thisform
	       ENDPROC
	     ENDDEFINE
	
	  *:*************************************************************************
	  *: Class: MYFORM
	  *: Form that displays the label. It contains the vertical label and a QUIT
	  *: command button.
	  *:*************************************************************************
	     DEFINE Class MYFORM AS Form
	       ADD OBJECT lblvertical AS VERTLABEL WITH Left=Thisform.Width/2
	       Top=5
	       Left=5
	       Caption="See your Label"
	       ADD OBJECT CMDQUIT AS CommandButton WITH Caption="Quit", Top =10, ;
	          Height=20
	       PROCEDURE CMDQUIT.Click
	         RELEASE Thisform
	         CLEAR EVENTS
	       ENDPROC
	     ENDDEFINE
	
	  *:*************************************************************************
	  *: Class: VERTLABEL  BaseClass: LABEL
	  *: Creates the vertical caption. Takes the caption as a parameter, and
	  *: processes the string to add a CHR(13) between each character.
	  *: Also adjusts the height of the label. The code in the Rotate method can
	  *: be modified to use in a visual class definition.
	  *:*************************************************************************
	     DEFINE Class VERTLABEL AS Label
	       BackStyle=0
	       Alignment=2
	       Width=FONTMETRIC(7)  &&Adjusts the Width of the Label to 1 character
	       BackColor=rgb(255,0,0)
	       PROCEDURE Init
	         This.Caption=This.Rotate(CTEXT) &&Text entered in the previous form
	
	       PROCEDURE Rotate
	          PARAMETERS tCaption
	          nNewheight=0    && Holds the new height
	          cNewcaption=""  && Holds the new caption
	          DO CASE
	            CASE TYPE('tCaption')= "C"
	              FOR I=1 TO LEN(tCaption)
	                nNewheight=nNewheight+FONTMETRIC(1)
	                cNewCaption=cNewCaption+SUBSTR(tCaption,I,1)+CHR(13)
	              ENDFOR
	                 This.Height=nNewheight
	                 RETURN cNewcaption
	              OTHERWISE
	                 =MESSAGEBOX('Caption of the label must be a character')
	           ENDCASE
	     ENDPROC
	  ENDDEFINE
	
	Additional query words: VFoxWin tabs
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
