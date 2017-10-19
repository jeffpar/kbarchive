---
layout: page
title: "Q138667: New Video Card Not Detected After Replacing Trident Card"
permalink: /kb/138/Q138667/
---

## Q138667: New Video Card Not Detected After Replacing Trident Card

	Article: Q138667
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove a video card with a Trident chip set (which uses the standard
	Super VGA driver provided with Windows 95) and add a video card compatible with
	the standard Super VGA video driver, the Add New Hardware Wizard does not detect
	the presence of the new video card and does not detect that the video card with
	the Trident chip set has been removed.
	
	CAUSE
	=====
	
	Windows 95 does not properly handle the response to the BIOS checksum it
	performs on video cards with some Trident chip sets. Therefore, Windows 95
	assumes the Trident card is still installed.
	
	
	RESOLUTION
	==========
	
	Remove the Trident Super VGA driver in Device Manager, and then use the Add New
	Hardware tool in Control Panel to manually add the proper display driver or have
	the new video card detected automatically.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
