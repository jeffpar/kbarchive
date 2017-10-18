---
layout: page
title: "Q141370: Installing MS Plus! After MSN 1.2 or 1.3 Overwrites Msnver.txt"
permalink: kb/141/Q141370/
---

## Q141370: Installing MS Plus! After MSN 1.2 or 1.3 Overwrites Msnver.txt

	Article: Q141370
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install Microsoft Plus! after you install MSN, The Microsoft Network,
	version 1.2 or 1.3, Microsoft Plus! Setup overwrites the version number in the
	Msnver.txt file with the number 5699.
	
	MORE INFORMATION
	================
	
	The version number for MSN version 1.2 is 5799 and for MSN version 1.3 is 5899.
	If Microsoft Plus! Setup has overwritten the version number in the Msnver.txt
	file with 5699, you receive the version 1.2 upgrade even though you have already
	upgraded.
	
	To update the Msnver.txt file, follow these steps:
	
	1. Start an MS-DOS session.
	
	2. Change to the \progra~1\themic~1 directory.
	
	3. Type the following line and then press ENTER:
	
	  "copy con:msnver.txt" (without the quotation marks)
	
	4. When you are prompted "Do you want to overwrite?" press Y, and then press
	  ENTER.
	
	5. Type "5799" (without the quotation marks). Press CTRL+Z and then press ENTER.
	
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbMSNSearch kbPlusSearch kbMSN130 kbMSN120 kbPlus95
	Version           : WINDOWS:1.2,1.3,95
	
	=============================================================================
	
