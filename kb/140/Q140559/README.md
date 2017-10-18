---
layout: page
title: "Q140559: PPT: File Size Differs Between Macintosh and Windows Versions"
permalink: kb/140/Q140559/
---

## Q140559: PPT: File Size Differs Between Macintosh and Windows Versions

	Article: Q140559
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:3.0,4.0; WINDOWS:3.0,4.0,7.0
	Operating System(s): 
	Keyword(s): kbenv kbgraphic kbinterop
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0 
	- Microsoft PowerPoint for Macintosh, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you open and then save a PowerPoint presentation in Windows that was
	originally created on a Macintosh, you may notice that the file size increases
	significantly.
	
	MORE INFORMATION
	================
	
	When you save a file in PowerPoint for the Macintosh and that file contains
	graphic images, the graphics are stored as native Macintosh graphic (QuickDraw)
	commands.
	
	When you open the same file in PowerPoint for Windows, the file's size increases
	because the graphic images contained in the presentation are converted into
	Windows GDI (Graphics Device Interface) commands. If the graphics are
	bitmap-based, the GDI commands may require more disk space than the equivalent
	QuickDraw commands.
	
	Likewise, if you open and save a file in PowerPoint for the Macintosh that was
	created in PowerPoint for Windows, the file size decreases.
	
	The difference in file size may vary, depending on the number of graphics
	inserted into the presentation, the graphical resolution, and the number of
	colors.
	
	Additional query words: 3.00 4.00 4.00a 4.00c 7.00 quickdraw mac ppt powerpnt grow shrink swells swell pictures picture gif tiff eps large huge enormous immense reduce
	
	======================================================================
	Keywords          : kbenv kbgraphic kbinterop 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt300Mac kbPowerPt400Mac kbPowerPt300
	Version           : MACINTOSH:3.0,4.0; WINDOWS:3.0,4.0,7.0
	Hardware          : MAC x86
	Issue type        : kbinfo
	
	=============================================================================
	
