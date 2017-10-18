---
layout: page
title: "Q137179: PRB: List from Array May Display Incorrect Number Of Elements"
permalink: kb/137/Q137179/
---

## Q137179: PRB: List from Array May Display Incorrect Number Of Elements

	Article: Q137179
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an array that is the RowSource for a list box is redimensioned to a lower
	number of elements than originally displayed in the list box, there will be
	blank rows in the list representing elements from the previous array.
	
	RESOLUTION
	==========
	
	Issue one of the following (assuming the list box is placed on the form and is
	named List1) after redimensioning the array to allow the list box to display the
	correct number of elements:
	
	     Thisform.List1.NumberOfElements=_TALLY
	     * This can be used only if _TALLY is updated when the array is
	     * redimensioned, with SELECT... INTO ARRAY or COPY TO ARRAY
	
	  -or-
	
	     Thisform.List1.Requery
	
	  -or-
	
	     Thisform.List1.RowSource=Thisform.List1.RowSource
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type OPEN DATA in the Command window and select the
	  Vfp\Samples\Data\Testdata.dbc database.
	
	2. Type the following command in the Command window:
	
	     SELECT country FROM CUSTOMER INTO ARRAY test
	
	3. Create a new form, and put a list box object as well as a command button on
	  the form.
	
	4. In the properties for the list box, set the RowSource property to test and
	  the RowSourceType to Array.
	
	5. Place the following code in the command button's Click event procedure:
	
	     SELECT country FROM CUSTOMER WHERE country="Germany" INTO ARRAY test
	     Thisform.Refresh
	
	  This code will change the size and contents of the array and allow the new
	  contents to be displayed in the list box.
	
	6. Run the form. Click the command button, and note "Germany" will appear in the
	  list box, but a number of empty rows will appear at the bottom of the list.
	  These empty rows correspond to the difference in the number of array elements
	  created by the first and second SELECT commands.
	
	Example Resolution
	------------------
	
	Modify the code in the click event of the command button, and add any one of the
	following after the SELECT command. This will allow the list box to display the
	array elements without the blank rows at the bottom of the list:
	
	- Thisform.List1.NumberOfElements=_TALLY
	
	-or-
	
	- Thisform.List1.Requery
	
	-or-
	
	- Thisform.List1.RowSource=Thisform.List1.RowSource
	
	NOTE: There may be performance differences between the above methods with large
	arrays. Use whichever technique provides the best performance.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
