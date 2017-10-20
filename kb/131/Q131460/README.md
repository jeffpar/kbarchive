---
layout: page
title: "Q131460: PRB: Referential Intregrity Builder Leaves Code Behind"
permalink: /kb/131/Q131460/
---

## Q131460: PRB: Referential Intregrity Builder Leaves Code Behind

{% raw %}

	Article: Q131460
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Referential Integrity (RI) Builder leaves code in the Stored Procedures even
	when all the Trigger options are set to IGNORE.
	
	WORKAROUND
	==========
	
	The RI Builder copies the existing contents of the Stored Procedures to a file
	called RISP.OLD before it makes any changes, so you can recover modified
	procedures and paste them into the current Stored Procedures.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following commands in the Command window:
	
	     CREATE DATABASE mydbc
	     CREATE TABLE myparent (id c(3) PRIMARY KEY, fname c(20), lname c(25))
	     CREATE TABLE mychild ;
	     (id c(3), fname c(20), FOREIGN KEY id TAG id REFERENCES myparent TAG id)
	     MODIFY DATABASE
	
	2. Double-click the Persistent Relation line that connects the two tables. This
	  brings up the Edit Relationship dialog box
	
	3. Click the Referential Integrity button to invoke the RI Builder.
	
	4. In the RI Builder, change any of the Triggers from "Ignore" to something else
	  such as "Restrict." Click the OK button, and answer "Yes" to the dialog boxes
	  that follow.
	
	5. In the Edit Relationship dialog box, click OK.
	
	6. Enter the Stored Procedures, note the code the RI Builder produced. There
	  should be one or more specific procedures depending how many changes were
	  made in Step 4. These specific procedures have the table name as part of the
	  procedure name. The rest of the procedures are generic (no table name in the
	  procedure name).
	
	7. Return to the top of the Stored Procedure file.
	
	8. Add a comment to the "RIDELETE" procedure.
	
	9. Close the Stored Procedure Window.
	
	10. Repeat Steps 2 and 3 above.
	
	11. Set all the Triggers back to "Ignore."
	
	12. Repeat Steps 5 and 6.
	
	13. Note the generic procedures that the RI Builder created are still in
	  existence but the comment created in Step 8 is gone.
	
	14. Type the following command in the Command window:
	
	      MODIFY FILE RISP.OLD
	
	15. Note the comment made in Step 8 exists here. You could cut and paste this
	  procedure back into the current Stored Procedures file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
