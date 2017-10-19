---
layout: page
title: "Q85958: PPT: Embossing Diagonal Lines and Angles"
permalink: /kb/085/Q85958/
---

## Q85958: PPT: Embossing Diagonal Lines and Angles

	Article: Q85958
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbusagekbbuglist
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft PowerPoint for Windows, you can format lines, text, and objects as
	"embossed." This option is designed to give lines, text, and objects a
	bas-relief or shallow 3-D effect.
	
	This effect is achieved by making the object the same color as the background and
	then placing a highlight above it and to the left and a shadow below it and to
	the right. The offset and direction of the shadow and highlight are not
	adjustable.
	
	Because the direction of the highlight and shadow cannot be adjusted, there are
	some types of lines or objects that do not look satisfactory when embossed.
	Diagonal lines and diagonal object sides, especially those at a 45 degree angle,
	do not emboss well.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Draw a diagonal line slanting from the upper left to the lower right of the
	  slide. While drawing, hold down the SHIFT key to force the line to comply to
	  a 45 degree angle.
	
	2. Select the line. From the Object menu, choose Line Style. Select a wide line
	  style for visibility.
	
	3. Verify that the line is still selected. From the Object menu, choose Shadow,
	  then choose Embossed from the submenu.
	
	The line is nearly invisible.
	
	This problem also occurs with the default right-triangle shape, which can be
	created with the Shape tool. When embossed, only the bottom edge of the triangle
	remains visible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PowerPoint for Windows. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.00 4.00a 4.00c 7.00 ppt95 winppt
	
	======================================================================
	Keywords          : kbusage kbbuglist
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
