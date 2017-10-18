---
layout: page
title: "Q129537: PRB: APPEND BLANK Fires Field-Level Validation"
permalink: kb/129/Q129537/
---

## Q129537: PRB: APPEND BLANK Fires Field-Level Validation

	Article: Q129537
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing an APPEND BLANK on a table in which fields have validation rules may
	cause this error:
	
	  Field <fieldname> violation rule is violated.
	
	CAUSE
	=====
	
	The APPEND BLANK command adds blank values to all the fields of a new record,
	unless default values are specified. If a blank or default value in a field
	violates a validation rule, an message indicating the rule was violated will
	occur.
	
	RESOLUTION
	==========
	
	Specify default values for fields that have validation rules, or set table
	buffering and Multilocks on before issuing an APPEND BLANK command. To enable
	buffering, open the table, and type the following commands in the Command
	window:
	
	     SET MULTILOCKS ON
	     =CURSORSETPROP("Buffering",n)  && n may be any value from 2 - 5.
	
	See the Visual FoxPro Help menu for more information on the CURSORSETPROP()
	function.
	
	To achieve buffering through the Visual FoxPro interface, choose Options from the
	Tools menu. Then select the Data tab. Under the Locking and Buffering section,
	place a chack mark in the Multiple Record Locks check box to set multilocks on.
	Set Buffering to any setting except Off.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a new database or open an existing database (.DBC file). Type the
	following commands in the Command window to create a one-field table (MyTable)
	and append a blank record:
	
	     SET MULTILOCKS OFF
	     CREATE TABLE MyTable (cFld1 C(10) CHECK !EMPTY(cFld1))
	     =CURSORSETPROP("buffering",1)
	     APPEND BLANK                      && The message appears!
	     SET MULTILOCKS ON
	     =CURSORSETPROP("buffering",2)
	     APPEND BLANK                      && The record is appended, no message!
	
	When executing the APPEND BLANK command, Visual FoxPro attempts to store a blank
	value in cFld1. This violates the NOT EMPTY rule specified in the CREATE TABLE
	command, so a message indicating the rule violation occurs.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
