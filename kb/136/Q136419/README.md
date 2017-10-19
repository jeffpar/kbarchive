---
layout: page
title: "Q136419: PPT7: Unexpected Results Overlapping Two Semi-Transparent Object"
permalink: /kb/136/Q136419/
---

## Q136419: PPT7: Unexpected Results Overlapping Two Semi-Transparent Object

	Article: Q136419
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In PowerPoint you can apply semi-transparent color fills to an object. A
	semi-transparent fill creates a see-through effect, allowing you to see through
	an object to whatever is behind it. However, if you overlap two objects that
	both have a semi-transparent fill, you lose the see-through effect. Where the
	two objects overlap, only the color of the object on top is visible.
	
	CAUSE
	=====
	
	When a semi-transparent fill is selected, color is placed in alternate pixels.
	When two objects with semi-transparent fills are overlapped, the same pixel
	locations are being used by both objects at the overlapping area (so that only
	the color from the object on top is visible).
	
	WORKAROUND
	==========
	
	In order to have the see-through effect, an object filled with a semi-
	transparent fill must be placed over an object with a solid fill. Solid fills
	can be shaded, patterned, or textured.
	
	Additional query words: 7.00 w_powerpt affect
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
