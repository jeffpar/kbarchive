---
layout: page
title: "Q112264: PC Win: Global Address List Not Stored in RAM"
permalink: kb/112/Q112264/
---

## Q112264: PC Win: Global Address List Not Stored in RAM

	Article: Q112264
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail For Windows does not load the entire global address list (GAL)
	into RAM. A small portion of the GAL is loaded when you are viewing the it
	through the address book dialog box but it continues to read from the GAL.NME
	file as you scroll through the list. This information does not remain in memory.
	If you compose another message, Mail reads from the GAL.NME file again.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
