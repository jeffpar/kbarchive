---
layout: page
title: "Q79091: Windows May Not Load on AEG Olympia LT 386sx Laptop"
permalink: kb/079/Q79091/
---

## Q79091: Windows May Not Load on AEG Olympia LT 386sx Laptop

	Article: Q79091
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.0 may not run on an AEG Olympia LT 386sx Laptop
	computer if the screen saver and low-battery alert options are enabled in the
	CMOS setup of the system.
	
	MORE INFORMATION
	================
	
	AEG Olympia has confirmed that Windows may not run in any mode on the Olympia LT
	386sx laptop computer when the Power Saving Time-Out options are not set to
	Default.
	
	The Power Saving Time-Out option consists of a low-battery alert and a built-in
	screen saver feature. When this option is set to Default, both of these features
	are disabled and Windows should load successfully. Information on how to set
	these options can be found on page 6-5 of "The Laptop User's Guide" for the AEG
	Olympia LT 386sx.
	
	Attempting to run Windows with either of these option enabled causes the system
	to display a blank screen and stop responding (hang). The only solution to this
	problem is to disable both of these options in the system CMOS setup.
	
	
	Additional query words: 3.0 3.0a 3.00 3.00a win30 KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
