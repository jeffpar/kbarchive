---
layout: page
title: "Q111809: How SROWS() and SCOLS() Behave in FoxPro for Macintosh"
permalink: /kb/111/Q111809/
---

## Q111809: How SROWS() and SCOLS() Behave in FoxPro for Macintosh

	Article: Q111809
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SROWS() and SCOLS() functions return different values in FoxPro for
	Macintosh depending on the setting of MACDESKTOP.
	
	MORE INFORMATION
	================
	
	The Macintosh interface does not require applications to have a controlling
	application window the way Windows does. In FoxPro for Windows, SROWS() and
	SCOLS() return a value based on the size of the FoxPro application window. Since
	this relationship does not exist on the Macintosh, varying results will occur
	depending on the setting of MACDESKTOP.
	
	For example, issue the following commands in FoxPro for Macintosh:
	
	     SET MACDESKTOP ON
	     ?SROWS()
	     ?SCOLS()
	     SET MACDESKTOP OFF
	     ?SROWS()
	     ?SCOLS()
	
	With MACDESKTOP set to ON, the value is based on the overall screen width. With
	MACDESKTOP set to OFF, the value is based on the main FoxPro screen.
	
	Additional query words: vFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
