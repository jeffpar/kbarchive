---
layout: page
title: "Q96951: Short Tear-Off Feature Doesn't Work on Epson 9-Pin Printers"
permalink: kb/096/Q96951/
---

## Q96951: Short Tear-Off Feature Doesn't Work on Epson 9-Pin Printers

	Article: Q96951
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
	
	The short tear-off feature does not work on Epson 9-pin printers if you set a
	user-defined paper size. This problem occurs with any application that prints
	from Windows version 3.1 using the EPSON9.DRV printer driver.
	
	CAUSE
	=====
	
	This feature does not work because the Epson 9-pin printers wait for a formfeed
	(FF) character to signal the end of a print job. For user- defined paper sizes,
	the printer driver does not send an FF character at the end of print jobs.
	Instead, the driver uses vertical positioning to determine the actual length of
	the paper and feeds the paper based on that length.
	
	MORE INFORMATION
	================
	
	For example, the short tear-off feature does not work when you print checks from
	Microsoft Money on the Epson LX-810 because the check blanks require a
	user-defined paper size.
	
	This problem occurs with the EPSON9.DRV printer driver supplied with Windows
	version 3.1 and with version 2.21 of the driver.
	
	Additional query words: 3.00 3.10 w4wprint winppt macppt
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
