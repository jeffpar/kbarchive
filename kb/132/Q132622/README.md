---
layout: page
title: "Q132622: Cannot Print with Avery LabelPro"
permalink: kb/132/Q132622/
---

## Q132622: Cannot Print with Avery LabelPro

	Article: Q132622
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you rename or remove the default printer in Windows 95, you may receive one
	of the following error messages when you try to print from Avery LabelPro:
	
	- No printer driver files found
	
	- No installed printer drivers
	
	CAUSE
	=====
	
	Avery LabelPro stores the name of the default printer in a file called
	Lpwin.ini. When the name of the default printer is changed, Avery LabelPro does
	not respond to the global Win.ini file change notification message, and does not
	update the Lpwin.ini file to reflect the new default printer name. Therefore,
	when you attempt to print from Avery LabelPro, the default printer cannot be
	located.
	
	RESOLUTION
	==========
	
	Edit the Lpwin.ini file and modify the "Printer=" entry so that its value equals
	the new default printer name. You can find the name of the default printer in
	the "Device=" entry in the [Windows] section of the Win.ini file. For example,
	you might find the following line in the [Windows] section of the Win.ini file:
	
	  device=HP LaserJet 4/4M,HPPCL5MS,LPT1
	
	To resolve this problem, modify the "Printer=" entry in the Lpwin.ini file so
	that it reads:
	
	  Printer=HP LaserJet 4/4M
	
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
