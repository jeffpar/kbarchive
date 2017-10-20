---
layout: page
title: "Q164355: PRB: Programmatically Adding Stored Procedure May Cause Error"
permalink: /kb/164/Q164355/
---

## Q164355: PRB: Programmatically Adding Stored Procedure May Cause Error

{% raw %}

	Article: Q164355
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp600
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may appear when you programmatically add a stored procedure
	to a database container with the APPEND PROCEDURES FROM command and set SAFETY
	to ON:
	
	  Warning: The procedures contain compile errors. Would you like to add them
	  anyway?
	
	The dialog box has a choice to Add or Cancel.
	
	RESOLUTION
	==========
	
	You should add either a blank line to the beginning of the file being appended
	or a carriage-return line-feed to the end of the database stored procedure.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Execute the following code, which creates a database container and a procedure
	file:
	
	     SET SAFETY ON
	     CREATE DATABASE proctest
	     SET DATABASE to proctest
	     mhandle = FCREATE("proctest.txt")
	     =FWRITE(mhandle, "PROCEDURE proctest"+chr(10)+ ;
	                      "   WAIT WINDOW 'proctest'"+ chr(10)+ ;
	                      "ENDPROC")
	     =FCLOSE(mhandle)
	     MODIFY PROCEDURE
	
	After closing the Stored Procedures window, issue the following from the Command
	window:
	
	     APPEND PROCEDURES from proctest.txt
	
	Issue the APPEND PROCEDURES again and the error should occur.
	
	If the text file is edited to add a blank line to the beginning of the file, the
	error does not occur.
	
	If FPUTS is used instead of FWRITE during the creation of the procedure file, the
	error does not occur because FPUTS appends a carriage-return, line-feed to end
	of the file, which allows the newly appended procedure to start after, rather
	than on, the last line of the stored procedures.
	
	Setting SAFETY OFF, does not show the error dialog box and the procedure is
	appended to the stored procedures but not necessarily in the correct location.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
