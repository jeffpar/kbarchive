---
layout: page
title: "Q130347: PRB: Bound Control Does Not Show Current Record Value"
permalink: kb/130/Q130347/
---

## Q130347: PRB: Bound Control Does Not Show Current Record Value

	Article: Q130347
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the record pointer is moved, the value property of a bound control does not
	appear to update properly.
	
	CAUSE
	=====
	
	The value property of a bound control is not refreshed automatically.
	
	RESOLUTION
	==========
	
	To refresh a bound control, issue thisform.refresh or trigger the gotfocus
	method.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. Add a textbox object as txtget1.
	
	3. Set the controlsource of the txtget1 to customer.company.
	
	4. Add a commandbutton object as cmdskip.
	
	5. In the click method of cmdskip, type:
	
	     SKIP
	
	6. Save the Form.
	
	7. In the Debug Window, type:
	
	     _screen.activeform.txtget1.value
	
	8. In the Command window, type:
	
	     USE customer
	     DO FORM
	
	9. Click the cmdskip button to see that the the value of txtget1 does not change
	  in the Debug Window. Note that the value changes if you click in the txtget1
	  textbox or if you add thisform.refresh to the click method of cmdskip after
	  the SKIP command.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
