---
layout: page
title: "Q40025: Problem Printing Multiple Cards on Tractor-Feed Cards"
permalink: /kb/040/Q40025/
---

## Q40025: Problem Printing Multiple Cards on Tractor-Feed Cards

{% raw %}

	Article: Q40025
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Cardfile prints cards, it calculates the number of cards per page based on
	the physical height of the printer page and the print height of the card plus
	the character print height, using the following formula:
	
	  Cards per page =
	  Physical height / (card print height + character print height)
	
	After Cardfile has printed this number of cards, it sends a formfeed to the
	printer using the following function:
	
	  Escape(hDC,NEWFRAME,0,(LPSTR)0,(LPSTR)0)
	
	MORE INFORMATION
	================
	
	If you are using 2 1/6-inch by 4-inch continuous-form cards, the formfeed
	doesn't terminate on the upper edge of a card. It terminates at a location that
	corresponds to the page height asspecified in the printer driver. None of the
	current printer drivers supplied with Windows has a page height that is
	appropriate for use with the continuous-form cards.
	
	Additional query words: 2.x 3.00 3.00a 3.10 win30 win31 3.11 tractor feed cards
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
