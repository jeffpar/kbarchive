---
layout: page
title: "Q148517: XCLN: Err Msg: You Must Use Character Set 850 or 852"
permalink: kb/148/Q148517/
---

## Q148517: XCLN: Err Msg: You Must Use Character Set 850 or 852

	Article: Q148517
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error when starting the Exchange MS-DOS Client:
	
	  Error - You must use character set 850 or 852 specified during Setup. Change
	  the character set or rerun Setup. Text may be incorrectly displayed on your
	  screen. Sorting in your personal address book may be incorrect. Microsoft
	  Exchange for MS-DOS ID No: 588c - 5083
	
	CAUSE
	=====
	
	When the MS-DOS Client was installed, the language selected has a different
	format from what the computer is set up to use.
	
	RESOLUTION
	==========
	
	Remove all related Exchange MS-DOS files that were installed in the directory
	selected during the original setup sequence. The default is C:\Exchange. Then
	reinstall the Exchange MS-DOS Client, and choose the compatible language for the
	computer.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword3 kbExchange400DOS kbExchange500DOS
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
