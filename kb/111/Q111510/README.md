---
layout: page
title: "Q111510: PRB: &lt;ExpC3&gt; of PUTFILE() Is Ignored in FoxPro for Macintosh"
permalink: /kb/111/Q111510/
---

## Q111510: PRB: &lt;ExpC3&gt; of PUTFILE() Is Ignored in FoxPro for Macintosh

	Article: Q111510
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are developing a cross-platform application and you include <expC3>
	in the PUTFILE() function, it will be ignored in FoxPro for Macintosh.
	
	For example, suppose you run the following code in both FoxPro for Windows and
	FoxPro for Macintosh:
	
	    ? PUTFILE('Choose a program file', 'test.prg', 'PRG')
	
	In FoxPro for Windows, this code will create a dialog box that displays all files
	with an extension of .PRG. In FoxPro for Macintosh, the same dialog box will
	display all files in the current folder without filtering them by extension.
	
	STATUS
	======
	
	This behavior is by design due to the Macintosh standard of not relying on file
	extensions for operations.
	
	REFERENCES
	==========
	
	FoxPro for Macintosh Help file
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
