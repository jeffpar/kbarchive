---
layout: page
title: "Q115070: Writer 1: Prints Black/White on DeskWriter or Other Printers"
permalink: kb/115/Q115070/
---

## Q115070: Writer 1: Prints Black/White on DeskWriter or Other Printers

	Article: Q115070
	Product(s): Microsoft Home Kids Products
	Version(s): MACINTOSH:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for the Macintosh, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a card to one of the following printers, part or all of the card
	may print in black and white:
	
	- Hewlett-Packard (HP) DeskWriter C
	
	- HP DeskWriter 550c
	
	- Apple Color Stylewriter Pro
	
	- DeskWriter 540 and DeskWriter 560C
	
	- Epson Color Stylus
	
	CAUSE
	=====
	
	This occurs when there is not enough memory allocated to Creative Writer. Cards
	require more memory to print than other documents. If there is not enough memory
	available, the card prints, but it prints without color. In addition, if a
	border is applied to a card, it will compound the problem because the border
	requires more memory to print.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Exit Creative Writer.
	
	2. In the MSKids Folder, highlight the Creative Writer program icon.
	
	3. From the File menu, choose Get Info.
	
	4. In the Preferred Memory Size box, type a new memory size. (This number, added
	  to the system memory, should be less than the total memory of the Macintosh.
	  For example, on an 8 MB RAM Macintosh with system memory of 2500K, the most
	  you would allocate to Creative Writer might be 5120K.)
	
	5. Close the Get Info box.
	
	6. Return to Creative Writer.
	
	The Creative Writer document should now print properly.
	
	
	Additional query words: 1.00 won't can't doesn't hewlett packard hpdeskwriter mskids mac cw dw Apple Color Stylewriter Pro 1.10 kids mczee hpdw 500 550 series 1.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbPTProdChange kbCreativeWriter110Mac kbCreativeWriter110aMac kbCreativeWriter100Mac
	Version           : MACINTOSH:1.0,1.1,1.1a
	
	=============================================================================
	
