---
layout: page
title: "Q194524: PRB: APPEND PROCEDURE FROM Does Not Bring Procs in for Viewing"
permalink: /kb/194/Q194524/
---

## Q194524: PRB: APPEND PROCEDURE FROM Does Not Bring Procs in for Viewing

{% raw %}

	Article: Q194524
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp600 kbXBase KbDBFDBC kbGrpDSFox kbDSupport
	Last Modified: 17-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using APPEND PROCEDURE FROM to import a procedure into a database with no
	existing stored procedures does not show that procedure in the Stored Procedures
	edit window of the database.
	
	RESOLUTION
	==========
	
	1. Ensure the first stored procedure code added in a database is entered through
	  the editor.
	
	2. Open and close/save the procedures editor window before appending the new
	  procedure using the following two lines of code:
	
	        KEYBOARD "{ctrl+w}"
	        MODIFY PROCEDURES
	
	        ******************Begin Working Code**********************
	        #DEFINE CRLF CHR(13) + CHR(10)
	        x="PROCEDURE TEST1" + CRLF + "X=1" + CRLF + "ENDPROC" + CRLF
	        STRTOFILE(x,"TESTPROC.TXT")
	        CREATE DATA TEST
	        KEYBOARD "{ctrl+w}" && Added to close Procedure Editor.
	        MODIFY PROCEDURES   && Opens the Procedures Editor Window for saving.
	        APPEND PROCEDURE FROM TESTPROC.TXT
	        LIST PROCEDURES
	        MODIFY PROCEDURES
	        MODIFY FILE TESTPROC.TXT
	        *******************End Working Code************************
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code in a program file:
	
	        #DEFINE CRLF CHR(13) + CHR(10)
	        x="PROCEDURE TEST1" + CRLF + "X=1" + CRLF + "ENDPROC" + CRLF
	        STRTOFILE(X,"TESTPROC.TXT")
	        CREATE DATA TEST
	        APPEND PROCEDURE FROM TESTPROC.TXT
	        LIST PROCEDURES
	        MODIFY PROCEDURES
	        MODIFY FILE TESTPROC.TXT
	
	2. Note that the procedure name is listed on the desktop, but there is nothing
	  in the Stored Procedures window.
	
	3. Close the Stored Procedures Window, and note that the procedure is displayed
	  correctly in the TestProc.TXT window. The stored procedure is actually in the
	  database container, and is able to be run, but does not show in the Stored
	  Procedures editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp600 kbXBase KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
