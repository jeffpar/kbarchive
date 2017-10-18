---
layout: page
title: "Q58182: Mac Wkst: Macintosh Beeps When Mail DA Is Chosen"
permalink: kb/058/Q58182/
---

## Q58182: Mac Wkst: Macintosh Beeps When Mail DA Is Chosen

	Article: Q58182
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Macintosh will react in two ways when it is running low on memory and the
	Microsoft Mail desk accessory (DA) is chosen from the Apple menu:
	
	1. An error message may appear stating that there is not enough memory to open
	  Microsoft Mail.
	
	2. The Macintosh beeps. Under severe low-memory conditions, Microsoft Mail only
	  beeps instead of giving a dialog box that states the problem.
	
	Both conditions require some memory to be freed up on the Macintosh, either by
	closing windows or applications; removing unnecessary fonts, DAs, and INITs; or
	turning off the RAM Cache in the Control Panel.
	
	A possible workaround, if running under MultiFinder, is to hold down the OPTION
	key and select the Mail DA. This opens Mail in the application memory of the
	current application.
	
	Another reason for the Macintosh to just beep when a desk accessory is selected
	is if the DA Handler file is not present in the System Folder when running under
	MultiFinder.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
