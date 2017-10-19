---
layout: page
title: "Q134245: FIX: Multi-Select List Box Does Not Retain Selected Items"
permalink: /kb/134/Q134245/
---

## Q134245: FIX: Multi-Select List Box Does Not Retain Selected Items

	Article: Q134245
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A List Box that has the Multi-Select property set to True does not always retain
	the selected items.
	
	WORKAROUND
	==========
	
	Listed below are two workarounds:
	
	- Create a mover-type list box to move the items from one list to another.
	
	  -or-
	
	- Populate the list box using the AddItem method, and set the RowSourceType to
	  None, instead of basing the list box on fields.
	
	For more information about the behavior of list boxes when set to None, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q136588 PRB: List Boxes and Combo Boxes Lose Item Properties
	
	Steps Populate the List Box Using AddItem Method
	------------------------------------------------
	
	The following steps can be used to fix the sample listed later in this article,
	under the "Steps to Reproduce Problem" section, assuming that the customer table
	from Testdata.dbc has first been added to the data environment.
	
	1. Change the following properties of the list box:
	
	        RowSourceType=none - 1
	        RowSource=(empty)
	
	2. Place the following in the Init Method of the list box:
	
	        SCAN
	        THIS.ADDITEM(cust_id, RECNO(), 1)
	        THIS.LIST(RECNO(), 2)=address
	        ENDSCAN
	
	3. In the RightClick Method of the list box add the following:
	
	        FOR i= 1 to THIS.LISTCOUNT
	          IF THIS.SELECTED(i)
	          ? THIS.LIST(i)
	          ENDIF
	        ENDFOR
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form, and place a list box on it.
	
	2. Set the list box properties as follows:
	
	     ColumnCount = 2
	     ColumnWidths=50,200
	     Multi-Select = .T.
	     RowSource=customer.customer_id,address
	     RowSourceType=6-Fields
	
	3. Run the form, and select the first item. Hold down the SHIFT key, and use the
	  elevator bar to go to the bottom of the list and select the last item.
	
	4. Scroll from the bottom of the list to the top to verify that all of the items
	  are still selected. You will see that some of the items are no longer
	  selected. The items that are no longer selected are not always the same
	  items; they may vary from trial to trial.
	
	Additional query words: multiselect
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
