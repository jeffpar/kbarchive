---
layout: page
title: "Q101171: Determining Video Resolution with Windows Paintbrush"
permalink: kb/101/Q101171/
---

## Q101171: Determining Video Resolution with Windows Paintbrush

	Article: Q101171
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can determine the video resolution in dots per inch (dpi) for the currently
	selected video driver in Windows or Windows for Workgroups by using the Windows
	Paintbrush application.
	
	MORE INFORMATION
	================
	
	To determine the video resolution:
	
	1. Start Paintbrush. From the Options menu, choose Image Attributes.
	
	2. Select Inches, and then replace the values for Width and Height with 1.0
	  (1-inch high by 1-inch wide).
	
	3. Select Pels.
	
	4. The number in the Width and Height boxes represent your video resolution in
	  dots per inch or Pels.
	
	You can deterimine the video resolution in dots for the whole screen for the
	selected driver as follows:
	
	1. Start Paintbrush. From the options menu choose Image Attributes.
	
	2. Select Pels.
	
	3. Choose Default.
	
	The numbers you see in Width and heights boxes correspond to the resolution of
	your current video driver.
	
	Common video resolution standards for Windows are EGA, VGA, SVGA, and 8514 Large
	and Small fonts. The following are examples of these common video resolution
	standards:
	
	  EGA            72 dpi
	  VGA            96 dpi
	  SVGA           96 dpi
	  8514 Large    120 dpi
	  8514 Small     96 dpi
	
	Additional query words: 3.10 3.00 3.0 3.0a 3.1 3.11 pbrush pbrush.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
