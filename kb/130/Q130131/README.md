---
layout: page
title: "Q130131: PRB: ON ERROR Not Called When Trigger Fails in Browse or Grid"
permalink: /kb/130/Q130131/
---

## Q130131: PRB: ON ERROR Not Called When Trigger Fails in Browse or Grid

{% raw %}

	Article: Q130131
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Triggers that fail while working interactively in a Browse or a Grid are not
	captured by the ON ERROR Routine. Instead the Default Message, "Trigger Failed"
	is displayed. This seems inconsistent with what is documented in the Help file
	and in the "Language Reference" manual under CREATE TRIGGER.
	
	CAUSE
	=====
	
	This is because the firing of a trigger in the context of a Browse or Grid
	leaves the control in the hands of the Browse or Grid after the trigger fires.
	If the normal error handler (the one that allows for ON ERROR) is called, the
	option of RETRY becomes applicable. But because the Trigger code finished
	executing, the last command to be retried is the Browse.
	
	Therefore, choosing the RETRY option results in two problems:
	
	- The Browse is retried instead of the trigger.
	
	- A new Browse or Grid is instantiated.
	
	This scenario could result in an infinite loop.
	
	WORKAROUND
	==========
	
	One way to work around this problem is to trap the failed triggers at the Engine
	level, not at the Object level. In this case, put the appropriate code to handle
	erroneous conditions in the trigger itself. This workaround is shown below in
	the "More Information" section.
	
	STATUS
	======
	
	This behavior is by design. We are researching this design decision and will
	post new information here in the Microsoft Knowledge Base if it becomes
	available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Execute the following code to create a DBC that contains a table with a
	  delete trigger and to set up an ON ERROR routine:
	
	     CLOSE ALL
	     CREATE DATABASE dbTEST
	     CREATE TABLE Test1 (Fld N(3), Fld2 C(3))
	     CREATE TRIGGER ON Test1 FOR DELETE AS .F.
	     ON ERROR WAIT WINDOW 'Delete Trigger Failed'
	
	2. Open the dbTEST database, then open the table Test1 with the USE command, and
	  use the BROWSE command to browse the table. Then issue the following two
	  commands from the Command window:
	
	     APPEND BLANK
	     DELETE NEXT 1
	
	  When the Trigger fails, the Wait window is displayed. Everything is as
	  expected.
	
	3. Browse the table again, and use the mouse to delete a record. This time when
	  the Trigger fails, no Wait window is displayed. Instead the default system
	  message "Trigger Failed" is displayed.
	
	Steps to Implement Workaround
	-----------------------------
	
	1. Change the CREATE TRIGGER statement to read:
	
	     CREATE TRIGGER ON Test1 FOR DELETE AS MyDelTrig()
	
	2. Remove the ON ERROR WAIT WINDOW 'Delete Trigger Failed' line from the ' code.
	
	3. Add the following Procedure to the "Stored Procedures":
	
	     PROCEDURE MyDelTrig
	     IF Fld >= 10
	        RETURN .T.
	     ELSE
	        =MESSAGEBOX("Test1 must be greater than '10' to be deleted ;
	        "+CHR(13)+"Record Number: "+STR(RECNO())+" Was NOT deleted!")
	           IF CURSORGETPROP('BUFFERING') > 1
	              =TABLEREVERT(.F.) &&Buffering enabled Revert record.
	           ELSE
	              RECALL NEXT 1 &&Buffering NOT enabled Revert record.
	           ENDIF
	     ENDIF
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
