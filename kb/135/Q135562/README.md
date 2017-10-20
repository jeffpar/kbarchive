---
layout: page
title: "Q135562: FIX: Delete Trigger Fires Out of Order"
permalink: /kb/135/Q135562/
---

## Q135562: FIX: Delete Trigger Fires Out of Order

{% raw %}

	Article: Q135562
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Delete trigger fires immediately when buffering level is 2-Record
	(Pessimistic) or 3-Record (Optimistic).
	
	CAUSE
	=====
	
	With these buffering levels, the Delete trigger should fire when you leave a
	record. However, it fires immediately as though the buffering level was 1 (Off -
	No Buffering).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Rules and triggers are there to protect the integrity of the data. The order in
	which the rules and triggers fire depends directly on the buffering in effect at
	that time. With Buffering levels 2 or 3, the Delete trigger should not fire
	until you attempt to leave the record instead of immediately because that record
	is buffered until you move the record pointer off that record.
	
	Steps to Set Up Example to Reproduce Problem
	--------------------------------------------
	
	1. To duplicate the behavior of the firing order of rules and triggers, create
	  the following sample database and table with the specified stored procedures.
	  Enter the following in the Command window:
	
	     CREATE DATABASE Mydata      && Creates the database container
	     MODIFY DATABASE Mydata      && Opens the database container
	
	2. Enter the following procedures into the Stored Procedures:
	
	     PROCEDURE MYDEL
	     =MESSAGEBOX("My Delete Trigger")
	
	3. Enter the following in the Command window:
	
	     CREATE TABLE Mytab(Fname C(15),Lname C(15))
	     CREATE TRIGGER ON Mytab FOR DELETE AS Mydel()
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, type:
	
	     OPEN DATABASE Mydata
	     SET MULTILOCKS ON         && Required for buffering.
	     =CURSORSETPROP("Buffering",1)   && Turns Buffering Off
	
	  Or on the Tools menu, click Options. In the Data tab, set Buffering to Off
	
	2. To verify the setting, enter the following on a new line in the Command
	  window:
	
	     ? CURSORGETPROP("Buffering")
	
	  This will return the value of the Buffering level: 1=Off,
	  2=Record(Pessimistic), 3=Record(Optimistic), 4=Table(Pessimistic), and
	  5=Table(Optimistic).
	
	3. Select the title bar of the table, click the secondary (right) mouse button,
	  and choose Browse.
	
	4. With Table Buffering set Off, press CTRL+Y to append a blank record.
	
	5. Mark any record for deletion. The Delete trigger fires immediately. This is
	  correct behavior when Buffering is level 1 - Off.
	
	6. Enter the following commands in the Command window:
	
	        SET MULTILOCKS ON      && If you have not done so previously.
	        =CURSORSETPROP("Buffering",2)
	
	  Or on the Tools menu, click Options. Then in the Data tab, set Buffering to
	  2-Record (Pessimistic). If no data exists, press CTRL+Y to append a blank
	  record.
	
	7. Mark any record for deletion, the Delete trigger fires immediately. This is
	  incorrect behavior when Buffering is level 2 or 3.
	
	8. Change Buffering to 4 (Pessimistic Table Locks) by typing in the following
	  Command window:
	
	        SET MULTILOCKS ON      && If you have not done so previously.
	        =CURSORSETPROP("Buffering",4)   && Table(Pessimistic)
	
	  Or on the Tools menu, click Options. Then in the Data tab, set Buffering to
	  4-Table (Pessimistic). If no data exists, press CTRL+Y to append a blank
	  record. Then do the following:
	
	  a. If no entries exist, press CTRL+Y to append a blank record. Enter at least
	     2 records.
	
	  b. Mark any record for deletion. The Delete trigger doesn't fire immediately.
	     This is correct behavior. Changes to the table have been buffered, so they
	     are not be written until a Tableupdate is issued.
	
	  c. Type the following in the Command window: =TABLEUPDATE(.t.) Now the Delete
	     trigger fires as the table is updated from the buffer. The same correct
	     behavior occurs for buffering level 5.
	
	9. Change the buffering level to 1 (Off) by typing in the following Command
	  window:
	
	  =CURSORSETPROP("Buffering",1)
	
	  Or on the Tools menu, click Options. Then in the Data tab, set Buffering to 1
	  (Off). Then you can pack or recycle the records.
	
	Additional query words: 3.00 VFoxWin fixlist3.00b buglist3.00 events
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
