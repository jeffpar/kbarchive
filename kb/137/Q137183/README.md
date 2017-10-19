---
layout: page
title: "Q137183: How to Add Items to a Multiple-Column Combo Box"
permalink: /kb/137/Q137183/
---

## Q137183: How to Add Items to a Multiple-Column Combo Box

	Article: Q137183
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Combo boxes are designed so that new items can be added to the list or existing
	items can be selected from the list. You can do the same thing with
	multiple-column combo boxes. This article shows you how.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. Create a new form and place a combo box on it.
	
	2. Add the Orders table from the Testdata database to the data environment.
	
	3. Set the following properties for the combo box:
	
	  Property        Value
	  -------------------------------------
	  Style           0 - Dropdown Combo
	  RowSourceType   0 - None
	  RowSource       (should be empty)
	  ColumnCount     2
	  ColumnWidth     50,120
	  BoundColumn     1 (this is the default)
	
	  RowSourceType must be set to 0 and RowSource must be empty when items are
	  added to the combo box programmatically.
	
	4. Place the following code in the Init event of the combo box:
	
	     SET EXACT ON   && Comparison done in Valid may be comparing blanks
	     SELECT orders
	     DO WHILE recno()<10   && Fill the combo box with the first 10 records
	
	        ThisForm.Combo1.AddItem(order_id,This.ListCount+1,1)
	        ThisForm.Combo1.AddListItem(to_country,This.ListCount,2)
	        SKIP
	
	     ENDDO
	     This.Value=This.List(1)  && Initialize the value of the combo box
	
	  ListCount is initially 0 because no items are contained in the list. The
	  AddItem method places Order_id in column one. ListCount+1 indicates the first
	  row added. After the AddItem method is called, ListCount is 1. The
	  AddListItem method adds To_country to column two of row one.
	
	
	5. Place the following code in the Valid event of the combo box to add new
	  entries to the list when the form is running:
	
	     in_list=.F.
	     IF AT(",",This.DisplayValue)>0
	        first=ALLTRIM(LEFT(This.DisplayValue,at(",",This.DisplayValue)-1))
	        second=ALLTRIM(RIGHT(This.DisplayValue,LEN(This.DisplayValue);
	           -AT(",",This.DisplayValue)))
	     ELSE
	        first=ALLTRIM(This.DisplayValue)
	     ENDIF
	
	     FOR I= 1 to This.ListCount
	       IF ALLTRIM(first)=ALLTRIM(This.List(I))
	         in_list=.T.
	         =MESSAGEBOX("Item number is already in list,"+chr(13)+ ;
	            "         item not entered","STOP")
	       ENDIF
	     ENDFOR
	
	     IF !in_list
	       IF AT(",",This.DisplayValue)=0
	         =MESSAGEBOX("Comma followed by description needed,"+chr(13)+ ;
	            "        item not entered","STOP")
	       ELSE
	         This.AddItem(first,This.ListCount+1,1)
	         This.AddListItem(second,This.ListCount,2)
	         This.Value=""
	       ENDIF
	     ENDIF
	
	  In the For loop, This.DisplayValue contains the current entry in the combo
	  box. This.Value has not yet been assigned. If This.DisplayValue is equal to
	  some value already in the combo box list, In_list is set to True and the next
	  section of code is not run. If it is not found in the list, then the entry in
	  the combo box is parsed based on a comma placed between what would be the
	  columns one and two. The parsed items are then added to the list by calling
	  the AddItem and AddListitem methods. This.List(I) contains only the values in
	  column one because the BoundColumn is 1.
	
	6. Run the form. Select items in the list, and add new items to the list by
	  entering the Order_id followed by a comma and the to_country.
	
	Additional query words: listbox VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	
	=============================================================================
	
