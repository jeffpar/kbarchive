---
layout: page
title: "Q97159: READKEY() Doesn't Work with CTRL+PAGE UP &amp; CTRL+PAGE DOWN"
permalink: /kb/097/Q97159/
---

## Q97159: READKEY() Doesn't Work with CTRL+PAGE UP &amp; CTRL+PAGE DOWN

	Article: Q97159
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 4-58 of the "Commands & Functions" manual incorrectly indicates that
	READKEY() will return exit codes or update codes if the CTRL+PAGE UP or
	CTRL+PAGE DOWN key combinations are pressed. These key combinations do not exit
	a full screen command on the Macintosh. Therefore, READKEY() will not return any
	integer values.
	
	MORE INFORMATION
	================
	
	The READKEY() function returns an integer value representing the key or keys
	pressed by the user to exit a full screen command. Keys other than CTRL+PAGE UP
	and CTRL+PAGE DOWN can be used to exit the full screen command; READKEY() will
	return the value for the keys used.
	
	Additional query words: 2.01 clear read exit control FoxBASE+/Mac pgup pgdn pageup pagedown docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
