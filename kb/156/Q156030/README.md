---
layout: page
title: "Q156030: PRB: SET RELATION TO Has No Effect in Grid from Child"
permalink: /kb/156/Q156030/
---

## Q156030: PRB: SET RELATION TO Has No Effect in Grid from Child

{% raw %}

	Article: Q156030
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a form containing a grid whose record source is a child table in a
	relation that is broken with the SET RELATION TO command, the grid behaves as if
	the relation were still set and continues to show a subset of records from the
	child table.
	
	CAUSE
	=====
	
	For performance reasons, the relation information is cached and is not reread
	until the grid is forced to reevaluate its record source.
	
	WORKAROUND
	==========
	
	Set the grid's record source to the grid itself to clear the cached information
	and to force the grid to reevaluate its record source, as in the following
	example:
	
	     Thisform.Grid1.RecordSource = Thisform.Grid1.RecordSource
	
	Additionally, setting the grid's record source to itself does not cause the grid
	to lose nondefault properties as it did in Visual FoxPro 3.0b.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form called Temp.
	
	2. Add the following two tables to the data environment:
	
	        VFP\samples\data\customer.dbf
	        VFP\samples\data\orders.dbf
	
	3. Add a text box to the form.
	
	4. Set the text box's ControlSource property to the following:
	
	        Customer.cust_id
	
	5. Add a grid to the form.
	
	6. Set the grid's RecordSource property to Orders.
	
	7. Add a command button to form.
	
	8. Place the following code in the Click method of the command button:
	
	        SELECT Customer    && Select Parent table
	        SET RELATION TO    && Turn off relation
	
	9. Run the form.
	
	10. Click the command button.
	
	The grid continues to show only child records related to the first record in the
	parent table.
	
	To incorporate the workaround into this example, add the following code as the
	third line of the Click method of the command button on the form created above:
	
	     Thisform.Grid1.RecordSource = Thisform.Grid1.RecordSource
	
	Run the form, and click the button. The grid updates to show all child records.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : 5.00
	
	=============================================================================
	

{% endraw %}
