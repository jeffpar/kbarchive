---
layout: page
title: "Q194201: BUG: ASCII 159 Appears With ! Text Box Format and Function Keys"
permalink: kb/194/Q194201/
---

## Q194201: BUG: ASCII 159 Appears With ! Text Box Format and Function Keys

	Article: Q194201
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a text box control that has its Format property set to "!", when you
	type a function key F2 through F9, F11, F12, or CTRL/SHIFT/ALT, or combinations
	of these control keys, an ASCII 159 character appears in the text box. Depending
	on the setting in the FontName property of the text box, the character may
	appear as a Y with two dots over it, or some other character.
	
	RESOLUTION
	==========
	
	Trap the keystrokes in the form or text box KeyPress event, and conditionally
	issue a NODEFAULT if the keystroke is one that causes the ASCII 159 to appear.
	Please see the MORE INFORMATION section of this article for details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        PUBLIC oform1
	        oform1=CREATEOBJECT("form1")
	        oform1.SHOW
	        RETURN
	
	        DEFINE CLASS form1 AS FORM
	
	           AUTOCENTER = .T.
	           CAPTION = "KeyPress of Textbox"
	           NAME = "Form1"
	
	           ADD OBJECT text1 AS TEXTBOX WITH ;
	              FORMAT = "!", ;
	              HEIGHT = 24, ;
	              LEFT = 132, ;
	              TOP = 141, ;
	              WIDTH = 156, ;
	              NAME = "Text1"
	
	           ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	              TOP = 7, ;
	              LEFT = 6, ;
	              HEIGHT = 27, ;
	              WIDTH = 197, ;
	              CAPTION = "Change TEXTBOX Format to !", ;
	              NAME = "Command1", ;
	              ENABLED = .F.
	
	           ADD OBJECT command2 AS COMMANDBUTTON WITH ;
	              TOP = 39, ;
	              LEFT = 6, ;
	              HEIGHT = 27, ;
	              WIDTH = 197, ;
	              CAPTION = "Blank TEXTBOX Format ", ;
	              NAME = "Command2"
	
	           ADD OBJECT text2 AS TEXTBOX WITH ;
	              CONTROLSOURCE = "thisform.text1.format", ;
	              HEIGHT = 23, ;
	              LEFT = 302, ;
	              READONLY = .T., ;
	              TABSTOP = .F., ;
	              TOP = 26, ;
	              WIDTH = 52, ;
	              NAME = "Text2"
	
	           ADD OBJECT label3 AS LABEL WITH ;
	              CAPTION = "text1.format:", ;
	              HEIGHT = 18, ;
	              LEFT = 219, ;
	              TOP = 28, ;
	              WIDTH = 70, ;
	              NAME = "Label3"
	
	           PROCEDURE INIT
	              CLEAR MACROS
	           ENDPROC
	
	           PROCEDURE command1.CLICK
	              WITH THISFORM.text1
	                 .FORMAT = "!"
	                 .SETFOCUS()
	                 .VALUE = ''
	                 .PARENT.REFRESH()
	              ENDWITH
	              THIS.ENABLED = .F.
	              THISFORM.command2.ENABLED = .T.
	           ENDPROC
	
	           PROCEDURE command2.CLICK
	              WITH THISFORM.text1
	                 .FORMAT = ""
	                 .SETFOCUS()
	                 .VALUE = ''
	                 .PARENT.REFRESH()
	              ENDWITH
	              THIS.ENABLED = .F.
	              THISFORM.command1.ENABLED = .T.
	           ENDPROC
	
	        ENDDEFINE
	
	2. Press a function key, F2 through F9, F11 or F12.
	
	An ASCII 159 character appears in the text box. It may look like a Y with two
	dots over it.
	
	As a workaround, you can intercept the keystrokes in the KeyPress Event of the
	form or text box.
	
	Demonstration of Workaround Using Text Box KeyPress
	---------------------------------------------------
	
	This workaround encapsulates the code necessary in the text box, but you need to
	apply it to each text box that exhibits the behavior. You can place the code in
	your base text box class if you want.
	
	1. Modify the preceding program, and add the following procedure just before the
	  ENDDEFINE line:
	
	           PROCEDURE text1.KEYPRESS
	              LPARAMETERS nKeyCode, nShiftAltCtrl
	              LOCAL lcSetComp, lnLastKey 
	              IF '!' $ THIS.FORMAT
	                 lcSetComp = SET("Compatible")
	                 SET COMPATIBLE ON
	                 lnLastKey = LASTKEY()
	                 SET COMPATIBLE &lcSetComp 
	                 * If a function key is pressed, do not process it.
	                 * We differentiate between F keys and normal keys
	                 * by looking at LASTKEY() value, which is only unique
	                 * with SET COMPATIBLE ON. With SET COMPATIBLE ON, F2 
	                 * through F10 are < 0 regardless of Shift, Alt, or Ctrl
	                 * modifier. F10 through F12 are between 133 and 140. 
	                 IF lnlastkey < 0 OR ;
	                       BETWEEN(lnlastkey, 133, 140)
	                    NODEFAULT
	                 ENDIF
	              ENDIF
	           ENDPROC
	
	2. Rerun the program, press a function key F2 through F9, F11 or F12.
	
	The ASCII 159 character does not appear.
	
	Demonstration of Workaround Using Form KeyPress
	-----------------------------------------------
	
	This workaround places the code necessary in the form KeyPress, and requires you
	to set the KeyPreview property of form to .T. as well.
	
	1. Modify the preceding program, and add the following code after the line 'NAME
	  = "Form1"':
	
	        KEYPREVIEW = .T.
	
	2. Add the following procedure just before the ENDDEFINE line:
	
	           PROCEDURE KEYPRESS
	              LPARAMETERS nKeyCode, nShiftAltCtrl
	              LOCAL lcSetComp, lnLastKey
	              * Check to see if activecontrol is a text box with ! in format.
	              IF THISFORM.ACTIVECONTROL.BASECLASS = 'Textbox' AND ;
	                    '!' $ THISFORM.ACTIVECONTROL.FORMAT
	                 lcSetComp = SET("Compatible")
	                 SET COMPATIBLE ON
	                 lnLastKey = LASTKEY()
	                 SET COMPATIBLE &lcSetComp 
	                 * If a function key is pressed, do not process it.
	                 * We differentiate between F keys and normal keys
	                 * by looking at LASTKEY() value, which is only unique
	                 * with SET COMPATIBLE ON. With SET COMPATIBLE ON, F2 
	                 * through F10 are < 0 regardless of Shift, Alt, or Ctrl
	                 * modifier. F10 through F12 are between 133 and 140. 
	                 IF lnlastkey < 0 OR ;
	                       BETWEEN(lnlastkey, 133, 140)
	                    NODEFAULT
	                 ENDIF
	              ENDIF
	           ENDPROC
	
	3. Rerun the program, press a function key F2 through F9, F11 or F12.
	
	The ASCII 159 character does not appear.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600bug kbContainer kbCtrl
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :5.0,5.0a,6.0,7.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
