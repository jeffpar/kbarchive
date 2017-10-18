---
layout: page
title: "Q110118: How to Tell if a Window Is Defined as Mac Desktop Style"
permalink: kb/110/Q110118/
---

## Q110118: How to Tell if a Window Is Defined as Mac Desktop Style

	Article: Q110118
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
	
	Windows created in FoxPro for Macintosh can be defined as residing on the
	Macintosh desktop, which is a state that does not exist in Windows or MS-DOS.
	
	The WPARENT() command in FoxPro for Macintosh has been updated to return
	"MACDESKTOP" if the window being checked is a Macintosh desktop style window.
	
	MORE INFORMATION
	================
	
	For example, if the window titled "Updates" were a Macintosh desktop window, its
	status could be checked by issuing the following command:
	
	       WPARENT("Updates")
	
	The text string "MACDESKTOP" would be returned.
	
	REFERENCES
	==========
	
	For additional information about this subject, refer to the "Installation and
	Macintosh Features Guide," the "Language Reference," and the help topics for
	WPARENT(), DEFINE WINDOW, ACTIVATE WINDOW, and SET MACDESKTOP.
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
