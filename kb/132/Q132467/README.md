---
layout: page
title: "Q132467: Firing Order for Rules and Triggers in Visual FoxPro"
permalink: /kb/132/Q132467/
---

## Q132467: Firing Order for Rules and Triggers in Visual FoxPro

{% raw %}

	Article: Q132467
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes and demonstrates the firing order of rules and triggers
	depending on whether buffering is on or off. Further, with buffering on, the
	article demonstrates the firing order differences depending the buffering level.
	
	MORE INFORMATION
	================
	
	Row rules are there to protect the integrity of a record. Column rules protect
	the integrity of a field (column). The order in which the rules and triggers
	fire depends directly on the buffering in effect at that time.
	
	Steps to Set Up the Example
	---------------------------
	
	1. To duplicate the behavior of the Firing Order of Rules and Trigger, create
	  the sample database container and table with the specified Stored Procedures.
	  Enter the following in the Command window:
	
	     CREATE DATABASE Mydata              && Creates the database container
	     MODIFY DATABASE Mydata              && Opens the database container
	
	2. Enter the following Procedures into the Store Procedures:
	
	     PROCEDURE MYCOL
	     =MESSAGEBOX("My Column Rule")
	
	     PROCEDURE MYROW
	     =MESSAGEBOX("My Row Rule")
	
	     PROCEDURE MYINS
	     =MESSAGEBOX("My Insert Trigger")
	
	     PROCEDURE MYDEL
	     =MESSAGEBOX("My Delete Trigger")
	
	     PROCEDURE MYUPD
	     =MESSAGEBOX("My Update Trigger")
	
	3. Enter the following in the Command window:
	
	     CREATE TABLE Mytab(Fname C(15),Lname C(15) UNIQUE CHECK Mycol(), ;
	        MI C(2),CHECK Myrow())
	
	     CREATE TRIGGER ON Mytab FOR UPDATE AS Myupd()
	     CREATE TRIGGER ON Mytab FOR INSERT AS Myins()
	     CREATE TRIGGER ON Mytab FOR DELETE AS Mydel()
	
	Steps to Demonstrate Behavior
	-----------------------------
	
	1. In the Command window, type:
	
	        OPEN DATABASE Mydata
	        SET MULTILOCKS ON               && Required for buffering.
	        =CURSORSETPROP("Buffering",1)   && Turns Buffering Off
	
	  Or on the Tools menu, click Options, and then click the Data tab and set
	  buffering to Off.
	
	  To verify that buffering is Off, enter the following on a new line in the
	  Command window:
	
	        ? CURSORGETPROP("Buffering")
	
	  This returns the value of the Buffering level:
	
	        1=OFF
	        2=RECORD(PESSIMISTIC)
	        3=RECORD(OPTIMISTIC)
	        4=TABLE(PESSIMISTIC)
	        5=TABLE(OPTIMISTIC)
	
	2. Highlight the title bar of the table. Then using the right mouse button,
	  click, and select BROWSE.
	
	3. With table buffering Off, press CTRL+Y to append a blank record. Notice that
	  the COLUMN, ROW, UNIQUE check, and INSERT rules fired in order for the new
	  record.
	
	  When you press CTRL+Y again, notice that the ROW rule and the UPDATE trigger
	  fire as you leave the first record. Then you once again see the COLUMN, ROW,
	  UNIQUE check, and INSERT rules fired for the new record.
	
	4. Press the UP ARROW key to move off the current record just entered. Notice
	  the ROW, UNIQUE check, and UPDATE rules fire as you leave that record.
	
	5. Mark any record(s) for deletion as necessary. The DELETE trigger fires. Then
	  undelete the records. Notice the firing order of the rules are the same as
	  they are a new record: COLUMN, ROW, UNIQUE check, and INSERT.
	
	  As you enter a value or change the value of a LNAME, you will see the "My
	  Column Rule" message box. The firing order was COLUMN RULE, ROW RULE, UNIQUE
	  check, UPDATE TRIGGER.
	
	6. Change Buffering to 2 (Pessimistic Record Locks) by typing the following in
	  the Command window:
	
	        SET MULTILOCKS ON        && If you have not done so previously.
	        =CURSORSETPROP("Buffering",2)
	
	  Or on the Tools menu, click options. Then click the Data tab and set buffering
	  to Record(Pessimistic).
	
	  Again, press CTRL+Y to append a blank record, and notice that nothing fires.
	  Enter some data. Note COLUMN(S) RULE fires. Leave the record by pressing the
	  UP ARROW. Now, the ROW, UNIQUE check, and INSERT Rules fire in order as you
	  leave the record.
	
	  If you mark a record for deletion, the DELETE rule fires. If you undelete a
	  record, the rules fire as before depending on the buffering level you set.
	
	  Notice the same behavior occurs for Buffering Level 3, Record(Optimistic).
	
	7. Change Buffering to 4 (Pessimistic Table Locks) by typing the following in
	  the Command window:
	
	        SET MULTILOCKS ON          && If you have not done so previously.
	        =CURSORSETPROP("Buffering",4)   && Table(Pessimistic)
	
	  Or on the Tools menu, click options. Then click the Data tab and set buffering
	  to Table(Pessimistic)
	
	  Then follow these steps:
	
	  a. Press CTRL+Y to append a blank record, and notice that no rules fire for
	     the new record. Enter some data.
	
	  b. Press CTRL+Y to append a blank record, and notice that the ROW rule fires
	     for the first record. It did not fire for record 2, the new empty record.
	
	  c. Press the UP ARROW key to leave record 2. Notice that the ROW rule fires
	     for record 2 that you are leaving. It did not fire for record 1, the
	     record you went to. This would also be true if you were editing record 5
	     in a set of 12. If you leave the record by pressing the UP ARROW or DOWN
	     ARROW key, the ROW rule fires for the record you left, not the one you
	     went to. This only happens for new and modified records.
	
	8. Mark record(s) for deletion. There is no problem here, but note that
	  buffering must be turned off before you pack the table or remove the deleted
	  records. To pack, type the following in the Command window:
	
	        =TABLEUPDATE(.t.)
	
	  You will see the DELETE trigger(s) fire as the table is updated from the
	  buffer. You will see the same behavior for buffering level 5. To close the
	  table, use TABLEUPDATE(.t.).
	
	9. Change buffering to 1 (Off) by typing the following in Command window:
	
	        =CURSORSETPROP("Buffering",1)
	
	  Or on the Tools menu, click options. Then click the Data tab and set buffering
	  to OFF
	
	  When finished, you can pack or recycle the records.
	
	Additional query words: VFoxWin events
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	

{% endraw %}
