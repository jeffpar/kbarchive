---
layout: page
title: "Q165410: PRB: Private DataSession Loses ASCENDING &#124; DESCENDING Order"
permalink: /kb/165/Q165410/
---

## Q165410: PRB: Private DataSession Loses ASCENDING &#124; DESCENDING Order

	Article: Q165410
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening the same tables in two separate private data sessions with the same
	index tag in both, the setting of ASCENDING or DESCENDING is not scoped to the
	data session. If in one data session you open a table and set the order to
	ascending and then start another data session and open the table and set the
	order to descending, the descending order is also applied to the first data
	session. This is an issue only when both forms are running in the same session
	of Visual FoxPro or a Visual FoxPro Runtime.
	
	RESOLUTION
	==========
	
	In the Activate Event of the form, issue the SET ORDER TO command. For example:
	
	     SET ORDER TO <tag name> ASCENDING
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add the Customer table, located in the Visual FoxPro\Samples\Data directory,
	  to the DataEnvironment.
	
	3. Drag the table from the DataEnvironment to the form to create a grid.
	
	4. Set the DataSession Property of the form to 2-Private Data Session.
	
	5. In the Init of the form add the following lines of code:
	
	       SET ORDER TO Cust_id ASCENDING
	       GO TOP
	
	6. Set the Caption property of the form to ASD.
	
	7. Save the Form as "ASD" (without the quotation marks).
	
	8. Modify the form and change the Init code to the following:
	
	       SET ORDER TO Cust_id DESCENDING
	       GO TOP
	
	9. Change the Caption property to DSD.
	
	10. Save the form as "DSD" (without the quotation marks).
	
	11. Run the DSD form and then run the ASD form.
	
	12. Click back on the DSD form and notice the order changes to ASCENDING.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
