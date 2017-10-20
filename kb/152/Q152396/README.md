---
layout: page
title: "Q152396: How To Determine if QuickDraw GX Is Loaded Using SYS Function"
permalink: /kb/152/Q152396/
---

## Q152396: How To Determine if QuickDraw GX Is Loaded Using SYS Function

{% raw %}

	Article: Q152396
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine whether QuickDraw GX is loaded in the
	Macintosh's operating system by using the new SYS function SYS(1038) in Visual
	FoxPro for Macintosh. Two other methods to make this determination are also
	described in the More Information section of this article.
	
	The syntax for the SYS(1038) function is:
	
	  ? SYS(1038) && To output the result to the current output device
	
	  or
	
	  x=SYS(1038) && To store the result to a variable named "x"
	
	If QuickDraw GX is loaded, the SYS(1038) function returns TRUE (.T.). If
	QuickDraw GX is not loaded, it returns FALSE (.F.).
	
	QuickDraw GX is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding the performance or reliability of
	QuickDraw GX.
	
	Macintosh Operating System, version 8, no longer supports QuickDraw GX printer
	drivers and printing extensions. Therefore, SYS(1038) always returns false (.F.)
	when used in Visual FoxPro running under OS 8. This is true even if the
	QuickDraw GX 1.1.6 version provided with OS 8 is installed. For additional
	information on the changes with QuickDraw GX in OS 8 see the About QuickDraw GX
	readme file in the Mac OS 8 Read Me folder on the CD-ROM.
	
	MORE INFORMATION
	================
	
	There are at least two other methods you can use to determine if QuickDraw GX is
	loaded, although neither is as easy as SYS(1038) Two other methods are:
	
	- Use the FILE() function, along with the SYS(2033) function, that will return
	  the name of the System:Extensions folder to check for the existence of the
	  QuickDraw GX Extension:
	
	     ? FILE(SYS(2033,1)+":Quickdraw"+CHR(170)+" GX")
	
	  Note the space between the quote mark and GX" at the end. CHR(170) is the
	  trademark symbol (TM).
	
	- Use the FxGestalt() function in FoxTools.cfm. This method requires the
	  FoxTools.cfm library to be loaded first:
	
	     x=""
	     SET LIBRARY TO HOME()+"Foxtools.cfm"
	     ? FxGestalt("qdgx",@x)
	
	  If QuickDraw GX is installed, a positive integer is returned; otherwise,
	  FXGestalt() returns a negative integer. NOTE: The values returned to the
	  second argument of FxGestalt() were not documented at the time this article
	  was written. For more information on the FxGestalt() function, see the
	  Foxtools.hlp file in the "Microsoft Visual FoxPro:Tools" folder.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
