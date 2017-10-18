---
layout: page
title: "Q151851: BUG: Mastering Exchange Development: Product ID Is Zeros"
permalink: kb/151/Q151851/
---

## Q151851: BUG: Mastering Exchange Development: Product ID Is Zeros

	Article: Q151851
	Product(s): Microsoft Mastering Series
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbmm kbsetup kbnokeyword kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Exchange Development ISBN 1-57231-337-4, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reinstall Mastering Exchange Development over an existing installation,
	the Product ID changes from the original ID number to all zeros.
	
	
	RESOLUTION
	==========
	
	The only resolution to this problem is to remove the program using the Remove
	All option in Setup and reinstall it.
	
	Do the following to remove the program:
	
	1. Click the Start button, and then click Run.
	
	2. Type "<CD-ROM drive letter>:\setup.exe" (without the quotation marks).
	  For example, if the CD-ROM drive is drive D, type "d:\setup.exe."
	
	3. From the Setup choices window, click Remove All.
	
	Do the following to reinstall the program:
	
	1. Click the Start button, and then Click Run.
	
	2. Type "<CD-ROM drive letter>:\setup.exe" (without the quotation marks).
	
	The Product ID number will now be correct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed above. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 1.00 multi media multimedia multi-media mmtitles PID
	
	======================================================================
	Keywords          : kbmm kbsetup kbnokeyword kbBug kbISS 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :1.0
	Issue type        : kbbug
	
	=============================================================================
	
