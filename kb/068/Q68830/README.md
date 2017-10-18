---
layout: page
title: "Q68830: Maximum Video Resolution for MS-DOS Apps in Windows"
permalink: kb/068/Q68830/
---

## Q68830: Maximum Video Resolution for MS-DOS Apps in Windows

	Article: Q68830
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.0 does not support video resolutions beyond the VGA
	standard of 640 x 480 for MS-DOS applications running in enhanced mode. Video
	devices such as the IBM 8514 (or 8514/a) graphics adapter can display
	applications at resolutions up to 1024 x 768. MS-DOS applications running at
	this resolution in the enhanced mode of Windows use more video memory than is
	available. This can cause Windows to stop responding (hang or lock up).
	
	MORE INFORMATION
	================
	
	For example, when using the View Document feature in WordPerfect version 5.1
	with an IBM 8514/A graphics adapter, the WordPerfect program may hang or display
	an error message. Similar problems occur using a graphics mode in Microsoft Word
	version 5.0 or 5.5. The View Document feature (or graphic modes used in some
	MS-DOS applications) use more video memory and video resources than text mode.
	
	If you experience problems running MS-DOS applications in Windows, try the
	following workarounds:
	
	- Choose VGA instead of 8514 as the graphics driver in the MS-DOS application.
	
	- Run MS-DOS applications in 25-line text mode. This uses less video memory and
	  system resources.
	
	- Run MS-DOS applications in Full Screen and Exclusive.
	
	- Run the MS-DOS application in real or standard mode of Windows.
	
	This problem also occurs with Microsoft Windows 386 versions 2.x.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
