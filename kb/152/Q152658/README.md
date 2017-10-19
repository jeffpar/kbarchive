---
layout: page
title: "Q152658: XCLN: Sort Button Behaves Unexpectedly on Forms"
permalink: /kb/152/Q152658/
---

## Q152658: XCLN: Sort Button Behaves Unexpectedly on Forms

	Article: Q152658
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can set the List Values parameters on the Initial Value tab for a Listbox
	object in the Microsoft Exchange Electronic Forms Designer. However, the Sort
	button may not work as expected if duplicate List Values are created with only a
	difference in the case of the letters. If the Sort button is pressed more than
	once, the duplicate values might be sorted in a different order each time.
	
	MORE INFORMATION
	================
	
	For example, "Computer", "COMPUTER", "CoMpUtEr", "Apple", and "Dog" are added as
	List Values and you press the Sort button numerous times. All of the computer
	entries will appear between "Apple" and "Dog" but they will be sorted randomly.
	
	This issue should not impact very many users because Listboxes are generally used
	to list an array of different values. Where duplicate values are necessary, you
	have complete control over the listing of the values by using the Move buttons
	in the Initial Value dialog.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbZNotKeyword kbExchangeEForms kbExchangeEForms100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
