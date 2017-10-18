---
layout: page
title: "Q134569: Orchid Vidiola Premium Card Detected as Vidiola Standard"
permalink: kb/134/Q134569/
---

## Q134569: Orchid Vidiola Premium Card Detected as Vidiola Standard

	Article: Q134569
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 detects and configures the Orchid Vidiola video capture card as a
	Vidiola Standard card.
	
	CAUSE
	=====
	
	The Orchid Vidiola card is built around the AuraVision VxP500 chipset, and
	Windows 95 detects it by the chipset as well as by the existence of the
	Avwin.ini file that contains the initialization information for the card.
	
	RESOLUTION
	==========
	
	To work around this behavior, install the original Orchid drivers for the
	Vidiola Premium card to use the MJPEG option. However, doing so may have the
	side effect of the system faulting in the User.exe file because of a problem in
	the Vinit.exe snooper application for this card. If the Orchid Vidiola video
	capture card is still detected as a Vidiola Standard card, contact Orchid for a
	resolution to this problem.
	
	MORE INFORMATION
	================
	
	The Premium model is equivalent to a Standard model, but has more on-board
	memory and an MJPEG daughter card. The detection module finds nothing
	distinctive between them, and as a result detects the Premium model as a
	Standard model.
	
	
	For additional information about the Orchid Vidiola video capture card, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q127209 Orchid Vidiola Capture Card Causes Setup to Hang
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
