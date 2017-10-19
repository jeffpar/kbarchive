---
layout: page
title: "Q113019: PPT: Cannot Change Default Fit Text or Anchor Point Options"
permalink: /kb/113/Q113019/
---

## Q113019: PPT: Cannot Change Default Fit Text or Anchor Point Options

	Article: Q113019
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:3.0,3.0b,4.0; WINDOWS:3.0,4.0,4.0a,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a 
	- Microsoft PowerPoint for Macintosh, versions 3.0, 3.0b, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot change the default Fit Text or Anchor Point options in PowerPoint.
	Shape objects, labels, and text boxes will always have the same standard,
	default object attributes when you first create them.
	
	The default settings for these objects are as follows:
	
	  Object Type    Anchor Point Type     Adjust Size?    Word-wrap?
	  -----------    -----------------     ------------    ----------
	
	  Shape               Middle                No             No
	  Label                Top                  Yes            No
	  Text box             Top                  Yes            Yes
	
	NOTE: The Fit Text option is available in PowerPoint 3.0, and the Anchor Point
	option is available in PowerPoint 4.0.
	
	
	MORE INFORMATION
	================
	
	The Fit Text and Anchor Point commands allow you to change, for the selected
	object(s), the following object attributes:
	
	  Anchor Point
	  Box Margins
	  Adjust Object Size to Fit Text
	  Word-wrap Text in Object
	
	WORKAROUND
	==========
	
	If you need to create several objects with attributes that differ from the
	standard defaults, you can make this task easier by using either of the two
	following workarounds:
	
	Workaround 1
	------------
	
	If you have created an object that has the object attributes that you want, you
	can use the Pick-up Style and Apply Style tools (version 3.0) or the Format
	Painter tool (version 4.0) to copy those attributes to other objects.
	
	The drawback to this method is that all other object attributes are copied as
	well, such as fill color, line style, and so on.
	
	Workaround 2
	------------
	
	1. Create an object and change its attributes as desired, using the Fit Text or
	  Anchor Point command.
	
	2. Use the Copy and Paste commands (or the Duplicate command) to make as many
	  copies of that object as you need with those attributes.
	
	3. Make any additional changes to the copies.
	
	Additional query words: 4.00 7.00 winppt macppt powerpt ppt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt300Mac kbPowerPt400Mac kbPowerPt300bMac kbPowerPt300 kbPowerPt400a
	Version           : MACINTOSH:3.0,3.0b,4.0; WINDOWS:3.0,4.0,4.0a,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
