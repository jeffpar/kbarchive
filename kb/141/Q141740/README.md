---
layout: page
title: "Q141740: PRB: APPEND BLANK on a Child Grid Does Not Display New Record"
permalink: /kb/141/Q141740/
---

## Q141740: PRB: APPEND BLANK on a Child Grid Does Not Display New Record

	Article: Q141740
	Product(s): Microsoft FoxPro
	Version(s): 3.00 5.00
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a one-to-many form, when you want your form to have the ability to add child
	records into the grid, you find that clicking the grid does not allow you to
	scroll beyond the last record. Adding a button that uses APPEND BLANK to add a
	new child record won't add a record to the grid.
	
	CAUSE
	=====
	
	In a one-to-many form the grid only displays related records -- records that
	have a key identical to the key of the parent. When you issue an APPEND BLANK
	command, the key field in the new record is blank and is therefore not displayed
	in the grid.
	
	RESOLUTION
	==========
	
	After issuing an APPEND BLANK command, use REPLACE to write a value to the key
	field. You can also use the INSERT command with the VALUES clause instead of
	APPEND BLANK. For example, remove the asterisk from the code in step 4 below, or
	use the command button in Step 5 to resolve the problem.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Use the following steps to create a one-to-many form with a command button that
	calls APPEND BLANK and a command button that calls INSERT.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. In the Data Environment of the form add \Vfp\Samples\Data\Orders.dbf. Then
	  add the table \Vfp\Samples\Data\Orditems.dbf
	
	3. Drag some fields from the Orders table in the data environment onto the form.
	  Click the title bar of the Orditems table in the data environment, and drag
	  it onto the form to create a grid.
	
	4. Add a command button to the form, and set its Caption property to Append. Add
	  the following code to the Click event of the button:
	
	     SELECT Orditems
	     APPEND BLANK
	     * REPLACE order_id WITH Orders.order_id
	     SELECT Orders
	     THISFORM.Refresh
	
	5. Add another command button to the form, and set its Caption property to
	  Insert. Add the following code to the Click event of the button
	
	     INSERT INTO orditems (order_id) VALUES (Orders.order_id)
	     THISFORM.Refresh
	
	6. Add a final command button to the form, and set its Caption property to Exit.
	  Add the following code to the Click event of the button:
	
	     RELEASE THISFORM
	
	7. Click the View Classes button on the form control toolbar. Select Add from
	  the menu. In Visual FoxPro 5.0, double-click the file in
	  \Vfp\Samples\Classes\Buttons.vcx. Or in Visual FoxPro 3.0, double-click the
	  file in \Vfp\Samples\Controls\Buttons.vcx. Select the VCR control, and drop
	  it onto the form.
	
	8. Run the form, and click the Append button.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q138559 How to Append Records to a Grid
	
	Additional query words: VfoxWin one to many
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : 3.00 5.00
	
	=============================================================================
	
