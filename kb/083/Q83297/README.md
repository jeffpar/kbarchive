---
layout: page
title: "Q83297: Using a CGA Display Adapter with Windows"
permalink: kb/083/Q83297/
---

## Q83297: Using a CGA Display Adapter with Windows

	Article: Q83297
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have a CGA or MCGA graphics card, Microsoft Windows appears in black and
	white.
	
	To have Windows display in color, an EGA card (with 64K or 256K memory), VGA,
	Super VGA, or XGA is required.
	
	Under Microsoft Windows version 3.1, CGA monitors cannot accommodate the size of
	specific dialog boxes. Two examples are the About dialog box from the Help menu,
	and the Desktop dialog box from Control Panel. There is no workaround for this
	problem. Full CGA support has not been included in Windows 3.1.
	
	MORE INFORMATION
	================
	
	Windows requires a minimum screen resolution of 640 x 200 (640 pixels wide by
	200 pixels high). In that resolution, the CGA card provides only one color on a
	black background (which in Windows is white on black).
	
	The MCGA card can provide a resolution of 640 x 480 but still provides only white
	on black.
	
	
	The original Logitech Windows 3.1 (OEM version) box states that CGA is a
	supported video mode. This is incorrect. Logitech is changing the wording on the
	box to state more accurately the limited support for CGA.
	
	KBCategory: kbenv kbdisplay
	KBSubcategory: win30 win31 windrvr
	
	Additional query words: 3.1 3.10 3.11 CGA.EXE board adapter
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
