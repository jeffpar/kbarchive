---
layout: page
title: "Q94764: Video: No Frames Captured with New Media Graphics Cards"
permalink: /kb/094/Q94764/
---

## Q94764: Video: No Frames Captured with New Media Graphics Cards

{% raw %}

	Article: Q94764
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Super VideoWindows and TV-VideoWindows video capture cards from New Media
	Graphics must be configured to utilize hardware interrupt 10 to work correctly
	under Video for Windows. If this interrupt is not selected you will receive the
	following error message when you attempt to capture video using the VidCap
	utility.
	
	  No frames were captured, confirm that vertical sync interrupts are configured
	  and enabled.
	
	MORE INFORMATION
	================
	
	The following excerpt is from the release notes provided with Video for
	Windows:
	
	==============================================
	New Media Graphics Driver
	==============================================
	
	This release includes a video capture driver that works with the Microsoft
	Video for Windows software.
	
	The Super VideoWindows board is installed through INSTALL.EXE, supplied by
	New Media Graphics. Once you've run this program another accessory,
	VCONFIG.EXE, is used to configure and adjust the colors for the board. Use
	the other supplied accessory, VDEV.EXE, to check the installation.
	
	After you've run these accessories to install the board, use the Control
	Panel Drivers option to install the SuperVideo Windows video capture driver
	included on this disk. Choose the Add button and select Unlisted Or Updated
	Driver to install the correct driver. There is one driver compatible with
	all versions of Super VideoWindows and TV-VideoWindows.
	
	Once the driver is installed, you may use the AVI capture program VidCap to
	capture frames, sequences of frames, or capture video in real time.
	
	If you have an earlier SVW-ISA card, you may not be able to use the real-
	time video capture feature of the VidCap program. See below.
	
	After installation and setup is complete, you may want to check to see that
	NMGSVW.DLL and NMGSVW.INI are both in your WINDOWS\SYSTEM directory.
	
	Note: The Super VideoWindows board uses INT 10 only. If you want to change
	the I/O port address for the card, you must use the Control Panel Driver's
	option, the VCONFIG.EXE utility, and then restart the machine.
	
	If you have any problems or questions about the SVW capture driver, please
	call the New Media Graphics technical support department at (508) 663-0666.
	
	All Cards
	---------
	
	In order to use the AVI Video Sequence capture feature, you must enable the
	interrupt jumper on the board. The number and location of the jumper varies
	from board to board. Refer to the board specific directions below. Use an
	unused jumper block from the I/O address selection jumper to enable the
	interrupt.
	
	SVW-ISA, SVW-CM
	---------------
	
	The interrupt jumper is labeled JP18 and is located above and to the left
	of the edge fingers on the bottom of the card, when looking at the top of
	the board.
	
	Note: Some earlier revisions of the Super VideoWindows board may not
	support interrupts. These boards are marked REV 2A, REV 2B, or REV 2E. They
	can capture single frames, but cannot capture a sequence of frames in real
	time.
	
	SVW SL, TV-VideoWindows
	-----------------------
	
	The interrupt jumper is labeled JP13, and is located above the shorter row
	of the card edge fingers when looking at the top of the board.
	
	New Media Graphics
	780 Boston Road
	Billerica, MA  01821-5925
	
	Phone: (508) 663-0666
	Fax:   (508) 663-6678
	
	Additional query words: 1.00 videowindows TV TV=videowindows
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	

{% endraw %}
