---
layout: page
title: "Q124623: Audio Video Interleave .AVI File Playback Is Rolling or Jumpy"
permalink: /kb/124/Q124623/
---

## Q124623: Audio Video Interleave .AVI File Playback Is Rolling or Jumpy

{% raw %}

	Article: Q124623
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1995
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Enlarge mode in Encarta while playing a video with a Trident
	video card using the Microsoft generic Super VGA video driver, Trident 8900
	unified driver, or Trident CXI driver, the video appears to jump or roll from
	bottom to top. This behavior is not reproduced in Windows 95.
	
	This behavior also occurs if:
	
	- The Zoom By 2 option is selected when you set up the [MCI] Microsoft Video
	  for Windows or [MCI] Microsoft AVI Video driver
	
	-or-
	
	- You invoke the video while in the Text or Text Outline mode of displaying
	  articles
	
	-or-
	
	- You choose the Enlarge command from the drop-down menu located on the title
	  of the AVI (Video clip) dialog box.
	
	-or-
	
	- The Zoom By 2 option is selected when you use Encarta 1994 with the generic
	  standard VGA video driver that ships with Windows.
	
	RESOLUTION
	==========
	
	The video plays correctly in Media Player if the Zoom By 2 option is turned off,
	or if you do not use Enlarge mode.
	
	To turn off the Zoom By 2 option:
	
	1. In the Main group, double-click the Control Panel icon.
	
	2. In Control Panel, double-click the Drivers icon.
	
	3. In the Installed Drivers box, select [MCI] Microsoft Video for Windows or
	  [MCI] Microsoft AVI Video.
	
	4. Choose the Setup button. This opens a Video Playback Options dialog box.
	
	5. If the Zoom By 2 check box is not selected, choose the Cancel button and
	  continue to step 7.
	
	6. If the Zoom By 2 check box is selected, clear the check box. Choose the Set
	  Default button.
	
	7. Close the Drivers dialog box.
	
	The Zoom By 2 option is turned off.
	
	MORE INFORMATION
	================
	
	Audio Video Interleave (AVI) is the technology that allows animation and video
	clips to be played on a PC under Windows. This behavior also occurred using the
	Microsoft generic Super VGA video driver (SVGA256.DRV). The enlarged mode is
	basically a Zoom by 2 function.
	
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 1995 multi media multimedia multi-media mmtitles zoom 2 enlarge trident cxi video large encarta video monitor profile profiling screen avi play-back play back
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbEncartaEncycSearch kbEncarta1995 kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc1994 kbOSWin310 kbOSWin311
	Version           : 1995
	
	=============================================================================
	

{% endraw %}
