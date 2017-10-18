---
layout: page
title: "Q90293: .SHG Files Cannot Be Edited"
permalink: kb/090/Q90293/
---

## Q90293: .SHG Files Cannot Be Edited

	Article: Q90293
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Once a graphic has been saved in the segmented-hypergraphic (.SHG) file format,
	the appearance of the graphic can no longer be edited.
	
	MORE INFORMATION
	================
	
	The .SHG file format is not supported by any graphics editors, and therefore it
	is impossible to load a segmented hypergraphic into a graphics editor to alter
	the original image. To work around this problem, a copy of the original graphic
	must be archived before creating the segmented hypergraphic. If the display
	needs to be altered, then the archived graphic may be edited. To copy the hot
	spots to the edited graphic, two instances of the segmented hypergraphic (hot
	spot) editor, SHED.EXE, need to be opened. The first instance should contain the
	original .SHG file with all of the hot spots in place. The second instance
	should contain the edited graphic. The hot spots can be copied from the original
	.SHG file to the new graphic using the Copy and Paste commands available in the
	Hotspot Editor.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
