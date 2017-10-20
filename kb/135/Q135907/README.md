---
layout: page
title: "Q135907: PRB: APPEND PROCEDURES Command Generates a Warning"
permalink: /kb/135/Q135907/
---

## Q135907: PRB: APPEND PROCEDURES Command Generates a Warning

{% raw %}

	Article: Q135907
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the APPEND PROCEDURES command to add more procedures to a database's
	Stored Procedures may generate a Warning:
	
	  WARNING: The Procedures contain compile errors.
	  Would you like to add them anyway?
	
	CAUSE
	=====
	
	This happens when the last line in the Stored Procedure file is missing a
	carriage return or the appending text file doesn't start with a carriage return.
	As a result, two lines are combined into one, which generates a warning message.
	
	RESOLUTION
	==========
	
	Make sure a carriage return is at the end of the Stored Procedures and that the
	appending file starts with a carriage return. For example, use this code:
	
	     procfile = '_'+SUBSTR((SYS(3),1,7)+".TXT"
	     fchnl = FCREATE((procfile))
	     =FPUTS(fchnl,"")
	     =FCLOSE(fchnl)
	     COPY PROCEDURES TO (procfile) ADDITIVE
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Database.
	
	2. Edit the Stored Procedures.
	
	3. Enter the following information into the Stored Procedures:
	
	     PROCEDURE TEST
	     WAIT WINDOW
	
	4. Make sure there is no carriage return after the WAIT WINDOW command.
	
	5. Close the Stored Procedures.
	
	6. Type the following commands in the Command window:
	
	     COPY PROCEDURE TO TEST.TXT
	     APPEND PROCEDURES FROM TEST.TXT
	
	7. When the Warning dialog box displays, choose Add.
	
	8. Edit the Stored Procedures.
	
	The procedures should look something like this:
	
	     PROCEDURE TEST
	     WAIT WINDOW PROCEDURE TEST
	     WAIT WINDOW
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
