---
layout: page
title: "Q142191: PRB: Special Character Causes ODBC Update Syntax Error"
permalink: /kb/142/Q142191/
---

## Q142191: PRB: Special Character Causes ODBC Update Syntax Error

	Article: Q142191
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Visual FoxPro with ODBC to update a remote view designed visually with a
	Microsoft Access 2.0 or Microsoft Access 7.0 table with a tilde (~) character as
	the first character in a field name may generate either of the two following
	error messages:
	
	  [Microsoft][ODBC Microsoft Access 7.0 Driver] Syntax error in update
	  statement.
	
	  -or-
	
	  Connectivity Error: [Microsoft][ODBC Microsoft Access 7.0 Driver] Syntax
	  error in query expression '<tablename>.~<fieldname>'.
	
	CAUSE
	=====
	
	The updatable field contains a tilde (~) character, which Visual FoxPro converts
	to an underscore.
	
	
	WORKAROUND
	==========
	
	The following code demonstrates how to use SQL passthrough to accomplish the
	update to the Microsoft Access table. This example uses a Microsoft Access table
	named Family that contains these two fields:
	
	     Field 1 = ~first
	     Field 2 = ~last
	
	Also, ~first is the primary key of the table. Add one record where ~first =
	"Adam" and ~last = "Smith."
	
	1. Create a datasource to a Microsoft Access database.
	
	2. Establish a connection.
	
	     chandle=SQLCONNECT()
	     * Select available datasources. Select datasource for Microsoft Access.
	     IF chandle < 0
	        WAIT WINDOW "Bad connection"
	        RETURN
	     ENDIF
	
	3. Process the update statement, and display a wait window with result.
	
	     x=SQLEXEC(chandle,;
	        "Update family set [~first]='Eve' where [~first]='Adam'")
	     IF x > 0
	        WAIT WINDOW "Successful update"
	     ELSE
	        WAIT WINDOW "Update failed"
	        =SQLDISCONNECT(chandle)
	        RETURN
	     ENDIF
	
	4. View changes, if the update was successful.
	
	     x=SQLEXEC(chandle,"SELECT * FROM family")
	     IF x > 0
	        BROWSE
	     ELSE
	        WAIT WINDOW "Select statement failed"
	        =SQLDISCONNECT(chandle)
	        RETURN
	     ENDIF
	
	5. Disconnect the connection handle
	
	     =SQLDISCONNECT(chandle)
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro the tilde (~) is not a valid character for a field name,
	although this is acceptable in Microsoft Access. Therefore, use of a Visual
	FoxPro ODBC Remote View to Microsoft Access, converts this special character to
	an underscore (_) character. The update using the Remote View then fails because
	Visual FoxPro sends an underscore instead of the tilde that Microsoft Access is
	expecting.
	
	For more information about Remote View Syntax, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q138501 Modifying a Remote View Results in a Syntax Error
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	Issue type        : kbprb
	
	=============================================================================
	
