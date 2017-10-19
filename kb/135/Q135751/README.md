---
layout: page
title: "Q135751: PRB: &quot;Record is out of Range&quot; w/ Form from One-to-Many Wizard"
permalink: /kb/135/Q135751/
---

## Q135751: PRB: &quot;Record is out of Range&quot; w/ Form from One-to-Many Wizard

	Article: Q135751
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
	
	When using a form created with the One-to-Many Wizard, you may receive the error
	"Record out of Range." This error occurs if a new record is added to both the
	parent and child tables.
	
	CAUSE
	=====
	
	The error occurs because the record pointer in the child table does appear to be
	in the correct location when the command THISFORM.REFRESH is executed.
	
	RESOLUTION
	==========
	
	Refresh the form before adding the record in the second table by adding this
	line of code:
	
	     * Add record to parent table
	     IF INLIST(oAddRec.AddOption,OPT_ADD_PARENT,OPT_ADD_BOTH)
	        IF EMPTY(m.cPapaKey)
	           APPEND BLANK IN (m.cPapaAlias)
	        ELSE
	           INSERT INTO (m.cPapaAlias) ((oAddRec.KeyField)) ;
	              VALUES(oAddRec.KeyValue)
	        ENDIF
	     ENDIF
	
	     THISFORM.REFRESH  && < ---- Add this line to fix the problem
	
	     * Add child record
	       IF INLIST(oAddRec.AddOption,OPT_ADD_CHILD,OPT_ADD_BOTH)
	     * Need to check
	          IF EMPTY(m.cChildKey) OR TYPE(m.cChildKey)#TYPE('oAddRec.KeyValue')
	             APPEND BLANK IN (m.cChildAlias)
	          ELSE
	             INSERT INTO (m.cChildAlias) ((m.cChildKey)) ;
	                VALUES(oAddRec.KeyValue)
	          ENDIF
	       ENDIF
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The error message may also be received when using a form not created by the Form
	Wizard but the workaround is the same.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a one-to-many form using the Form Wizard.
	
	2. Add the parent table and select all the fields.
	
	3. Add the child table and select all the fields.
	
	4. Click the Finish button.
	
	5. Save the form.
	
	6. Run the form you just created.
	
	7. Click the Add button.
	
	8. Click the Add record to both button.
	
	9. Enter a key value.
	
	10. Click the Add button.
	
	11. A message box containing the following message appears:
	
	  THISFORM.Refresh()
	  Error: 5
	  Record is out of Range
	  Method: navrefresh
	  Line: 91
	
	Additional query words: 3.00 VFoxWin one to many one-to-many
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
