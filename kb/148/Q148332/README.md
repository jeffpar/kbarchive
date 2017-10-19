---
layout: page
title: "Q148332: BUG: GRID: SET RELATION TO Does Not Break Relation Properly"
permalink: /kb/148/Q148332/
---

## Q148332: BUG: GRID: SET RELATION TO Does Not Break Relation Properly

	Article: Q148332
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SET RELATION TO command to break an existing relationship, the
	only records displayed from the relationship's child table are those that are
	related to the current parent record and beyond. Any child records that match
	parent records prior to the current parent record are left out.
	
	WORKAROUND
	==========
	
	Method One
	----------
	
	After using the SET RELATION TO command to break the relation, use the SELECT
	command to select the child table, and then use the USE command. This closes the
	child table.
	
	Open the table again by using the USE command. Set the RecordSource property of
	the grid back to the child alias. The code to do this would look similar to this
	code:
	
	     SELECT orders              && Select the child table
	     USE                        && Close the child table
	     USE orders ORDER cust_id   && Open the child table and reset the order
	     ThisForm.Grid1.RecordSource = "Orders"    && Reset RecordSource
	     ThisForm.Refresh           && Refresh the form
	
	Method Two
	----------
	
	Use the following code to break the relation. This will allow you to see all the
	child records in the grid without resetting any of the grid properties.
	
	  ThisForm.LockScreen = .T.  && Lock the form
	     SELECT orders              && Select the child table
	     nChildRec = RECNO()        && Store the current child record number
	     SELECT customer            && Select the parent table
	     nParentRec = RECNO()       && Store the current parent record number
	     GO TOP                     && Go to the top record in the parent table
	     Thisform.Refresh()
	     SET RELATION TO            && Break the relation
	     ThisForm.Grid1.RecordSource = ThisForm.Grid1.RecordSource
	     * Force the grid to look at the child table again
	     SELECT orders              && Select the child table
	     GO nChildRec               && Go to the child record we were on
	     SELECT customer            && Select the parent table
	     Go nParentRec              && Go to the parent record we were on
	     Thisform.Refresh()
	     ThisForm.LockScreen = .F.  && Unlock the form
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form, and on that form, place a text box, a grid, a vcr command
	  group, and a command button to break the relation. (The vcr command group can
	  be found in the Buttons.vcx file located in VFP\Samples\Classes.)
	
	2. In the Load event of the form, add the following code:
	
	     USE customer IN 0
	     * Customers.dbf and Orders.dbf can be found in VFP\Samples\Data
	     USE orders IN 0 ORDER cust_id
	     SELECT CUSTOMER
	     SET RELATION TO cust_id INTO orders
	
	3. In the Init event of the form, add the following code:
	
	     ThisForm.Text1.ControlSource = "cust_id"
	     ThisForm.Grid1.RecordSource = "orders"
	     ThisForm.Grid1.RecordSourceType = 1
	
	4. Place the following code in the Click event for the Break command button:
	
	     SELECT customer
	     SET RELATION TO
	     thisform.grid1.recordsource='orders'
	     ThisForm.Refresh
	
	5. In the Unload event of the form add the following code:
	
	     select customer
	     use
	     select orders
	     use
	
	6. Open the View window, and run the form.
	
	7. Make a note of the customer id number in the text box, and skip through the
	  first three records.
	
	8. Click the Break command button.
	
	9. Notice that the relation no longer exists in the View window and the only
	  records available in the grid are those that match the current parent record
	  and beyond. No previous records are available.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
