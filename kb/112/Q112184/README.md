---
layout: page
title: "Q112184: Printing Screen Snapshots in FoxPro for Macintosh"
permalink: /kb/112/Q112184/
---

## Q112184: Printing Screen Snapshots in FoxPro for Macintosh

{% raw %}

	Article: Q112184
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
	
	SYMPTOMS
	========
	
	In FoxBASE+ for the Macintosh, you can print a screen snapshot by choosing Print
	from the File menu. However, this functionality is not available in FoxPro for
	Macintosh.
	
	CAUSE
	=====
	
	The File Print command in FoxPro for Macintosh prints text information in a
	single window only. A screen shot contains graphic images of multiple windows,
	which cannot be printed through FoxPro for Macintosh. This behavior is by design
	to ensure cross-platform compatibility in FoxPro, which can be run in either a
	character- or graphics-based operating system. FoxPro relies on underlying
	operating system functionality or third-party add-ins in order to print screen
	shots.
	
	RESOLUTION
	==========
	
	To work around this behavior, you can print a screen snapshot using the
	Macintosh screen snapshot feature, as follows:
	
	1. With the desired image on the screen, press COMMAND+SHIFT+3. A TeachText PICT
	  file will be created. The first screen snapshot will be named Picture 1; the
	  filename will be incremented by 1 for each successive picture. The file will
	  be created in the root folder of the current default volume (drive).
	
	2. Return to the desktop and double-click the icon for the screen snapshot.
	  TeachText will open. From the File menu in TeachText, choose Print to print
	  the snapshot.
	
	NOTE: You can also print the snapshot from other applications, such as Microsoft
	Word for the Macintosh, that support the PICT file format.
	
	Additional query words: VFoxMac FoxMac snap screenshot dump picture
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
