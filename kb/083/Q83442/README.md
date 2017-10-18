---
layout: page
title: "Q83442: Quadram VGA Cards and Video Display in Windows 3.1"
permalink: kb/083/Q83442/
---

## Q83442: Quadram VGA Cards and Video Display in Windows 3.1

	Article: Q83442
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Quad VGA display driver does not have full functionality on some VGA cards,
	such as the Quadram and Chips & Technologies cards, when used with Microsoft
	Windows operating system version 3.1. You cannot use the MS-DOS Prompt in a
	window. In addition, pressing ALT+TAB may result in a corrupted display. Windows
	3.0 behaves similarly with these cards.
	
	The VGA (Version 3.0) selection in the Display list box in Windows 3.1 Setup
	offers the most functionality for these video cards. To access the Display list
	box, choose the Windows Setup icon, and choose Change System Settings from the
	Options menu.
	
	Occasionally, you need to run the following command from the MS-DOS command
	prompt before starting and/or after running Windows 3.1:
	
	  MODE CO80
	
	MORE INFORMATION
	================
	
	The Quadram video card was developed around 1988. It uses the C&T 441
	chipset. Quadram, ATI, and C&T sold display cards with this chipset.
	
	The Quadram video card uses the VGA driver with its own virtual display driver
	(VDD) VDDCT441.386. This driver also shipped with Windows 3.0. It was kept in
	Windows 3.1, but a new modified VGA driver was developed.
	
	
	KBCategory: kbhw kbdisplay kb3rdparty
	KBSubcategory: win31
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
