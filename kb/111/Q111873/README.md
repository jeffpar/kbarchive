---
layout: page
title: "Q111873: GETFILE() and PUTFILE() Return Values in Uppercase"
permalink: kb/111/Q111873/
---

## Q111873: GETFILE() and PUTFILE() Return Values in Uppercase

	Article: Q111873
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The GETFILE() and PUTFILE() functions in FoxPro for Macintosh return strings in
	uppercase.
	
	MORE INFORMATION
	================
	
	On the Macintosh, filenames can be created in lowercase and uppercase. You can
	also use mixed case for filenames when you are working interactively with all
	the FoxPro power tools. However, under program control, the PUTFILE() function
	is used to allow a filename to be entered. Even if a mixed case filename is
	entered, the PUTFILE() function returns the string in all uppercase.
	
	Likewise, the GETFILE() function returns the path and filename in uppercase
	regardless of the filename's actual case.
	
	Additional query words: VFoxMac FoxMac Upper lower case
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
