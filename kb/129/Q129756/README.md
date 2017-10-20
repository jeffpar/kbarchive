---
layout: page
title: "Q129756: PRB: REPLACE Causes &quot;Field Rule Has Been Violated&quot; Error"
permalink: /kb/129/Q129756/
---

## Q129756: PRB: REPLACE Causes &quot;Field Rule Has Been Violated&quot; Error

{% raw %}

	Article: Q129756
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you programatically or interactively replace a field with an illegal value,
	you may receive an error number 1582:
	
	  Field <fieldname> Rule has Been Violated.
	
	CAUSE
	=====
	
	The value that you attempted to place in the field caused a value of .F. to be
	returned from the validation rule defined in the database container for this
	field.
	
	If you replaced the field with an invalid value programatically, Visual FoxPro
	returns error number 1582 and executes an ON ERROR routine if one is in effect.
	If you replaced the field interactively, no error number is returned, and the ON
	ERROR routine is not executed.
	
	You will be unable to move the pointer (cursor) off the offending field until an
	acceptable value is typed in.
	
	RESOLUTION
	==========
	
	Your ON ERROR routine must handle error 1582. Although it may seem logical to
	have your ON ERROR routine issue a REPLACE statement to replace the field with
	the OLDVAL(<fieldname>) function, you should simply return .F. from your
	ON ERROR routine. When you return .F., Visual FoxPro takes care of returning the
	field's value to its value before the change.
	
	By returning .F., you enable your ON ERROR routine to handle both existing and
	newly appended records. The OLDVAL() function always returns blank for an
	appended record, even if the database container specifies a default value for
	the field. The code snippet below demonstrates how to handle error 1582 in an ON
	ERROR routine:
	
	     ON ERROR DO errhandler
	
	     PROCEDURE errhandler
	         = AERROR(aLastErr)
	
	        DO CASE
	           CASE aLastErr(1) = 1582
	              RETURN .F.
	           * Include code to handle other anticipated errors.
	        ENDCASE
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new database container and modify it by issuing the following
	  commands in the Command window:
	
	     CREATE DATABASE test
	     MODIFY DATA
	
	2. Choose the New Table icon from the Database Designer toolbox, and add a new
	  table named STATE. This table should contain one field, stcode.
	
	3. Add a validation rule to the stcode field that uses this expression:
	
	     IIF(stcode = "NC", .T., .F.)
	
	4. Create a program that contains the following lines of code, and run it.
	
	     SET MULTILOCKS ON
	     =CURSORSETPROP("Buffering",5)
	     OPEN DATABASE test
	     USE state
	     APPEND BLANK
	     REPLACE stcode WITH "XX"
	
	An error 1582 should occur.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          : kbcode kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
