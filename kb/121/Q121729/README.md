---
layout: page
title: "Q121729: Space Err Msg: Error Loading 2D driver"
permalink: kb/121/Q121729/
---

## Q121729: Space Err Msg: Error Loading 2D driver

	Article: Q121729
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-1999
	
	kbdisplay kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Space Simulator for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error message "Error Loading 2D driver" may appear when you start Space
	Simulator if the video configuration information is incorrect.
	
	If, during Setup, either of the SVGA resolutions (640 x 400 or 800 x 600) are
	chosen, you are required to select from a list of video cards and chipsets. If
	the wrong chipset is selected, Space Simulator will not be able to communicate
	properly and may generate the error message "Error Loading 2D driver."
	
	RESOLUTION
	==========
	
	To correct this situation:
	
	1. Determine the appropriate chipset for the video card by consulting the
	  manufacturer or the video card documentation.
	
	2. Once the chipset has been determined, run Setup from the X:\SPACESIM MS-DOS
	  prompt and select the desired resolution (where X is the drive on which your
	  SPACESIM directory resides).
	
	3. When prompted for the chipset information, select the appropriate option from
	  the list. If the correct chipset is not listed, select option <0>, and
	  Space Simulator will be configured for VGA resolution (320 x 200).
	
	Additional query words: 1.00 Spacesim sim dos ss1 D_SpaceSim 2nd VESA 1.2 graphics adapter display
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbZNotKeyword3 kbSpaceSim100DOS
	Version           : MS-DOS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
