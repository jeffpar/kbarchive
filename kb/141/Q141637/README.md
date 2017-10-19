---
layout: page
title: "Q141637: PRB: Listbox Does Not Automatically Display Correct Row"
permalink: /kb/141/Q141637/
---

## Q141637: PRB: Listbox Does Not Automatically Display Correct Row

	Article: Q141637
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The list box does not initially highlight the correct row until it has received
	the focus. The list box is always scrolled to the top of the list.
	
	WORKAROUND
	==========
	
	Inside the list box Init event, type this code:
	
	     THIS.REQUERY()
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add the following tables to the Data Environment:
	
	     Customer   (Located in VFP/SAMPLES/DATA/)
	     Orders     (Located in VFP/SAMPLES/DATA/)
	
	  NOTE: The tables should not be related.
	
	3. Add a text box to the form. The text box should prevent the list box from
	  receiving the focus when the form is run.
	
	4. Add a list box to the form, and change the following properties:
	
	     ColumnCount    =  2
	     ColumnWidth    =  0,100
	     ControlSource  =  ORDERS.CUST_ID
	     RowSource      =  CUSTOMER.CUST_ID,CONTACT
	     RowSourceType  =  FIELDS
	
	5. Run the form. Note that the list box is scrolled to the top and no row is
	  highlighted. If you press the TAB key to move to the list box, the correct
	  row is highlighted.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	
