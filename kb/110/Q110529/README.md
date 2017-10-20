---
layout: page
title: "Q110529: PRB: FoxPro for Mac Doesn't Unload Library Before Reloading It"
permalink: /kb/110/Q110529/
---

## Q110529: PRB: FoxPro for Mac Doesn't Unload Library Before Reloading It

{% raw %}

	Article: Q110529
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Unlike in FoxPro for MS-DOS or FoxPro for Windows, a library (.MLB) can be
	loaded multiple times in FoxPro for Macintosh. For example, if you issue the
	following commands in the Command window
	
	     SET LIBRARY TO foxtools
	     SET LIBRARY TO foxtools ADDITIVE
	     ? SET("LIBRARY")
	
	"FOXTOOLS.MLB, FOXTOOLS.MLB" will be returned.
	
	The DISPLAY STATUS command will now show two instances of FoxTools loaded and
	will not unload the first instance before loading the second.
	
	In FoxPro for MS-DOS or FoxPro for Windows, the first instance of the library
	would be unloaded and the second instance would be loaded.
	
	RESOLUTION
	==========
	
	Before reloading the library, use the RELEASE LIBRARY command to unload the
	library first. For example, issue the following command before reloading the
	FoxTools library:
	
	     RELEASE LIBRARY foxtools
	
	Additional query words: vFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
