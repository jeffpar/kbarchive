---
layout: page
title: "Q64669: SoftRIP Error Message in Windows 3.0"
permalink: /kb/064/Q64669/
---

## Q64669: SoftRIP Error Message in Windows 3.0

	Article: Q64669
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A SoftRIP error message is an indication of depleted or insufficient resources
	(most likely GDI) that usually occurs when you try to print a complex image.
	
	Even though the Program Manager may show a lot of available resources, it cannot
	accurately report how much of each kind of resource is available. As a result,
	you cannot use the percentage of resources available as an indication of whether
	a specific action is possible or will produce a SoftRIP failure. (The RIP
	portion of the term SoftRIP stands for "raster imaging program.")
	
	MORE INFORMATION
	================
	
	When this error occurs, the workaround is to take the same steps you would
	normally take for any reduced resources problem. The following is a list of
	things you can do to increase the amount of resources available. Where the
	action suggested requires making modifications to an .INI file, be sure to make
	a backup copy of the .INI file before making any changes.
	
	1. Reduce the number of resources being consumed by the application by closing
	  open windows, eliminating custom menu bars and commands, turning off resource
	  consuming options (that is, in Word for Windows, don't display the Ruler or
	  Ribbon because of the many icons they contain).
	
	2. If the application allows you to print the same image from different views,
	  print from a view that consumes fewer resources (that is, in PowerPoint for
	  Windows, try printing from the Title Sorter view).
	
	3. Reduce the number of applications running concurrently.
	
	4. Reduce the number of icons being used by the Program Manager (eliminate
	  groups by removing the appropriate line(s) in the PROGMAN.INI file and
	  restart Windows).
	
	5. Remove the unused screen fonts from your WIN.INI [FONTS] section, and restart
	  Windows.
	
	6. Remove the unused soft fonts from your WIN.INI printer section and restart
	  Windows.
	
	7. Reduce the complexity of the image or document.
	
	A common situation that can produce this error message is printing a complex
	image to a device that has no internal memory. As a result, the entire image
	must be rendered in the computer's memory and then sent to the device as a
	bitmap (raster imaging program - RIP). A common device of this type is the
	Hewlett-Packard (HP) PaintJet.
	
	The measure of an image's complexity is the number of graphics primitives that
	must be used to render that image. An image that may not seem too complex, might
	actually consume a great deal of resources. Typically images that contain ovals
	with gradient fills or shading require far more resources to render than
	rectangular objects.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
