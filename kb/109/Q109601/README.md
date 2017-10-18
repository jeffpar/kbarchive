---
layout: page
title: "Q109601: FoxPro for Macintosh Allows Trailing Spaces in Filenames"
permalink: kb/109/Q109601/
---

## Q109601: FoxPro for Macintosh Allows Trailing Spaces in Filenames

	Article: Q109601
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
	
	SUMMARY
	=======
	
	In the Macintosh environment, FoxPro allows trailing spaces in filenames. This
	behavior differs from that of FoxPro for Windows or FoxPro for MS-DOS, which
	automatically trim the trailing spaces.
	
	Trailing spaces in filenames could potentially cause problems in FoxPro for
	Macintosh and other environments that allow long filenames.
	
	Therefore, with the onset of more operating systems that allow long filenames and
	spaces in filenames, good programming practice would warrant trimming all
	filenames before actually creating the files.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following commands in the Command window:
	
	        m.fileh = FCREATE("test ") && Note the trailing space
	        =FPUTS( m.fileh, "This is a test")
	        =FCLOSE( m.file )
	
	2. Issue the ADIR() function. Note that the return string for this file contains
	  a trailing space (that is, "Test ").
	
	NOTE: If this filename was stored in a 10-character database field, there would
	be no way of determining exactly how many spaces were after the filename.
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
