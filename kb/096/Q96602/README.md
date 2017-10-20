---
layout: page
title: "Q96602: Video Problems with ATI Mach 32 Series Drivers"
permalink: /kb/096/Q96602/
---

## Q96602: Video Problems with ATI Mach 32 Series Drivers

{% raw %}

	Article: Q96602
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	WINDOWS
	kbdisplay kbmm kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Complete Baseball for Windows, 1994 edition (see below) 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the ATI Mach 32 Series drivers, you may experience split video images
	and cross-sectional displays or general protection (GP) faults during some
	multimedia animations.
	
	The video problems have been reported with the Graphic Ultra Pro and Graphic
	Ultra Plus.
	
	MORE INFORMATION
	================
	
	WORKAROUNDS
	-----------
	
	Try one of the following workarounds:
	
	- Use the VGA driver or the 8514 /a driver supplied with Windows 3.1.
	
	  NOTE: The VGA option disables the animations, which require 256 colors to run.
	  (VGA is only 16 colors)
	
	- Turning off the DeviceBitMap option in the ATI Mach 32 Control Panel may
	  correct the split image or cross-sectional display problems.
	
	  NOTE: If the DeviceBitMap option cannot be found, DeviceBitMap=OFF can be
	  added to the [MACH] section of the WIN.INI.
	
	- Try setting Dithering to VGA Standard in the Mach 32 Control Panel to correct
	  the split images.
	
	GP faults may occur if an application is looking for the 256-color palette but
	the option is not selected. Verify that the 256-color palette option is selected
	in the Mach 32 Control Panel.
	
	For video problems in Encarta, refer to the README.WRI file for instructions
	about installing the most recent ATI video driver that comes with Encarta.
	
	ATI has confirmed these to be problems with the Mach 32 Series drivers. ATI can
	be reached at:
	
	  ATI customer support: (905) 882-2626
	
	  ATI BBS: (905) 764-9404
	
	
	Additional query words: msn_encarta 1.00 viewer multimedia kbmm GPF faults 1.0 Dinosaurs banding
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbGamesSearch kbZNotKeyword kbBookshelfSearch kbBaseballSearch kbCineManiaSearch kbCompleteBaseball1994 kbWine100 kbWine100a kbArtGallery
	Version           : WINDOWS:1.0,1.0a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
