---
layout: page
title: "Q91683: Cardfile Size Limitations"
permalink: /kb/091/Q91683/
---

## Q91683: Cardfile Size Limitations

	Article: Q91683
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Cardfile is limited by one 64K memory segment. Cardfile uses 52 bytes for each
	card, resulting in a maximum of 1260 cards. If you attempt to add another card,
	the following message displays:
	
	  Not enough memory to perform this operation. Quit one or more applications to
	  increase available memory, and then try again.
	
	Quitting one or more applications does not allow the addition of any more cards.
	The 64K segment is full, and no new cards can be added.
	
	This 64K limitation does not apply to the information stored in each card. Each
	card can hold 39 characters for the title and 11 lines of 40 characters each (a
	maximum of 440 characters) for the body of the card. If you try to enter a 12th
	line or a 41st character on line 11, the following error message is displayed:
	
	  Cannot paste text onto the card. The text on the clipboard is too long to fit
	  on a Cardfile card.
	
	For example, a file that contains 1260 blank cards is 70,565 bytes in size. If
	you fill all 479 characters of every card, you have a file size of 624,965
	bytes.
	
	MORE INFORMATION
	================
	
	The last paragraph on page 444 of the "Microsoft Windows User's Guide" for
	version 3.1 states:
	
	  The number of cards you can store in a Cardfile file depends on the amount of
	  memory in your computer and the amount of information on the individual
	  cards.
	
	This is misleading. You are limited to 1260 cards per file and 52 bytes per card.
	You can create new files, each with 1260 cards per file, until you are out of
	hard disk space.
	
	Additional query words: 3.11 3.00 3.00a 3.10 card file docerr limit
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
