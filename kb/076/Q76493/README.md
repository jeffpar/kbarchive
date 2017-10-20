---
layout: page
title: "Q76493: Creating a Nonscrollable Region in Windows Help 3.1"
permalink: /kb/076/Q76493/
---

## Q76493: Creating a Nonscrollable Region in Windows Help 3.1

{% raw %}

	Article: Q76493
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.1 of the Windows Help engine supports the ability to author topics to
	contain a nonscrolling region of text immediately below the button bar. Text and
	graphics remain in this fixed location even as the user scrolls other text in
	the topic. This nonscrolling region appears the same as other text, except a
	thin black line divides the nonscrolling region from the rest of the text in the
	topic. This region can contain any of the formats applicable to a help file (hot
	spots, bitmaps, and so forth).
	
	MORE INFORMATION
	================
	
	To create a nonscrolling region, you must create the \pard\keepn rich-text
	format (RTF) token. To accomplish this using Microsoft Word for Windows version
	2.0, perform the following four steps:
	
	1. Select the text to place in the nonscrolling region.
	
	2. From the Format menu, choose Paragraph.
	
	3. In the Paragraph dialog box, select the Keep With Next check box under
	  Pagination.
	
	4. Choose the OK button or press the ENTER key.
	
	The background color attribute of the nonscrollable region can be changed in the
	[WINDOWS] section of the help project (.HPJ) file. The characteristics of any
	window in the help file may be specified in the [WINDOWS] section. Use the
	following syntax to perform this step:
	
	  type-name="caption", (horizontal_position, vertical_position, width,
	       height), sizing, (client-RGB), (nonscrolling-RGB)
	
	To change the color of the nonscrolling region, modify the final RGB triple. For
	example, the following specification will change the background color of the
	nonscrolling region to red:
	
	  main="",,0,,(255,0,0)
	
	Additional query words: 3.10 3.1 non-scrolling non-scrollable
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
