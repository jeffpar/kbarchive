---
layout: page
title: "Q243229: WD97: Postal Bar Code Will Not Fit on Some Labels"
permalink: kb/243/Q243229/
---

## Q243229: WD97: Postal Bar Code Will Not Fit on Some Labels

	Article: Q243229
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print addresses to mailing labels, the delivery point bar code may not
	print in its entirety on your label, or the option to add the bar code may not
	be available, as in the following cases:
	
	Case 1: Postal Bar Code Cut Off
	-------------------------------
	
	If you create a merge to mailing labels and insert a postal bar code, when you
	print your labels, the postal bar code is cut off on the right side of the
	label.
	
	Case 2: Delivery Point Bar Code Check Box Unavailable
	-----------------------------------------------------
	
	If you create labels by clicking Envelopes and Labels on the Tools menu, the
	Delivery point barcode check box may not be available.
	
	
	CAUSE
	=====
	
	This behavior is by design in Microsoft Word. Some labels are too narrow to
	contain a complete (11-digit) postal bar code.
	
	WORKAROUND
	==========
	
	Use a label that is wide enough to contain the postal bar code. For example, use
	an address label that is more than 3.25 inches wide.
	
	MORE INFORMATION
	================
	
	When you print a postal bar code with Microsoft Word, a correctly printed
	11-digit postal bar code is approximately 2.75 inches wide. When you add the
	postal bar code to a label that is less than 3.25 inches wide, the postal bar
	code may not be printed in its entirety on the mailing label. Some mailing
	labels (for example, Avery 5160) are too small to print a complete 11-digit
	delivery point bar code.
	
	NOTE: The U.S. Postal Service (USPS) requires an 11-digit delivery point bar code
	to satisfy the requirements for a discount in your mailing.
	
	According to USPS Publication 25, the dimensions of an 11-digit delivery point
	bar code (62 Bars - C Prime Field) are as follows:
	
	  The distance from the leading edge of the first (leftmost) bar to the leading
	  edge of the sixty-second (rightmost) bar should be at least 2.495 inches. The
	  distance from the leading edge of the first bar to the trailing edge of the
	  sixty-second bar should not exceed 3.125 inches.
	
	For more information about business address formatting, please refer to
	Publication 25 and Publication 28, which can be obtained from the USPS at the
	following Web address:
	
	  http://www.usps.gov/cpim/buspubs.htm
	
	Additional query words: barcode
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
