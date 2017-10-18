---
layout: page
title: "Q164252: FIX: Receiving Error When Selecting 254th Item in List Box"
permalink: kb/164/Q164252/
---

## Q164252: FIX: Receiving Error When Selecting 254th Item in List Box

	Article: Q164252
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500bug kbvfp600fix
	Last Modified: 08-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When selecting an item in a list box or combo box, one or more of the following
	errors may occur:
	
	  Alias 'DYNAMICFONTUNDERLINE' is not found.
	
	  Alias DYNAMICFONTSTRIKETHRU is not found.
	
	  VFP caused an invalid page fault in module Vfp.exe.
	
	  Syntax error.
	
	  Variable '' is not found.
	
	  Alias '' is not found.
	
	These errors occur when selecting the 253rd item from the list box or combo box
	and then selecting the 254th item. The RowSource property has to be set to a
	field in a table or query and RowSourceType can be set to either Alias, Fields,
	Query, or SQL statement.
	
	When selecting the 253rd item in the list box, it may be necessary to move the
	focus to another object and then back to the 254th item in the list box to get
	one of the errors to occur.
	
	In the combo box, just selecting the 253rd item and trying to click to display
	the combo list again triggers an error. These errors occur on any table as long
	as the table has 254 or more records.
	
	RESOLUTION
	==========
	
	There are two ways to prevent these errors from occurring. One is to create an
	array and change the RowSourceType property of the List or Combo box to Array
	and the RowSource property to that array name. The second is to use the Additem
	method to populate the list box or combo box. Following is a code example that
	could be added to the Init event of a list box or combo box to populate it. This
	code assumes that the table is already open.
	
	     GO TOP
	     FOR x = 1 TO RECCOUNT()
	
	       THIS.ADDITEM(<field name>) && Insert field from the table into list.
	       SKIP
	
	     NEXT
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add the Orders table from the Visual FoxPro \Samples\Data
	  folder to the DataEnvironment.
	
	2. Add a list box and command button to the form.
	
	3. Set the RowSourceType property of the list box RowSourceType to Alias and the
	  RowSource property to the orders table.
	
	4. In the Click event of the command button, add the following code:
	
	        WAIT WINDOW STR(RECNO())
	
	5. Run the form and move through the list box until the item 10252 appears.
	
	6. Click the command button, and then click back to the item 10253 in the list
	  box. Note that one of the errors listed in the SYMPTOMS section occurs.
	
	Additional query words: listbox combobox
	
	======================================================================
	Keywords          : kbvfp kbvfp500bug kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
