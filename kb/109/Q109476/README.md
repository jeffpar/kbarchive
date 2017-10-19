---
layout: page
title: "Q109476: BUG: FILE() Returns Erroneous Results"
permalink: /kb/109/Q109476/
---

## Q109476: BUG: FILE() Returns Erroneous Results

	Article: Q109476
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the FILE() function in FoxPro for Macintosh and the length of
	the filename is greater than 27 characters and contains no periods, the return
	value is FALSE (.F.) even though the file exists.
	
	RESOLUTION
	==========
	
	Ensure that filenames are less than 27 characters or contains a period somewhere
	in the filename before checking for the file's existence.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FoxPro versions 2.5b and 3.0b
	for the Macintosh.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Give a file a name that is greater than 27 characters. Make sure there aren't
	  any periods in the filename.
	
	2. In the Command Window, type the following:
	
	  " ? FILE("<long filename>")" (without the quotation marks)
	
	A .F. value will be returned.
	
	Additional query words: vFoxMac FoxMac buglist2.50b 3.00b bugl
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
