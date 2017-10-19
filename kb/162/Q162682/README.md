---
layout: page
title: "Q162682: PRB: Visual FoxPro Form Is Inaccessible with Foundation READ"
permalink: /kb/162/Q162682/
---

## Q162682: PRB: Visual FoxPro Form Is Inaccessible with Foundation READ

	Article: Q162682
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Visual FoxPro form is run within a converted FoxPro 2.x application and
	program execution falls back to the Foundation READ, then some or all of the
	controls on the form do not respond to keyboard or mouse input.
	
	RESOLUTION
	==========
	
	Use a READ EVENTS to set up the wait state, rather than a Foundation READ, which
	uses a READ VALID.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In order to create a wait state in FoxPro 2.x, the Foundation READ was used.
	This allowed an application using the FoxPro run time to continue to execute
	while waiting for user input--selection of a menu option, for example. In Visual
	FoxPro, the Foundation READ is no longer necessary, but the wait state must
	still be established to create an application, which uses the run time. This is
	now done with the READ EVENTS command.
	
	If a Visual FoxPro form is instantiated, either with DO FORM or CREATEOBJECT()
	within an application employing a Foundation READ, the form's controls may be
	inaccessible. This occurs if program execution is halted at the Foundation READ
	(READ VALID command) when the Visual FoxPro form is instantiated.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        * Beginning of program file
	        ********************************************************************
	        * This simulates a FoxPro 2.x application with a menu, screen, and
	        * Foundation READ. A Visual FoxPro form has been added to this also,
	        * simulating what occurs if such a form is added to an existing
	        * FoxPro 2.x type application, which is run under Visual FoxPro.
	        *
	        SET PROCEDURE TO SYS(16)
	        lValid = .F.      && Sets the Foundation READ variable
	
	        * Establish menu
	        SET SYSMENU TO
	        DEFINE PAD do_screen OF _MSYSMENU PROMPT "Do Screen"
	        DEFINE PAD do_form OF _MSYSMENU PROMPT "Do Form"
	        DEFINE PAD do_exit OF _MSYSMENU PROMPT "Exit"
	
	        ON SELECTION PAD do_screen OF _MSYSMENU DO do__screen
	        ON SELECTION PAD do_form OF _MSYSMENU DO show__form
	        ON SELECTION PAD do_exit OF _MSYSMENU DO do__exit
	
	        * Establish Foundation READ or READ EVENTS
	
	        READ VALID lValid             && Comment this and
	        * READ EVENTS                 && uncomment this for workaround
	        SET PROC TO
	        SET SYSMENU TO DEFAULT
	
	           PROCEDURE do__screen
	              DEFINE WINDOW wind1 FROM 1,1 TO 20,30 ;
	                 FLOAT GROW CLOSE SYSTEM TITLE "Read Screen"
	              ACTIVATE WINDOW wind1
	              @ 10,8 GET gnChoice DEFAULT 1 ;
	                FUNCTION '*3  \!Close me' SIZE    3,12
	              READ
	              CLEAR WINDOW
	           ENDPROC
	
	           PROCEDURE do__exit
	              lValid = .T.
	              CLEAR EVENTS
	              CLEAR READ ALL
	              MOUSE CLICK
	           ENDPROC
	
	           PROCEDURE show__form
	              PUBLIC ox
	              ox = CREA('form1')
	              ox.SHOW()
	           ENDPROC
	
	        DEFINE CLASS form1 AS FORM
	           CAPTION = "VFP Form"
	           ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	              TOP = 120, ;
	              LEFT = 130, ;
	              HEIGHT = 25, ;
	              CANCEL = .T. ,;
	              CAPTION = "Close me"
	           PROCEDURE command1.CLICK
	              THISFORM.RELEASE()
	           ENDPROC
	        ENDDEFINE
	        *
	        * End of program file
	
	2. Click "Do Screen" on the menu. A FoxPro 2.x style READ screen is displayed.
	  Click the "Close me" button to close the screen.
	
	3. Click "Do Form" on the menu. A Visual FoxPro form is instantiated and
	  displayed. Click the "Close me" button to attempt to close the form. The
	  button will not be accessible. Close the form by clicking on the Close [x]
	  button in the upper right corner or by pressing Ctrl+F4.
	
	4. Select Exit from the menu.
	
	To demonstrate the workaround, comment out the "READ VALID lValid" line in the
	above example by starting the line with an asterisk, remove the asterisk from
	the beginning of the "* READ EVENTS" line, and rerun the program. The screen
	still works as before, and now the "Close me" command button on the form is also
	accessible.
	
	REFERENCES
	==========
	
	For additional information on the Foundation READ and READ EVENTS, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q87694 Menu Appears, Then Application Exits to Operating System
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : :3.0,3.0b,5.0,6.0
	
	=============================================================================
	
