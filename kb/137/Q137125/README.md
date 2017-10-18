---
layout: page
title: "Q137125: How to Use IncrementalSearch Property of List and Combo Boxes"
permalink: kb/137/Q137125/
---

## Q137125: How to Use IncrementalSearch Property of List and Combo Boxes

	Article: Q137125
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The IncrementalSearch property of list and combo boxes permit the user to
	perform an incremental search of values. An example of an incremental search
	would be to type the letter F followed by the letter O, and find the first
	occurrence of a string beginning with FO. A non-incremental search in this case
	would first locate the first string beginning with F, followed by the first
	string beginning with the letter O.
	
	The IncrementalSearch property enables or disables this capability within list
	and combo boxes. However, by itself, the IncremetalSearch property set to True
	may not always produce what you expect.
	
	MORE INFORMATION
	================
	
	To take advantage of the IncrementalSearch property, the _DBLCLICK variable must
	also be set. The initial value of .5 for _DBLCLICK may not provide adequate time
	to enter the characters in the object. Increasing the value of _DBLCLICK to 1.5
	allows more time to enter data.
	
	Therefore, in the Init event of a formset, form, list box, or combo box, add this
	line of code:
	
	     _DBLCLICK=1.5
	
	Then set the IncrementalSearch property of the list or combo box to true, and the
	incremental search behavior will work as expected.
	
	REFERENCES
	==========
	
	For more information about _DBLCLICK, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q95674 Keep List Box from Jumping to First Entry Beg w/ 2nd Char
	
	Additional query words: VFoxWin delay one time
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
