---
layout: page
title: "Q156237: PRB: Report Designer/Preview Needs VFP Desktop to Display"
permalink: /kb/156/Q156237/
---

## Q156237: PRB: Report Designer/Preview Needs VFP Desktop to Display

	Article: Q156237
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If REPORT FORM <formname> PREVIEW or MODIFY REPORT <formname> is
	called from an SDI or top-level form (form with the ShowWindow property set to
	2), the Report Preview or Report Designer does not appear if the Visual FoxPro
	desktop is hidden.
	
	WORKAROUND
	==========
	
	Make the Visual FoxPro desktop visible (_SCREEN.Visible = .T.) and display the
	Report Designer or preview and hide the Visual FoxPro desktop (_SCREEN.Visible =
	.F.) after the Report Designer or Preview has been closed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Page Preview and Report Designer windows are being created as a child window
	of the Visual FoxPro desktop. Since the desktop is not visible, the Page Preview
	and Report Designer windows cannot be visible. Each of these windows has
	toolbars that require the Visual FoxPro desktop in order for them to be
	displayed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	     * Start of code example
	     *
	     PUBLIC oform
	     LOCAL lnI
	     CLOSE ALL
	     CREATE TABLE table_1 (field1 C(10))
	     FOR lnI=1 TO 3
	        INSERT INTO table_1 VALUES ('xx')
	     ENDFOR
	
	     CREATE REPORT report_1 FROM table_1
	
	     oform=CREATEOBJECT("SDI_form")
	     oform.SHOW()
	     READ EVENTS
	     CLOSE TABLES
	
	     DEFINE CLASS sdi_form AS FORM
	
	        SHOWWINDOW = 2
	        AUTOCENTER = .T.
	        lIsFormUp=.F.
	
	        ADD OBJECT commandpreview AS COMMANDBUTTON WITH ;
	           TOP = 180, ;
	           LEFT = 80, ;
	           HEIGHT = 27, ;
	           WIDTH = 95, ;
	           CAPTION = "Report Preview", ;
	           NAME = "Commandpreview"
	
	        ADD OBJECT commanddesign AS COMMANDBUTTON WITH ;
	           TOP = 180, ;
	           LEFT = 202, ;
	           HEIGHT = 27, ;
	           WIDTH = 95, ;
	           CAPTION = "Modify Report", ;
	           NAME = "Commanddesign"
	
	        PROCEDURE DESTROY
	           CLEAR EVENTS
	           _SCREEN.VISIBLE=.T.
	        ENDPROC
	
	        PROCEDURE ACTIVATE
	           IF !THIS.lisformup
	              _SCREEN.VISIBLE = .F.   && We wait till now to hide desktop
	                                      && to ensure SDI form is active window
	              THIS.lIsFormUp = .T.
	           ENDIF
	        ENDPROC
	
	        PROCEDURE commandpreview.CLICK
	           REPORT FORM report_1 PREVIEW
	        ENDPROC
	
	        PROCEDURE commanddesign.CLICK
	           MODIFY REPORT report_1
	        ENDPROC
	
	     ENDDEFINE
	     *
	     * End of code example
	
	2. Click on either command button. The preview or Report Designer does not
	  appear.
	
	  NOTE: You may need to double-click the [-] or fox head in the upper left
	  corner to close the form after doing this.
	
	How to Get It Working
	---------------------
	
	1. Modify the Click procedure code for the two command buttons above to read as
	  follows:
	
	     * Start of code example
	     *
	     PROCEDURE commandpreview.CLICK
	        _SCREEN.VISIBLE = .T.           && Show VFP desktop
	        KEYBOARD '{ctrl+f10}' CLEAR     && Maximixe Preview window
	        REPORT FORM report_1 PREVIEW
	        _SCREEN.VISIBLE = .F.           && Hide VFP desktop
	     ENDPROC
	
	     PROCEDURE commanddesign.CLICK
	        LOCAL lcOldShutDown
	        lcOldShutDown = ON('shutdown')  && Saves existing ON SHUTDOWN
	        ON SHUTDOWN _SCREEN.VISIBLE=.F. && Traps for closing desktop
	        _SCREEN.VISIBLE = .T.           && Show VFP desktop
	        KEYBOARD '{ctrl+f10}' CLEAR     && Maximixe Designer window
	        MODIFY REPORT report_1
	        _SCREEN.VISIBLE = .F.           && Hide VFP desktop
	        ON SHUTDOWN &lcOldShutDown      && Restores existing ON SHUTDOWN
	     ENDPROC
	     *
	     * End of code example
	
	2. Click on either command button. The preview or Report Designer appears. When
	  the preview or Report Designer is closed, the desktop is again hidden and the
	  SDI form regains the focus.
	
	Additional query words: kbdse VfoxWin print preview
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : 5.00
	
	=============================================================================
	
