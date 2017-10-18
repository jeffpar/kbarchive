---
layout: page
title: "Q136640: How to Fill a Combo Box with a Unique List of Items"
permalink: kb/136/Q136640/
---

## Q136640: How to Fill a Combo Box with a Unique List of Items

	Article: Q136640
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To have a combo box display unique values from a field of a database that
	contains multiple occurrences of each of those values, use the DisplayValue
	property in combination with the ListIndex property of the combo box.
	
	MORE INFORMATION
	================
	
	Placing a string in the combo box DisplayValue property automatically sets the
	combo box ListIndex property to zero (0) if no match is found or to the index
	position of a matching string within the created list. Therefore, you can loop
	through until the ListIndex property is 0, and then add the new list item by
	using the AddItem method. By using a SCAN...ENDSCAN looping structure, you can
	create a completely unique list as the following example code illustrates.
	
	Sample Code
	-----------
	
	Place the following code in the combo box Init event to create a unique list of
	the <field name> contents before displaying the combo box:
	
	     * Init Code
	     SCAN
	        THIS.DISPLAYVALUE = <field name>
	        IF THIS.LISTINDEX = 0      && not already in the list
	           THIS.ADDITEM(<field name>)
	        ENDIF
	     ENDSCAN
	     THISFORM.REFRESH
	
	If a new item is typed into the combo box, it must be verified as unique before
	being added to the current list. To force the ListIndex property to change
	automatically, add the following code to the Valid event procedure of the combo
	box:
	
	     * Valid Code
	     THIS.VALUE = THIS.DISPLAYVALUE
	     IF THIS.LISTINDEX = 0      && Not already in the list
	        THIS.ADDITEM(THIS.VALUE)
	        THIS.DISPLAYVALUE = THIS.VALUE
	     ENDIF
	
	The code assigns the DisplayValue property to the Value property for the combo
	box. Then it checks the value of ListIndex. If ListIndex is 0, the item is added
	as before. When this comparison is made, the DisplayValue property loses its
	contents, so the Value property is reassigned to the DisplayValue property in
	the IF...ENDIF structure.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: VFoxWin akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
