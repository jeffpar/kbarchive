---
layout: page
title: "Q89210: Linotronic 530 Driver Truncates Page with User-Defined Sizes"
permalink: kb/089/Q89210/
---

## Q89210: Linotronic 530 Driver Truncates Page with User-Defined Sizes

	Article: Q89210
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Linotronic 530 printer driver provided with Microsoft Windows version 3.1
	may not allow you to print out an area larger than 9-by-9 inches at high
	graphics resolution when you use user-defined paper sizes.
	
	With the Linotronic driver selected with a high graphics resolution and a
	document size greater than 9-by-9 inches, the document prints in the lower- left
	corner of the paper only. The printout is no larger than the 9-by-9- inch area.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PSCRIPT.DRV versions 3.5, 3.51,
	3.52, 3.53. We are researching this problem and will post new information here
	as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Install a word processor or desktop publishing package capable of a graphics
	  resolution greater than 1270 dpi (example, Ventura Publisher).
	
	2. In Windows 3.1, install and make the Linotronic 530 printer driver the
	  default.
	
	3. In Control Panel, choose the Printers icon, then choose the Setup button. For
	  the Paper Size, select User Defined.
	
	4. Set the document size to 16.5-by-19.5 inches (1650 by 1950) in the dialog
	  box.
	
	5. From the Linotronic 530 on LPTx dialog box, choose the Options button, then
	  the Advanced button.
	
	6. Select a graphics resolution (dpi) of 1693 or greater.
	
	7. Start the word processor or desktop publishing package and fill the page with
	  text or graphics.
	
	8. Print the document.
	
	Only the bottom-left corner of the document will print.
	
	
	Additional query words: 3.1 win31 linotype lino-type linotronics linatronic
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
