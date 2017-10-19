---
layout: page
title: "Q86627: Cannot Print in Draft Mode with Okidata Printers"
permalink: /kb/086/Q86627/
---

## Q86627: Cannot Print in Draft Mode with Okidata Printers

	Article: Q86627
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The drivers included for Okidata printers always print in near letter quality
	(NLQ) or letter quality (LQ) mode, whichever is the highest available mode. You
	cannot print in the Utility or High Speed Draft modes.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in the Okidata printer drivers
	version 1.0. OKI drivers version 2.0 corrects this problem for the Okidata 24
	pin printers.
	
	MORE INFORMATION
	================
	
	When you print using the device fonts on Okidata printers, changing the Print
	Quality to Draft in the Print Setup dialog box does not affect the printing
	speed or quality. The printer still prints in the highest available mode, either
	NLQ or LQ.
	
	This applies to the following drivers and printers.
	
	OKI24.DRV Version 1.0
	---------------------
	
	- Okidata ML 380
	
	- Okidata ML 390
	
	- Okidata ML 390 Plus
	
	- Okidata ML 391
	
	- Okidata ML 391 Plus
	
	- Okidata ML 393
	
	- Okidata ML 393 Plus
	
	- Okidata ML 393C
	
	- Okidata ML 393C Plus
	
	OKI9.DRV Version 1.0
	--------------------
	
	- Okidata ML 192
	
	- Okidata ML 192 Plus
	
	- Okidata ML 193
	
	- Okidata ML 193 Plus
	
	- Okidata ML 320
	
	- Okidata ML 321
	
	OKI9IBM.DRV Version 1.0
	-----------------------
	
	- Okidata 92/93 IBM
	
	- Okidata ML 192 IBM
	
	- Okidata ML 193 IBM
	
	- Okidata ML 320 IBM
	
	- Okidata ML 321 IBM
	
	
	Additional query words: microline micro line 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
