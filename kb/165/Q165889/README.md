---
layout: page
title: "Q165889: PRB: ItemTips = .T. Causes Error When in Private DataSession"
permalink: /kb/165/Q165889/
---

## Q165889: PRB: ItemTips = .T. Causes Error When in Private DataSession

	Article: Q165889
	Product(s): Microsoft FoxPro
	Version(s): 5.00 5.00a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.x, the Listbox control with the ItemTips property set to ".T.
	- True" causes a "Cannot access the selected table" error when the DataSession
	property of the Form is set to "2 - Private Data Session."
	
	RESOLUTION
	==========
	
	Set the form DataSession property to "1 - Default Data Session."
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add the \Samples\Data\Customer.dbf to the Data Environment.
	
	3. Set the DataSession property of the form to "2 - Private Data Session."
	
	4. Add a Listbox control to the form.
	
	5. Set the Width property of the Listbox control to 108.
	
	6. Set the RowSourceType property of the Listbox control to "Alias."
	
	7. Set the RowSource property of the Listbox control to "Customer.company"
	  (without the quotes).
	
	8. Set the ItemTips property of the Listbox control to .T.
	
	9. Save and run the form.
	
	10. Position the mouse pointer over the list, and the error message, "Cannot
	  access the selected table" appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.00 5.00a
	Issue type        : kbprb
	
	=============================================================================
	
