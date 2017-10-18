---
layout: page
title: "Q143284: PRB: Error Generated Through Interface Clears READ EVENTS"
permalink: kb/143/Q143284/
---

## Q143284: PRB: Error Generated Through Interface Clears READ EVENTS

	Article: Q143284
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an error is generated through the interface at a time when program execution
	is halted on a READ EVENTS, selecting Ignore from the dialog clears the READ
	EVENTS. Alternately, having an ON ERROR routine without a RETRY causes the same
	behavior.
	
	CAUSE
	=====
	
	If an error occurs, selecting Ignore moves program execution to the next line of
	code. If an ON ERROR routine is used, execution also resumes at the next line of
	code if no RETRY command is issued.
	
	RESOLUTION
	==========
	
	Conditionally execute a RETRY after testing for which line of code is active
	when the error occurs.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior and Resolution
	------------------------------------------
	
	This example uses the Customer table from the \VFP\samples\data\Testdata
	database. The READ EVENTS is placed in a procedure by itself. A RETRY is
	conditionally executed within the error handler when an error occurs and the
	program name passed to the error handler is the procedure containing the READ
	EVENTS.
	
	1. Create a new program containing the following code, and name it
	  Readtest.prg.
	
	    *  Begin READTEST.PRG
	     *
	
	     SET EXCLUSIVE OFF
	     ON ERROR DO errhand WITH ;
	        ERROR(), MESSAGE(), MESSAGE(1), PROGRAM(), LINENO()
	
	     * The following DO FORM allows the form to be cleared if the program
	     * ends since the variable oReadTest loses scope
	
	     DO FORM ReadTest NAME oReadTest LINKED
	     =Read_Events()       && Call procedure to invoke READ EVENTS
	     ON ERROR
	
	     PROCEDURE ErrHand
	     PARAMETER nErrorNum, cErr_Msg, cErr_Msg1, cErr_Prog, nErr_Line
	
	     * Display error number
	     WAIT WINDOW "Error # "+ALLTRIM(STR(nErrorNum))+ ;
	                 " In "+ALLTRIM(cErr_Prog) TIMEOUT 1
	
	     IF UPPER(cErr_Prog)='READ_EVENTS'   && Check for program/procedure
	     *   RETRY           && Remove * to make error not clear READ EVENTS
	     ENDIF
	
	     ENDPROC
	
	     PROCEDURE Read_Events
	        READ EVENTS
	     ENDPROC
	
	     *  End READTEST.PRG
	
	2. Create a new form. Add the Customer table to the Data Environment of the
	  form. Then create a grid by dragging the Customer table from the Data
	  Environment of the form. Set the ColumnCount of the grid to 5.
	
	3. Place the following code in the Destroy event procedure code for the form:
	
	     =TABLEREVERT(.T.)      && Do not save changes
	     CLEAR EVENTS
	
	4. Set the BufferMode of the form to 1 - Pessimistic.
	
	5. Add a command button to the form, and place the following code in its Click
	  event procedure code:
	
	     THISFORM.Release
	
	6. Change the Caption property of the command button to Close.
	
	7. On the File menu, click Save, and save the form as Readtest.scx.
	
	8. Run the Readtest.prg program. Make a change to the first record in the grid.
	
	9. Start another instance of Visual FoxPro. Run the program in the new instance.
	  Make a change to the first record in the grid. The WAIT window will be
	  displayed with error number 109. The form will be released because the
	  variable oReadTest is released (goes out of scope).
	
	10. Go back to the first instance of Visual FoxPro, and close the form.
	
	11. Edit Readtest.prg, and remove the * from the RETRY command in the ErrHand
	  procedure.
	
	12. Repeat steps 8 and 9. The form will not be exited in the second instance of
	  Visual FoxPro. The RETRY causes program execution to remain on the READ
	  EVENTS command.
	
	Notes:
	
	- The READ EVENTS is placed alone in a separate procedure because this is the
	  only way to reliably determine the line of code currently executing.
	  MESSAGE(1) will not return the line of code within an .exe file or show
	  whether the source code is present or accessible when the program is run.
	
	- The error that occurs is "Record is in use by another user." This is caused
	  by the attempt to lock a record in the second instance which is already
	  locked in the first instance due to the Pessimistic buffering scheme.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	
	=============================================================================
	
