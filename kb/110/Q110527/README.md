---
layout: page
title: "Q110527: PRB: ADIR() in FoxPro for Macintosh Doesn't Return &quot;.&quot; or &quot;..&quot;"
permalink: kb/110/Q110527/
---

## Q110527: PRB: ADIR() in FoxPro for Macintosh Doesn't Return &quot;.&quot; or &quot;..&quot;

	Article: Q110527
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ADIR() function does not return "." and ".." when the D option is specified.
	
	CAUSE
	=====
	
	The Macintosh file system does not support current folder notation (.) and
	subfolder notation (..); therefore, they are not returned when this function is
	executed.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the Command window, type the following:
	
	     =ADIR( myarray, "*.*", "D" )
	     ? myarray(1, 1)
	
	In FoxPro for Windows or FoxPro for DOS, "." will be returned. In FoxPro for
	Macintosh, the first file or folder encountered will be returned.
	
	Additional query words: VFoxMac FoxMac 2.50b 2.50c
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	
	=============================================================================
	
